import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '@/i18n/en'
import es from '@/i18n/es'

Vue.use(VueI18n)

const messages = {
  en: en,
  es: es
}

const i18n = new VueI18n({
  locale: 'en',
  messages
})

export default i18n
