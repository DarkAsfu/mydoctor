import React from 'react';
import { ChevronLeft, ChevronRight, TicketPercent } from 'lucide-react';
import {
  Carousel,
  SliderContainer,
  Slider,
  SliderPrevButton,
  SliderNextButton,
} from '@/components/carousel';

const promotions = [
  {
    label: 'Limited Offer',
    title: 'Get 25% Off on Full Body Checkup',
    desc: 'Book complete health screening packages at discounted rates this week.',
    cta: 'Book Health Package',
    code: 'HEALTH25',
    image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=1200&auto=format&fit=crop',
    imagePosition: 'center 35%',
    imageZoom: 1.15,
  },
  {
    label: 'Online Consult',
    title: 'Flat ৳300 Video Consultation',
    desc: 'Consult verified specialists online from home at a reduced consultation fee.',
    cta: 'Start Video Consult',
    code: 'VIDEO300',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    imagePosition: 'center center',
    imageZoom: 1.1,
  },
  {
    label: 'Lab Tests',
    title: 'Free Home Sample Collection',
    desc: 'Book diagnostic tests and get free home sample collection in selected cities.',
    cta: 'Book Lab Test',
    code: 'HOMEFREE',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop',
    imagePosition: 'center 45%',
    imageZoom: 1.2,
  },
  {
    label: 'Medicine Deal',
    title: 'Up to 20% Off on Medicines',
    desc: 'Save more on monthly medicine orders with fast doorstep delivery.',
    cta: 'Order Medicines',
    code: 'MED20',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1200&auto=format&fit=crop',
    imagePosition: 'center center',
    imageZoom: 1.12,
  },
];

export const PromotionalSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-teal-700">
            Special Offers
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
            Promotions & Offers
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600 md:mx-0 md:text-base">
            Save more on consultations, health packages, lab tests, and medicines.
          </p>
        </div>

        <Carousel options={{ align: 'start', loop: true }} autoPlay autoPlayDelay={4000}>
          {/* <div className="flex justify-end gap-3 mb-6">
            <SliderPrevButton
              className="size-11 rounded-full border border-teal-200 bg-white text-teal-700 hover:bg-teal-50 flex items-center justify-center cursor-pointer"
              aria-label="Previous promotion">
              <ChevronLeft size={18} />
            </SliderPrevButton>
            <SliderNextButton
              className="size-11 rounded-full border border-teal-200 bg-white text-teal-700 hover:bg-teal-50 flex items-center justify-center cursor-pointer"
              aria-label="Next promotion">
              <ChevronRight size={18} />
            </SliderNextButton>
          </div> */}

          <SliderContainer className="gap-6">
            {promotions.map((promo, index) => (
              <Slider key={index} className="basis-full">
                <article className="h-full bg-linear-to-br from-teal-50 to-white border border-teal-100 rounded-3xl p-5 md:p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center h-full">
                    <div className="rounded-2xl overflow-hidden border border-teal-100 aspect-16/10">
                      <img
                        src={promo.image}
                        alt={promo.title}
                        className="w-full h-full object-cover"
                        style={{
                          objectPosition: promo.imagePosition,
                          transform: `scale(${promo.imageZoom || 1})`,
                          transformOrigin: promo.imagePosition,
                        }}
                      />
                    </div>

                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-4">
                        <TicketPercent size={14} /> {promo.label}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
                        {promo.title}
                      </h3>
                      <p className="text-neutral-600 mb-6">{promo.desc}</p>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
                        <button className="cursor-pointer bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-xl font-semibold transition w-fit">
                          {promo.cta}
                        </button>
                        <p className="text-sm text-teal-700 font-semibold">
                          Promo Code: <span className="text-neutral-900">{promo.code}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Slider>
            ))}
          </SliderContainer>
        </Carousel>
      </div>
    </section>
  );
};
