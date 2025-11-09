import React from 'react';

// A presentational component for a single country in the list.
const CountryItem = ({ country, isSelected, onSelect }) => {
  // Construct the path to the flag image in the public folder.
  const flagPath = `public/flags/${country.flag}`;

  // Dynamically set CSS classes based on the `isSelected` prop.
  const itemClasses = `
    flex 
    items-center 
    p-4 
    border-b 
    border-gray-200 
    cursor-pointer 
    transition-colors 
    duration-200 
    ease-in-out
    rounded-lg
    ${isSelected ? 'bg-blue-500 text-white shadow-md' : 'hover:bg-gray-100'}
  `;

  return (
    <li className={itemClasses} onClick={() => onSelect(country.id)}>
      <img src={flagPath} alt={`${country.name} flag`} className="w-10 h-auto mr-4 rounded" />
      <span className="text-lg font-medium">{country.name}</span>
    </li>
  );
};

export default CountryItem;