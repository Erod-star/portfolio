<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import AOS from 'aos'

import usePortfolio from './composables/usePortfolio'
import { Footer, Navbar } from '@/components'

const { setAppConf, isDarkMode } = usePortfolio()

onMounted(() => {
  AOS.init({ duration: 1000, once: false })
  setAppConf()
})
</script>

<template>
  <v-app :id="`app${isDarkMode ? '-dark' : ''}`">
    <Navbar />

    <div class="app-container">
      <RouterView />
    </div>

    <Footer />
  </v-app>
</template>

<style lang="sass" scoped>
@import './assets/sass/style.sass'
#app
  transition: $transition-dark-mode
  background: $main-background
  color: black
  .app-container
    margin-top: 65px
</style>
