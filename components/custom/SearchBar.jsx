import React from 'react';
import { MapPin, Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <form className="w-full max-w-4xl mb-10" role="search">
      <div className="flex flex-col sm:flex-row items-stretch gap-3 bg-white rounded-2xl p-3 border border-teal-200 shadow-lg">
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-teal-50 text-teal-800 w-full sm:w-1/3">
          <MapPin size={18} />
          <input
            type="text"
            placeholder="Location"
            className="w-full bg-transparent outline-none text-sm md:text-base placeholder:text-teal-700"
            aria-label="Search by location"
          />
        </div>
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-teal-50 text-teal-800 w-full sm:w-2/3">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search doctors, hospitals, specialties..."
            className="w-full bg-transparent outline-none text-sm md:text-base placeholder:text-teal-700"
            aria-label="Search doctors or services"
          />
        </div>
        <button
          type="submit"
          className="cursor-pointer bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
