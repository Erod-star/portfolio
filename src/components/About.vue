<script setup lang="ts">
const downloadCv = () => console.log('Downloading')
</script>

<template>
  <section id="about-section" class="pa-5">
    <h2>About me</h2>

    <span>Fullstack web developer</span>

    <p>
      Hi! My name is Edson Arturo Rodríguez Govea, I am a Software front-end developer who loves to
      learn something new and create simple and complex web pages for process and/or problem
      improvement
    </p>

    <div class="d-flex">
      <div class="about-list">
        <h4>Aptitudes</h4>
        <ul>
          <li>Intermediate level developer</li>
          <li>Front-end frameworks managment</li>
          <li>Willingness to learn</li>
          <li>Commitment to teamwork</li>
          <li>English B2</li>
        </ul>
      </div>

      <div class="about-list">
        <h4>Interests</h4>
        <ul>
          <li>Web development</li>
          <li>Mobile development</li>
          <li>Single Page Application</li>
          <li>Work with the best practices</li>
        </ul>
      </div>
    </div>

    <v-btn @click="downloadCv"> Download CV </v-btn>
  </section>
</template>

<style lang="sass" scoped>
#about-section
  background: rgba(255, 255, 255, 0)
  border-radius: 16px
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1)
  backdrop-filter: blur(5px)
  -webkit-backdrop-filter: blur(5px)
  border: 1px solid rgba(255, 255, 255, 0.3)
</style>
