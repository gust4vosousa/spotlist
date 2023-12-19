import i18next from 'i18next'
import enUS from '../../locales/en-US.json'
import ptBR from '../../locales/pt-BR.json'

const translateInstance = i18next.createInstance()

translateInstance.init({
  lng: navigator.language,
  fallbackLng: 'en',
  ns: ['translation'],
  defaultNS: 'translation',
  react: { useSuspense: false },
  interpolation: { escapeValue: false },
  resources: {
    'en-US': { translation: enUS },
    pt: { translation: ptBR },
  },
})

//@ts-ignore
export const translate = (key: string) => translateInstance.t(key)
