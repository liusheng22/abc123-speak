interface Voice extends SpeechSynthesisVoice {
  voiceURI: string
  name: string
  lang: string
}

interface LanguageOption {
  label: string
  value: 'en' | 'zh'
}
