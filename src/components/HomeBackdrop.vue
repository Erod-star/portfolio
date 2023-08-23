<script setup lang="ts"></script>

<template>
  <div class="home-backdrop d-flex flex-column justify-center align-center">
    <div class="home-backdrop__text d-flex flex-column justify-center align-center">
      <span>Hello,</span>
      <h1 data-aos="zoom-in" data-aos-duration="2000">I'm Edson Rodríguez</h1>
      <p>I am a Software Engineer</p>
    </div>

    <div class="home-backdrop__media mt-8 d-flex">
      <a href="https://www.instagram.com/edson_gov" target="_blank">
        <img src="../assets/images/instagram.svg" alt="vue logo" />
      </a>
      <a href="https://www.linkedin.com/in/edson-r-govea" target="_blank">
        <img src="../assets/images/linkedin.svg" alt="vue logo" />
      </a>
      <a href="https://github.com/Erod-star" target="_blank">
        <img src="../assets/images/github.svg" alt="vue logo" />
      </a>
      <a href="mailto:erodstardev@gmail.com" target="_blank">
        <img src="../assets/images/gmail.svg" alt="vue logo" />
      </a>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/sass/style.sass'
.home-backdrop
  height: calc(100vh - 65px)
  &__text
    font-family: 'Staatliches'
    font-weight: 100
    letter-spacing: 2px
    span
      color: $gray
      font-size: $f-xxl
    h1
      color: $dark
      font-size: 56px
    p
      color: gray
      font-size: 28px
      font-weight: normal
  &__media
    display: grid
    grid-template-columns: repeat(4, 1fr)
    gap: 20px
    a
      transition: ease 300ms
      animation: float 5s ease-in-out infinite
      &:hover
        animation-play-state: paused
      &:nth-child(2)
        animation-delay: 1s
      &:nth-child(3)
        animation-delay: 2s
      &:nth-child(4)
        animation-delay: 3s
      img
        height: 45px
        width: 45px


@keyframes float
  0%,
  100%
    transform: translateY(0)
  50%
    transform: translateY(-15px)
</style>

<style lang="sass" scoped>
@import '../assets/sass/style.sass'
#app-dark
  .home-backdrop
    &__text
      h1
        color: $primary
      span, p
        color: $white
</style>
