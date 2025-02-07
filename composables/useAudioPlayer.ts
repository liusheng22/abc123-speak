export const useAudioPlayer = () => {
  const audioCache = new Map<string, HTMLAudioElement>()
  const currentAudio = ref<HTMLAudioElement | null>(null)

  // preload audio files
  const preloadAudios = () => {
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach((letter) => {
      const audio = new Audio(`/audio/pinyin/${letter.toLowerCase()}.mp3`)
      audio.load()
      audio.playbackRate = 1.5
      audio.volume = 0.7
      audioCache.set(letter, audio)
    })
  }

  const playLocalAudio = (key: string) => {
    if (currentAudio.value) {
      currentAudio.value.pause()
      currentAudio.value.currentTime = 0
    }

    const audio = audioCache.get(key)
    if (audio) {
      currentAudio.value = audio
      audio.currentTime = 0

      audio.onended = () => {
        currentAudio.value = null
      }

      audio.play().catch((error) => {
        console.error('Failed to play:', error)
        currentAudio.value = null
      })
    }
  }

  onMounted(() => {
    preloadAudios()
  })

  onUnmounted(() => {
    audioCache.clear()
  })

  return {
    playLocalAudio
  }
}
