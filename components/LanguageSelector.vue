<script setup lang="ts">
import type { VMEmits } from '~/types/selector'
import { LANGUAGE_OPTIONS } from '~/constants/keyboard'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<VMEmits>()

const selectedLanguage = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>

<template>
  <!-- language select -->
  <select v-model="selectedLanguage" class="bg-gray-800 text-white p-2 rounded">
    <option
      v-for="lang in LANGUAGE_OPTIONS"
      :key="lang.value"
      :value="lang.value"
    >
      {{ lang.label }}
    </option>
  </select>
</template>
