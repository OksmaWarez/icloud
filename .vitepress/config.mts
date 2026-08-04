import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "iCloud Bypass Guide",
  description: "A complete iCloud bypassing guide, from stock to bypassed.",
  ignoreDeadLinks: true,
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
      { icon: 'github', link: 'https://github.com/OksmaWarez/icloud' }
    ]
  }
})
