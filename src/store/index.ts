import { ref, Ref } from "vue";
import en_navbar from "../translations/en/navbar.json";
import es_navbar from "../translations/es/navbar.json";
import en_hero from "../translations/en/hero.json";
import es_hero from "../translations/es/hero.json";
import en_whoIAm from "../translations/en/whoIAm.json";
import es_whoIAm from "../translations/es/whoIAm.json";
import { RootStore } from "./index.types";

const toggleLanguage = () => {
  const { activeLanguage, languages } = store.value;

  store.value.activeLanguage = activeLanguage === "en" ? "es" : "en";
  
  if (store.value.activeLanguage === "en") {
    Object.assign(languages, {
      navBar: en_navbar,
      hero: en_hero,
      whoIAm: en_whoIAm
    });
  } else {
    Object.assign(languages, {
      navBar: es_navbar,
      hero: es_hero,
      whoIAm: es_whoIAm
    });
  }
};

const store: Ref<RootStore> = ref({
  activeLanguage: "en",
  languages: {
    navBar: en_navbar,
    hero: en_hero,
    whoIAm: en_whoIAm
  },
  toggleLanguage
});

export default store;
