<script setup lang="ts">
import {
  DISPLAY_ALPHABET_MAPS,
  DISPLAY_NUMBER_MAPS
} from '~/constants/alphabets'
import { KEYBOARD_LAYOUT } from '~/constants/keyboard'

const props = defineProps<{
  pressedKey: string | null
  selectedLanguage: string
}>()

interface Emits {
  (e: 'keyClick', key: string): void
}

const emit = defineEmits<Emits>()

const handleKeyClick = (key: string) => {
  emit('keyClick', key)
}

const displayText = (key: string) => {
  const alphabetMap = DISPLAY_ALPHABET_MAPS[props.selectedLanguage]
  if (isNaN(Number(key))) {
    if (props.selectedLanguage === 'zh') {
      return key.toLowerCase()
    } else if (alphabetMap) {
      // use alphabet map if available
      return alphabetMap[key.toUpperCase()] || key
    } else {
      // default to uppercase Latin letters
      return key.toUpperCase()
    }
  } else {
    // use number map if available
    const numberMap = DISPLAY_NUMBER_MAPS[props.selectedLanguage]
    if (numberMap) {
      return numberMap[key] || key
    } else {
      return key
    }
  }
}
</script>

<template>
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
        {{ displayText(key) }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.keyboard-container > div:nth-child(1) .key {
  animation: fadeIn 0.5s ease-out;
}

.keyboard-container > div:nth-child(2) .key {
  animation: fadeIn 0.5s ease-out 0.1s;
}

.keyboard-container > div:nth-child(3) .key {
  animation: fadeIn 0.5s ease-out 0.2s;
}

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
</style>
