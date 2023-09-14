<script setup lang="ts">
import usePortfolio from '../composables/usePortfolio'

const { isDarkMode } = usePortfolio()
</script>

<template>
  <!-- TODO: Add and fix section class -->
  <section id="about" class="pa-5">
    <article class="about-container">
      <div class="about-container__dev d-flex justify-center align-center" data-aos="fade-right">
        <v-img
          :src="
            isDarkMode
              ? `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9179cbc1-3c77-4646-807c-ff7ba5a3019f/dduh0rf-4fa2175c-490a-4119-88b3-2a56fae732f0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkxNzljYmMxLTNjNzctNDY0Ni04MDdjLWZmN2JhNWEzMDE5ZlwvZGR1aDByZi00ZmEyMTc1Yy00OTBhLTQxMTktODhiMy0yYTU2ZmFlNzMyZjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RKsPiq1AftNwrGQML4Y_j8UYJI6uHhrii6G-UVsOl64`
              : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/dc5rnv9-dd76b0dd-7bf9-4a0c-83bf-19a627056193.png/v1/fill/w_660,h_1210/avengers_infinity_war_star_lord_png_by_metropolis_hero1125_dc5rnv9-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIzMCIsInBhdGgiOiJcL2ZcLzViOGQyYjEyLTIxZTgtNDkzMS04YTZkLWZiOWVjZGQ2MDM4M1wvZGM1cm52OS1kZDc2YjBkZC03YmY5LTRhMGMtODNiZi0xOWE2MjcwNTYxOTMucG5nIiwid2lkdGgiOiI8PTY3MSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CI-eHN00pmxnXYpxEawNCA1XbLY8ikcteJ3DR-got4I'
          "
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
              <li>{{ $t('about.aptitudes.first') }}</li>
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
