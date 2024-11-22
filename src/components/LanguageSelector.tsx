import React from 'react';
import { languages } from '../data/languages';
import { useStore } from '../store/useStore';
import { Globe } from 'lucide-react';

export const LanguageSelector = () => {
  const { selectedLanguage, setSelectedLanguage } = useStore();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-5 h-5 text-indigo-600" />
      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value as any)}
        className="block w-full rounded-lg border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};