// src/utils/i18n.ts
// i18n => internationalization (18 caracteres)

export const ui = {
  es: {
    'nav.login': 'Iniciar sesión',
    'nav.currency': 'Divisa',
    'search.placeholder': 'Búsqueda por palabra clave, referencia o código',
    'search.button': 'Buscar',
    'footer.info': 'Información',
    'footer.account': 'Mi cuenta',
    'faq.title': 'Preguntas Frecuentes',
  },
  en: {
    'nav.login': 'Log in',
    'nav.currency': 'Currency',
    'search.placeholder': 'Search by keyword, reference or code',
    'search.button': 'Search',
    'footer.info': 'Information',
    'footer.account': 'My account',
    'faq.title': 'Frequently Asked Questions',
  },
  de: {
    'nav.login': 'Anmelden',
    'nav.currency': 'Währung',
    'search.placeholder': 'Suche nach Stichwort, Referenz oder Code',
    'search.button': 'Suche',
    'footer.info': 'Informationen',
    'footer.account': 'Mein Konto',
    'faq.title': 'Häufig gestellte Fragen',
  },
  it: {
    'nav.login': 'Accedi',
    'nav.currency': 'Valuta',
    'search.placeholder': 'Ricerca per parola chiave, riferimento o un codice',
    'search.button': 'Ricerca',
    'footer.info': 'Informazione',
    'footer.account': 'Il mio account',
  },
  fr: {
    'nav.login': 'Connexion',
    'nav.currency': 'Devise',
    'search.placeholder': 'Recherche par mot-clé, référence ou code',
    'search.button': 'Rechercher',
    'footer.info': 'Informations',
    'footer.account': 'Mon compte',
  },
  pt: {
    'nav.login': 'Iniciar sessão',
    'nav.currency': 'Moeda',
    'search.placeholder': 'Busca por palavra-chave, de referência ou código',
    'search.button': 'Pesquisar',
    'footer.info': 'Informação',
    'footer.account': 'Minha conta',
  },
} as const;



export function useTranslations(lang: string) {
  return function t(key: string) {
    // 1. Elegimos el idioma (o español si no existe)
    const translations = (ui as any)[lang] || ui['es'];
    
    // 2. Devolvemos el texto de esa clave (o el de español si falta en ese idioma)
    return translations[key] || (ui['es'] as any)[key];
  }
}
