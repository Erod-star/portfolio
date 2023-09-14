<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import usePortfolio from '../composables/usePortfolio'

interface Props {
  btnColor: 'string'
}

// const props = defineProps<Props>()
const { t } = useI18n()
const { changeDarkMode, isDarkMode } = usePortfolio()

const menu = ref(false)
const languages = [
  { label: t('languages.english'), value: 'EN' },
  { label: t('languages.spanish'), value: 'ES' }
]
const currentLang = ref({ label: t('languages.english'), value: 'EN' })

const logger = (object: any) => console.log(object)
</script>

<template>
  <div>
    <v-menu v-model="menu" :close-on-content-click="false" location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn color="indigo" v-bind="props"> <i class="material-icons"> settings </i> </v-btn>
      </template>

      <v-card min-width="300">
        <v-list>
          <v-list-item>
            <v-switch
              hide-details
              color="yellow"
              label="Dark mode"
              v-model="isDarkMode"
              @click="changeDarkMode"
            />
          </v-list-item>

          <v-list-item>
            <v-select
              label="Select"
              :items="languages"
              item-title="label"
              item-value="value"
              @update:model-value="logger"
              v-model="currentLang"
            />
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<style lang="scss" scoped></style>
