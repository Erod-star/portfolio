<script setup lang="ts">
import { watch, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import usePortfolio from '../composables/usePortfolio'

const { t, locale } = useI18n()
const { languages, changeLanguage } = usePortfolio()

watch(locale, () => {
  nextTick(() => {
    languages.value = [
      { label: t('languages.english'), value: 'en' },
      { label: t('languages.spanish'), value: 'es' }
    ]
  })
})
</script>

<template>
  <v-select
    :label="$t('global.idiom')"
    :items="languages"
    item-title="label"
    item-value="value"
    variant="outlined"
    @update:model-value="(lang) => changeLanguage(lang)"
    v-model="locale"
  />
</template>

<style lang="sass" scoped></style>
