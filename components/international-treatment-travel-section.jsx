import React from 'react';
import { ArrowRight } from 'lucide-react';

const cards = [
  {
    title: 'International Treatment',
    description:
      'Get treatment abroad with trusted partner hospitals and guided support for appointments and care planning.',
    image:
      'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1600&auto=format&fit=crop',
    cta: 'Learn More',
  },
  {
    title: 'Travel Card',
    description:
      'Access medical travel assistance, documentation guidance, and smoother support for international journeys.',
    image:
      'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1600&auto=format&fit=crop',
    cta: 'Learn More',
  },
];

export const InternationalTreatmentTravelSection = () => {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:text-left">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-teal-700">
            International Care
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            International Treatment & Travel Card
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-neutral-600 md:mx-0 md:text-base">
            Explore simple international care services for treatment abroad and medical travel support.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group relative overflow-hidden rounded-3xl shadow-sm"
            >
              <div
                className="min-h-80 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                style={{ backgroundImage: `url(${card.image})` }}
              />

              <div className="absolute inset-0 bg-linear-to-t from-neutral-950/85 via-neutral-900/35 to-neutral-900/10 transition-all duration-300 group-hover:from-neutral-950/75 group-hover:via-neutral-900/25" />

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <div className="max-w-md">
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/85 md:text-base">
                    {card.description}
                  </p>

                  <button
                    type="button"
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  >
                    {card.cta}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
