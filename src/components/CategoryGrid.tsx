import React from 'react';
import { categories } from '../data/categories';
import { useStore } from '../store/useStore';
import * as LucideIcons from 'lucide-react';

export const CategoryGrid = () => {
  const { setSelectedCategory } = useStore();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map((category) => {
        const Icon = LucideIcons[category.iconName as keyof typeof LucideIcons];
        
        return (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category)}
            className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center space-y-2"
          >
            <Icon className="w-12 h-12 text-indigo-600" />
            <span className="text-lg font-medium text-gray-900">{category.name}</span>
            <span className="text-sm text-gray-500">
              {category.subcategories.length} subcategories
            </span>
          </button>
        );
      })}
    </div>
  );
};