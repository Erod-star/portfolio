<script setup lang="ts">
import SkillCard from './SkillCard.vue'
const frontendSkills = [
  'html.svg',
  'css.svg',
  'javascript.svg',
  'typescript.svg',
  'vue.svg',
  'react.svg',
  'nuxt.svg',
  'sass.svg',
  'flutter.svg',
  'bootstrap.svg',
  'cypress.svg'
]
const backendSkills = ['node.svg', 'graphql.svg', 'mysql.svg', 'postgresql.svg', 'jest.svg']
const otherSkills = ['github.svg', 'gitlab.svg', 'figma.svg', 'aws.svg']
</script>

<template>
  <section id="stack" class="section">
    <article>
      <h2 class="section-title">Stack</h2>
      <div class="skills" data-aos="fade-up">
        <h3 class="skills__title">Frontend</h3>
        <div class="skills__container">
          <SkillCard v-for="skill in frontendSkills" :imgName="skill" />
        </div>
      </div>

      <div class="skills" data-aos="fade-up">
        <h3 class="skills__title">Backend</h3>
        <div class="skills__container">
          <SkillCard v-for="skill in backendSkills" :imgName="skill" />
        </div>
      </div>

      <div class="skills" data-aos="fade-up">
        <h3 class="skills__title">{{ $t('global.other') }}</h3>
        <div class="skills__container">
          <SkillCard v-for="skill in otherSkills" :imgName="skill" />
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
    &__title
      border-left: 5px solid $primary
      padding-left: 1em
      font-size: 2.6rem
      color: $primary
      margin-bottom: 1em
    &__container
      display: grid
      grid-template-columns: repeat(6, 1fr)
      justify-content: center
      align-content: center
      gap: 20px

@media screen and (max-width: $bp-lg)
  #stack
    .skills
      &__container
        grid-template-columns: repeat(4, 1fr)

@media screen and (max-width: $bp-md)
  #stack
    .skills
      &__container
        grid-template-columns: repeat(3, 1fr)

  @media screen and (max-width: $bp-sm)
  #stack
    .skills
      &__title
        font-size: 2rem
</style>
