import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { Languages, type AppConfing } from '../interfaces/index'

const DEFAULT_CONFIG: AppConfing = { isDarkMode: false, languague: Languages.es }

export const usePortfolioStore = defineStore('portfolio', () => {
  // ? Properties
  const appConf = ref<AppConfing>({})

  return {
    // ? Properties
    appConf,

    // ? Getters
    isDarkMode: computed(() => appConf.value.isDarkMode),

    // ? Methods
    setAppConf: () => {
      const currentConfig = localStorage.getItem('AppConf')
      if (currentConfig) return (appConf.value = JSON.parse(currentConfig))
      localStorage.setItem('AppConf', JSON.stringify(DEFAULT_CONFIG))
      appConf.value = DEFAULT_CONFIG
    },
    changeDarkMode: () => {
      appConf.value.isDarkMode = !appConf.value.isDarkMode
      localStorage.setItem('AppConf', JSON.stringify(appConf.value))
    },
    changeLanguage: (lang: Languages) => {
      if (appConf.value.languague !== lang) {
        appConf.value.languague = lang
        localStorage.setItem('AppConf', JSON.stringify(appConf.value))
      }
    }
  }
})
