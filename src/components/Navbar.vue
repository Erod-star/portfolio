<script setup lang="ts">
import { ref } from 'vue'
import usePortfolio from '@/composables/usePortfolio'

const { changeDarkMode } = usePortfolio()
const isDrawerActive = ref<boolean>(true)
</script>

<template>
  <!-- Navbar -->
  <v-app-bar scroll-behavior="fade-image" elevation="0">
    <a href="#" class="erodstar">Erodstar</a>
    <template v-slot:append>
      <a class="navbar-link" href="#about"><v-btn>About</v-btn></a>
      <a class="navbar-link" href="#experience"><v-btn>Experience</v-btn></a>
      <a class="navbar-link" href="#stack"><v-btn>Stack</v-btn></a>
      <a class="navbar-link" href="#contact"><v-btn>Contact</v-btn></a>
      <v-btn @click="changeDarkMode">Dark</v-btn>
    </template>
  </v-app-bar>

  <!-- Drawer -->
  <!-- <v-navigation-drawer v-model="isDrawerActive" location="bottom" temporary>
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home" />
    </v-list>
  </v-navigation-drawer> -->
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
  .navbar-link
    color: #000

@media screen and (max-width: $bp-md)
  header
    // border: 3px solid red !important
</style>
