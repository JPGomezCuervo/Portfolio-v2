import { selectLanguages } from "../store";

const { email, message, name} = selectLanguages().validations.value;

const validations = {
    name: (value: string) => {
        if (!value) return name.required;
        if (value.length < 3 ) return name.minLength;
        if (value.length > 25 ) return name.maxLength;
        if (!value.match(/^[a-zA-Z\s]+$/)) return name.letters;
        return true;
    },
    email: (value: string) => {
        if (!value) return email.required;
        if(!value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) return email.email;
        return true;
    },
    message: (value: string) => {
        if (!value) return message.required;
        if (value.length < 10 ) return message.minLength;
        if (value.length > 100 ) return message.maxLength;
        return true;
    }
}

export default validations;