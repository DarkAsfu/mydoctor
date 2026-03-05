import React from 'react';
import { HandHeart, WalletCards, ShieldPlus, Ambulance } from 'lucide-react';

const supports = [
  {
    icon: WalletCards,
    title: 'Financial Aid Program',
    desc: 'Apply for discounted consultation, tests, and treatment support for low-income families.',
  },
  {
    icon: ShieldPlus,
    title: 'Free Health Camps',
    desc: 'Join community screening camps with free checkups and specialist guidance.',
  },
  {
    icon: Ambulance,
    title: 'Emergency Help Desk',
    desc: 'Priority support for urgent cases with 24/7 coordination and referrals.',
  },
];

export const NeedySupportSection = () => {
  return (
    <section className="pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl border border-teal-100 bg-linear-to-br from-teal-50 to-white p-6 md:p-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <HandHeart size={14} /> Support for Needy Patients
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
              Healthcare support for those who need it most
            </h2>
            <p className="text-neutral-600 text-lg">
              We provide care access programs to help underserved patients with treatment, diagnostics, and emergency needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {supports.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={index}
                  className="group relative overflow-hidden bg-white border border-teal-100 rounded-2xl p-6 hover:shadow-xl hover:shadow-teal-100/60 hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute -right-10 -top-10 w-24 h-24 rounded-full bg-teal-100/40" />

                  <div className="size-12 rounded-xl bg-teal-100 text-teal-700 group-hover:bg-teal-600 group-hover:text-white flex items-center justify-center mb-5 transition-colors">
                    <Icon size={22} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-2">
                    Support Option {index + 1}
                  </p>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{item.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
                </article>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="cursor-pointer bg-teal-600 text-white hover:bg-teal-700 px-6 py-3 rounded-xl font-semibold transition">
              Apply for Support
            </button>
            <button className="cursor-pointer bg-white text-teal-700 border border-teal-200 hover:bg-teal-50 px-6 py-3 rounded-xl font-semibold transition">
              Talk to Support Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
