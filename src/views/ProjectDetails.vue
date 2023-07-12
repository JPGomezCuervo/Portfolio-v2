<script setup lang="ts">
import Tags from '../components/Tags.vue';
import arrow from "../assets/icons/icons8-arrow.svg";
import image from "../assets/images/details/crayon-2069.png";
import eye from "../assets/icons/icons8-eye-96.png";
import github from "../assets/icons/github.svg";
import whiteGithub from "../assets/icons/white-github.svg";
import { selectLanguages } from '../store';
import { useRoute } from "vue-router";
import { ProjectsName } from "../store/index.types";
import { ref } from "vue";
    
const { goBack, viewProject, viewSourceCode } = selectLanguages().details.value;

const params = useRoute().params.name as ProjectsName;

const { date, deploy, description, name, sourceCode, technologies } = selectLanguages().details.value[params];

const isHovered = ref(false);


</script>

<template>
    <div class="split">
        <div class="navegation">
            <img :src="arrow" alt="" />
            <p>{{ goBack }}</p>
        </div>
        <div class="grid">
            <div class="left">

                <h2 class="subtitle">{{ name }}</h2>

                <div class="background-date">
                    <p>{{ date }}</p>
                </div>

                <p id="description">{{ description }}</p>

                <div class="buttons-container">
                    <div class="primary-button">
                        <img :src="eye" alt="" />
                        <button>{{ viewProject }}</button>
                    </div>
                    <button @mouseenter="isHovered = true" @mouseleave="isHovered = false" class="secondary-button">
                        <img v-if="!isHovered" :src="github" />
                        <img v-else :src="whiteGithub"/>
                        {{ viewSourceCode }}
                    </button>
                </div>
            </div>
            <div class="right">
                <img :src="image"/>
            </div>

            <div>
                <h3 class="technologies-title">{{ technologies.title }}</h3>
                <div class="tags">
                    <Tags v-if="technologies.backEnd!.length > 0" 
                        kind="back" 
                        :tags="technologies.backEnd"
                    />
        
                    <Tags v-if="technologies.frontEnd!.length > 0" 
                        kind="front" 
                        :tags="technologies.frontEnd"
                    />
                </div>
    
            </div>
        </div>


    </div>
</template>

<style lang="scss" scoped>
@import "../style.scss";


.split {
    padding: 25px 0;
    width: 100%;
}

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    max-width: 1440px;
    gap: 10px;
    padding: 0 60px;
    margin: 0 auto;

}

.right {
    height: 100%;
    width: 100%;
}

.right img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}

.left {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

.left p {
    font-family: "Montserrat-Regular";
    font-size: 1.2rem;
    text-align: left;
    width: 100%;
    margin: 0;
    line-height: 1.4;
}

#description {
    margin-bottom: 2rem;
}

.navegation {
    display: flex;
    // margin-bottom: 1.5rem;
    cursor: pointer;
    align-items: center;
    padding: 0 60px;
}

.navegation p {
    font-family: "Montserrat-Regular";
    font-size: 1.6rem;
    margin: auto 0;
    margin-bottom: .5rem;
}

.navegation img {
    transform: rotate(-180deg);
    height: 3rem;
    margin-right: 1.5rem;
}

.background-date {
    width: fit-content;
    padding-left: .5rem;
    padding-right: .5rem;
    background-color: #fd6439;
    margin-bottom: 2rem;
    margin-top: 2%;
}
.background-date p {
    color: white;
    width: fit-content;
    font-size: 1.4rem;
}

.buttons-container {
    display: flex;
    // margin-top: 8%;
}

.primary-button {
    cursor: pointer;
    display: flex;
    background-color: #6F4AE7;
    width: fit-content;
    margin-right: 5rem;
    align-items: center;
    padding: .5rem .4rem;
}


.primary-button:hover {
    background-color: #5e35e4;
}

.primary-button:active {
    background-color: #6F4AE7;
}

.primary-button img {
    height: 1.2rem;
    margin-right: .5rem;
}
.primary-button button {
    background-color: transparent;
    border: 0;
    margin: auto auto;
    font-family: "Montserrat-Medium";
    color: white;
    font-size: 1rem;
}



.secondary-button {
    font-family: "Montserrat-Bold";
    font-size: 1rem;
    display: flex;
    background-color: transparent;
    border: 2px solid #6F4AE7;
    color: #6F4AE7;
    border-radius: .3rem;
    padding-left: .5rem;
    padding-right: .5rem;
    align-items: center;
    cursor: pointer;
}

.secondary-button:hover {
    background-color: #6F4AE7;
    color: white;
}
.secondary-button:active {
    background-color:white;
    color:#6F4AE7;
}

.secondary-button img {
    height: 1.4rem;
    margin: auto 0;
    margin-right: 1rem;
    margin-left: .4rem;
}

.tags {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 1rem;
}

.technologies-title {
    // margin-top: 2%;
    text-align: left;
    font-family: "Montserrat-SemiBold";
    font-size: 2rem;
}
</style>