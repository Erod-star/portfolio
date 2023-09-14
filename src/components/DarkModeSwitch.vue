<script setup lang="ts">
import usePortfolio from '@/composables/usePortfolio'
const { changeDarkMode, isDarkMode } = usePortfolio()
</script>

<template>
  <v-switch
    hide-details
    color="yellow"
    label="Dark mode"
    v-model="isDarkMode"
    @click="changeDarkMode"
  />
</template>

<style scoped></style>
