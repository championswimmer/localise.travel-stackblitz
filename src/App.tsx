import React from 'react';
import { LanguageSelector } from './components/LanguageSelector';
import { CategoryGrid } from './components/CategoryGrid';
import { SubcategoryList } from './components/SubcategoryList';
import { PhraseList } from './components/PhraseList';
import { useStore } from './store/useStore';
import { Globe } from 'lucide-react';

function App() {
  const { selectedCategory } = useStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Globe className="w-8 h-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">localise.travel</h1>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {!selectedCategory ? (
            <>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                  Learn Local Languages While Traveling
                </h2>
                <p className="text-lg text-gray-600">
                  Select a category to discover essential phrases in your chosen language
                </p>
              </div>
              <CategoryGrid />
            </>
          ) : (
            <div className="space-y-8">
              <button
                onClick={() => useStore.getState().setSelectedCategory(null)}
                className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center space-x-1"
              >
                ← Back to Categories
              </button>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <SubcategoryList />
                <PhraseList />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;