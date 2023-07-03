type Language = "es" | "en";

interface NavBar {
  projects: string;
  contactMe: string;
  whoIAm: string;
}

interface Languages {
  navBar: NavBar;
}

interface RootStore {
  activeLanguage: Language;
  languages : Languages;
  toggleLanguage: () => void;
}