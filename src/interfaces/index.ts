export interface AppConfing {
  isDarkMode?: boolean
  languague?: Lenguages
}

export enum Lenguages {
  ES = 'es',
  EN = 'en'
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
