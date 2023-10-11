<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import usePortfolio from '../composables/usePortfolio'

const { locale } = useI18n()
const { languages, changeLanguage } = usePortfolio()
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
