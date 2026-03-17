// src/utils/currencies.ts

export interface Currency {
  id: number;
  name: string;
  iso: string;
  sign: string;
  position: 'prefix' | 'suffix';
  decimal: string;
  thousands: string;
  active: boolean;
}

export const CURRENCIES: Currency[] = [
  { id: 1, name: 'Euro', iso: 'EUR', sign: '€', position: 'suffix', decimal: ',', thousands: '.', active: true },
  { id: 3, name: 'US Dollar', iso: 'USD', sign: '$', position: 'prefix', decimal: '.', thousands: ',', active: true },
  { id: 4, name: 'Australian dollar', iso: 'AUD', sign: 'A$', position: 'prefix', decimal: '.', thousands: ',', active: true },
  { id: 6, name: 'Brasilian real', iso: 'BRL', sign: 'R$', position: 'prefix', decimal: '.', thousands: ',', active: true },
];
