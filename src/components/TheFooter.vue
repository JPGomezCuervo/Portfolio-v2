<script setup lang="ts">
import gmailIcon from "../assets/icons/gmail.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import githubIcon from "../assets/icons/github.svg";
import url from "../helpers/constants.json";

</script>

<template>
            <footer class="footer">
            <div class="logos-container">

                <a ::href="url.github" target="_blank" rel="noreferrer">
                    <img src="githubIcon" alt=""/>
                </a>
                <a :href=url.linkedin target="_blank" rel="noreferrer">
                    <img src="linkedinIcon" alt=""/>
                </a>
                <a :href="`mailto: ${url.gmail}`" target="_blank" rel="noreferrer">
                    <img src="gmailIcon" alt=""/>
                </a>

            </div>

            <div class={style.Container}>

                <div class={style.Navigation}>
                    <h3>{navigation}</h3>
                    <ul>
                        <li>{whoIAm}</li>
                        <li>{projects}</li>
                        <li>{contactMe}</li>
                    </ul>
                </div>

                <div class={style.SocialMedia}>
                    <h3>{socialMedia}</h3>
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
                
                <div class={style.OpenToWork}>
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

</style>
