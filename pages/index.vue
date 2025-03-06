<script setup lang="ts">
const { setupSEO, addStructuredData } = useSiteMetadata()
setupSEO()
addStructuredData()
useHreflang()
</script>

<template>
  <MainContent />
</template>
