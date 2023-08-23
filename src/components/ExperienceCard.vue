<script setup lang="ts">
import type { Job } from '@/interfaces'
import usePortfolio from '@/composables/usePortfolio'

interface Props {
  jobs: Job[]
}

const props = defineProps<Props>()
const { getImageUrl } = usePortfolio()
</script>

<template>
  <div>
    <v-timeline align="start">
      <v-timeline-item v-for="(job, i) in props.jobs" :key="i" :dot-color="job.color" size="small">
        <div
          class="timeline-item card-container"
          :data-aos="i % 2 == 0 ? 'fade-left' : 'fade-right'"
        >
          <div class="d-flex timeline-item__header justify-space-between">
            <div>
              <h2 :class="`mt-n1 headline font-weight-light text-${job.color}`">
                {{ job.company }}
              </h2>
              <span>{{ job.date }}</span>
            </div>
            <img v-if="job.img" :src="getImageUrl(job.img)" :alt="job.img" />
          </div>
          <div class="mt-3">{{ job.description }}</div>
          <ul class="timeline-item__highlights">
            <li v-for="highlight in job.highlights">{{ highlight }}</li>
          </ul>
          <div v-if="job.technologies" class="timeline-item__chips">
            <h3 class="my-2">Tech stack</h3>
            <v-chip
              v-for="(technology, techIndex) in job.technologies"
              data-aos="fade-up"
              :data-aos-duration="`${techIndex + 1}50`"
              :data-aos-once="true"
              variant="outlined"
            >
              {{ technology }}
            </v-chip>
          </div>
          <div class="d-flex justify-end w-100 mt-8">
            <a v-if="job.href" :href="job.href" target="_blank">
              <v-btn variant="outlined" rounded="lg" :color="job.color">Visit webpage</v-btn>
            </a>
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/sass/style.sass'
.timeline-item
  padding: 2.5rem
  &__header
    a
      text-decoration: none
    h2
      font-size: 2.8rem
      // height: 4rem
      // line-height: 4rem
    span
      font-family: 'Staatliches'
      font-size: 1.4rem
    img
      border-radius: $br-lg
      height: 5rem
      width:  5rem
      position: relative
      top: -5px
      margin-right: 1rem
  &__highlights
    padding: 1rem 2rem
    li
      margin-top: 0.5rem
  &__chips
    .v-chip
      margin-right: .5rem
      margin-top: 0.5rem

      //  display:inline; margin: 2px; height: 45px;
</style>
