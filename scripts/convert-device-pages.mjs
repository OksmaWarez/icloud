import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const devicesRoot = path.join(root, 'devices')

function escapeYaml(value) {
  return value.replaceAll('"', '\\"')
}

function convert(file) {
  const source = fs.readFileSync(file, 'utf8')
  const title = source.match(/<title>iCloud Bypass Guide - ([^<]+)<\/title>/i)?.[1] ?? path.basename(file, '.html')
  const description = source.match(/<p class="lead">([\s\S]*?)<\/p>/i)?.[1]?.trim() ?? ''
  const heading = source.match(/<h1>([\s\S]*?)<\/h1>/i)?.[1]?.trim() ?? `Version Selection (${title})`
  const section = source.match(/<section class="card chart-container">([\s\S]*?)<\/section>/i)?.[1]?.trim() ?? ''
  const footer = source.match(/<footer>([\s\S]*?)<\/footer>/i)?.[1]?.trim() ?? '<p>For educational purposes only. Respect ownership and legal restrictions.</p>'
  const markdown = `---\ntitle: ${escapeYaml(title)} | iCloud Bypass Guide\ndescription: ${escapeYaml(description.replace(/<[^>]+>/g, ''))}\n---\n\n<a class="back-link" href="/charts/">← Back to Compatibility Chart</a>\n\n# ${heading}\n\n<p class="device-lead">${description}</p>\n\n${section}\n\n<footer class="device-footer">${footer}</footer>\n`
  const output = file.replace(/\.html$/i, '.md')
  fs.writeFileSync(output, markdown)
}

const htmlFiles = []
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full)
    else if (entry.isFile() && entry.name.endsWith('.html')) htmlFiles.push(full)
  }
}
walk(devicesRoot)
htmlFiles.forEach(convert)
const chart = path.join(root, 'charts', 'index.md')
const chartSource = fs.readFileSync(chart, 'utf8')
fs.writeFileSync(chart, chartSource.replaceAll(/\.\.\/devices\/([^\)]+?)\.html/g, '/devices/$1'))
console.log(`Converted ${htmlFiles.length} device pages.`)
