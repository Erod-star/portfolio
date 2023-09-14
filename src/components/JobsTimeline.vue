<script setup lang="ts">
import { onMounted, ref, nextTick, onBeforeUnmount } from 'vue'

import usePortfolio from '@/composables/usePortfolio'
import type { Job } from '@/interfaces'

interface Props {
  jobs: Job[]
}

const props = defineProps<Props>()
const { getImageUrl } = usePortfolio()
const windowWidth = ref<number>(window.innerWidth)

const handleResizeWindow = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  nextTick(() => {
    window.addEventListener('resize', handleResizeWindow)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResizeWindow)
})
</script>

<template>
  <div>
    <v-timeline align="start" :side="windowWidth < 993 ? 'end' : undefined">
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
          <ul v-if="job.highlights" class="timeline-item__highlights">
            <li v-for="highlight in job.highlights">{{ highlight }}</li>
          </ul>
          <div v-if="job.technologies" class="timeline-item__chips">
            <h3 class="my-2">{{ $t('experience.techStach') }}</h3>
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
          <div v-if="job.href" class="d-flex justify-end w-100 mt-8">
            <a :href="job.href" target="_blank">
              <v-btn variant="outlined" rounded="lg" :color="job.color">{{
                $t('global.visitWebPage')
              }}</v-btn>
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
  padding: 2.5rem 2rem !important
  &__header
    a
      text-decoration: none
    h2
      font-size: 2.8rem
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

@media screen and (max-width: $bp-sm)
  .timeline-item
    &__header
      h2
        font-size: 2rem
      span
        font-family: 'Staatliches'
        font-size: 1.2rem
      img
        height: 3.7rem
        width:  3.7rem

@media screen and (max-width: $bp-sm)
  .v-timeline
    :deep(.v-timeline-item)
      .v-timeline-item__body
        padding: 0 !important
      .v-timeline-divider
        &__after, &__before, .v-timeline-divider__dot
          display: none
</style>

<style lang="sass" scoped>
@import '../assets/sass/style.sass'
#app-dark
  .v-timeline
    :deep(.v-timeline-item)
      .v-timeline-divider
        &__after, &__before
          background-color: $white
</style>
