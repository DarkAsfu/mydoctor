import React from 'react'
import {
  Target,
  Mail,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Shield,
  Users,
  Clock,
  Waypoints,
  Lightbulb,
} from 'lucide-react';
import { Carousel, SliderContainer, Slider, SliderPrevButton, SliderNextButton } from '@/components/carousel';

const items = [
  {
    icon: Target,
    title: 'Book Appointment',
    desc: 'Schedule in-person consultations with top doctors near you.',
  },
  {
    icon: Mail,
    title: 'Video Consultation',
    desc: 'Consult doctors online from the comfort of your home.',
  },
  {
    icon: Waypoints,
    title: 'Talk to Expert',
    desc: 'Get free medical advice from our healthcare experts.',
  },
  {
    icon: Lightbulb,
    title: 'Book Lab Tests',
    desc: 'Book diagnostic tests with home sample collection.',
  },
  {
    icon: BarChart3,
    title: 'Order Medicines',
    desc: 'Get medicines delivered to your doorstep.',
  },
  {
    icon: Shield,
    title: 'Treatment Cost',
    desc: 'Compare treatment costs across hospitals.',
  },
  {
    icon: Users,
    title: 'Health Packages',
    desc: 'Comprehensive health checkup packages.',
  },
  {
    icon: Clock,
    title: 'Emergency Care',
    desc: '24/7 emergency services and ambulance booking.',
  },
]

export const FeatureFlow = () => {
  return (
    <section className="pb-20 px-6 bg-white overflow-hidden font-manrope relative">
      <div className="max-w-7xl mx-auto">
        <Carousel options={{ align: 'start', loop: false }}>
          <div
            className="flex flex-col items-center mb-16 gap-8 text-center">
            <div className="max-w-2xl mx-auto">
              <span
                className="px-3 py-1 bg-teal-50 text-teal-600 text-[10px] font-bold uppercase tracking-widest rounded mb-6 inline-block">
                Healthcare Services
              </span>
              <h2
                className="text-5xl font-bold text-neutral-900 mb-6 tracking-tight text-balance">
                Complete care, all in one place
              </h2>
              <p className="text-neutral-600 text-lg text-pretty">
                Access trusted doctors, diagnostics, medicines, and emergency
                help through one seamless healthcare platform.
              </p>
            </div>

            <div className="w-full flex justify-end">
              {/* <SliderSnapDisplay className="text-sm" /> */}
              <div className="flex gap-4">
                <SliderPrevButton
                  className="size-12 rounded-full border disabled:opacity-40 cursor-pointer backdrop-blur-lg border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
                  aria-label="Previous">
                  <ChevronLeft className="size-5 text-teal-600" />
                </SliderPrevButton>
                <SliderNextButton
                  className="size-12 rounded-full disabled:opacity-40 cursor-pointer border backdrop-blur-lg border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
                  aria-label="Next">
                  <ChevronRight className="size-5 text-teal-600" />
                </SliderNextButton>
              </div>
            </div>
          </div>

          <SliderContainer className="gap-6">
            {items.map((item, i) => (
              <Slider key={i} className="basis-full md:basis-1/3 lg:basis-1/4">
                <FlowCard {...item} />
              </Slider>
            ))}
          </SliderContainer>
        </Carousel>
      </div>
    </section>
  );
}

const FlowCard = ({
  icon: Icon,
  title,
  desc
}) => (
  <div
    className="bg-teal-50/40 border border-teal-100 p-8 rounded-2xl flex flex-col gap-10 hover:bg-teal-700 group transition-shadow duration-300 h-full">
    <div className="size-10 shrink-0 flex items-center justify-center text-teal-600 group-hover:text-teal-100 ">
      <Icon className="size-8" />
    </div>
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-neutral-900 group-hover:text-white tracking-tight">
        {title}
      </h3>
      <p className="text-neutral-600 text-sm group-hover:text-stone-300 leading-relaxed text-pretty">
        {desc}
      </p>
    </div>
  </div>
)
