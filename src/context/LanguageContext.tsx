
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'app.title': 'Easy CV',
    'app.subtitle': 'Create a professional CV in minutes',
    'app.create.now': 'Create my CV now',
    'app.create': 'Create my CV',
    'app.why.choose': 'Why choose Easy CV?',
    'app.prof.templates': 'Professional templates',
    'app.easy.custom': 'Easy customization',
    'app.pdf.export': 'PDF Export',
    'app.intuitive.interface': 'Intuitive interface',
    'app.real.time.preview': 'Real-time preview',
    'app.secure.save': 'Secure saving',
    'app.build.prof.cv': 'Build your professional CV',
    'app.information': 'Information',
    'app.preview': 'Preview',
    'app.boost.career': 'Ready to boost your career?',
    'app.create.account': 'Create a free account',
    'app.learn.more': 'Learn more',
    'app.login': 'Login',
    'app.signup': 'Sign up',
    'app.home': 'Home',
    'app.templates': 'Templates',
    'app.how.works': 'How it works',
    'app.faq': 'FAQ',
    'app.dashboard': 'Dashboard',
    'app.saved.cvs': 'Saved CVs',
    'app.logout': 'Logout',
    'app.email': 'Email',
    'app.password': 'Password',
    'app.name': 'Name',
    'app.save.cv': 'Save CV',
    'app.dark.mode': 'Dark mode',
    'app.light.mode': 'Light mode',
    'cv.font': 'CV Font',
    'cv.template': 'CV Template',
    'cv.preview': 'Preview',
    'cv.download.pdf': 'Download PDF'
  },
  fr: {
    'app.title': 'CV Facile',
    'app.subtitle': 'Créez un CV professionnel en quelques minutes',
    'app.create.now': 'Créer mon CV maintenant',
    'app.create': 'Créer mon CV',
    'app.why.choose': 'Pourquoi choisir CV Facile ?',
    'app.prof.templates': 'Modèles professionnels',
    'app.easy.custom': 'Personnalisation facile',
    'app.pdf.export': 'Export PDF',
    'app.intuitive.interface': 'Interface intuitive',
    'app.real.time.preview': 'Aperçu en temps réel',
    'app.secure.save': 'Sauvegarde sécurisée',
    'app.build.prof.cv': 'Construisez votre CV professionnel',
    'app.information': 'Informations',
    'app.preview': 'Aperçu',
    'app.boost.career': 'Prêt à booster votre carrière ?',
    'app.create.account': 'Créer un compte gratuit',
    'app.learn.more': 'En savoir plus',
    'app.login': 'Connexion',
    'app.signup': 'Inscription',
    'app.home': 'Accueil',
    'app.templates': 'Modèles',
    'app.how.works': 'Comment ça marche',
    'app.faq': 'FAQ',
    'app.dashboard': 'Tableau de bord',
    'app.saved.cvs': 'CV sauvegardés',
    'app.logout': 'Déconnexion',
    'app.email': 'Email',
    'app.password': 'Mot de passe',
    'app.name': 'Nom',
    'app.save.cv': 'Sauvegarder le CV',
    'app.dark.mode': 'Mode sombre',
    'app.light.mode': 'Mode clair',
    'cv.font': 'Police du CV',
    'cv.template': 'Modèle de CV',
    'cv.preview': 'Aperçu',
    'cv.download.pdf': 'Télécharger en PDF'
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'fr',
  setLanguage: () => {},
  t: (key) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem('language');
    return (savedLang as Language) || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
