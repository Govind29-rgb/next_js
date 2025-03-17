'use client';
import { useState, useEffect } from 'react';
import { Search, X } from "lucide-react"; // Fixed import from lucide-react

const SearchForm = ({ query = '' }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (query) {
      setSearchQuery(query);
    }
  }, [query]);

  const handleReset = () => {
    setSearchQuery('');
  };

  return (
    <form action="/" method="GET" className="search-form mt-4">
      <div className="relative flex items-center">
        <input 
          type="text" 
          placeholder="Search Startups" 
          name="query"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white text-gray-800 px-6 py-3 pl-12 rounded-full border-2 border-white focus:outline-none font-medium text-lg"
        />
        
        {/* Search icon at the left */}
        <Search className="absolute left-4 text-gray-400" size={20} />
        
        {/* Search button */}
        <button 
          type="submit" 
          className="absolute right-1 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center"
          aria-label="Search"
        >
          <Search size={18} />
        </button>
        
        {/* Reset button with X icon - only visible when there's text */}
        {isMounted && searchQuery && (
          <button 
            type="button" 
            onClick={handleReset}
            className="absolute right-14 text-gray-500 hover:text-black"
            aria-label="Reset search"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchForm;
