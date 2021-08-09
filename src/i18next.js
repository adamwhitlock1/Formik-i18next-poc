import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./lang/en.json";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: en
  },
  fr: {
    translation: {
      headerText: "Bienvenue a React and react-i18next, Yup et Formik",
      emailRequired: "Email est un champ requis",
      emailPlaceHolder: "Fournissez votre email",
      emailLabel: "E-mail",
      reset: "réinitialiser",
      submit: "soumettre"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
