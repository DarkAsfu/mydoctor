'use client';

import React, { useState } from 'react';
import { Star, CalendarCheck, Globe, ChevronDown, ArrowRight } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Ananya Sharma',
    specialty: 'Cardiology',
    degree: 'MBBS, MD (Cardiology)',
    experience: '12 Years',
    rating: 4.9,
    reviews: 312,
    country: 'India',
    availability: 'Available Today',
    image: 'https://i.pravatar.cc/200?img=47',
  },
  {
    name: 'Dr. Rohan Mehta',
    specialty: 'Dermatology',
    degree: 'MBBS, MD (Dermatology)',
    experience: '10 Years',
    rating: 4.8,
    reviews: 274,
    country: 'India',
    availability: 'Available Tomorrow',
    image: 'https://i.pravatar.cc/200?img=12',
  },
  {
    name: 'Dr. Priya Nair',
    specialty: 'Pediatrics',
    degree: 'MBBS, DCH, MD',
    experience: '9 Years',
    rating: 4.9,
    reviews: 410,
    country: 'Singapore',
    availability: 'Available Today',
    image: 'https://i.pravatar.cc/200?img=5',
  },
  {
    name: 'Dr. Vikram Rao',
    specialty: 'Orthopedics',
    degree: 'MBBS, MS (Ortho)',
    experience: '14 Years',
    rating: 4.7,
    reviews: 198,
    country: 'UAE',
    availability: 'Available This Week',
    image: 'https://i.pravatar.cc/200?img=15',
  },
  {
    name: 'Dr. Sarah Al-Hassan',
    specialty: 'Gynecology',
    degree: 'MBBS, MRCOG',
    experience: '11 Years',
    rating: 4.8,
    reviews: 286,
    country: 'UAE',
    availability: 'Available Today',
    image: 'https://i.pravatar.cc/200?img=44',
  },
  {
    name: 'Dr. Chen Wei',
    specialty: 'Neurology',
    degree: 'MBBS, DM (Neurology)',
    experience: '16 Years',
    rating: 4.9,
    reviews: 341,
    country: 'Singapore',
    availability: 'Available Tomorrow',
    image: 'https://i.pravatar.cc/200?img=67',
  },
  {
    name: 'Dr. Omar Faruk',
    specialty: 'Cardiology',
    degree: 'MBBS, FCPS (Cardiology)',
    experience: '8 Years',
    rating: 4.6,
    reviews: 122,
    country: 'Bangladesh',
    availability: 'Available Today',
    image: 'https://i.pravatar.cc/200?img=33',
  },
  {
    name: 'Dr. Lisa Müller',
    specialty: 'Dermatology',
    degree: 'MD, PhD (Dermatology)',
    experience: '13 Years',
    rating: 4.8,
    reviews: 257,
    country: 'Germany',
    availability: 'Available This Week',
    image: 'https://i.pravatar.cc/200?img=9',
  },
];

const departments = ['All Departments', 'Cardiology', 'Dermatology', 'Pediatrics', 'Orthopedics', 'Gynecology', 'Neurology'];
const countries = ['All Countries', 'India', 'Singapore', 'UAE', 'Bangladesh', 'Germany'];

const availabilityColor = {
  'Available Today': 'bg-emerald-500',
  'Available Tomorrow': 'bg-amber-400',
  'Available This Week': 'bg-sky-400',
};

const INITIAL_COUNT = 4;

export const TopDoctorsSection = () => {
  const [department, setDepartment] = useState('All Departments');
  const [country, setCountry] = useState('All Countries');
  const [showAll, setShowAll] = useState(false);

  const filtered = doctors.filter((d) => {
    const deptMatch = department === 'All Departments' || d.specialty === department;
    const countryMatch = country === 'All Countries' || d.country === country;
    return deptMatch && countryMatch;
  });

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT;

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-700 mb-2">
              Medical Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-2">
              Our Top Doctors
            </h2>
            <p className="text-neutral-500 text-sm md:text-base max-w-xl">
              Find experienced specialists by department and country. Book a consultation in minutes.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <div className="relative">
              <select
                value={department}
                onChange={(e) => { setDepartment(e.target.value); setShowAll(false); }}
                className="appearance-none w-full sm:w-48 rounded-xl border border-teal-200 bg-white px-4 py-2.5 pr-9 text-sm text-neutral-700 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 cursor-pointer">
                {departments.map((d) => <option key={d}>{d}</option>)}
              </select>
              <ChevronDown size={15} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            </div>
            <div className="relative">
              <select
                value={country}
                onChange={(e) => { setCountry(e.target.value); setShowAll(false); }}
                className="appearance-none w-full sm:w-40 rounded-xl border border-teal-200 bg-white px-4 py-2.5 pr-9 text-sm text-neutral-700 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 cursor-pointer">
                {countries.map((c) => <option key={c}>{c}</option>)}
              </select>
              <ChevronDown size={15} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            </div>
          </div>
        </div>

        {/* Doctor grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-neutral-400 text-sm">
            No doctors found for the selected filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {visible.map((doctor) => (
              <article
                key={doctor.name}
                className="group rounded-2xl border border-teal-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-teal-200 overflow-hidden">

                {/* Card top band */}
                <div className="relative bg-linear-to-br from-teal-50 to-teal-100/60 pt-7 pb-4 px-5 flex flex-col items-center">
                  {/* Availability badge */}
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white border border-neutral-100 px-2.5 py-1 text-[10px] font-semibold text-neutral-600 shadow-sm">
                    <span className={`size-1.5 rounded-full ${availabilityColor[doctor.availability] ?? 'bg-neutral-400'}`} />
                    {doctor.availability}
                  </span>
                  {/* Avatar */}
                  <div className="size-20 rounded-full overflow-hidden ring-4 ring-white shadow-md mb-3">
                    <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                  </div>
                  {/* Rating */}
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-500">
                    <Star size={12} className="fill-amber-400 text-amber-400" />
                    {doctor.rating}
                    <span className="text-neutral-400 font-normal">({doctor.reviews})</span>
                  </span>
                </div>

                {/* Card body */}
                <div className="px-5 py-4">
                  <h3 className="text-base font-bold text-neutral-900 tracking-tight mb-0.5">{doctor.name}</h3>
                  <p className="text-teal-700 text-sm font-semibold mb-1">{doctor.specialty}</p>
                  <p className="text-neutral-500 text-xs mb-1">{doctor.degree}</p>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-4">
                    <Globe size={11} className="text-teal-500 shrink-0" />
                    {doctor.country} &middot; {doctor.experience} Exp.
                  </div>

                  <button
                    type="button"
                    className="w-full cursor-pointer rounded-xl bg-teal-600 hover:bg-teal-700 text-white py-2.5 text-sm font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-2">
                    <CalendarCheck size={14} />
                    Book Now
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* View all / Show less */}
        <div className="flex justify-center mt-10">
          {hasMore && (
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 cursor-pointer rounded-xl border border-teal-200 bg-white px-6 py-3 text-sm font-semibold text-teal-700 shadow-sm transition hover:bg-teal-50 hover:border-teal-300">
              {showAll ? 'Show Less' : `View All Doctors (${filtered.length})`}
              <ArrowRight size={15} className={`transition-transform duration-200 ${showAll ? 'rotate-180' : ''}`} />
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
