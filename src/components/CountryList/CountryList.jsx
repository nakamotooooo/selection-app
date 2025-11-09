import React from 'react';
import CountryItem from '../CountryItem/CountryItem';

// A container component that renders a list of CountryItem components.
const CountryList = ({ countries, selectedCountryId, onCountrySelect }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 w-full max-w-sm">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Select a Country</h2>
      <ul className="space-y-2">
        {countries.map((country) => (
          <CountryItem
            key={country.id}
            country={country}
            isSelected={country.id === selectedCountryId}
            onSelect={onCountrySelect}
          />
        ))}
      </ul>
    </div>
  );
};

export default CountryList;