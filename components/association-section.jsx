import React from 'react';

const associations = [
  { name: 'MediCare Network', logo: '/association/logo-1.svg' },
  { name: 'Global Health Council', logo: '/association/logo-2.svg' },
  { name: 'Prime Hospital Group', logo: '/association/logo-3.svg' },
  { name: 'Wellness Partners', logo: '/association/logo-4.svg' },
  { name: 'Asian Medical Alliance', logo: '/association/logo-5.svg' },
  { name: 'United Diagnostics', logo: '/association/logo-6.svg' },
  { name: 'CareBridge Foundation', logo: '/association/logo-7.svg' },
  { name: 'International Clinic Board', logo: '/association/logo-8.svg' },
  { name: 'City Specialist Network', logo: '/association/logo-9.svg' },
  { name: 'HealthTrust Partners', logo: '/association/logo-10.svg' },
];

export const AssociationSection = () => {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:text-left">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-teal-700">
            Partnerships
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            In Association With
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600 md:mx-0 md:text-base">
            We work with trusted hospitals and healthcare organizations to deliver reliable care support.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
          {associations.map((item) => (
            <article
              key={item.name}
              className="group flex h-24 items-center justify-center rounded-2xl border border-teal-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-md"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="h-10 w-full object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
