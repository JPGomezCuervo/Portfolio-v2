<script setup lang="ts">
import arrow from "../assets/icons/icons8-arrow.svg";
import musclelab_a from "../assets/images/details/musclelab/musclelab1.png";
import musclelab_b from "../assets/images/details/musclelab/musclelab2.png";
import musclelab_c from "../assets/images/details/musclelab/musclelab3.png";
import portfolio_a from "../assets/images/details/portfolio/portfolio1.png";
import portfolio_b from "../assets/images/details/portfolio/portfolio2.png";
import portfolio_c from "../assets/images/details/portfolio/portfolio3.png";
import portfolio_d from "../assets/images/details/portfolio/portfolio4.png";
import doggofinder_a from "../assets/images/details/doggofinder/dogapi1.png";
import doggofinder_b from "../assets/images/details/doggofinder/dogapi2.png";
import doggofinder_c from "../assets/images/details/doggofinder/dogapi3.png";
import { ProjectsName } from "../store/index.types";

const props = defineProps<{
    name: ProjectsName;
}>();

const imageSelector = (name: ProjectsName) => {
    switch (name) {
        case "portfolio":
            return [portfolio_a, portfolio_b, portfolio_c, portfolio_d];
        case "musclelab":
            return [musclelab_a, musclelab_b, musclelab_c];
        case "doggofinder":
            return [doggofinder_a, doggofinder_b, doggofinder_c];
        default:
            return [musclelab_a, musclelab_b, musclelab_c];
    }
};

const images = imageSelector(props.name);


const handleNavigation = () => {
    window.history.back();
}

</script>

<template>
    <div class="container">
        <div v-for="(image, index) in images" :key="index">
            <div class="tool-bar">
                <div class="red-dot"></div>
                <div class="yellow-dot"></div>
                <div class="green-dot"></div>
                <div class="search-bar"></div>
            </div>
            <img :src="image" alt="">
        </div>

        <div class="navigation" @click="handleNavigation">
                <img :src="arrow" alt=""/>
            </div>

    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    margin-top: 2rem;
    width: 62%;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 2rem;
    
}

.container img {
    width: 99.5%;
    border: 2px solid #252525;
    border-radius: 0 0 .2rem .2rem;
    margin-bottom: 2rem;
}

.tool-bar {
    width: 100%;
    height: 3rem;
    background: #252525;
    border-radius: .3rem .3rem 0 0;
    display: flex;
    align-items: center;
}

.red-dot {
    width: .9rem;
    height: .9rem;
    background-color: #e06a68;
    border-radius: 2rem;
    margin-right: .4rem;
    margin-left: 1rem;


}

.yellow-dot {
    width: .9rem;
    height: .9rem;
    background-color: #ecc368;
    border-radius: 2rem;
    margin-right: .4rem;

}

.green-dot {
    width: .9rem;
    height: .9rem;
    background-color: #6bb85d;
    border-radius: 2rem;
    margin-right: .4rem;
}

.search-bar {
    width: 50%;
    height: 1.5rem;
    background-color: #353535;
    border-radius: .3rem;
    margin: 0 auto;
    margin-left: 18%;

}

.navigation {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 auto;
    align-items: center;
    width: 25%;
}

.navigation img {
    transform: rotate(-180deg);
    height: 3rem;
    border: 0;
    width: 50%;
    margin: auto 0;
    margin-right: 10%;
}

@media screen and (min-width:1920px) {
    .container img {
        width: 99.6%
    }
}

@media screen and (max-width:997px) {
    .container img {
        width: 99.4%
    }
}

@media screen and (max-width:743px) {
    .container img {
        width: 99.3%
    }
}

@media screen and (max-width:568px) {
    
    .red-dot {
        width: .6rem;
        height: .6rem;
    }
    .yellow-dot {
        width: .6rem;
        height: .6rem;
    }
    .green-dot {
        width: .6rem;
        height: .6rem;
    }

    .search-bar {
        width: 40%;
        height: 1rem;
        margin-left: 15%;
    }
    
}

@media screen and (max-width:460px) {
    .red-dot {
        width: .5rem;
        height: .5rem;
    }
    .yellow-dot {
        width: .5rem;
        height: .5rem;
    }
    .green-dot {
        width: .5rem;
        height: .5rem;
    }

    .search-bar {
        width: 35%;
        height: .8rem;
        margin-left: 15%;
    }

}
@media screen and (max-width:390px) {
    .container img {
        width: 98.4%;

    }
}

</style>
