<script setup lang="ts">
const downloadCv = () => {
  fetch('Resume - Edson Rodriguez.pdf').then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob)
      let alink = document.createElement('a')
      alink.href = fileURL
      alink.download = 'Resume - Edson Rodriguez.pdf'
      alink.click()
    })
  })
}
</script>

<template>
  <div class="home-backdrop d-flex flex-column justify-center align-center">
    <div class="home-backdrop__text d-flex flex-column justify-center align-center">
      <span>Hello, I'm</span>
      <h1 data-aos="zoom-in" data-aos-duration="2000">Erodstar</h1>
      <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1000">
        but my real name is <strong>Edson Rodríguez</strong>
      </p>
    </div>

    <div class="d-flex justify-end mt-8 mb-5">
      <v-btn variant="outlined" rounded="lg" @click="downloadCv">Download resume</v-btn>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/sass/style.sass'
.home-backdrop
  height: calc(100vh - 75px)
  &__text
    font-weight: 100
    letter-spacing: 2px
    span
      font-family: 'Staatliches'
      color: $gray
      font-size: $f-xxl
    h1
      font-family: 'Staatliches'
      color: $dark
      font-size: 72px
    p
      color: gray
      font-size: 20px
      font-weight: normal

@media screen and (max-width: $bp-sm)
  .home-backdrop
    &__text
      p
        font-size: $f-sm
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
