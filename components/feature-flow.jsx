import React from 'react'
import {
  CalendarCheck2,
  FlaskConical,
  Globe2,
  HeartPulse,
  Pill,
  Stethoscope,
} from 'lucide-react';
import { Carousel, SliderContainer, Slider } from '@/components/carousel';

const items = [
  {
    icon: CalendarCheck2,
    title: 'Doctor Appointment',
    desc: 'Book specialist appointments in a few clicks.',
  },
  {
    icon: Stethoscope,
    title: 'Treatment Packages',
    desc: 'Compare and choose curated treatment plans.',
  },
  {
    icon: HeartPulse,
    title: 'Gyne & Fertility Care',
    desc: 'Specialized support for women health and fertility.',
  },
  {
    icon: FlaskConical,
    title: 'Diagnostic Tests',
    desc: 'Get trusted lab tests from partner centers.',
  },
  {
    icon: Globe2,
    title: 'International Treatment & Travel Card',
    desc: 'Complete overseas treatment and travel assistance.',
  },
  {
    icon: Pill,
    title: 'Order Medicine',
    desc: 'Place medicine orders with fast doorstep delivery.',
  },
]

const serviceImages = [
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1400&auto=format&fit=crop',
];

export const FeatureFlow = () => {
  return (
    <section className="pb-20 px-4 bg-white overflow-hidden font-manrope relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-teal-700">
            Healthcare Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
            Search, compare and start your care journey
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600 md:mx-0 md:text-base">
            Left side shows your key service categories and right side highlights service visuals in an auto-playing carousel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item) => (
              <FlowCard key={item.title} {...item} />
            ))}
          </div>

          <div className="max-h-max rounded-3xl border border-teal-100 bg-white shadow-lg overflow-hidden">
            <Carousel
              options={{ align: 'start', loop: true }}
              autoPlay
              autoPlayDelay={2800}
              className="max-h-max">
              <SliderContainer className="max-h-max gap-0">
                {serviceImages.map((image, idx) => (
                  <Slider key={image} className="basis-full max-h-max">
                    <div className="relative w-full overflow-hidden">
                      <img
                        src={image}
                        alt={`Service visual ${idx + 1}`}
                        className="max-h-max w-full object-cover"
                      />
                    </div>
                  </Slider>
                ))}
              </SliderContainer>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

const FlowCard = ({
  icon: Icon,
  title,
  desc
}) => (
  <div className="bg-teal-50/40 border border-teal-100 p-5 rounded-2xl flex flex-col gap-4 hover:bg-teal-700 group transition-colors duration-300 h-full">
    <div className="size-10 shrink-0 flex items-center justify-center text-teal-600 group-hover:text-teal-100">
      <Icon className="size-7" />
    </div>
    <div className="space-y-2">
      <h3 className="text-base md:text-lg font-semibold text-neutral-900 group-hover:text-white tracking-tight">
        {title}
      </h3>
      {/* <p className="text-neutral-600 text-sm group-hover:text-stone-300 leading-relaxed text-pretty">
        {desc}
      </p> */}
    </div>
  </div>
)
