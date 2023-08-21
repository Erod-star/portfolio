<script setup lang="ts">
interface Props {
  src: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="skill-card">
    {{ props.src }}
  </div>
</template>

<style lang="sass" scoped>
.skill-card
  background: rgba(255, 255, 255, 0)
  border-radius: 16px
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1)
  backdrop-filter: blur(5px)
  -webkit-backdrop-filter: blur(5px)
  border: 1px solid rgba(255, 255, 255, 0.3)
</style>
