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

function convertGuide(file) {
  const source = fs.readFileSync(file, 'utf8')
  const title = source.match(/<title>iCloud Bypass Guide - ([^<]+)<\/title>/i)?.[1] ?? path.basename(file, '.html')
  const heading = source.match(/<h1>([\s\S]*?)<\/h1>/i)?.[1]?.trim() ?? title
  const toMarkdown = (html) => html
    .replaceAll(/<h2>([\s\S]*?)<\/h2>/gi, '\n## $1\n')
    .replaceAll(/<h3>([\s\S]*?)<\/h3>/gi, '\n### $1\n')
    .replaceAll(/<h4>([\s\S]*?)<\/h4>/gi, '\n#### $1\n')
    .replaceAll(/<a\s+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)')
    .replaceAll(/<code>([\s\S]*?)<\/code>/gi, '`$1`')
    .replaceAll(/<strong>([\s\S]*?)<\/strong>/gi, '**$1**')
    .replaceAll(/<button[^>]*>([\s\S]*?)<\/button>/gi, '**$1**')
    .replaceAll(/<li>([\s\S]*?)<\/li>/gi, '\n- $1')
    .replaceAll(/<\/?(?:div|ul|ol|p|section)[^>]*>/gi, '\n')
    .replaceAll(/<br\s*\/?>/gi, '\n')
    .replaceAll(/<[^>]+>/g, '')
    .replaceAll('&amp;', '&')
    .replaceAll(/\n[ \t]+/g, '\n')
    .replaceAll(/\n{3,}/g, '\n\n')
    .trim()
  const sections = [...source.matchAll(/<section class="card">([\s\S]*?)<\/section>/gi)]
    .map((match) => toMarkdown(match[1]))
    .join('\n\n')
  const footer = source.match(/<footer>([\s\S]*?)<\/footer>/i)?.[1]?.trim() ?? '<p>For educational purposes only. Respect ownership and legal restrictions.</p>'
  const body = sections || '<div class="guide-placeholder"><p>This guide has not been written yet.</p></div>'
  const markdown = `---\ntitle: ${escapeYaml(title)} | iCloud Bypass Guide\ndescription: Educational guide for ${escapeYaml(title)}.\n---\n\n<a class="back-link" href="/">← Back to Home</a>\n\n# ${heading}\n\n${body}\n\n<footer class="guide-footer">${footer}</footer>\n`
  fs.writeFileSync(file.replace(/\.html$/i, '.md'), markdown)
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
const guideRoot = path.join(root, 'guides')
const guideFiles = fs.readdirSync(guideRoot)
  .filter((name) => name.endsWith('.html'))
  .map((name) => path.join(guideRoot, name))
guideFiles.forEach(convertGuide)
const deviceMarkdownFiles = []
function walkMarkdown(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walkMarkdown(full)
    else if (entry.isFile() && entry.name.endsWith('.md')) deviceMarkdownFiles.push(full)
  }
}
walkMarkdown(devicesRoot)
for (const file of deviceMarkdownFiles) {
  const source = fs.readFileSync(file, 'utf8')
  fs.writeFileSync(file, source.replaceAll('../../guides/', '/guides/').replaceAll('.html', ''))
}
const chart = path.join(root, 'charts', 'index.md')
const chartSource = fs.readFileSync(chart, 'utf8')
fs.writeFileSync(chart, chartSource.replaceAll(/\.\.\/devices\/([^\)]+?)\.html/g, '/devices/$1'))
console.log(`Converted ${htmlFiles.length} device pages and ${guideFiles.length} guide pages.`)
