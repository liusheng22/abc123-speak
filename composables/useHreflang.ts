import { SUPPORTED_LANGUAGES } from '~/constants/keyboard'

export function useHreflang() {
  useHead({
    link: SUPPORTED_LANGUAGES.map((lang) => ({
      rel: 'alternate',
      hreflang: lang,
      href: lang === 'en' ? '/' : `/${lang}`
    }))
  })
}
