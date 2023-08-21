<script setup lang="ts">
import usePortfolio from '@/composables/usePortfolio'

const { changeDarkMode } = usePortfolio()
</script>

<template>
  <v-app-bar scroll-behavior="fade-image">
    <template v-slot:append>
      <a href="#"><v-btn>Home</v-btn></a>
      <a href="#"><v-btn>About</v-btn></a>
      <a href="#"><v-btn>Experience</v-btn></a>
      <a href="https://www.google.com.mx/?hl=es"><v-btn>Contact</v-btn></a>
      <v-btn @click="changeDarkMode">Dark</v-btn>
    </template>
  </v-app-bar>
</template>

<style lang="sass" scoped>
header
  .v-toolbar__append
    background: black
    width: 100%
    button
      margin-right: 20px
</style>
