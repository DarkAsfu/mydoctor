import React from 'react';

const events = [
  {
    title: 'International Cardiology Summit 2026',
    date: '18 Apr 2026',
    description:
      'Join leading heart specialists for evidence-based discussions on diagnostics, intervention, and patient recovery.',
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Women’s Health & Fertility Forum',
    date: '02 May 2026',
    description:
      'A focused event covering fertility planning, gynecologic care, and holistic support for women at every stage.',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Digital Health & Patient Care Expo',
    date: '21 May 2026',
    description:
      'Explore modern healthcare delivery, telemedicine workflows, and connected care tools shaping patient experience.',
    image:
      'https://images.pexels.com/photos/7089398/pexels-photo-7089398.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

export const EventsSection = () => {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:text-left">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-teal-700">
            Community & Updates
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Events
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600 md:mx-0 md:text-base">
            Discover upcoming and recent medical events, forums, and healthcare knowledge sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.title}
              className="group overflow-hidden rounded-3xl border border-teal-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-teal-200"
            >
              <div className="overflow-hidden border-b border-teal-50 bg-teal-50/40">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-5">
                <p className="inline-flex rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
                  {event.date}
                </p>

                <h3 className="mt-4 text-xl font-bold tracking-tight text-neutral-900">
                  {event.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {event.description}
                </p>

                <button
                  type="button"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-teal-700 transition-colors duration-200 hover:text-teal-800"
                >
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};