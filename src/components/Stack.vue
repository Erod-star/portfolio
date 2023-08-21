<script setup lang="ts">
import SkillCard from './SkillCard.vue'
const frontendSkills = [
  'HTML',
  'CSS',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'VUE',
  'NUXT',
  'REACT',
  'SASS',
  'FLUTTER',
  'BOOTSTRAP',
  'CYPRESS'
]
const backendSkills = ['NODE', 'GRAPHQL', 'MYSQL', 'POSTGRES', 'JEST']
const otherSkills = ['GIT', 'GITHUB', 'GITLAB', 'FIGMA', 'AWS']
</script>

<template>
  <section id="stack" class="section">
    <article>
      <h2 class="section-title">Stack</h2>
      <div class="skills first">
        <h3 class="skills__title">Frontend</h3>
        <div class="skills__container">
          <SkillCard v-for="skill in frontendSkills" :src="skill" />
        </div>
      </div>

      <div class="skills">
        <h3 class="skills__title">Backend</h3>
        <div class="d-flex justify-center skills__container">
          <SkillCard v-for="skill in backendSkills" :src="skill" />
        </div>
      </div>

      <div class="skills">
        <h3 class="skills__title">Other</h3>
        <div class="d-flex justify-center skills__container">
          <SkillCard v-for="skill in otherSkills" :src="skill" />
        </div>
      </div>
    </article>
  </section>
</template>

<style lang="sass" scoped>
@import '../assets/sass/style.sass'
#stack
  position: relative
  .skills
    padding-top: 3em
    // &:first-child
    //   padding-top: 10.5em
    &__title
      border-left: 5px solid $primary
      padding-left: 1em
      font-size: 1.8rem
      color: $primary
      margin-bottom: 1em
    &__container
      display: grid
      grid-template-columns: repeat(6, 1fr)
      gap: 20px
      // display: grid
  .first
    // Use first child
    padding-top: 10.5em
</style>
