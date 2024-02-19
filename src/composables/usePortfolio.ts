import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'

import type { Job } from '@/interfaces'
import { usePortfolioStore } from '../stores/portfolio'

const usePortfolio = () => {
  const store = usePortfolioStore()
  const { isDarkMode, appConf } = storeToRefs(store)
  const { t, locale } = useI18n()

  const getImageUrl = (imgName: string) => {
    const path = new URL(`../../public/images/${imgName}`, import.meta.url)
    return path.href
  }

  const getJobs = () => [
    {
      color: 'teal-lighten-3',
      company: 'ITJ',
      description: t('experience.itj.description'),
      highlights: [
        t('experience.itj.highlights.migrated'),
        t('experience.itj.highlights.prepared')
      ],
      img: 'itjuana.jpg',
      // date: `DIC 2023 - ${t('global.current')}`,
      date: `NOV 2023 - ${t('global.current')}`,
      href: 'https://itj.com/',
      technologies: [
        'React',
        'Sass',
        'TypeScript',
        'Figma',
        'JIRA',
        'shadcn',
        'Redux',
        'Node',
        'Vite',
        'Vitest',
        'AWS'
      ]
    },
    // {
    //   color: 'red',
    //   company: 'Rocket code',
    //   description: t('experience.rocket.description'),
    //   highlights: [
    //     t('experience.rocket.highlights.assistedIn'),
    //     t('experience.rocket.highlights.createdComp')
    //   ],
    //   img: 'rocket-code.jpg',
    //   date: `OCT 2023 - DIC 2023`,
    //   href: 'https://therocketcode.com/',
    //   technologies: ['React', 'Sass', 'TypeScript', 'Figma', 'JIRA', 'i18n']
    // },
    {
      color: 'blue',
      company: 'Sonatafy',
      description: t('experience.sonatafy.description'),
      highlights: [
        t('experience.sonatafy.highlights.developmentOf'),
        t('experience.sonatafy.highlights.creationOf')
      ],
      img: 'sonatafy-logo.jpg',
      // date: `NOV 2022 - OCT 2023`,
      date: `NOV 2022 - NOV 2023`,
      href: 'https://sonatafy.com/',
      technologies: [
        'Vue',
        'Jest',
        'Cypress',
        'Node',
        'AWS',
        'GraphQL',
        'PostgresSQL',
        'Git',
        'Github'
      ]
    },
    {
      color: 'cyan',
      company: 'Freeway',
      description: t('experience.freeway.description'),
      highlights: [
        t('experience.freeway.highlights.developmentOfAMobile'),
        t('experience.freeway.highlights.iServedAs')
      ],
      img: 'freeway-logo.jpg',
      date: 'NOV 2021 - NOV 2022',
      href: 'https://freeway.mx/',
      technologies: ['Flutter', 'React', 'Graphql', 'Git', 'Github']
    },
    {
      color: 'green',
      company: 'HMH Sistemas',
      description: t('experience.hmh.description'),
      highlights: [
        t('experience.hmh.highlights.participatedInThe'),
        t('experience.hmh.highlights.reMake')
      ],
      img: 'hmh-logo.png',
      date: 'MAY 2021 - NOV 2022',
      href: 'https://www.hmhsistemas.com.mx/es',
      technologies: ['Vue', 'React', 'Sass', 'Buefy', 'Bootstrap', 'Gitlab', 'Git', 'i18n']
    },
    {
      color: 'yellow',
      company: t('experience.universityOfColima.universityOfColima'),
      description: t('experience.universityOfColima.description'),
      img: 'ucol-logo.png',
      date: `${t('months.aug')} 2019 - JUL 2023`
    }
  ]

  const getLanguages = () => [
    { label: t('languages.english'), value: 'en' },
    { label: t('languages.spanish'), value: 'es' }
  ]

  const languages = ref(getLanguages())

  const jobs = ref<Job[]>(getJobs())

  watch(locale, () => {
    jobs.value = getJobs()
    languages.value = getLanguages()
  })

  return {
    // ? Properties
    appConf,
    isDarkMode,
    languages,
    jobs,
    // ? Getters
    // ? Methods
    changeDarkMode: store.changeDarkMode,
    changeLanguage: store.changeLanguage,
    setAppConf: store.setAppConf,
    getImageUrl
  }
}

export default usePortfolio
