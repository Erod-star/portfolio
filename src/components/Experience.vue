<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Job } from '../interfaces'
import ExperienceCard from './JobsTimeline.vue'

const { t } = useI18n()

const jobs = <Job[]>[
  {
    color: 'blue',
    company: 'Sonatafy',
    description: t('experience.sonatafy.description'),
    highlights: [
      t('experience.sonatafy.highlights.developmentOf'),
      t('experience.sonatafy.highlights.creationOf')
    ],
    img: 'sonatafy-logo.jpg',
    date: `NOV 2022 - ${t('global.current')}`,
    href: 'https://sonatafy.com/',
    technologies: [
      'Vue',
      'Jest',
      'Cypress',
      'Node',
      'AWS',
      'GraphQL',
      'PostgresSQL',
      'Git',
      'Github'
    ]
  },
  {
    color: 'cyan',
    company: 'Freeway',
    description: t('experience.freeway.description'),
    highlights: [
      t('experience.freeway.highlights.developmentOfAMobile'),
      t('experience.freeway.highlights.iServedAs')
    ],
    img: 'freeway-logo.jpg',
    date: 'NOV 2021 - NOV 2022',
    href: 'https://freeway.mx/',
    technologies: ['Flutter', 'React', 'Graphql', 'Git', 'Github']
  },
  {
    color: 'green',
    company: 'HMH Sistemas',
    description: t('experience.hmh.description'),
    highlights: [
      t('experience.hmh.highlights.participatedInThe'),
      t('experience.hmh.highlights.reMake')
    ],
    img: 'hmh-logo.png',
    date: 'MAY 2021 - NOV 2022',
    href: 'https://www.hmhsistemas.com.mx/es',
    technologies: ['Vue', 'React', 'Sass', 'Buefy', 'Bootstrap', 'Gitlab', 'Git', 'i18n']
  },
  {
    color: 'yellow',
    company: t('experience.universityOfColima.universityOfColima'),
    description: t('experience.universityOfColima.description'),
    img: 'ucol-logo.png',
    date: `${t('months.aug')} 2019 - JUL 2023`
  }
]
</script>

<template>
  <section id="experience" class="section">
    <article>
      <h2 class="section-title">{{ $t('experience.experience') }}</h2>
      <div class="experience-container mt-10">
        <ExperienceCard :jobs="jobs" />
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
