<script setup lang="ts">
import usePortfolio from '@/composables/usePortfolio'

interface Props {
  imgName: string
}

const props = defineProps<Props>()
const { getImageUrl } = usePortfolio()
</script>

<template>
  <div class="skill-card">
    <img :src="getImageUrl(props.imgName)" :alt="props.imgName" />
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
  &:hover
    transform: scale(1.1, 1.1)
  img
    width:  100px
    height: 100px
</style>

<style lang="sass" scoped>
@import '../assets/sass/style.sass'
#app-dark
  .skill-card
    background-color: $black-100
    box-shadow: rgba(255, 255, 255, .10) 4px 4px 15px
    // box-shadow: rgba(255, 206, 71, .15) 4px 4px 15px
</style>
