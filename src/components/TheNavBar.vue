<script setup lang="ts">

import gmailIcon from "../assets/icons/gmail.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import githubIcon from "../assets/icons/github.svg";
import url from "../helpers/constants.json";
import hamburguerIcon from "../assets/icons/icons8-menu.svg";
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import { selectActiveLanguage, selectLanguages, setLanguage } from "../store/index.ts";

//Implement the language toggle
const activeLanguage = selectActiveLanguage();
const languageName = computed(() => {
    return activeLanguage === "en" ? "EN/ES" : "ES/EN";
});

//Implement the navbar hide/show effect
const windowScroll = ref(0);
const showNavBar = ref(true);
const lastScrollPosition = ref(0);

const runningEffect = ref(false);

const handleScroll = () => {

    runningEffect.value = true;

    // Get the current position
    windowScroll.value = window.scrollY;

    //On mobiles if the offset is negative, do nothing
    if (windowScroll.value < 0) return;

    // If the difference between the current position and the last position is less than 80px, do nothing
    if (Math.abs(windowScroll.value - lastScrollPosition.value) <= 60) return;

    // If the current position is greater than the last position, hide the navbar, otherwise show it
    showNavBar.value = windowScroll.value < lastScrollPosition.value;
    lastScrollPosition.value = windowScroll.value;

    runningEffect.value = false;

};

//Add event listeners and clean them up
onMounted(() => {
    window.addEventListener("scroll", handleScroll);

});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
});

const handleLogoClick = () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
    setTimeout(() => {
        window.location.href = "/";

    }, 200)
}


// Define emit events 

const hamburguerRef = ref<HTMLInputElement | null>(null);

const emit = defineEmits(['clicked']);

const handleMobileOptions = (event: Event) => {
    const target = event.target as HTMLElement;
    const name = target.id;

    switch (name) {
        case "whoIAm":
            emit('clicked', 'carousel')
            break;
        case "projects":
            emit('clicked', 'projects')
            break;
        case "contactMe":
            emit('clicked', 'form')
            break;
        default:
            return;
    }
    cleanCheckbox();
}

// Handle click events to hide dropmenu
const cleanCheckbox = () => {
    hamburguerClicked.value = !hamburguerClicked.value;

    window.removeEventListener("click", cleanCheckbox);

    if (hamburguerRef.value) hamburguerRef.value.checked = false;
}

const hamburguerClicked = ref(false);

const handleHamburguerClick = () => {

    hamburguerClicked.value = !hamburguerClicked.value;

    if (hamburguerClicked.value) {
        setTimeout(() => {
            window.addEventListener("click", cleanCheckbox);
        }, 0)
    } else {
        cleanCheckbox();
    }

}

const { navBar } = selectLanguages();

</script>

<template>
    <nav class="navbar" :class="{ 'navbar--hidden': !showNavBar }">
        <div class="logo" @click="handleLogoClick">
            <p>https://Juan Gómez</p>
        </div>
        <ul class="options-container" @focusout="cleanCheckbox">

            <li @click="$emit('clicked', 'carousel')">
                {{ navBar.whoIAm }}
            </li>

            <li @click="$emit('clicked', 'projects')">
                {{ navBar.projects }}
            </li>

            <li @click="$emit('clicked', 'form')">
                {{ navBar.contactMe }}
            </li>

        </ul>
        <button class="main-button-shape" @click="setLanguage">{{ languageName }}</button>
        <div class="links-container">
            <a :href="url.github" target="_blank" rel="noreferrer">
                <img :src="githubIcon" alt="" />
            </a>
            <a :href="url.linkedin" target="_blank" rel="noreferrer">
                <img :src="linkedinIcon" alt="" />
            </a>
            <a :href="`mailto: ${url.gmail}`" target="_blank" rel="noreferrer">
                <img :src="gmailIcon" alt="" />
            </a>
        </div>


        <label htmlFor="checkbox" class="label">
            <img :src="hamburguerIcon" alt="" />
        </label>

        <input class="checkbox" type="checkbox" name="checkbox" id="checkbox" ref="hamburguerRef"
            @click="handleHamburguerClick" />

        <div class="dropdown-menu">
            <ul>
                <li @click="handleMobileOptions" id="whoIAm"> {{ navBar.whoIAm }} </li>
                <li @click="handleMobileOptions" id="projects"> {{ navBar.projects }} </li>
                <li @click="handleMobileOptions" id="contactMe"> {{ navBar.contactMe }} </li>
            </ul>
            <div class="links-container-dropdown">
                <a :href="url.github" target="_blank" rel="noreferrer">
                    <img :src="githubIcon" alt="" />
                </a>
                <a :href="url.linkedin" target="_blank" rel="noreferrer">
                    <img :src="linkedinIcon" alt="" />
                </a>
                <a :href="`mailto: ${url.gmail}`" target="_blank" rel="noreferrer">
                    <img :src="gmailIcon" alt="" />
                </a>
            </div>
        </div>

    </nav>
