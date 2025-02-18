// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/seo', 'nuxt-gtag'],
  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: process.env.NUXT_PUBLIC_GTAG_ID,
    config: {
      page_title: 'Letters & PinYin: abc123 Voice'
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
    name: 'Letters & PinYin: abc123 Voice',
    description:
      'Just by pressing the keyboard, you can help your child learn the correct pronunciation of English letters and Chinese pinyin, including the pronunciation of numbers.',
    defaultLocale: 'en'
  },
  app: {
    head: {
      title:
        'Letters & PinYin: abc123 Voice - Learn English letters and Chinese Pinyin pronunciation effortlessly',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Just by pressing the keyboard, you can help your child learn the correct pronunciation of English letters and Chinese pinyin, including the pronunciation of numbers.'
        },
        // Keywords
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'English letters, Chinese pinyin, letters, alphabet, pinyin, learning tool, children education, English pronunciation, Chinese pronunciation, abc123 voice, abc123-voice, abc123 learning, learn abc, learn abc123, learn English Alphabet, learn Chinese Pinyin'
        },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Letters & PinYin: abc123 Voice' },
        {
          property: 'og:description',
          content:
            'Just by pressing the keyboard, you can help your child learn the correct pronunciation of English letters and Chinese pinyin, including the pronunciation of numbers.'
        },
        { property: 'og:image', content: '/images/abc123-voice-preview.png' },
        { property: 'og:url', content: 'https://abc123-voice.vercel.app' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Letters & PinYin: abc123 Voice' },
        {
          name: 'twitter:description',
          content:
            'Just by pressing the keyboard, you can help your child learn the correct pronunciation of English letters and Chinese pinyin, including the pronunciation of numbers.'
        },
        { name: 'twitter:image', content: '/images/abc123-voice-preview.jpg' },
        { property: 'fb:app_id', content: '1834995893984907' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://abc123-voice.vercel.app' }
      ]
    }
  }
})
