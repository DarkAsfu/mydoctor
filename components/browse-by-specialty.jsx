import React from 'react';
import Image from 'next/image';

const specialties = [
  { title: 'Cardiology', doctors: '2,500+ Doctors', image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Dermatology', doctors: '1,800+ Doctors', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Orthopedics', doctors: '2,100+ Doctors', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Neurology', doctors: '1,200+ Doctors', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Pediatrics', doctors: '3,200+ Doctors', image: 'https://images.unsplash.com/photo-1576765608622-067973a79f53?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Gynecology', doctors: '2,800+ Doctors', image: 'https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { title: 'Ophthalmology', doctors: '1,500+ Doctors', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Dentistry', doctors: '4,000+ Doctors', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Psychiatry', doctors: '900+ Doctors', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop' },
  { title: 'ENT', doctors: '1,100+ Doctors', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Gastrology', doctors: '1,400+ Doctors', image: 'https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=1200&auto=format&fit=crop' },
  { title: 'General Medicine', doctors: '5,000+ Doctors', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop' },
];

export const BrowseBySpecialty = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
            Browse by Specialty
          </h2>
          <p className="text-neutral-600 text-lg">
            Find the right specialist for your health needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((item, index) => {
            return (
              <article
                key={index}
                className="group rounded-2xl border border-teal-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-teal-300">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={700}
                    className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-teal-900/20 to-transparent" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-1 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-sm font-medium mb-3">
                  {item.doctors}
                </p>
                <button
                  type="button"
                  className="rounded-full border border-teal-200 px-3 py-1.5 text-xs font-semibold text-teal-700 transition hover:bg-teal-50">
                  View Specialists
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  );
};
