export type Language = 'fr' | 'es' | 'de' | 'hi' | 'kn';

export type Category = {
  id: string;
  name: string;
  iconName: string;
  subcategories: Subcategory[];
};

export type Subcategory = {
  id: string;
  name: string;
  iconName: string;
  words: Word[];
  phrases: Phrase[];
};

export type Word = {
  english: string;
  translations: Record<Language, string>;
};

export type Phrase = {
  english: string;
  translations: Record<Language, string>;
};

export type LanguageOption = {
  code: Language;
  name: string;
  flag: string;
};