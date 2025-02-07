<script setup lang="ts">
import usePortfolio from '../composables/usePortfolio'

const { isDarkMode, getImageUrl } = usePortfolio()
</script>

<template>
  <!-- TODO: Add and fix section class -->
  <section id="about" class="pa-5">
    <article class="about-container">
      <div class="about-container__dev d-flex justify-center align-center" data-aos="fade-right">
        <v-img
          :src="isDarkMode ? getImageUrl('starlord-dark.png') : getImageUrl('starlord-light.png')"
          alt="Erodstar"
        />
      </div>

      <div class="about-container__description" data-aos="fade-left">
        <h2>{{ $t('about.aboutMe') }}</h2>
        <!-- <h2>{{ $t('about.about') }}</h2> -->

        <p>
          <!-- TODO: Add corresponding strongs -->
          {{ $t('about.description') }}
        </p>

        <div class="about-container__description__lists mt-4">
          <div class="about-list mt-3">
            <h4>{{ $t('about.aptitudes.aptitudes') }}</h4>
            <ul>
              <li>{{ $t('about.aptitudes.second') }}</li>
              <li>{{ $t('about.aptitudes.third') }}</li>
              <li>{{ $t('about.aptitudes.fourth') }}</li>
              <li>{{ $t('about.aptitudes.fifth') }}</li>
            </ul>
          </div>

          <div class="about-list mt-3">
            <h4>{{ $t('about.interests.interests') }}</h4>
            <ul>
              <li>{{ $t('about.interests.webDevelopment') }}</li>
              <li>{{ $t('about.interests.singlePageApplications') }}</li>
              <li>{{ $t('about.interests.workWithTheBestPractices') }}</li>
              <li>{{ $t('about.interests.videogames') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style lang="sass" scoped>
@import '../assets/sass/style.sass'
#about
  height: 100vh
  position: relative
  display: flex
  justify-content: center
  align-items: center
  h2
    -moz-background-clip: text
    -webkit-background-clip: text
    background-clip: text
    background-color: #ccc
    color: rgba(0,0,0,0)
    margin: 0 auto
    text-shadow: 1px 1px 7.5px rgba(255,255,255,.9)
    text-transform: uppercase
    top: -0.3em
    width: 100%
  h4
    font-size: 1.5rem
  .about-container
    margin-top: 65px
    padding: 0.5em 6.5em
    display: grid
    grid-template-columns: 300px 1fr
    // height: 100%
    &__dev
      img
        width: 300px
        height: 450px
    &__description
      -webkit-backdrop-filter: blur(5px)
      backdrop-filter: blur(5px)
      background: rgba(255, 255, 255, 0.06)
      border-radius: 16px
      border: 1px solid rgba(255, 255, 255, 0.3)
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1)
      padding: 0.5rem 4rem 1.5rem 4rem
      margin-left: 2em
      span
        color: $black-100
        font-weight: bold
        font-size: $f-lg
      &__lists
        display: grid
        padding: 0em 3em
        grid-template-columns: repeat(2, 1fr)
        justify-items: center
        gap: 20px
        padding: 0em 3em
        .about-list
          h4
            color: $secondary
            text-align: left
            width: 100%

@media screen and (max-width: $bp-xl)
  #about
    .about-container
      grid-template-columns: 0px 1fr
      &__dev
        visibility: hidden
      &__description
        &__lists
          padding: 0em 3.5em

@media screen and (max-width: $bp-xl)
  #about
    .about-container
      padding: 0.5rem 2.5rem
      &__description
        &__lists
          padding: 0rem 1rem

@media screen and (max-width: $bp-md)
  #about
    h2
      font-size: 3.5rem
      margin-bottom: .5rem
    .about-container
      &__description
        &__lists
          grid-template-columns: repeat(1, 1fr)
          justify-items: left

@media screen and (max-width: $bp-sm)
  #about
    height: 100%
    h2
      font-size: 2.8rem
    .about-container
      padding: 0rem
      &__description
        margin-left: 0rem

@media screen and (max-width: $bp-sm)
  #about
    h2
      font-size: 3rem
</style>
