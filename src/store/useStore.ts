import { create } from 'zustand';
import { Language, Category } from '../types';
import { categories } from '../data/categories';

interface Store {
  selectedLanguage: Language;
  setSelectedLanguage: (language: Language) => void;
  selectedCategory: Category | null;
  setSelectedCategory: (category: Category | null) => void;
  selectedSubcategoryId: string | null;
  setSelectedSubcategoryId: (id: string | null) => void;
}

export const useStore = create<Store>((set) => ({
  selectedLanguage: 'fr',
  setSelectedLanguage: (language) => set({ selectedLanguage: language }),
  selectedCategory: null,
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  selectedSubcategoryId: null,
  setSelectedSubcategoryId: (id) => set({ selectedSubcategoryId: id })
}));