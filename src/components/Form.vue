<script setup lang="ts">
import TextArea from "./TextArea.vue";
import BaseInput from "./BaseInput.vue";
import { selectLanguages, setReference } from "../store";
import { useForm, useField } from "vee-validate";
import validations from "../helpers/validations";
import { computed, onMounted, ref } from "vue";
import emailjs from '@emailjs/browser';

// Import the .env variables
const EMAIL_JS_API = import.meta.env.VITE_EMAIL_JS_API;
const EMAIL_JS_TEMPLATE = import.meta.env.VITE_EMAIL_JS_TEMPLATE;
const EMAIL_JS_KEY = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

// Set up the form with vee-validate
const { handleSubmit, errors, resetForm } = useForm({
    validationSchema: validations,
    initialValues: {
        name: "",
        email: "",
        message: ""
    },
    validateOnMount: false
})
const { value: name } = useField<string>("name");
const { value: email } = useField<string>("email");
const { value: message } = useField<string>("message");


// Computed property to get the form data
const formEmail = computed(() => {
    if (!name.value || !email.value || !message.value) {
        return null;
    }

    return {
        name: name.value,
        email: email.value,
        message: message.value
    }
});

// Handle the form submit

const serverError = ref("");
const serverSuccess = ref("");

const submit = handleSubmit(() => {
    if (!EMAIL_JS_API || !EMAIL_JS_TEMPLATE || !EMAIL_JS_KEY) {
        console.log('An unexpected error just occurred');
        return;
    }

    if (!formEmail.value) {
        console.log('Form reference is not available');
        return;
    }

    emailjs
        .send(EMAIL_JS_API, EMAIL_JS_TEMPLATE, formEmail.value, EMAIL_JS_KEY)
        .then(() => {
            serverSuccess.value = form.value.submitted.successfullyResponse;
            serverError.value = "";
            
        })
        .catch(() => {
            serverError.value = form.value.submitted.rejectedResponse;
            serverSuccess.value = "";
        });

});

// function to set the reference to the form section
const form_section = ref<HTMLElement | null>(null);

onMounted(() => {
    if (form_section.value) {
        setReference("form", form_section.value);
    }
});

const handleModalClick = () => {
    serverError.value = '';
    serverSuccess.value = '';
    resetForm();
}

const { form } = selectLanguages();
</script>

<template>
    <section class="background" ref="form_section">
        <div class="form-split">
            <div class="form-container">
                <div class="left-form-container">
                    <h2 class="subtitle form">{{ form.title }}</h2>
                    <h3>{{ form.subtitle }}</h3>
                    <p>{{ form.description }}</p>
                    
                </div>
                <form @submit="submit">
                    <div class="right-form-container">
                        <!-- Modal to show the server response -->
                        <div class="modal-container" v-if="serverSuccess">
                            <div class="modal">
                                {{ serverSuccess }}
                            </div>
                            <button type="button" @click="handleModalClick">{{ form.submitted.button }}</button>
                        </div>
        
                        <div class="modal-container" v-if="serverError">
                            <div class="modal">
                                {{ serverError }}
                            </div>
                            <button type="button" @click="handleModalClick">{{ form.submitted.button }}</button>
                        </div>

                        <!-- Starts the input fields -->
                        <fieldset>
                            <legend>Personal information</legend>
                            <BaseInput class="input-form-container" :label="form.form.name"
                                :placeholder="form.form.namePlaceholder" type="text" :name="form.form.name"
                                v-model:modelValue="name" :error="errors.name" />
                            <BaseInput class="input-form-container" :label="form.form.email"
                                :placeholder="form.form.emailPlaceholder" type="email" :name="form.form.email"
                                v-model:modelValue="email" :error="errors.email" />
                        </fieldset>

                        <fieldset>

                            <legend>Write your message</legend>
                            <TextArea class="input-form-container message" :label="form.form.message"
                                :placeholder="form.form.messagePlaceholder" :name="form.form.message"
                                v-model:modelValue="message" :error="errors.message" />
                        </fieldset>


                        <button type="submit">{{ form.form.button }}</button>

                    </div>


                </form>
            </div>
        </div>
    </section>
</template>

<style lang="scss" >
@import "../style.scss";

.subtitle.form {
    margin-bottom: 10%;
    margin-top: 0;
}

.form-split {
    display: block;
    padding: 60px 0;
    width: 100%;
}

.form-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    max-width: 1440px;
    height: fit-content;
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
    font-size: 2.2rem;
    width: 25rem;
    text-align: left;
}

.left-form-container p {
    font-family: "Montserrat-Light";
    font-size: 1.5rem;
    text-align: left;
    width: 28rem;
}

.right-form-container {
    position:relative;
    width: 75%;
    height: fit-content;
    background-color: white;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 9px 15px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    padding: 2rem;
    justify-self: end;
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
    margin-top: 10%;
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
    background-color: white;
    color: #6F4AE7;
}

.right-form-container button[disabled] {
    background-color: white;
    border: 2px solid #979595;
    color: #878787;
    cursor: not-allowed;
}

.input-form-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    margin-bottom: 5%;
}

.input-form-container label {
    font-family: "Montserrat-Bold";
    font-size: .9rem;
}

.input-form-container input {
    font-family: "Montserrat-Regular";
    height: 2.2rem;
}

.input-form-container textarea {
    padding: .2rem;
    padding-left: 1rem;
    border-radius: .6rem;
    border: 0;
    background-color: #f3f3f3;
    width: calc(100% - 1rem);
}

.input-form-container.message {
    margin: 0;
}

fieldset {
    margin: 0;
    border: 0;
    padding: 0;
    width: 100%;
    height: fit-content;
}


legend {
    display: none;
}

.right-form-container p {
    font-family: "Montserrat-SemiBold";
    font-size: .95rem;
    color: #6F4AE7;
    margin: 0;
    text-align: center;
    align-self: center;
}

.modal-container {
    background-color: white;
    position:absolute;
    width: 99%;
    z-index: 100;
    height: 99%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.modal {
    font-family: "Montserrat-Bold";
    font-size: 2rem;
    margin: 0 auto;
    width: 55%;
    text-align: center;
    color:  #6F4AE7; 
}

@media (max-width: 1000px) {

    .form-split {
        padding: 0;
        padding-bottom: 5%;
    }

    .form-container {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        padding: 0 40px;
        margin: 0;
    }

    .left-form-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .subtitle.form {
        width: fit-content;
        margin-bottom: 4%;
        margin-top: 2%;
        text-align: center;
    }

    .left-form-container h3 {
        width: fit-content;
        margin: 0 auto;
        text-align: center;
        font-size: clamp(1.5rem, 5vw, 2.2rem);
    }

    .left-form-container p {
        width: 80%;
        text-align: center;
        margin-bottom: 0;
    }

    .right-form-container {
        justify-self: center;

    }
}

@media (max-width: 550px) {
    .left-form-container p {
        // font-size: .8rem;
        font-size: clamp(1rem, 2vw, 1.2rem);
        width: 100%;
    }
}
</style>
