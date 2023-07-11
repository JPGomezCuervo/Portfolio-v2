<script setup lang="ts">
import manIcon from "../assets/icons/projects/man-silhouette.png";
import dumbbellIcon from "../assets/icons/projects/dumbbell.png";
import pawIcon from "../assets/icons/projects/paw_logo_icon.png";
import { selectLanguages } from "../store";
import { toRefs } from "vue";
import { Route } from "vue-router";
import ProjectDetails from "../views/ProjectDetails.vue";

const {  projects } = toRefs(selectLanguages());

</script>

<template>

<div class="main-container">

<h2>{{ projects.title }}</h2>
<div class="lines-container">


    <a to={"/detail/portfolio"}>
        <div class="portfolio">
            <h2> https:// Juan Gómez </h2>
        </div>
    </a>

    <Link to={"/detail/musclelab"}>
        <div class="muscle-lab">
            <div class="icon">
                <img
                    class="icon-man"
                    :src="manIcon"
                    alt=""
                />

                <h2>Muscle Lab</h2>

                <img
                    class="icon-weight"
                    :src="dumbbellIcon"
                    alt="Icono de pesa"
                />
            </div>


        </div>
    </Link>

    <Link to={"detail/doggofinder"}>
        <div class="doggo-finder">
            <div class="icon">
                <img 
                :src="pawIcon"
                alt=""
                />
                <h2>oggo</h2>
            </div>

        </div>
    </Link>

</div>
</div>

</template>

<style lang="scss" scoped>
    .main-container {
        background-color: white;
        padding-top: .1rem; 
        box-shadow: 0px -4px 6px -3px rgba(0, 0, 0, 0.5);
        position: relative;
        
    }

    .main-container h2 {
        color: black;
        font-family: "Montserrat-ExtraBold";
        font-size:3.5rem;
        font-weight: 200;
        margin-right: 10rem;
        padding-left: 6rem;
        text-align: left;
        margin-top: .9rem;
    }

    .main-container .portfolio h2 {
        color: white;
    }


    .portfolio {
        display: flex;
        justify-content: center;
        background-color: black;
        height: 10rem;
        width: 100%;
        align-items: center;
        cursor: pointer;
        transition: .5s;
    }

    .portfolio:hover {
        height: 15rem;
    }

    .portfolio h2 {
        font-size: 2.5rem;
        padding: 0;
        margin: 0;
        text-align: center;
    }

    .muscle-lab {
        background-color: #003566;
        height: 10rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: .5s;
    }

    .icon {
        align-items: center;
        display: flex;
        position: relative;
        width: fit-content;
        height: 10rem;
    }

    .muscle-lab:hover {
        height: 15rem;

    }

    .muscle-lab h2{
        font-family: 'Montserrat-Bold';
        color: #ffffff;
        width: 3rem;
    }

    .muscle-lab .icon-man{
        position: absolute;
        z-index: 0;
        height: 8rem;
        width: 8rem;
        top:4%;
        left: -2%;

    }

    .muscle-lab .icon-weight {
        position: absolute;
        height: 4rem;
        right: 10%;
        bottom: 18%;
    }

    .doggo-finder {
        background-color: #FFE5D9;
        height: 10rem;
        width: 100%;
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        transition: .5s;

    }

    .doggo-finder:hover {
        height: 15rem;
    }


    .doggo-finder img {
        height: 7.5rem;
        transform: rotate(-90deg);
        left: 0;
        
    }
    .doggo-finder h2 {
        position: absolute;
        color: #462f2f;
        font-family: 'Montserrat-ExtraBold';
        align-items: center;
        bottom: -15%;
        left: 15%;
        transform: rotate(-90deg);
        font-size: 2.5rem;
    }

</style>
