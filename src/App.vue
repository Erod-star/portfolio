<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

import usePortfolio from './composables/usePortfolio'
import { Footer, Navbar } from '@/components'

const { setAppConf, isDarkMode } = usePortfolio()

onMounted(() => setAppConf())
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
