import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-xhr-backend";
import { reactI18nextModule } from "react-i18next";

// translations are already at
// '../public/locales/en/translation.json'
// which is the default for the xhr backend to load from

i18n
/*
*Hadi autodetect the userLanguage based on (cookie, localStorage, htmlTag...)
*/
  .use(detector)
/*
*Lazy loading for translations, load just needed languages
*/
  .use(backend)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    lng: "en",
    fallbackLng: "en", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;

/*
*Hadi autodetect the userLanguage based on (cookie, localStorage, htmlTag...)
*/