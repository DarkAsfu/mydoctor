import React from 'react';
import {
  ArrowRight,
  Baby,
  CircleHelp,
  Mars,
  Sparkles,
} from 'lucide-react';

const GyneFertilityCareBox = () => {
    const careItems = [
        {
            title: 'IUI',
            desc: 'Intrauterine insemination support with expert guidance.',
            icon: Sparkles,
        },
        {
            title: 'IVF',
            desc: 'Comprehensive IVF planning, monitoring, and counseling.',
            icon: Baby,
        },
        {
            title: 'Male Infertility',
            desc: 'Advanced evaluation and treatment pathways for men.',
            icon: Mars,
        },
        {
            title: 'PCOS/PCOD',
            desc: 'Personalized hormonal and lifestyle management care.',
            icon: CircleHelp,
        },
    ];

    return (
        <section className="px-4 py-16 bg-white">
            <div className="max-w-7xl mx-auto rounded-3xl border border-teal-100 bg-linear-to-br from-teal-50/70 via-white to-teal-50/30 p-6 md:p-8 shadow-sm">
                <div className="mb-10 text-center md:text-left">
                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-700 mb-2">
                            Our Services
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                            Gyne & Fertility Care
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600 md:mx-0 md:text-base">
                            Explore trusted fertility-focused services in one place with a clear,
                            supportive and modern care experience.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {careItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <article
                                key={item.title}
                                className="rounded-2xl border border-teal-100 bg-white p-4 md:p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-teal-300">
                                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                                    <Icon size={18} />
                                </div>
                                <h3 className="text-lg font-bold text-neutral-900 tracking-tight mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-neutral-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </article>
                        );
                    })}

                    <button
                        type="button"
                        className="rounded-2xl border border-teal-200 bg-teal-600/95 p-4 md:p-5 text-left text-white transition-all duration-300 hover:bg-teal-700 hover:shadow-md flex flex-col justify-between">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                            <ArrowRight size={18} />
                        </span>
                        <div>
                            <p className="text-lg font-bold tracking-tight">View All</p>
                            <p className="text-sm text-teal-50 mt-1">Explore all fertility-related services</p>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GyneFertilityCareBox;