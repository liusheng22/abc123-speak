// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/seo', 'nuxt-gtag'],
  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: process.env.NUXT_PUBLIC_GTAG_ID,
    config: {
      page_title: 'Alphabet & PinYin: abc123 Voice'
    }
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true
  },
  css: [
    '@/assets/css/variables.css',
    '@/assets/css/keyboard.css',
    '@/assets/css/animations.css'
  ],
  site: {
    url: 'https://abc123-voice.vercel.app',
    name: 'Alphabet & PinYin: abc123 Voice',
    description:
      'A fun and interactive tool for children to learn English letters and Chinese Pinyin pronunciation.',
    defaultLocale: 'en'
  },
  app: {
    head: {
      title:
        'Alphabet & PinYin: abc123 Voice - Fun Learning Tool for English Alphabet and Chinese Pinyin',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'A fun and interactive tool for children to learn English letters and Chinese Pinyin pronunciation.'
        },
        // Keywords
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'alphabet, pinyin, learning tool, children education, English pronunciation, Chinese pronunciation, abc123 voice, learn English Alphabet, learn Chinese Pinyin'
        },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Alphabet & PinYin: abc123 Voice' },
        {
          property: 'og:description',
          content:
            'A fun and interactive tool for children to learn English letters and Chinese Pinyin pronunciation.'
        },
        { property: 'og:image', content: '/images/abc123-voice-preview.png' },
        { property: 'og:url', content: 'https://abc123-voice.vercel.app' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Alphabet & PinYin: abc123 Voice' },
        {
          name: 'twitter:description',
          content:
            'A fun and interactive tool for children to learn English letters and Chinese Pinyin pronunciation.'
        },
        { name: 'twitter:image', content: '/images/abc123-voice-preview.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://abc123-voice.vercel.app' }
      ]
    }
  }
})
