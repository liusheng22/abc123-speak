<script setup lang="ts">
const { locale } = useI18n()
const { setupSEO, addStructuredData } = useSiteMetadata()
watch(
  () => locale.value,
  () => {
    setupSEO()
    addStructuredData()
  }
)

const { selectedLanguage, selectedVoice, availableVoices, playSound } =
  useSpeechSynthesis()
const { pressedKey, handleKeyClick } = useKeyboard((key) => playSound(key))

// Set default language and voice when app mounted
const nuxtApp = useNuxtApp()
nuxtApp.hook('app:mounted', () => {
  selectedLanguage.value = locale.value
})
</script>

<template>
  <div class="min-h-screen relative bg-gray-900 text-white p-8">
    <div class="absolute top-4 right-4 flex gap-4">
      <LanguageSelector v-model="selectedLanguage" />
      <VoiceSelector
        v-model="selectedVoice"
        :available-voices="availableVoices"
      />
      <GitHubLink />
    </div>
    <Keyboard
      :pressed-key="pressedKey"
      :selected-language="selectedLanguage"
      @key-click="handleKeyClick"
    />
  </div>
</template>
