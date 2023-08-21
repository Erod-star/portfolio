<script setup lang="ts">
interface Props {
  src: string
}

const props = defineProps<Props>()

// background: rgba(255, 255, 255, 0)
// border-radius: 16px
// box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1)
// backdrop-filter: blur(5px)
// -webkit-backdrop-filter: blur(5px)
// border: 1px solid rgba(255, 255, 255, 0.3)
</script>

<template>
  <div class="skill-card">
    {{ props.src }}
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/sass/style.sass'
.skill-card
  background-color: $white
  backdrop-filter: blur(2px)
  border-radius: 10px
  box-shadow: rgba(0,0,0,.15) 4px 4px 15px
  display: flex
  justify-content: center
  align-items: center
  aspect-ratio: 1/1
  transition: 400ms
  width: 150px
  height: 150px
  &:hover
    color: $white
    background: $black-600
</style>

<style lang="sass" scoped>
@import '../assets/sass/style.sass'
#app-dark
  .skill-card
    background-color: $black-600
    &:hover
      color: $black-600
      background: $white
</style>
