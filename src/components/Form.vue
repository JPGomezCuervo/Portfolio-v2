<script setup lang="ts">
import { toRefs, ref } from "vue";
import { selectLanguages } from "../store";
import BaseInput from "./BaseInput.vue";
import TextArea from "./TextArea.vue";

const { form } = toRefs(selectLanguages());
const name = ref("");
const email = ref("");
const message = ref("");

const onSubmit = (event: Event) => {
    event.preventDefault();
    
};


</script>

<template>
    <section class="background">
        <div class="form-split">
            <div class="form-container">
                <div class="left-form-container">
                    <h2 class="subtitle">{{ form.title }}</h2>
                    <h3>{{ form.subtitle }}</h3>
                    <p>{{ form.description }}</p>

                </div>
                <form class="right-form-container" @submit.prevent="onSubmit">
                    <BaseInput
                        class="input-form-container"
                        :label="form.form.name"
                        :placeholder="form.form.namePlaceholder"
                        type="text"
                        :name="form.form.name"
                        v-model:modelValue="name"
                    />
                    <BaseInput
                        class="input-form-container"
                        :label="form.form.email"
                        :placeholder="form.form.emailPlaceholder"
                        type="email"
                        :name="form.form.email"
                        v-model:modelValue="email"
                    />

                    <TextArea
                    class="input-form-container"
                    :label="form.form.message"
                    :placeholder="form.form.messagePlaceholder"
                    :name="form.form.message"
                    v-model:modelValue="message"
                    />

                    <button>{{ form.form.button }}</button>

                </form>
            </div>
        </div>
    </section>

</template>

<style lang="scss" >
@import "../style.scss";


.form-split {
    display: block;
    padding: 90px 0;
    width: 100%;
}
.form-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 60px;
}
.left-form-container {
    color: white;
    width: 100%;
    height: 100%;
}

.left-form-container h3 {
    font-family: "Montserrat-SemiBold";
    font-size: 2.5rem;
    width: 30rem;
    text-align: left;
}

.left-form-container p {
    font-family: "Montserrat-Light";
    font-size: 1.5rem;
    text-align: left;
    width: 28rem;
}

.right-form-container {
    width: 60%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 9px 15px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    justify-content: space-between;
    padding: 2rem;
    align-items: center;
    justify-self: center;
}

.right-form-container input {
    padding-left: 1rem;
    border-radius: .6rem;
    border: 0;
    background-color: #f3f3f3;
    width: calc(100% - 1rem);

}

.right-form-container button {
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

.right-form-container button:hover {
    background-color: #6F4AE7;
    color: white;
}
.right-form-container button:active {
    background-color:white;
    color:#6F4AE7;
}

.right-form-container button[disabled] {
    background-color: white;
    border: 2px solid #979595;
    color: #878787;
    cursor: not-allowed;
}

.input-form-container  {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 2rem;
    width: 100%;
}

.input-form-container label {
    font-family: "Montserrat-Bold";
    font-size: .9rem;
}

.input-form-container input {
    font-family: "Montserrat-Regular";
    height: 2.2rem;
}

.input-form-container  textarea {
    padding: .2rem;
    padding-left: 1rem;
    border-radius: .6rem;
    border: 0;
    background-color: #f3f3f3;
    width: calc(100% - 1rem);
}

// .right-form-container p {
//     font-family: "Montserrat-Regular";
//     font-size: .95rem;
//     color: #6F4AE7;
//     margin-top: 0;
// }


</style>
