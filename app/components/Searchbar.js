'use client';
import { useState } from 'react';

export default function SearchBar({ placeholder = 'Search...', onSearch, value }) {
  const [searchTerm, setSearchTerm] = useState(value || '');
  console.log('searchTerm', searchTerm);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
      onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl flex items-center p-2">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className="border rounded p-2 mr-2 w-full text-black"
      />
      <button
        type="submit"
        className="primary-btn"
      >
        Search
      </button>
    </form>
  );
}