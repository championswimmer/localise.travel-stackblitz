import React from 'react';
import { useStore } from '../store/useStore';

export const PhraseList = () => {
  const { selectedCategory, selectedSubcategoryId, selectedLanguage } = useStore();

  if (!selectedCategory || !selectedSubcategoryId) return null;

  const subcategory = selectedCategory.subcategories.find(
    (sub) => sub.id === selectedSubcategoryId
  );

  if (!subcategory) return null;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Words</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {subcategory.words.map((word, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <p className="text-gray-900 font-medium">{word.english}</p>
              <p className="text-indigo-600 mt-1">{word.translations[selectedLanguage]}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Useful Phrases</h3>
        <div className="space-y-3">
          {subcategory.phrases.map((phrase, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <p className="text-gray-900 font-medium">{phrase.english}</p>
              <p className="text-indigo-600 mt-1">{phrase.translations[selectedLanguage]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};