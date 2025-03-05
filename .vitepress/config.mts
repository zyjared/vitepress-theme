import { defineConfigWithSidebar } from '@zyjared/vitepress-sidebar'
import { mergeConfig } from 'vitepress'
import { config } from './preset/config'

// https://vitepress.dev/reference/site-config
export default defineConfigWithSidebar(mergeConfig(
  config,
  {
    base: '/vitepress-theme',
    srcDir: 'pages',
    title: 'zyjared',
    description: 'zyjared 的 vitepress 模板',
    head: [
      ['link', { rel: 'icon', href: '/vitepress-theme/favicon.png', type: 'image/png' }],
    ],
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Examples', link: '/markdown-examples' },
      ],
      logo: '/favicon.png',
      socialLinks: [
        { icon: 'github', link: 'https://github.com/zyjared/vitepress-theme' },
      ],
      editLink: {
        pattern: 'https://github.com/zyjared/vitepress-theme/edit/main/pages/:path',
      },
    },
  },
))
