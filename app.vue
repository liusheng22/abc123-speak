<script setup lang="ts">
import {
  KEYBOARD_LAYOUT,
  LANGUAGE_OPTIONS,
  CHINESE_NUMBERS
} from '~/constants/keyboard'

const title = 'Alphabet & Pinyin: abc123 Voice'
const description = 'Learning Tool for English Alphabet and Chinese Pinyin'
const previewImage = '/images/abc123-voice-preview.png'
const keywords =
  'alphabet, pinyin, learning tool, children education, English pronunciation, Chinese pronunciation, abc123 voice, learn English Alphabet, learn Chinese Pinyin'

// page head
useHead({
  title,
  meta: [
    {
      name: 'keywords',
      content: keywords
    },
    {
      name: 'description',
      content: description
    },
    { property: 'og:title', content: title },
    {
      property: 'og:description',
      content: description
    },
    { property: 'og:image', content: previewImage },
    { property: 'og:url', content: 'https://abc123-voice.vercel.app' }
  ]
})

// seo meta
useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: previewImage,
  twitterCard: 'summary_large_image'
})

// voice synthesis
const { voices, selectedLanguage, selectedVoice, availableVoices } =
  useVoiceSynthesis()

// audio player
const { playLocalAudio } = useAudioPlayer()

// keyboard event
const { pressedKey, handleKeyClick } = useKeyboard((key) => playSound(key))

const playSound = (key: string) => {
  window.speechSynthesis.cancel()
  const speech = new SpeechSynthesisUtterance()
  speech.rate = 0.8
  speech.pitch = 1
  speech.volume = 1
  speech.lang = selectedLanguage.value === 'zh' ? 'zh-CN' : 'en-US'
  speech.voice = voices.value.find(
    (voice) => voice.voiceURI === selectedVoice.value
  ) as SpeechSynthesisVoice

  if (!isNaN(Number(key))) {
    // number sound
    speech.text = selectedLanguage.value === 'zh' ? CHINESE_NUMBERS[key] : key
  } else {
    // Chinese letter pinyin sound
    if (selectedLanguage.value === 'zh') {
      playLocalAudio(key)
    } else {
      // English lowercase letter sound
      speech.text = key.toLowerCase()
    }
  }
  window.speechSynthesis.speak(speech)
}
</script>

<template>
  <div class="min-h-screen relative bg-gray-900 text-white p-8">
    <!-- select language and voice -->
    <div class="absolute top-4 right-4 flex gap-4">
      <!-- language select -->
      <select
        v-model="selectedLanguage"
        class="bg-gray-800 text-white p-2 rounded"
      >
        <option
          v-for="lang in LANGUAGE_OPTIONS"
          :key="lang.value"
          :value="lang.value"
        >
          {{ lang.label }}
        </option>
      </select>

      <!-- voice select -->
      <select
        v-model="selectedVoice"
        class="bg-gray-800 text-white p-2 rounded"
      >
        <option
          v-for="voice in availableVoices"
          :key="voice.voiceURI"
          :value="voice.voiceURI"
        >
          {{ voice.name }}
        </option>
      </select>
    </div>

    <!-- keyboard layout -->
    <div class="keyboard-container max-w-7xl mx-auto">
      <div
        v-for="(row, rowIndex) in KEYBOARD_LAYOUT"
        :key="rowIndex"
        :class="['flex justify-center gap-2 mb-2', { 'gap-4': rowIndex === 0 }]"
      >
        <div
          v-for="key in row"
          :key="key"
          :class="[
            'key',
            { active: pressedKey === key },
            { 'number-key': !isNaN(Number(key)) }
          ]"
          @click="handleKeyClick(key)"
        >
          {{ key }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.key.active::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--ripple-size);
  height: var(--ripple-size);
  background: radial-gradient(
    circle,
    var(--color-primary-lighter) 0%,
    transparent 70%
  );
  transform: translate(-50%, -50%);
  animation: ripple 0.5s ease-out;
}

.keyboard-container > div:nth-child(1) .key {
  animation: fadeIn 0.5s ease-out;
}

.keyboard-container > div:nth-child(2) .key {
  animation: fadeIn 0.5s ease-out 0.1s;
}

.keyboard-container > div:nth-child(3) .key {
  animation: fadeIn 0.5s ease-out 0.2s;
}
</style>
