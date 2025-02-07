export const useLanguageDetection = () => {
  const detectBrowserLanguage = () => {
    try {
      if (typeof window !== 'undefined' && window.navigator) {
        const lang = navigator.language
        return lang.toLowerCase().startsWith('zh') ? 'zh' : 'en'
      }
    } catch (error) {
      console.error('Error detecting browser language:', error)
    }
    return 'en' // default to English if detection fails
  }

  return {
    detectBrowserLanguage
  }
}
