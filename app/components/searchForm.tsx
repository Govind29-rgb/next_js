'use client';

const SearchForm = () => {
  return (
    <form action="/" method="GET" className="search-form">
      <input 
        type="text" 
        placeholder="Search..." 
        className="w-full bg-white text-black px-6 py-4 rounded-full border-2 border-black focus:outline-none"
      />
    </form>
  )
}

export default SearchForm

