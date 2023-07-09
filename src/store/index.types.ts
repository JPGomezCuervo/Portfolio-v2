export type Language = "es" | "en";

export interface NavBar {
  projects: string;
  contactMe: string;
  whoIAm: string;
}
export interface Hero {
  title: string;
  subtitle: string;
}
export interface WhoIAm {
  title: string;
  description: string;
}

export interface Form {
  title: string;
  subtitle: string;
  description: string;
  form: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    button: string;
  };
}

export interface Validation {
  name: {
    required: string;
    minLength: string;
    maxLength: string;
    letters: string;
  }
  email: {
    required: string;
    email: string;
  },
  message: {
    required: string;
    minLength: string;
    maxLength: string;
  }
}

export interface Languages {
  navBar: NavBar;
  hero: Hero;
  whoIAm: WhoIAm;
  form: Form;
  validations: Validation
}

export interface RootStore {
  activeLanguage: Language;
  languages : Languages;
  toggleLanguage: () => void;
}

export interface BaseInput {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  class: string;
  modelValue: string;
  error:string | undefined;
}

export interface TextArea {
  label: string;
  name: string;
  placeholder: string;
  class: string;
  modelValue: string;
  error:string | undefined;
}