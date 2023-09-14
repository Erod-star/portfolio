<script setup lang="ts">
import { Contact } from '@/components'
</script>

<template>
  <v-footer id="footer" class="text-center d-flex flex-column">
    <Contact />

    <v-divider />

    <div class="d-flex justify-end w-100 align-center">
      <p class="mr-2">{{ $t('footer.poweredBy') }}</p>
      <img src="../assets/images/vue-logo.svg" alt="vue logo" width="20" height="20" />
    </div>
  </v-footer>
</template>

<style lang="sass" scoped>
@import '../assets/sass/style.sass'
#footer
  background: $white
  // height: calc(100vh - 65px) !important
  padding: 2rem 1rem 1rem 1rem
</style>

<style lang="sass" scoped>
@import '../assets/sass/style.sass'
#app-dark
  #footer
    background: $black-800
    transition: $transition-dark-mode
    color: $white
    padding: 2rem 1rem 1rem 1rem
</style>
