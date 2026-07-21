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

    /*sidebar: [
      {
        text: 'iCloud Bypass Guide',
        items: [
          { text: 'Compatibility Chart', link: '/charts/' }
        ]
      }
    ],*/

    socialLinks: [
      { icon: 'github', link: 'https://github.com/OksmaWarez/icloud' }
    ]
  }
})
