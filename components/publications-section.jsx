import React from 'react';

const publications = [
  {
    title: 'Advances In Preventive Cardiac Screening',
    date: '12 Mar 2026',
    summary:
      'A concise overview of modern cardiac screening strategies for earlier detection and stronger long-term outcomes.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Women’s Health Research And Fertility Insights',
    date: '28 Feb 2026',
    summary:
      'Recent findings on fertility planning, hormonal health, and coordinated care pathways for women’s wellness.',
    image:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Digital Care Models In Modern Hospitals',
    date: '09 Feb 2026',
    summary:
      'How digital tools, telemedicine, and connected workflows are improving patient support across healthcare systems.',
    image:
      'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

export const PublicationsSection = () => {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:text-left">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-teal-700">
            Research & News
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Publications
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600 md:mx-0 md:text-base">
            Explore medical articles, research highlights, and healthcare updates from our network.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {publications.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-teal-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-teal-200"
            >
              <div className="overflow-hidden bg-teal-50/40">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-5">
                <p className="inline-flex rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
                  {item.date}
                </p>

                <h3 className="mt-4 text-xl font-bold tracking-tight text-neutral-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {item.summary}
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