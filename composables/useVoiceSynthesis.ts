export const useVoiceSynthesis = () => {
  const { detectBrowserLanguage } = useLanguageDetection()

  const voices = ref<Voice[]>([])
  const selectedLanguage = ref<'en' | 'zh'>(detectBrowserLanguage())
  const selectedVoice = ref<string>('')

  // available voices
  const availableVoices = computed(() => {
    const lang = selectedLanguage.value
    return voices.value
      .filter((voice) => voice.lang.startsWith(lang))
      .reduce<Voice[]>((acc, cur) => {
        if (!acc.some((item) => item.voiceURI === cur.voiceURI)) {
          acc.push(cur)
        }
        return acc
      }, [])
  })

  // init voices list
  const initVoices = () => {
    const speechVoices = window.speechSynthesis.getVoices()
    voices.value = speechVoices

    if (!selectedVoice.value && speechVoices.length > 0) {
      const defaultVoice = speechVoices.find((voice) =>
        voice.lang.startsWith(selectedLanguage.value)
      )
      if (defaultVoice) {
        selectedVoice.value = defaultVoice.voiceURI
      }
    }
  }

  watchEffect(() => {
    const [defaultOpt] = availableVoices.value
    selectedVoice.value = defaultOpt?.voiceURI
  })

  // preload voices
  onMounted(() => {
    if (window.speechSynthesis.getVoices().length > 0) {
      initVoices()
    }
    window.speechSynthesis.onvoiceschanged = initVoices
  })

  // remove voices listener
  onUnmounted(() => {
    if (window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = null
    }
  })

  return {
    voices,
    selectedLanguage,
    selectedVoice,
    availableVoices
  }
}
