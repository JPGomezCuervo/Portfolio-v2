<script setup lang="ts">
import TextArea from "./TextArea.vue";
import BaseInput from "./BaseInput.vue";
import { toRefs } from "vue";
import { selectLanguages } from "../store";
import { useForm, useField } from "vee-validate";
import validations from "../helpers/validations";

const { form } = toRefs(selectLanguages());

const { handleSubmit, errors } = useForm({
    validationSchema: validations,
    initialValues: {
        name: "",
        email: "",
        message: ""
    }
})

const submit = handleSubmit(() => {
    console.log("Form submitted", name.value, email.value, message.value);
})

const { value: name } = useField<string>("name");
const { value: email } = useField<string>("email");
const { value: message } = useField<string>("message");

</script>

<template>
    <section class="background">
        <div class="form-split">
            <div class="form-container">
                <div class="left-form-container">
                    <h2 class="subtitle form">{{ form.title }}</h2>
                    <h3>{{ form.subtitle }}</h3>
                    <p>{{ form.description }}</p>

                </div>
                <form class="right-form-container" @submit="submit">
                    <fieldset>
                        <legend>Personal information</legend>
                        <BaseInput 
                            class="input-form-container" 
                            :label="form.form.name"
                            :placeholder="form.form.namePlaceholder" 
                            type="text" 
                            :name="form.form.name" 
                            v-model:modelValue="name"
                            :error="errors.name" />
                        <BaseInput 
                            class="input-form-container" 
                            :label="form.form.email"
                            :placeholder="form.form.emailPlaceholder" 
                            type="email" 
                            :name="form.form.email" 
                            v-model:modelValue="email"
                            :error="errors.email" />
                    </fieldset>

                    <fieldset>

                        <legend>Write your message</legend>
                        <TextArea 
                            class="input-form-container message" 
                            :label="form.form.message"
                            :placeholder="form.form.messagePlaceholder" 
                            :name="form.form.message" 
                            v-model:modelValue="message"
                            :error="errors.message" />
                    </fieldset>


                    <button type="submit">{{ form.form.button }}</button>

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
    font-family: "Montserrat-Light";
    font-size: .95rem;
    color: #6F4AE7;
    margin: 0;
    text-align: center;
    align-self: center;
}

@media (max-width: 1000px) {

    .form-split {
        padding: 0;
    }
    .form-container {
        grid-template-columns: 1fr;
        grid-template-rows: 65% 1fr;
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
