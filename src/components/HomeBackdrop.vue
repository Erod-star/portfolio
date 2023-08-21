<script setup lang="ts"></script>

<template>
  <div class="home-backdrop d-flex flex-column justify-center align-center">
    <span>Hello,</span>
    <h1>I'm Edson Rodríguez</h1>
    <p>I am a Software Engineer</p>
    <div class="mt-8 media-container d-flex">
      <v-icon size="large" color="green-darken-2" icon="mdi-domain"
        ><i class="material-icons"> keyboard_arrow_down </i></v-icon
      >
      <a>1</a>
      <a>1</a>
      <a>1</a>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.home-backdrop
  height: calc(100vh - 65px)
  .media-container
    a
      transition: ease 300ms
      animation: float 5s ease-in-out infinite
      margin-right: 40px
      &:hover
        animation-play-state: paused
      &:nth-child(2)
        animation-delay: 1s
      &:nth-child(3)
        animation-delay: 2s
      &:nth-child(4)
        animation-delay: 3s


@keyframes float
  0%,
  100%
    transform: translateY(0)
  50%
    transform: translateY(-15px)
</style>
