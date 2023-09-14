export interface AppConfing {
  isDarkMode?: boolean
  languague?: Languages
}

export enum Languages {
  en = 'en',
  es = 'es'
}

export interface Job {
  color: string
  company: string
  date: string
  description: string
  highlights?: string[]
  href?: string
  img?: string
  technologies?: string[]
}
