import { NUMBER_MAPS } from '~/constants/alphabets'
import { getBCP47Tag } from '~/constants/lang'

export function useSpeechSynthesis() {
  const { voices, selectedLanguage, selectedVoice, availableVoices } =
    useVoiceSynthesis()
  const { playLocalAudio } = useAudioPlayer()

  const speakText = (text: string) => {
    window.speechSynthesis.cancel()
    const speech = new SpeechSynthesisUtterance()
    speech.rate = 0.8
    speech.pitch = 1
    speech.volume = 1
    speech.voice = voices.value.find(
      (voice) => voice.voiceURI === selectedVoice.value
    ) as SpeechSynthesisVoice

    if (speech.voice) {
      speech.lang = speech.voice.lang
    } else {
      // use selected language
      speech.lang = getBCP47Tag(selectedLanguage.value)
    }

    speech.text = text
    window.speechSynthesis.speak(speech)
  }

  const playSound = (key: string) => {
    // if key is number, use number map to get pinyin
    if (!isNaN(Number(key))) {
      // if number and number map available, use it
      if (NUMBER_MAPS[selectedLanguage.value]) {
        speakText(NUMBER_MAPS[selectedLanguage.value][key] || key)
      } else {
        speakText(key)
      }
    } else {
      // Chinese letter pinyin sound
      if (selectedLanguage.value === 'zh') {
        playLocalAudio(key)
      } else {
        // English lowercase letter sound
        speakText(key.toLowerCase())
      }
    }
  }

  return {
    voices,
    selectedLanguage,
    selectedVoice,
    availableVoices,
    playSound,
    speakText
  }
}
