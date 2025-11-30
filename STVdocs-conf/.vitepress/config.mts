import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "..\\STVdocs-md",
  
  title: "Stevious",
  description: "Документація",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'images/logo.png',
    nav: [
      { text: 'Дім', link: '/' },
      { text: 'Правила', link: '/rules' }
    ],

    sidebar: [
      {
        text: 'Навігація',
        items: [
          { text: 'Дім', link: '/' },
          { text: 'Правила', link: '/rules' }
        ]
      }
    ],

    socialLinks: [
        { icon: 'github', link: 'https://github.com/STEVIOUS-XYZ' },
        { icon: 'discord', link: 'https://discord.gg/Xc6jexqVkV'},
        { icon: "telegram", link: "https://t.me/+FcmzHEDyZHk1OWRi"},
        { icon: "tiktok", link: "https://discord.gg/Xc6jexqVkV"},
        { icon: "youtube", link: "https://discord.gg/Xc6jexqVkV"}
    ]
  }
})
