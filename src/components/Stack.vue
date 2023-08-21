<script setup lang="ts">
import SkillCard from './SkillCard.vue'
const frontendSkills = ['HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT', 'REACT', 'SASS']
</script>

<template>
  <section id="stack">
    <h2 class="section-title">Stack</h2>
    <div class="d-flex">
      <SkillCard v-for="skill in frontendSkills" :src="skill" />
    </div>
  </section>
</template>

<style lang="sass" scoped>
@import '../assets/sass/style.sass'
#stack
  position: relative
  background: blue
  height: 500px
</style>
