import { usePortfolioStore } from '../stores/portfolio'
import { storeToRefs } from 'pinia'

const usePortfolio = () => {
  const store = usePortfolioStore()
  const { isDarkMode, appConf } = storeToRefs(store)

  return {
    // ? Properties
    appConf,
    isDarkMode,
    // ? Getters
    // ? Methods
    changeDarkMode: store.changeDarkMode,
    setAppConf: store.setAppConf
  }
}

export default usePortfolio
