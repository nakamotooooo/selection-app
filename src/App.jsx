import React, { useState } from 'react';
import CountryList from './components/CountryList/CountryList';
import { countries } from './data/countries';

function App() {
  // State to keep track of the selected country's ID.
  const [selectedCountryId, setSelectedCountryId] = useState(null);

  // Find the full country object based on the selected ID.
  // This is "derived state" - it's calculated from existing state on every render.
  const selectedCountry = countries.find(c => c.id === selectedCountryId);

  // Handler function to update the state when a country is clicked.
  const handleCountrySelect = (countryId) => {
    setSelectedCountryId(countryId);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center font-sans p-4">
      <main className="container mx-auto flex flex-col items-center">
        {/* The list of countries remains the same */}
        <CountryList
          countries={countries}
          selectedCountryId={selectedCountryId}
          onCountrySelect={handleCountrySelect}
        />

        {/* --- MODIFIED SECTION --- */}
        {/* Conditionally render this block only if a country has been selected. */}
        {selectedCountry && (
          <div className="mt-8 p-6 bg-white rounded-xl shadow-lg flex flex-col items-center w-full max-w-sm">
            <p className="text-lg text-gray-600 mb-3">You have selected:</p>
            <div className="flex items-center gap-4">
              <img
                // The path logic is the same as in CountryItem.js
                src={`flags/${selectedCountry.flag}`}
                alt={`${selectedCountry.name} flag`}
                className="w-12 h-auto rounded-md shadow-sm"
              />
              <span className="text-2xl font-bold text-gray-800">
                {selectedCountry.name}
              </span>
            </div>
          </div>
        )}
        {/* --- END OF MODIFIED SECTION --- */}

      </main>
    </div>
  );
}

export default App;