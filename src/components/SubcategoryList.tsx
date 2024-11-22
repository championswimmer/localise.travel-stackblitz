import React from 'react';
import { useStore } from '../store/useStore';
import * as LucideIcons from 'lucide-react';

export const SubcategoryList = () => {
  const { selectedCategory, selectedSubcategoryId, setSelectedSubcategoryId } = useStore();

  if (!selectedCategory) return null;

  const CategoryIcon = LucideIcons[selectedCategory.iconName as keyof typeof LucideIcons];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
        <CategoryIcon className="w-8 h-8 text-indigo-600" />
        {selectedCategory.name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {selectedCategory.subcategories.map((subcategory) => {
          const SubcategoryIcon = LucideIcons[subcategory.iconName as keyof typeof LucideIcons];
          
          return (
            <button
              key={subcategory.id}
              onClick={() => setSelectedSubcategoryId(subcategory.id)}
              className={`p-4 rounded-lg text-left transition-colors duration-200 ${
                selectedSubcategoryId === subcategory.id
                  ? 'bg-indigo-100 border-indigo-500'
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <SubcategoryIcon className="w-5 h-5 text-indigo-600" />
                <h3 className="text-lg font-medium text-gray-900">{subcategory.name}</h3>
              </div>
              <p className="text-sm text-gray-500">
                {subcategory.words.length} words • {subcategory.phrases.length} phrases
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};