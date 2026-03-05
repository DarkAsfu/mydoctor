import React from 'react';
import { Handshake } from 'lucide-react';

const partners = [
  {
    name: 'Square Hospital',
    city: 'Dhaka',
    logo: '/hospitals/square%20hospital.webp',
    logoPosition: 'center center',
    logoZoom: 1.15,
  },
  {
    name: 'Evercare Hospital Dhaka',
    city: 'Dhaka',
    logo: '/hospitals/evercare.webp',
    logoPosition: 'center center',
    logoZoom: 1.1,
  },
  {
    name: 'United Hospital',
    city: 'Dhaka',
    logo: '/hospitals/united%20hospital.png',
    logoPosition: 'center center',
    logoZoom: 1.2,
  },
  {
    name: 'Labaid Specialized Hospital',
    city: 'Dhaka',
    logo: '/hospitals/labaid.png',
    logoPosition: 'center center',
    logoZoom: 1.15,
  },
  {
    name: 'Asgar Ali Hospital',
    city: 'Dhaka',
    logo: '/hospitals/ibn%20sine.png',
    logoPosition: 'center center',
    logoZoom: 1.2,
  },
  {
    name: 'CMOSHMC',
    city: 'Chattogram',
    logo: '/hospitals/birdem%20general%20hospital.png',
    logoPosition: 'center center',
    logoZoom: 1.2,
  },
];

export const PartnerHospitalsSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Handshake size={14} /> Trusted Network
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
            Our Partner Hospitals
          </h2>
          <p className="text-neutral-600 text-lg">
            We collaborate with top hospitals across Bangladesh to ensure quality care and faster access.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner, index) => (
            <article
              key={index}
              className="bg-teal-50/40 border border-teal-100 rounded-2xl p-4 text-center hover:shadow-md transition-shadow">
              <div className="h-16 bg-white rounded-xl border border-teal-100 p-2 mb-3 overflow-hidden">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-full h-full object-contain"
                  style={{
                    objectPosition: partner.logoPosition,
                    transform: `scale(${partner.logoZoom || 1})`,
                    transformOrigin: partner.logoPosition,
                  }}
                />
              </div>
              <h3 className="text-sm font-semibold text-neutral-900 leading-tight">{partner.name}</h3>
              <p className="text-xs text-neutral-600 mt-1">{partner.city}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
