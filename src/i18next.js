import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { i18nextPlugin } from 'translation-check';
import en from './lang/en.json';
import es from './lang/es.json';
import tl from './lang/tl.json';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
  tl: {
    translation: tl,
  },
};

i18n
  .use(initReactI18next)
  .use(i18nextPlugin) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
