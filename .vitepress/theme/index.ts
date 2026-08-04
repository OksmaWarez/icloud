// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    const videoSrc = 'https://icloud.betaxp.tk/alien.mp4'

    return h(DefaultTheme.Layout, null, {
      'not-found': () =>
        h('div', { class: 'custom-not-found' }, [
          h('div', { class: 'custom-not-found__video-wrap' }, [
            h('video', {
              class: 'custom-not-found__video',
              src: videoSrc,
              controls: true,
              autoplay: true,
              muted: true,
              loop: true,
              playsinline: true
            })
          ]),
          h('p', { class: 'code' }, '404'),
          h('h1', { class: 'title' }, 'Page not found!'),
          h('div', { class: 'divider' }),
          h(
            'blockquote',
            { class: 'quote' },
            "But if you don't change your direction, and if you keep looking, you may end up where you are heading."
          ),
          h('div', { class: 'action' }, [
            h(
              'a',
              {
                class: 'link',
                href: '/',
                'aria-label': 'go to home'
              },
              'Take me home'
            )
          ])
        ])
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
