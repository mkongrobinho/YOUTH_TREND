import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {

  en: {

    translation: {

      login: "Login",
      email: "Email",
      password: "Password",
      welcome: "Welcome back",
      switchLanguage: "Language"

    }

  },


  fr: {

    translation: {

      login: "Connexion",
      email: "Email",
      password: "Mot de passe",
      welcome: "Bon retour",
      switchLanguage: "Langue"

    }

  }

};



i18n
.use(initReactI18next)
.init({

  resources,

  lng: "en",

  fallbackLng: "en",

  interpolation: {

    escapeValue:false

  }

});


export default i18n;