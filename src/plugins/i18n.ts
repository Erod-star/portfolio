import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

export const i18n = createI18n({
  legacy: false,
  // locale: window.navigator.language.substring(0, 2),
  // locale: 'en',
  locale: 'es',
  globalInjection: true,
  fallbackLocale: 'es',
  availableLocales: ['en', 'es'],
  messages
})
