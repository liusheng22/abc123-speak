import { SUPPORTED_LANGUAGES } from '~/constants/keyboard'

export function useHreflang() {
  const url = 'https://abc123speak.vercel.app'
  useHead({
    link: SUPPORTED_LANGUAGES.map((lang) => ({
      rel: 'alternate',
      hreflang: lang,
      href: `${url}/${lang}`
    }))
  })
}
