// src/utils/navData.ts

export interface NavLink {
  name: string;
  href: string;
}

export interface NavData {
  iso: string;
  links: NavLink[];
}

export const NAV_LINKS: NavData[] = [
  {
    iso: 'es',
    links: [
      { name: 'Inicio', href: 'https://www.electricautomationnetwork.com/es/' },
      { name: 'Categorías', href: 'https://www.electricautomationnetwork.com/es/c' },
      { name: 'Preguntas frecuentes', href: 'https://www.electricautomationnetwork.com/es/content/preguntas-frecuentes' },
      { name: 'Contactar', href: 'https://www.electricautomationnetwork.com/es/contactanos' },
      { name: 'Cómo comprar', href: 'https://www.electricautomationnetwork.com/es/content/como-comprar' },
      { name: 'Comentarios', href: 'https://www.electricautomationnetwork.com/es/comentarios-de-nuestros-clientes' },
    ]
  },
  {
    iso: 'en',
    links: [
      { name: 'Home', href: 'https://www.electricautomationnetwork.com/en/' },
      { name: 'Categories', href: 'https://www.electricautomationnetwork.com/en/c' },
      { name: 'FAQ', href: 'https://www.electricautomationnetwork.com/en/content/faq' },
      { name: 'Contact us', href: 'https://www.electricautomationnetwork.com/en/contact-us' },
      { name: 'How to buy', href: 'https://www.electricautomationnetwork.com/en/content/how-to-buy' },
      { name: 'Comments', href: 'https://www.electricautomationnetwork.com/en/comments-from-our-customers' },
    ]
  },
  {
    iso: 'de',
    links: [
      { name: 'Anfang', href: 'https://www.electricautomationnetwork.com/de/' },
      { name: 'Kategorien', href: 'https://www.electricautomationnetwork.com/de/c' },
      { name: 'Häufigsten Fragen', href: 'https://www.electricautomationnetwork.com/de/content/haeufige-fragen' },
      { name: 'Kontaktiere uns', href: 'https://www.electricautomationnetwork.com/de/contact-us' },
      { name: 'Wie Kaufen', href: 'https://www.electricautomationnetwork.com/de/content/como-comprar' },
      { name: 'Bemerkungen', href: 'https://www.electricautomationnetwork.com/de/kommentare-unserer-kunden' },
    ]
  },
  {
    iso: 'it',
    links: [
      { name: 'Home', href: 'https://www.electricautomationnetwork.com/it/' },
      { name: 'Categorie', href: 'https://www.electricautomationnetwork.com/it/c' },
      { name: 'Domandi Frequenti', href: 'https://www.electricautomationnetwork.com/it/content/domande-frequenti' },
      { name: 'Contattaci', href: 'https://www.electricautomationnetwork.com/it/contact-us' },
      { name: 'Come comprare', href: 'https://www.electricautomationnetwork.com/it/content/como-comprar' },
      { name: 'Commenti ', href: 'https://www.electricautomationnetwork.com/it/commenti-dei-nostri-clienti' },
    ]
  },
  {
    iso: 'fr',
    links: [
      { name: "Page d'accueil", href: 'https://www.electricautomationnetwork.com/fr/' },
      { name: 'Catégories', href: 'https://www.electricautomationnetwork.com/fr/c' },
      { name: 'Questions courantes', href: 'https://www.electricautomationnetwork.com/fr/content/questions-courantes' },
      { name: 'Contactez nous', href: 'https://www.electricautomationnetwork.com/fr/contact-us' },
      { name: 'Comment acheter', href: 'https://www.electricautomationnetwork.com/fr/content/Comment-acheter' },
      { name: 'Commentaires', href: 'https://www.electricautomationnetwork.com/fr/commentaires-de-nos-clients' },
    ]
  },
  {
    iso: 'pt',
    links: [
      { name: 'Início', href: 'https://www.electricautomationnetwork.com/pt/' },
      { name: 'Categorias', href: 'https://www.electricautomationnetwork.com/pt/c' },
      { name: 'Perguntas frequentes', href: 'https://www.electricautomationnetwork.com/pt/content/perguntas-frequentes' },
      { name: 'Contate-nos', href: 'https://www.electricautomationnetwork.com/pt/contact-us' },
      { name: 'Como comprar', href: 'https://www.electricautomationnetwork.com/pt/content/como-comprar' },
      { name: 'Comentários', href: 'https://www.electricautomationnetwork.com/pt/comentarios-de-nossos-clientes' },
    ]
  }
];