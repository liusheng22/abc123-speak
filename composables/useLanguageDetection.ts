import { useI18n } from 'vue-i18n'
import { SUPPORTED_LANGUAGES } from '~/constants/keyboard'

export const useLanguageDetection = () => {
  const { locale } = useI18n()
  const detectBrowserLanguage = () => {
    if (locale.value) {
      return locale.value
    }

    try {
      if (typeof window !== 'undefined' && window.navigator) {
        const lang = navigator.language.toLowerCase()
        // match supported languages
        const matchedLang = SUPPORTED_LANGUAGES.find((supportedLang) =>
          lang.startsWith(supportedLang)
        )
        // return matched language or default to English
        return matchedLang || 'en'
      }
    } catch (error) {
      console.error('Error detecting browser language:', error)
    }
    return 'en'
  }

  return {
    detectBrowserLanguage
  }
}
