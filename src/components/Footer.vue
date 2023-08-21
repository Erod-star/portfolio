<script setup lang="ts"></script>

<template>
  <v-footer id="footer" class="text-center d-flex flex-column pt-6">
    <div class="pt-0">Created by Erodstar with a lot of 💛</div>

    <v-divider />

    <div class="d-flex justify-space-between w-100">
      <div class="d-flex">© 2023 Erodstar - All rights reserved.</div>
      <div class="d-flex">
        <p class="mr-4">Powered by</p>
        <img src="../assets/images/vue-logo.svg" alt="vue logo" width="20" height="20" />
      </div>
    </div>
  </v-footer>
</template>

<style lang="sass" scoped>
@import '../assets/sass/style.sass'
#footer
  background: $section-background
</style>
