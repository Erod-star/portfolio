<script setup lang="ts"></script>

<template>
  <div id="contact" class="contact">
    <h4>Contact</h4>
    <div class="contact__media">
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
    <div class="contact__erodstar-message">
      <p>Created by Erodstar with a lot of 💛</p>
      <p>All Rights Reserved © 2023</p>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.contact
  h4
    font-size: 2.5rem
  &__media
    margin-top: .8rem
    display: grid
    grid-template-columns: repeat(4, 1fr)
    gap: 20px
    a
      transition: ease 300ms
      animation: float 3s ease-in-out infinite
      &:hover
        animation-play-state: paused
      &:nth-child(2)
        animation-delay: 1s
      &:nth-child(3)
        animation-delay: 2s
      &:nth-child(4)
        animation-delay: 3s
      img
        height: 70%
        width:  70%
  &__erodstar-message
    margin-top: .8rem

@keyframes float
  0%,
  100%
    transform: translateY(0)
  50%
    transform: translateY(-5px)
</style>
