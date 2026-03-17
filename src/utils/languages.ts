// src/utils/languages.ts

export interface Language {
  id: number;
  name: string;
  iso: string;
}

export const LANGUAGES: Language[] = [
  { id: 1, name: 'English', iso: 'en' },
  { id: 3, name: 'Español', iso: 'es' },
  { id: 4, name: 'Deutsch', iso: 'de' },
  { id: 5, name: 'Italiano', iso: 'it' },
  { id: 6, name: 'Français', iso: 'fr' },
  { id: 7, name: 'Portugués', iso: 'pt' },
  { id: 8, name: 'Русский', iso: 'ru' },
];

export const getLanguageId = (isoCode: string): number => {
  const normalizedIsoCode = isoCode.toLowerCase();
  const lang = LANGUAGES.find(l => l.iso === normalizedIsoCode);
  return lang ? lang.id : 1; // 1 es el default (Inglés)
};
