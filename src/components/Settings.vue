<script lang="ts" setup>
import { ref } from 'vue'

import usePortfolio from '../composables/usePortfolio'
import { LanguageSelector, DarkModeSwitch } from '@/components'

const { isDarkMode } = usePortfolio()

const isMenuOpen = ref(false)
</script>

<template>
  <div class="settings">
    <v-menu v-model="isMenuOpen" :close-on-content-click="false" location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">
          <i class="material-icons"> settings </i>
        </v-btn>
      </template>

      <v-card min-width="300" :class="`overlay-menu-background${isDarkMode ? '-dark' : ''}`">
        <h4 class="text-center settings-title">{{ $t('global.settings') }}</h4>
        <v-list :class="`overlay-menu-background${isDarkMode ? '-dark' : ''}`">
          <v-list-item>
            <DarkModeSwitch class="px-2" />
          </v-list-item>

          <v-list-item>
            <LanguageSelector class="py-2 px-2" />
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<style lang="sass">
@import '../assets/sass/style.sass'
.settings-title
    padding-top: 10px
    font-size: 1.4rem
.overlay-menu-background, .overlay-menu-background-dark
    background: $white !important
    padding-top: 0px !important
.overlay-menu-background-dark
    background: $black-800 !important
    transition: $transition-dark-mode !important
    color: $white !important
</style>
