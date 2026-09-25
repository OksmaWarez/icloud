import { defineConfig } from 'vitepress'
import multimdTable from 'markdown-it-multimd-table'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/icloud/',
  markdown: {
    config: (md) => {
      md.use(multimdTable, {
        rowspan: true, // Enables column/row merging syntax
      })
    }
  },
  title: "iCloud Bypass Guide",
  description: "A complete iCloud bypassing guide, from stock to bypassed.",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/icloud/' },
      { text: 'Compatibility Chart', link: '/icloud/charts/' }
    ],

    sidebar: [
      {
        items: [
          { text: 'iCloud Bypass Guide' , link: '/icloud/' },
          { text: 'Get Started', link: '/icloud/charts/' },
          { text: 'Sideloading without Setup.app', link: '/icloud/guides/misc/sideloading-without-setupapp' },
          { text: 'iTunes Syncing without Setup.app', link: '/icloud/guides/misc/itunes-syncing-without-setupapp' },
          { text: 'Pwning with checkm8-a5', link: '/icloud/guides/misc/pwning-with-checkm8-a5' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/OksmaWarez/icloud' },
      { icon: 'discord', link: 'https://discord.gg/QewGtKS4dP' }
    ]
  }
})