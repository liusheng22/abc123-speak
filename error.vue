<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: {
    type: Object as () => NuxtError,
    default: () => ({
      statusCode: 404
    })
  }
})
</script>

<template>
  <div
    class="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8"
  >
    <div class="text-center max-w-2xl">
      <h1 class="text-6xl font-bold mb-6 text-red-400">
        {{ error.statusCode }}
      </h1>
      <p v-if="error.statusCode === 404" class="text-2xl mb-8">
        {{ $t('404_message') }}
      </p>
      <a
        href="/"
        class="bg-gray-700 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-lg text-xl transition duration-300"
      >
        {{ $t('404_action') }}
      </a>
    </div>
  </div>
</template>