</template>

<style lang="scss" scoped>
@import "../style.scss";


li {
    cursor: pointer
}

.navbar {
    background-color: white;
    display: flex;
    position: sticky;
    top: 0;
    left: 0;
    width: 96%;
    align-items: center;
    min-height: 100px;
    padding: 0 2% 0 2%;
    box-shadow: 0 .4rem 0.4rem rgba(99, 99, 99, 0.6);
    transition: 0.1s all ease-out;
    z-index: 1000;
}

.navbar li,
a {
    list-style: none;
    text-decoration: none;
    color: inherit;
    font-family: "Montserrat-Bold";
    font-size: 1rem;
}

.navbar.navbar--hidden {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
}

.logo {
    display: flex;
    align-items: center;
    background-color: black;
    cursor: pointer;
    height: 40px;
    padding: 0 10px 0 10px;
    margin-right: clamp(20px, 2vw, 100px);
}

.logo p {
    color: white;
    font-family: "Montserrat-ExtraBold";
    font-size: 1.3rem;
    white-space: nowrap;
    margin: 0;
}

.options-container {
    display: flex;
    gap: clamp(30px, 2vw, 100px);
    text-align: center;
    margin-right: auto;
}

.links-container {
    display: flex;
    gap: .5vw;
    margin-left: clamp(25px, 2vw, 100px)
}

.links-container img {
    height: 48px;
}


.label {
    display: none;
}

.checkbox {
    display: none;
}

.dropdown-menu {
    display: none;
}

@media (max-width: 1000px) {
    .options-container {
        display: none;
    }

    .checkbox:checked~.dropdown-menu {
        display: initial;

    }

    .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 50%;
        right: 50%;
        transform: translate(-50%, 0%);
        background-color: white;
        z-index: 99999;
        width: 40vw;
        border-radius: .6rem;
        box-shadow: 0 .4rem 0.4rem rgba(99, 99, 99, 0.7);
        margin-top: .5vh;
        padding: 0 1% 0 1%;
    }

    .links-container {
        display: none;
    }

    .links-container-dropdown {
        display: flex;
        gap: clamp(20px, 1vw, 40px);
        justify-content: center;
        flex-wrap: wrap;
    }

    .dropdown-menu li {
        text-align: center;
        font-size: 1rem;
        margin-bottom: 1rem;
        cursor: pointer;
    }

    .links-container-dropdown img {
        height: 30px;
    }

    .main-button-shape {
        margin-left: auto;
    }


    .label {
        display: initial;
        cursor: pointer;
        margin-left: 4vw;
        margin-top: 5px;
    }

    .label img {
        height: 35px;
        padding-right: 10px;
    }


    ul {
        padding: 0;
    }


}

@media (max-width: 500px) {

    .label img {
        height: 25px;
    }

    .logo {
        padding: 0 3px 0 3px;
        height: 35px;
    }

    .logo p {
        font-size: 1rem;
    }

}
</style>
