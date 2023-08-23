<script setup lang="ts">
import { HomeBackdrop, About, Experience, Stack } from '@/components'
</script>

<template>
  <main>
    <HomeBackdrop />
    <div class="mx-10">
      <About />
      <Experience class="mt-10" />
      <Stack class="mt-10 mb-10" />
    </div>
  </main>
</template>
