<script setup lang="ts">
import photo from "../assets/images/hero/photograph.jpg";
import { selectLanguages } from "../store";


const { hero } = selectLanguages();


</script>

<template>
    <section class="background">
        <div class="split">

            <div class="grid-container">
                <div class="left-container">
                    <h1>{{ hero.title }}</h1>
                    <h3>{{ hero.subtitle }}</h3>
                </div>

                <div class="right-container">
                    <img :src="photo" alt="" id="photo" />
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@import "../style.scss";

.split {
    display: block;
    padding: 25px 0;
    width: 100%;
}

.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    margin: 0 auto;
    max-width: 1440px;
    padding: 0 60px;
    gap: 10px;
}

.left-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    color: white;
    padding-left: 10%;
}


.left-container h1 {
    text-align: left;
    font-size: clamp(2rem, 2rem + 4vw, 7rem);
    width: 20%;
    margin: 0;
}

.left-container h3 {
    font-family: "Montserrat-semiBold";
    font-size: clamp(1rem, 1rem + 1vw, 3rem);
    width: clamp(15rem, 1rem + 26vw, 40rem);
}

.right-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

#photo {
    width: 75%;
    max-width: 500px;
    object-fit: cover;
    border-radius: 100%;
    transform: scale(.85);
}

@media (max-width: 1000px) {


    .grid-container {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        margin: 0;
        padding: 0 20px;
    }

    .left-container {
        align-items: center;
        grid-row: 2;
        width: 100%;
        padding: 0;
    }

    .left-container h1,
    h3 {
        width: 100%;
        text-align: center;
    }

    .left-container h3 {
        width: 100%;
        height: fit-content;
    }
    .right-container {
        display: flex;
        justify-content: center;
    }
    #photo {
        height: 100%;
        width: clamp(150px, 30px + 50vw, 500px);
        // width: 150px;
    }
}

@media (max-width: 450px) {
    .split {
        padding: 20px 0;
    }
    .left-container h1 {
        font-size: clamp(1.5rem, 1.5rem + 4vw, 6rem);
    }
    .left-container h3 {
        font-size: clamp(1rem, 1rem + 1vw, 3rem);
    }

}
</style>