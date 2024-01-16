import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import enUS from '@/application/locales/en-US.json'
import ptBR from '@/application/locales/pt-BR.json'

i18next.use(initReactI18next).init({
  lng: navigator.language,
  fallbackLng: 'en',
  ns: ['translation'],
  defaultNS: 'translation',
  react: { useSuspense: false },
  interpolation: { escapeValue: false },
  resources: {
    'en-US': { translation: enUS },
    pt: { translation: ptBR }
  }
})

export { i18next as translate }
