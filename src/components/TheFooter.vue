<script setup lang="ts">
import gmailIcon from "../assets/icons/gmail.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import githubIcon from "../assets/icons/github.svg";
import url from "../helpers/constants.json";
import { selectLanguages } from "../store";


const { footer } = selectLanguages();

</script>

<template>
    <footer class="footer">
        <div class="logos-container">

            <a :href="url.github" target="_blank" rel="noreferrer">
                <img :src="githubIcon" alt="" />
            </a>
            <a :href=url.linkedin target="_blank" rel="noreferrer">
                <img :src="linkedinIcon" alt="" />
            </a>
            <a :href="`mailto: ${url.gmail}`" target="_blank" rel="noreferrer">
                <img :src="gmailIcon" alt="" />
            </a>

        </div>

        <div class="container">

            <div class="navigation">
                <h3>{{ footer.navigation }}</h3>
                <ul>
                    <li @click="$emit('clicked', 'carousel')">{{ footer.whoIAm }}</li>
                    <li @click="$emit('clicked', 'projects')" >{{ footer.projects }}</li>
                    <li @click="$emit('clicked', 'form')" >{{ footer.contactMe }}</li>
                </ul>
            </div>

            <div class="social-media">
                <h3>{{ footer.socialMedia }}</h3>
                <ul>
                    <a :href="url.github" target="_blank" rel="noreferrer">
                        <li>GitHub</li>
                    </a>

                    <a :href="url.linkedin" target="_blank" rel="noreferrer">
                        <li>Linkedin</li>
                    </a>

                    <a :href="`mailto: ${url.gmail}`" target="_blank" rel="noreferrer">
                        <li>Gmail</li>
                    </a>
                </ul>

            </div>

            <div class="open-to-work">
                <h2>Open to work</h2>
                <h2>2023</h2>
            </div>
        </div>
        <h2>Open to work</h2>
        <h2>2023</h2>
    </footer>
</template>

<style scoped lang="scss">
@import "../style.scss";

li {
    cursor:pointer
}

.footer {
    padding-left: 10%;
    padding-right: 10%;
}

.footer h3 {
    font-family: "Montserrat-SemiBold";
    margin-bottom: 0;
    font-size: 1rem;
}

.footer ul {
    font-family: "Montserrat-Regular";
    text-align: center;
    font-size: .9rem;
    padding: 0;
}

.footer h2 {
    font-family: "Montserrat-Light";
    font-size: .8rem;
    color: #787878;
}

.footer li {
    margin-bottom: .5rem;
}

.logos-container {
    margin-top: 1rem;
}

.logos-container img {
    height: 2.3rem;
    margin-left: 2%;
}

.container {
    border-radius: .1rem;
    border-top: 3px solid #6F4AE7;
    display: flex;
    justify-content: space-evenly;
}

.navigation {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.open-to-work {
    display: none;
}

h2 {
    text-align: center;
}

@media (max-width: 1000px) {
    
.footer .logos-container {
    display: flex;
    justify-content: center;
}

.footer  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer  .container h3 {
    margin: 0;
    margin-top: 1.5rem;

}

.footer  .container ul {
    padding-left: 0;
}

.open-to-work {
    display: initial;
}

.footer .container h2 {
    display: none;
}
}
</style>
