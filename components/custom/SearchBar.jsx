import React, { useState } from 'react';
import { Search } from 'lucide-react';

const doctorDepartments = [
  'Cardiology',
  'Neurology',
  'Orthopedics',
  'Gynecology',
  'Dermatology',
  'Pediatrics',
];

const packageDepartments = [
  'Cardiac Care Package',
  'Women Wellness Package',
  'Diabetes Care Package',
  'Executive Health Checkup',
  'Fertility Care Package',
];

const doctorCountries = ['Bangladesh', 'India', 'Thailand', 'Singapore', 'Malaysia'];
const packageCountries = ['Bangladesh', 'India', 'Thailand', 'Turkey', 'UAE'];

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState('doctors');
  const isDoctorsTab = activeTab === 'doctors';

  return (
    <form className="w-full max-w-5xl mb-10" role="search">
      <div className="bg-white rounded-2xl p-4 border border-teal-200 shadow-lg">
        {/* <p className="text-sm md:text-base font-bold tracking-wide text-teal-800 mb-3 uppercase">
          Search For Doctors & Treatment Packages
        </p> */}

        <div className="inline-flex rounded-xl bg-teal-50 p-1 mb-4">
          <button
            type="button"
            onClick={() => setActiveTab('doctors')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              activeTab === 'doctors'
                ? 'bg-teal-600 text-white'
                : 'text-teal-800 hover:bg-teal-100'
            }`}>
            Doctors
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('packages')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              activeTab === 'packages'
                ? 'bg-teal-600 text-white'
                : 'text-teal-800 hover:bg-teal-100'
            }`}>
            Treatment Packages
          </button>
        </div>

        <div className={`grid grid-cols-1 gap-3 items-stretch ${isDoctorsTab ? 'md:grid-cols-4' : 'md:grid-cols-5'}`}>
          <select className={`px-3 py-3 rounded-xl bg-teal-50 text-teal-800 text-sm md:text-base outline-none border border-teal-100 ${isDoctorsTab ? '' : 'md:col-span-2'}`}>
            <option>{isDoctorsTab ? 'DEPARTMENT' : 'SELECT DEPARTMENT'}</option>
            {(isDoctorsTab ? doctorDepartments : packageDepartments).map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>

          <select className={`px-3 py-3 rounded-xl bg-teal-50 text-teal-800 text-sm md:text-base outline-none border border-teal-100 ${isDoctorsTab ? '' : 'md:col-span-2'}`}>
            <option>{isDoctorsTab ? 'COUNTRY' : 'SELECT COUNTRY'}</option>
            {(isDoctorsTab ? doctorCountries : packageCountries).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>

          {isDoctorsTab && (
            <input
              type="text"
              placeholder="DISTRICT/STATE"
              className="px-3 py-3 rounded-xl bg-teal-50 text-teal-800 text-sm md:text-base outline-none border border-teal-100 placeholder:text-teal-700"
              aria-label="District or state"
            />
          )}

          <button
            type="submit"
            className={`cursor-pointer bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition inline-flex items-center justify-center gap-2 ${isDoctorsTab ? '' : 'md:col-span-1'}`}>
            <Search size={18} /> Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
