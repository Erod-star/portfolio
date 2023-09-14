<script setup lang="ts">
import JobsTimeline from './JobsTimeline.vue'
import usePortfolio from '@/composables/usePortfolio'

const { jobs } = usePortfolio()
</script>

<template>
  <section id="experience" class="section">
    <article>
      <h2 class="section-title">{{ $t('experience.experience') }}</h2>
      <div class="experience-container mt-10">
        <JobsTimeline :jobs="jobs" />
      </div>
    </article>
  </section>
</template>

<style lang="sass" scoped>
@import '../assets/sass/style.sass'
#experience
  position: relative
  article
    grid-column: 3/11

@media screen and (max-width: $bp-xl)
  #experience
    article
      grid-column: 2/12

@media screen and (max-width: $bp-sm)
  #experience
    article
      grid-column: 1/12
      .section-title
        font-size: 4.4rem
</style>
