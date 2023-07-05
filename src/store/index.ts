import { ref, Ref } from "vue";
import en_navbar from "../translations/en/navbar.json";
import es_navbar from "../translations/es/navbar.json";
import en_hero from "../translations/en/hero.json";
import es_hero from "../translations/es/hero.json";


const toggleLanguage = () => {
    store.value.activeLanguage = store.value.activeLanguage === "en" ? "es" : "en";
    if (store.value.activeLanguage === "en") {
        store.value.languages.navBar = en_navbar;
        store.value.languages.hero = en_hero;
    } else {
        store.value.languages.navBar = es_navbar;
        store.value.languages.hero = es_hero;
    }
};
const store:Ref<RootStore> = ref({
    activeLanguage: "en",
    languages: {
        navBar:en_navbar,
        hero:en_hero
    },
    toggleLanguage
});

export default store;
