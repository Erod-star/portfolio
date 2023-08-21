<script setup lang="ts">
import usePortfolio from '@/composables/usePortfolio'

const { changeDarkMode } = usePortfolio()
</script>

<template>
  <v-app-bar scroll-behavior="fade-image" elevation="0">
    <!-- <v-app-bar scroll-behavior="fade-image"> -->
    <a href="#" class="erodstar">Erodstar</a>
    <template v-slot:append>
      <a href="#about"><v-btn>About</v-btn></a>
      <a href="#experience"><v-btn>Experience</v-btn></a>
      <a href="#stack"><v-btn>Stack</v-btn></a>
      <a href="https://www.google.com.mx/?hl=es"><v-btn>Contact</v-btn></a>
      <v-btn @click="changeDarkMode">Dark</v-btn>
    </template>
  </v-app-bar>
</template>

<style lang="sass" scoped>
@import '../assets/sass/style.sass'
header
  // background: $main-background !important
  padding: .5em 4em !important
  margin: 0px auto
  .erodstar
    font-family: 'Staatliches'
    font-size: 2em
    text-decoration: none
    transition: all ease 200ms
    &:hover
      transform: scale(1.2, 1.2)
</style>
