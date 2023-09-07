<script setup lang="ts">
import { onMounted, ref, nextTick, onBeforeUnmount } from 'vue'
import usePortfolio from '@/composables/usePortfolio'

const { changeDarkMode, isDarkMode } = usePortfolio()
const isDrawerActive = ref<boolean>(true)

const windowWidth = ref<number>(window.innerWidth)

const handleResizeWindow = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  nextTick(() => {
    window.addEventListener('resize', handleResizeWindow)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResizeWindow)
})
</script>

<template>
  <!-- Navbar -->
  <v-app-bar scroll-behavior="fade-image" elevation="0">
    <a href="#" class="erodstar">Erodstar</a>
    <template v-slot:append>
      <div v-if="windowWidth > 780">
        <a class="navbar-link" href="#about"><v-btn>About</v-btn></a>
        <a class="navbar-link" href="#experience"><v-btn>Experience</v-btn></a>
        <a class="navbar-link" href="#stack"><v-btn>Stack</v-btn></a>
        <a class="navbar-link" href="#contact"><v-btn>Contact</v-btn></a>
        <v-btn
          :color="isDarkMode ? 'yellow' : 'yellow-darken-3'"
          variant="tonal"
          @click="changeDarkMode"
          >Dark</v-btn
        >
      </div>
      <v-btn v-else @click="isDrawerActive = !isDrawerActive">
        <i class="material-icons"> menu </i>
      </v-btn>
    </template>
  </v-app-bar>

  <!-- Drawer -->
  <v-navigation-drawer v-model="isDrawerActive" location="right" temporary>
    <v-list density="compact" nav>
      <a href="#">
        <v-list-item value="erodstar"> <i class="material-icons"> home </i> Erodstar </v-list-item>
      </a>
      <a href="#about">
        <v-list-item value="about"> <i class="material-icons"> person </i> About </v-list-item>
      </a>
      <a href="#experience">
        <v-list-item value="experience">
          <i class="material-icons"> signal_cellular_alt </i> Experience
        </v-list-item>
      </a>
      <a href="#stack">
        <v-list-item value="stack"> <i class="material-icons"> handyman </i> Stack </v-list-item>
      </a>
      <a href="#contact">
        <v-list-item value="contact"> <i class="material-icons"> help </i> Contact </v-list-item>
      </a>
      <v-switch
        hide-details
        color="yellow"
        label="Dark mode"
        v-model="isDarkMode"
        @click="changeDarkMode"
      />
    </v-list>
  </v-navigation-drawer>
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

.v-navigation-drawer
  padding-top: 1rem
  a
    color: black
    text-decoration: none
  .v-list-item
    :deep(.v-list-item__content)
      display: flex
      align-items: center
      i
        margin-right: 1rem
</style>

<style lang="sass" scoped>
@import '../assets/sass/style.sass'
#app-dark
  .v-navigation-drawer
    background: $black-400 !important
    color: $white
    transition: $transition-dark-mode
    a
      color: $white
</style>
