import { ref, Ref } from "vue";
import en_navbar from "../translations/en/navbar.json";
import es_navbar from "../translations/es/navbar.json";


const toggleLanguage = () => {
    store.value.activeLanguage = store.value.activeLanguage === "en" ? "es" : "en";
    if (store.value.activeLanguage === "en") {
        store.value.languages.navBar = en_navbar;
    } else {
        store.value.languages.navBar = es_navbar;
    }
};
const store:Ref<RootStore> = ref({
    activeLanguage: "en",
    languages: {
        navBar:en_navbar
    },
    toggleLanguage
});

export default store;
