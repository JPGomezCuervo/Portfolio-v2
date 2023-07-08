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


export interface Languages {
  navBar: NavBar;
  hero: Hero;
  whoIAm: WhoIAm;
  form: Form;
}

export interface RootStore {
  activeLanguage: Language;
  languages : Languages;
  toggleLanguage: () => void;
}