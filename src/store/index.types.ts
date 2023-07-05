type Language = "es" | "en";

interface NavBar {
  projects: string;
  contactMe: string;
  whoIAm: string;
}
interface Hero {
  title: string;
  subtitle: string;
}
interface WhoIAm {
  title: string;
  description: string;
}

interface Languages {
  navBar: NavBar;
  hero: Hero;
  whoIAm: WhoIAm;
}

interface RootStore {
  activeLanguage: Language;
  languages : Languages;
  toggleLanguage: () => void;
}