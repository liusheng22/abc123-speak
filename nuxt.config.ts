// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-03-06',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@nuxtjs/sitemap',
    'nuxt-gtag'
  ],
  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: process.env.NUXT_PUBLIC_GTAG_ID,
    config: {
      page_title: 'Magic ABC123 Speak for Toddlers'
    }
  },
  tailwindcss: {
    exposeConfig: process.env.NODE_ENV !== 'production',
    viewer: process.env.NODE_ENV !== 'production'
  },
  css: [
    '@/assets/css/variables.css',
    '@/assets/css/keyboard.css',
    '@/assets/css/animations.css'
  ],
  site: {
    url: 'https://abc123speak.vercel.app',
    name: 'ABC123 Speak',
    description:
      'Use Magic ABC123 Speak’s interactive keyboard & real voice to teach toddlers letters & numbers. Fun, free tool helps 3-year-olds master correct pronunciation, enhancing learning fun.',
    defaultLocale: 'en'
  },
  app: {
    head: {
      title:
        'Magic ABC123 Speak for Toddlers - Interactive Voice Learning for Toddlers With Keyboard',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Use Magic ABC123 Speak’s interactive keyboard & real voice to teach toddlers letters & numbers. Fun, free tool helps 3-year-olds master correct pronunciation, enhancing learning fun.'
        },
        // Keywords
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'interactive keyboard,real voice,teach toddlers,letter pronunciation,number pronunciation,fun learning,free learning tool,3-year-old toddlers,correct pronunciation,learning fun,preschool letter learning,preschool number learning,interactive keyboard preschool letter learning,interactive keyboard preschool number learning,preschool pronunciation tool,interactive preschool keyboard,preschool voice learning,real voice teaching'
        },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Magic ABC123 Speak for Toddlers' },
        {
          property: 'og:description',
          content:
            'Use Magic ABC123 Speak’s interactive keyboard & real voice to teach toddlers letters & numbers. Fun, free tool helps 3-year-olds master correct pronunciation, enhancing learning fun.'
        },
        { property: 'og:image', content: '/images/abc123-speak-preview.png' },
        { property: 'og:url', content: 'https://abc123speak.vercel.app' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Magic ABC123 Speak for Toddlers' },
        {
          name: 'twitter:description',
          content:
            'Use Magic ABC123 Speak’s interactive keyboard & real voice to teach toddlers letters & numbers. Fun, free tool helps 3-year-olds master correct pronunciation, enhancing learning fun.'
        },
        { name: 'twitter:image', content: '/images/abc123-speak-preview.jpg' },
        { property: 'fb:app_id', content: '1834995893984907' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://abc123speak.vercel.app' }
      ]
    }
  },
  // sitemap 配置（根据最新文档）
  sitemap: {
    sitemapName: 'sitemap.xml',
    includeAppSources: true,
    defaults: {
      changefreq: 'daily',
      priority: 1.0,
      lastmod: new Date()
    }
  },
  // i18n 配置
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'zh', iso: 'zh-CN', file: 'zh.json', name: '中文' },
      { code: 'es', iso: 'es-ES', file: 'es.json', name: 'Español' },
      { code: 'ar', iso: 'ar-SA', file: 'ar.json', name: 'العربية' },
      { code: 'hi', iso: 'hi-IN', file: 'hi.json', name: 'Hindi' },
      { code: 'pt', iso: 'pt-BR', file: 'pt.json', name: 'Português' },
      { code: 'ja', iso: 'ja-JP', file: 'ja.json', name: '日本語' },
      { code: 'ko', iso: 'ko-KR', file: 'ko.json', name: '한국어' },
      { code: 'th', iso: 'th-TH', file: 'th.json', name: 'ไทย' },
      { code: 'id', iso: 'id-ID', file: 'id.json', name: 'Bahasa Indonesia' },
      { code: 'vi', iso: 'vi-VN', file: 'vi.json', name: 'Tiếng Việt' },
      { code: 'ms', iso: 'ms-MY', file: 'ms.json', name: 'Bahasa Melayu' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: false,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      fallbackLocale: 'en'
    }
  }
})
