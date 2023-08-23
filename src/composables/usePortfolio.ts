import { usePortfolioStore } from '../stores/portfolio'
import { storeToRefs } from 'pinia'

const usePortfolio = () => {
  const store = usePortfolioStore()
  const { isDarkMode, appConf } = storeToRefs(store)

  const getImageUrl = (imgName: string) => {
    const path = new URL(`../../public/images/${imgName}`, import.meta.url)
    return path.href
  }

  return {
    // ? Properties
    appConf,
    isDarkMode,
    // ? Getters
    // ? Methods
    changeDarkMode: store.changeDarkMode,
    setAppConf: store.setAppConf,
    getImageUrl
  }
}

export default usePortfolio
