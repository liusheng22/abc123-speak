<script setup lang="ts">
import type { VMEmits } from '~/types/selector'

const props = defineProps<{
  modelValue: string | null
  availableVoices: SpeechSynthesisVoice[]
}>()

const emit = defineEmits<VMEmits>()

const selectedVoice = computed({
  get: () => props.modelValue || '',
  set: (value) => emit('update:modelValue', value)
})
</script>

<template>
  <!-- voice select -->
  <select v-model="selectedVoice" class="bg-gray-800 text-white p-2 rounded">
    <option
      v-for="voice in availableVoices"
      :key="voice.voiceURI"
      :value="voice.voiceURI"
    >
      {{ voice.name }}
    </option>
  </select>
</template>
