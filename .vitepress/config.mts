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
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Examples', link: '/markdown-examples' },
      ],
      editLink: {
        pattern: 'https://github.com/zyjared/vitepress-theme/edit/main/pages/:path',
      },
    },
  },
))
