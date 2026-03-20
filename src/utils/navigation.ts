// src/utils/navigation.ts

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterData {
  iso: string;
  infoLinks: FooterLink[];
  accountLinks: FooterLink[];
}

export const FOOTER_NAVIGATION: FooterData[] = [
  {
    iso: 'es',
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
    infoLinks: [
      { name: 'Über uns', href: 'https://www.electricautomationnetwork.com/de/uber-uns' },
      { name: 'Kontakt', href: 'https://www.electricautomationnetwork.com/de/kontakt' },
      { name: 'Sichere Zahlung', href: 'https://www.electricautomationnetwork.com/de/sichere-zahlung' },
      { name: 'Häufig gestellte Fragen', href: 'https://www.electricautomationnetwork.com/de/haufig-gestellte-fragen' },
      { name: 'Garantien', href: 'https://www.electricautomationnetwork.com/de/garantien' },
    ],
    accountLinks: [
      { name: 'Meine Bestellungen', href: 'https://www.electricautomationnetwork.com/de/bestellverlauf' },
      { name: 'Meine Adressen', href: 'https://www.electricautomationnetwork.com/de/adressen' },
      { name: 'Persönliche Daten', href: 'https://www.electricautomationnetwork.com/de/identitat' },
      { name: 'Meine Gutscheine', href: 'https://www.electricautomationnetwork.com/de/rabatt' },
    ]
  },
  {
    iso: 'it',
    infoLinks: [
      { name: 'Chi siamo', href: 'https://www.electricautomationnetwork.com/it/chi-siamo' },
      { name: 'Contatto', href: 'https://www.electricautomationnetwork.com/it/contatto' },
      { name: 'Pagamento sicuro', href: 'https://www.electricautomationnetwork.com/it/pagamento-sicuro' },
      { name: 'Domande frequenti', href: 'https://www.electricautomationnetwork.com/it/domande-frequenti' },
      { name: 'Garanzie', href: 'https://www.electricautomationnetwork.com/it/garanzie' },
    ],
    accountLinks: [
      { name: 'I miei acquisti', href: 'https://www.electricautomationnetwork.com/it/storico-ordine' },
      { name: 'I miei indirizzi', href: 'https://www.electricautomationnetwork.com/it/indirizzi' },
      { name: 'Dati personali', href: 'https://www.electricautomationnetwork.com/it/identita' },
      { name: 'I miei buoni', href: 'https://www.electricautomationnetwork.com/it/sconto' },
    ]
  },
  {
    iso: 'fr',
    infoLinks: [
      { name: 'À propos de nous', href: 'https://www.electricautomationnetwork.com/fr/a-propos-de-nous' },
      { name: 'Contact', href: 'https://www.electricautomationnetwork.com/fr/contact' },
      { name: 'Paiement sécurisé', href: 'https://www.electricautomationnetwork.com/fr/paiement-securise' },
      { name: 'Questions fréquentes', href: 'https://www.electricautomationnetwork.com/fr/questions-frequentes' },
      { name: 'Garanties', href: 'https://www.electricautomationnetwork.com/fr/garanties' },
    ],
    accountLinks: [
      { name: 'Mes achats', href: 'https://www.electricautomationnetwork.com/fr/historique-des-commandes' },
      { name: 'Mes adresses', href: 'https://www.electricautomationnetwork.com/fr/adresses' },
      { name: 'Mes données personnelles', href: 'https://www.electricautomationnetwork.com/fr/identite' },
      { name: 'Mes bons de réduction', href: 'https://www.electricautomationnetwork.com/fr/bons-de-reduction' },
    ]
  },
  {
    iso: 'pt',
    infoLinks: [
      { name: 'Sobre nós', href: 'https://www.electricautomationnetwork.com/pt/sobre-nos' },
      { name: 'Contato', href: 'https://www.electricautomationnetwork.com/pt/contato' },
      { name: 'Pagamento seguro', href: 'https://www.electricautomationnetwork.com/pt/pagamento-seguro' },
      { name: 'Perguntas frequentes', href: 'https://www.electricautomationnetwork.com/pt/perguntas-frequentes' },
      { name: 'Garantias', href: 'https://www.electricautomationnetwork.com/pt/garantias' },
    ],
    accountLinks: [
      { name: 'Minhas compras', href: 'https://www.electricautomationnetwork.com/pt/historico-de-pedidos' },
      { name: 'Meus endereços', href: 'https://www.electricautomationnetwork.com/pt/enderecos' },
      { name: 'Dados pessoais', href: 'https://www.electricautomationnetwork.com/pt/identidade' },
      { name: 'Meus vales', href: 'https://www.electricautomationnetwork.com/pt/desconto' },
    ]
  }
];
