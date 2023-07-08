<script setup lang="ts">
import { toRefs } from "vue";
import { selectLanguages } from "../store";

const { form } = toRefs(selectLanguages());
</script>

<template>
    <section class="background">
        <div class="split">
            <div class="container">
                <div class="left-container">
                    <h2 class="subtitle">{{ form.title }}</h2>
                    <h3>{{ form.subtitle }}</h3>
                    <p>{{ form.description }}</p>

                </div>
                <form class="right-container">
                    <div class="input-container">
                        <label htmlFor="nameInput">{{ form.form.name }}</label>
                        <input type="text" name="nameInput" :placeholder="form.form.namePlaceholder"/>
                    </div>

                    <div class="input-container">
                        <label htmlFor="emailInput">{{ form.form.email }}</label>
                        <input type="text" name="emailInput" :placeholder="form.form.emailPlaceholder"/>
                    </div>

                    <div class="input-container">
                        <label htmlFor="messageInput">{{ form.form.message }}</label>
                        <textarea name="messageInput" :placeholder="form.form.message"></textarea>
                    </div>

                    <button>{{ form.form.button }}</button>

                </form>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@import "../style.scss";


.split {
    display: block;
    padding: 90px 0;
    width: 100%;
}
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 60px;
}
.left-container {
    color: white;
    width: 100%;
    height: 100%;
}

.left-container h3 {
    font-family: "Montserrat-SemiBold";
}

.left-container p {
    font-family: "Montserrat-Light";
}

.right-container {
    width: 60%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 9px 15px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    justify-self: center;
}

.right-container input {
    padding-left: 1rem;
    border-radius: .6rem;
    border: 0;
    background-color: #f3f3f3;
    width: calc(100% - 1rem);

}

.right-container button {
    width: 10rem;
    margin: 0 auto;
    background-color: white;
    padding: .2rem;
    border-radius: .3rem;
    border: 2px solid #6F4AE7;
    color: #6F4AE7;
    font-family: "Montserrat-Bold";
    font-size: 1rem;
    transition: .2s;
    cursor: pointer;
}

.right-container button:hover {
    background-color: #6F4AE7;
    color: white;
}
.right-container button:active {
    background-color:white;
    color:#6F4AE7;
}

.right-container button[disabled] {
    background-color: white;
    border: 2px solid #979595;
    color: #878787;
    cursor: not-allowed;
}

.input-container  {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 2rem;
    width: 100%;
}

.input-container label {
    font-family: "Montserrat-Bold";
    font-size: .9rem;
}

.input-container input {
    font-family: "Montserrat-Regular";
    height: 2.2rem;
}

.input-container  textarea {
    padding: .2rem;
    padding-left: 1rem;
    border-radius: .6rem;
    border: 0;
    background-color: #f3f3f3;
    width: calc(100% - 1rem);
}

// .right-container p {
//     font-family: "Montserrat-Regular";
//     font-size: .95rem;
//     color: #6F4AE7;
//     margin-top: 0;
// }


</style>
