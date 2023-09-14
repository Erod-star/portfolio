import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'

import { usePortfolioStore } from '../stores/portfolio'

const usePortfolio = () => {
  const store = usePortfolioStore()
  const { isDarkMode, appConf } = storeToRefs(store)
  const { t } = useI18n()

  const getImageUrl = (imgName: string) => {
    const path = new URL(`../../public/images/${imgName}`, import.meta.url)
    return path.href
  }

  const languages = ref([
    { label: t('languages.english'), value: 'en' },
    { label: t('languages.spanish'), value: 'es' }
  ])

  return {
    // ? Properties
    appConf,
    isDarkMode,
    languages,
    // ? Getters
    // ? Methods
    changeDarkMode: store.changeDarkMode,
    changeLanguage: store.changeLanguage,
    setAppConf: store.setAppConf,
    getImageUrl
  }
}

export default usePortfolio
