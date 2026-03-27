// src/utils/i18n.ts
// i18n => internationalization (18 caracteres)

export const ui = {
  es: {
    'nav.login': 'Iniciar sesión',
    'nav.currency': 'Divisa',
    'search.placeholder': 'Búsqueda por palabra clave, referencia o código',
    'search.button': 'Buscar',
    'breadcrumb.home': 'Tienda',
    'breadcrumb.page': 'Portal de Descargas PDF',
    'box_products_best_sellers': "Más Vendidos",
    'pdf_form_email': "Correo electrónico",//677
    'pdf_form_email_placeholder': "Introduzca su dirección de correo electrónico",//677
    'pdf_form_download': "Descargar PDF",
    'pdf_form_privacy': "* Protegemos tu privacidad: Te enviamos un enlace de descarga seguro a tu email",
    'footer.info': 'Información',
    'footer.account': 'Mi cuenta',
    'faq.title': 'Preguntas Frecuentes',
  },
  en: {
    'nav.login': 'Log in',
    'nav.currency': 'Currency',
    'search.placeholder': 'Search by keyword, reference or code',
    'search.button': 'Search',
    'breadcrumb.home': 'Store',
    'breadcrumb.page': 'PDF Download Portal',
    'box_products_best_sellers': "Best Sellers",
    'pdf_form_email': "E-mail",
    'pdf_form_email_placeholder': "Enter your e-mail",
    'pdf_form_download': "PDF Download",
    'pdf_form_privacy': "* We protect your privacy: We send a secure download link to your email",
    'footer.info': 'Information',
    'footer.account': 'My account',
    'faq.title': 'Frequently Asked Questions',
  },
  de: {
    'nav.login': 'Anmelden',
    'nav.currency': 'Währung',
    'search.placeholder': 'Suche nach Stichwort, Referenz oder Code',
    'search.button': 'Suche',
    'breadcrumb.home': 'Shop',
    'breadcrumb.page': 'PDF-Download-Portal',
    'box_products_best_sellers': "Bestseller",
    'pdf_form_email': "E-mail",
    'pdf_form_email_placeholder': "Geben Sie Ihre E-Mail-Adresse ein",
    'pdf_form_download': "PDF herunterladen",
    'pdf_form_privacy': "* Wir schützen Ihre Privatsphäre: Wir senden Ihnen einen sicheren Download-Link per E-Mail",
    'footer.info': 'Informationen',
    'footer.account': 'Mein Konto',
    'faq.title': 'Häufig gestellte Fragen',
  },
  it: {
    'nav.login': 'Accedi',
    'nav.currency': 'Valuta',
    'search.placeholder': 'Ricerca per parola chiave, riferimento o un codice',
    'search.button': 'Ricerca',
    'breadcrumb.home': 'Negozio',
    'breadcrumb.page': 'Portale di download PDF',
    'box_products_best_sellers': "Più venduti",
    'pdf_form_email': "E-mail",
    'pdf_form_email_placeholder': "Digita la tua e-mail",
    'pdf_form_download': "Scarica il PDF",
    'pdf_form_privacy': "* Proteggiamo la tua privacy: ti invieremo un link di download sicuro via e-mail",
    'footer.info': 'Informazione',
    'footer.account': 'Il mio account',
  },
  fr: {
    'nav.login': 'Connexion',
    'nav.currency': 'Devise',
    'search.placeholder': 'Recherche par mot-clé, référence ou code',
    'search.button': 'Rechercher',
    'breadcrumb.home': 'Boutique',
    'breadcrumb.page': 'Portail de téléchargement PDF',
    'box_products_best_sellers': "Les plus vendus",
    'pdf_form_email': "E-mail",
    'pdf_form_email_placeholder': "Saisissez votre adresse e-mail",
    'pdf_form_download': "Télécharger le PDF",
    'pdf_form_privacy': "* Nous protégeons votre vie privée : nous vous envoyons un lien de téléchargement sécurisé par e-mail",
    'footer.info': 'Informations',
    'footer.account': 'Mon compte',
  },
  pt: {
    'nav.login': 'Iniciar sessão',
    'nav.currency': 'Moeda',
    'search.placeholder': 'Busca por palavra-chave, de referência ou código',
    'search.button': 'Pesquisar',
    'breadcrumb.home': 'Loja',
    'breadcrumb.page': 'Portal de downloads de PDF',
    'box_products_best_sellers': "Mais vendidos",
    'pdf_form_email': "E-mail",
    'pdf_form_email_placeholder': "Introduza o seu email",
    'pdf_form_download': "Descarregar PDF",
    'pdf_form_privacy': "* Protegemos a sua privacidade: Enviamos um link de descarga seguro para o seu e-mail",
    'footer.info': 'Informação',
    'footer.account': 'Minha conta',
  },
} as const;



export function useTranslations(lang: string) {
  return function t(key: string) {
    // Elegir idioma (español si no existe)
    const translations = (ui as any)[lang] || ui['es'];
    
    // Devolver texto de esa clave (o el de español si falta en ese idioma)
    return translations[key] || (ui['es'] as any)[key];
  }
}
