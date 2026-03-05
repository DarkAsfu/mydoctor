import React from 'react';
import { Star, MapPin, Building2, PhoneCall, Clock3 } from 'lucide-react';

const hospitals = [
  {
    name: 'Square Hospital',
    location: 'Dhaka, Bangladesh',
    specialty: 'Multi-Specialty & Critical Care',
    rating: '4.8',
    beds: '500+ Beds',
    established: 'Established: 2006',
    emergency: '24/7 Emergency',
    hotline: '+880 2-8142431',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Evercare Hospital Dhaka',
    location: 'Dhaka, Bangladesh',
    specialty: 'International Standard Tertiary Care',
    rating: '4.7',
    beds: '425+ Beds',
    established: 'Established: 2005',
    emergency: '24/7 Emergency',
    hotline: '+880 96-66710678',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'United Hospital',
    location: 'Gulshan, Dhaka',
    specialty: 'Cardiac, Oncology & ICU Services',
    rating: '4.9',
    beds: '450+ Beds',
    established: 'Established: 2006',
    emergency: '24/7 Emergency',
    hotline: '+880 2-8836000',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Labaid Specialized Hospital',
    location: 'Dhanmondi, Dhaka',
    specialty: 'Cardiac & Super Specialized Care',
    rating: '4.6',
    beds: '300+ Beds',
    established: 'Established: 2004',
    emergency: '24/7 Emergency',
    hotline: '+880 17-66610000',
    image: 'https://images.unsplash.com/photo-1486825586573-7131f7991bdd?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Asgar Ali Hospital',
    location: 'Dhaka, Bangladesh',
    specialty: 'General & Advanced Surgical Services',
    rating: '4.5',
    beds: '250+ Beds',
    established: 'Established: 2015',
    emergency: '24/7 Emergency',
    hotline: '+880 9612-444444',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Chattogram Maa-O-Shishu Hospital',
    location: 'Chattogram, Bangladesh',
    specialty: 'Mother, Child & General Care',
    rating: '4.6',
    beds: '350+ Beds',
    established: 'Established: 1979',
    emergency: '24/7 Emergency',
    hotline: '+880 31-656917',
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format&fit=crop',
  },
];

export const TopHospitalsSection = () => {
  return (
    <section className="pb-8 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Building2 size={14} /> Bangladesh Hospitals
          </span> */}
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
            Top Hospitals
          </h2>
          <p className="text-neutral-600 text-lg">
            Explore trusted Bangladeshi hospitals with advanced facilities, expert specialists, and strong emergency support.
          </p>
        </div>

        <div className="rounded-3xl border border-teal-100 bg-linear-to-br from-teal-50/70 to-white p-4 md:p-6 space-y-3">
          <div className="space-y-3">
            {hospitals.map((hospital, index) => (
              <article
                key={index}
                className="bg-white border border-teal-100 rounded-2xl overflow-hidden grid grid-cols-1 sm:grid-cols-[auto_auto_1fr_auto] items-stretch gap-0 hover:shadow-sm transition-shadow duration-300">
                <div className="size-9 rounded-full bg-teal-100 text-teal-700 text-sm font-bold flex items-center justify-center shrink-0 self-center m-4 sm:m-5">
                  {index + 1}
                </div>

                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="w-full h-28 sm:h-full sm:w-28 object-cover shrink-0"
                />

                <div className="min-w-0 py-4 sm:py-5 px-3 sm:px-4">
                  <h3 className="text-base font-bold text-neutral-900 sm:truncate">{hospital.name}</h3>
                  <p className="text-teal-700 text-sm font-medium sm:truncate">{hospital.specialty}</p>
                  <p className="text-neutral-600 text-xs inline-flex items-center gap-1 mt-1 flex-wrap">
                    <MapPin size={12} /> {hospital.location}
                  </p>
                  <p className="text-neutral-600 text-xs mt-1">{hospital.established}</p>
                  <p className="text-neutral-600 text-xs inline-flex items-center gap-1 mt-1 flex-wrap">
                    <PhoneCall size={12} /> {hospital.hotline}
                  </p>
                  <p className="text-neutral-600 text-xs inline-flex items-center gap-1 mt-1 flex-wrap">
                    <Clock3 size={12} /> {hospital.emergency}
                  </p>
                </div>

                <div className="text-left sm:text-right shrink-0 py-4 sm:py-5 px-3 sm:px-4 sm:border-l sm:border-teal-100 self-center">
                  <p className="inline-flex items-center gap-1 text-amber-500 font-semibold text-sm">
                    <Star size={14} className="fill-amber-500" /> {hospital.rating}
                  </p>
                  <p className="text-neutral-600 text-xs mt-1">{hospital.beds}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button className="cursor-pointer bg-teal-600 text-white hover:bg-teal-700 px-7 py-3 rounded-xl font-semibold transition">
            See All Hospitals
          </button>
        </div>
      </div>
    </section>
  );
};
