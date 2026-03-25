// src/utils/navigation.ts

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterData {
  iso: string;
  titleInfo: string;
  titleAccount: string;
  titleLocation: string;
  infoLinks: FooterLink[];
  accountLinks: FooterLink[];
}

export const FOOTER_NAVIGATION: FooterData[] = [
  {
    iso: 'es',
    titleInfo: 'Información',
    titleAccount: 'Mi cuenta',
    titleLocation: 'Información sobre la tienda',
    infoLinks: [
      { name: 'Sobre nosotros', href: 'https://www.electricautomationnetwork.com/es/sobre-nosotros' },
      { name: 'Contacto', href: 'https://www.electricautomationnetwork.com/es/contacto' },
      { name: 'Pago seguro', href: 'https://www.electricautomationnetwork.com/es/pago-seguro' },
      { name: 'Preguntas frecuentes', href: 'https://www.electricautomationnetwork.com/es/preguntas-frecuentes' },
      { name: 'Garantías', href: 'https://www.electricautomationnetwork.com/es/garantias' },
    ],
    accountLinks: [
      { name: 'Mis compras', href: 'https://www.electricautomationnetwork.com/es/historial-compra' },
      { name: 'Mis direcciones', href: 'https://www.electricautomationnetwork.com/es/direcciones' },
      { name: 'Mis datos personales', href: 'https://www.electricautomationnetwork.com/es/datos-personales' },
      { name: 'Mis vales', href: 'https://www.electricautomationnetwork.com/es/mi-cuenta/descuento' },
    ]
  },
  {
    iso: 'en',
    titleInfo: 'Information',
    titleAccount: 'My account',
    titleLocation: 'Store Information',
    infoLinks: [
      { name: 'About us', href: 'https://www.electricautomationnetwork.com/en/about-us' },
      { name: 'Contact', href: 'https://www.electricautomationnetwork.com/en/contact' },
      { name: 'Secure payment', href: 'https://www.electricautomationnetwork.com/en/secure-payment' },
      { name: 'FAQ', href: 'https://www.electricautomationnetwork.com/en/faq' },
      { name: 'Warranties', href: 'https://www.electricautomationnetwork.com/en/guarantees' },
    ],
    accountLinks: [
      { name: 'My orders', href: 'https://www.electricautomationnetwork.com/en/order-history' },
      { name: 'My addresses', href: 'https://www.electricautomationnetwork.com/en/addresses' },
      { name: 'Personal info', href: 'https://www.electricautomationnetwork.com/en/identity' },
      { name: 'My vouchers', href: 'https://www.electricautomationnetwork.com/en/discount' },
    ]
  },
  {
    iso: 'de',
    titleInfo: 'Informationen',
    titleAccount: 'Ihr Kundenbereich',
    titleLocation: 'Kontakt',
    infoLinks: [
      { name: 'Wir über uns', href: 'https://www.electricautomationnetwork.com/de/order-history' },
      { name: 'Kontakt', href: 'https://www.electricautomationnetwork.com/de/content/kontakt' },
      { name: 'Zahlungen', href: 'https://www.electricautomationnetwork.com/de/content/secure-payment' },
      { name: 'Häufige Fragen', href: 'https://www.electricautomationnetwork.com/de/content/haeufige-fragen' },
      { name: 'Garantien', href: 'https://www.electricautomationnetwork.com/de/content/garantie' },
    ],
    accountLinks: [
      { name: 'Ihre Bestellungen', href: 'https://www.electricautomationnetwork.com/de/bestellverlauf' },
      { name: 'Ihre Adressen', href: 'https://www.electricautomationnetwork.com/de/addresses' },
      { name: 'Ihre persönlichen Daten', href: 'https://www.electricautomationnetwork.com/de/identity' },
      { name: 'Ihre Gutscheine', href: 'https://www.electricautomationnetwork.com/de/discount' },
    ]
  },
  {
    iso: 'it',
    titleInfo: 'Informazioni',
    titleAccount: 'Il mio account',
    titleLocation: 'Informazioni negozio',
    infoLinks: [
      { name: 'Riguardo a noi', href: 'https://www.electricautomationnetwork.com/it/content/riguardo-a-noi' },
      { name: 'Contatti', href: 'https://www.electricautomationnetwork.com/it/content/contatti' },
      { name: 'Pagamento sicuro', href: 'https://www.electricautomationnetwork.com/it/content/pagamento-sicuro' },
      { name: 'Domande Frequenti', href: 'https://www.electricautomationnetwork.com/it/content/domande-frequenti' },
      { name: 'Garanzia', href: 'https://www.electricautomationnetwork.com/it/content/garanzia' },
    ],
    accountLinks: [
      { name: 'I miei ordini', href: 'https://www.electricautomationnetwork.com/it/order-history' },
      { name: 'I miei indirizzi', href: 'https://www.electricautomationnetwork.com/it/addresses' },
      { name: 'Le mie informazioni personali', href: 'https://www.electricautomationnetwork.com/it/identity' },
      { name: 'I miei buoni', href: 'https://www.electricautomationnetwork.com/it/discount' },
    ]
  },
  {
    iso: 'fr',
    titleInfo: 'Informations',
    titleAccount: 'Mon compte',
    titleLocation: 'Informations sur votre boutique',
    infoLinks: [
      { name: 'Sour nous', href: 'https://www.electricautomationnetwork.com/fr/content/sour-nous' },
      { name: 'Contact', href: 'https://www.electricautomationnetwork.com/fr/content/contact' },
      { name: 'Paiement fiable.', href: 'https://www.electricautomationnetwork.com/fr/content/paiement-fiable' },
      { name: 'Questions courantes', href: 'https://www.electricautomationnetwork.com/fr/content/questions-courantes' },
      { name: 'Garanties', href: 'https://www.electricautomationnetwork.com/fr/content/garanties' },
    ],
    accountLinks: [
      { name: 'Mes commandes', href: 'https://www.electricautomationnetwork.com/fr/order-history' },
      { name: 'Mes adresses', href: 'https://www.electricautomationnetwork.com/fr/addresses' },
      { name: 'Mes informations personnelles', href: 'https://www.electricautomationnetwork.com/fr/identity' },
      { name: 'Mes bons de réduction', href: 'https://www.electricautomationnetwork.com/fr/discount' },
    ]
  },
  {
    iso: 'pt',
    titleInfo: 'Informação',
    titleAccount: 'A minha conta',
    titleLocation: 'Informação da Loja',
    infoLinks: [
      { name: 'Acerca de nós', href: 'https://www.electricautomationnetwork.com/pt/content/acerca-de-nos' },
      { name: 'Contacto', href: 'https://www.electricautomationnetwork.com/pt/content/contacto' },
      { name: 'Pagamento seguro', href: 'https://www.electricautomationnetwork.com/pt/content/secure-payment' },
      { name: 'Perguntas frequentes', href: 'https://www.electricautomationnetwork.com/pt/content/perguntas-frequentes' },
      { name: 'Garantias', href: 'https://www.electricautomationnetwork.com/pt/content/garantias' },
    ],
    accountLinks: [
      { name: 'As minhas encomendas', href: 'https://www.electricautomationnetwork.com/pt/order-history' },
      { name: 'Os meus endereços', href: 'https://www.electricautomationnetwork.com/pt/addresses' },
      { name: 'Os meus dados pessoais', href: 'https://www.electricautomationnetwork.com/pt/identity' },
      { name: 'Os meus vales de desconto', href: 'https://www.electricautomationnetwork.com/pt/discount' },
    ]
  }
];
