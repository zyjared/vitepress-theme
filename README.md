# @zyjared/vitepress-theme

## 使用

`.vitepress/theme/index.ts`:

```ts
import { Theme } from '@zyjared/vitepress-theme'

export default theme
```

`.vitepress/config.ts`:

```ts
import { defineConfigWithSidebar } from '@zyjared/vitepress-sidebar'
import { config } from '@zyjared/vitepress-theme/config'
import { mergeConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default mergeConfig(
  config,
  {
    // srcDir: 'docs',
    // ...
  }
)
```
