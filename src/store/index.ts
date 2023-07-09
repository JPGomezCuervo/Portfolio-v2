import { ref, Ref } from "vue";
import en_navbar from "../translations/en/navbar.json";
import es_navbar from "../translations/es/navbar.json";
import en_hero from "../translations/en/hero.json";
import es_hero from "../translations/es/hero.json";
import en_whoIAm from "../translations/en/whoIAm.json";
import es_whoIAm from "../translations/es/whoIAm.json";
import en_form from "../translations/en/form.json";
import es_form from "../translations/es/form.json";
import es_validations from "../translations/es/validations.json";
import en_validations from "../translations/en/validations.json";
import { RootStore } from "./index.types";


//Defining the store and it's initial values
const store: Ref<RootStore> = ref({
  activeLanguage: "en",
  languages: {
    navBar: en_navbar,
    hero: en_hero,
    whoIAm: en_whoIAm,
    form: en_form,
    validations: en_validations
  },
  toggleLanguage
});

//Function that toggles the langugage and updates the store languages
function toggleLanguage () {

  const { activeLanguage, languages } = store.value;

  store.value.activeLanguage = activeLanguage === "en" ? "es" : "en";

  if (store.value.activeLanguage === "en") {
    Object.assign(languages, {
      navBar: en_navbar,
      hero: en_hero,
      whoIAm: en_whoIAm,
      form: en_form,
      validations: en_validations
    });
  } else {
    Object.assign(languages, {
      navBar: es_navbar,
      hero: es_hero,
      whoIAm: es_whoIAm,
      form: es_form,
      validations: es_validations
    });
  }
};

//selectors

export const selectActiveLanguage = () => store.value.activeLanguage;
export const selectLanguages = () => store.value.languages;
export const setLanguage = () => store.value.toggleLanguage();

export default store;
