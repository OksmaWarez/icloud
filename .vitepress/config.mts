import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "iCloud Bypass Guide",
  description: "A complete iCloud bypassing guide, from stock to bypassed.",
  ignoreDeadLinks: true,
  transformPageData(pageData) {
    if (pageData.params?.name) {
      const title = `${pageData.params.name} | iCloud Bypass Guide`
      const description =
        'Different firmware versions will require different steps to bypass your iOS device. This page will help you find where to start. Select the appropriate page for your version from the chart below. Note that the "from" and "to" fields are inclusive. This means that, for example, the "from 10.0 to 10.3.4" row includes version 10.0, version 10.3.4, and all versions in-between.'
      pageData.title = title
      pageData.description = description
      pageData.frontmatter.title = title
      pageData.frontmatter.description = description
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Compatibility Chart', link: '/charts/' }
    ],

    sidebar: [
      {
        items: [
          { text: 'iCloud Bypass Guide' , link: '/' },
          { text: 'Get Started', link: '/charts/' },
          { text: 'Sideloading without Setup.app', link: '/guides/misc/sideloading-without-setupapp' },
          { text: 'iTunes Syncing without Setup.app', link: '/guides/misc/itunes-syncing-without-setupapp' },
          { text: 'Pwning with checkm8-a5', link: '/guides/misc/pwning-with-checkm8-a5' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/OksmaWarez/icloud' },
      { icon: 'discord', link: 'https://discord.gg/QewGtKS4dP' }
    ]
  }
})
