<script setup lang="ts">
import type { Job } from '../interfaces'
import ExperienceCard from './ExperienceCard.vue'

const jobs = <Job[]>[
  {
    color: 'blue',
    company: 'Sonatafy',
    description:
      'Management and update of the customer administrative tools, based on automated tests and agile communications between systems.',
    highlights: [
      'Development of a custom component library from scratch for the client using Vue2 (Options API), taking as reference the most popular ones on the market such as Buefy or Vuetify, focusing on the needs and preferences of the client.',
      'Creation of endpoints through Node.js consuming information from both GraphQ and a MySQL database.'
    ],
    img: 'sonatafy-logo.jpg',
    date: 'NOV 2022 - CURRENT',
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
    description:
      'FreeWay is a startup company focused on the development of mobile applications for freight. Here a mobile application was created through the Scrum methodology.',
    highlights: [
      'Development in the Flutter framework, consuming GraphQL queries, where a CRUD was created for the cargo services flow in a freight transport application. In addition to this, by being a team lead, I actively participate in giving feedback to other developers by doing code reviews, pair coding or simply chatting to find the best possible solution.',
      'I served as team lead of a mobile development team, actively using the Scrum methodology preparing Sprint planning, Sprint retrospectives as well as creating tickets for new features or issues'
    ],
    img: 'freeway-logo.jpg',
    date: 'NOV 2021 - NOV 2022',
    href: 'https://freeway.mx/',
    technologies: ['Flutter', 'React', 'Graphql', 'Git', 'Github']
  },
  {
    color: 'green',
    company: 'HMH Sistemas',
    description: 'Software company specialized in web development using React.js and Vue.js',
    highlights: [
      'Participated in the management of a medicine delivery application where I worked with the Google Maps Platform API creating Polylines, user interfaces and real-time tracking of the shipment. This implementing the GMaps API as well as Vue.js and Sass',
      'Re-make UX-UI in point of sale application, this new experience was developed using Vue.js and SASS using the BEM methodology'
    ],
    img: 'hmh-logo.png',
    date: 'MAY 2021 - NOV 2022',
    href: 'https://www.hmhsistemas.com.mx/es',
    technologies: ['Vue', 'React', 'Sass', 'Buefy', 'Bootstrap', 'Gitlab', 'Git', 'i18n']
  },
  {
    color: 'yellow',
    company: 'University of Colima',
    description:
      'I graduated as a "Software Engineer" after studying for a period of 8 semesters at the faculty of telematics of the University of Colima.',
    img: 'ucol-logo.png',
    date: 'AUG 2019 - JUL 2023'
  }
]
</script>

<template>
  <section id="experience" class="section">
    <article>
      <h2 class="section-title">Experience</h2>
      <div class="experience-container mt-10">
        <ExperienceCard :jobs="jobs" />
      </div>
    </article>
  </section>
</template>

<style lang="sass" scoped>
#experience
  position: relative
  .section-title
    // width: 80% !important
  article
    grid-column: 3/11
    .experience-container
</style>
