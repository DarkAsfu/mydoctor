import React from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import {
  Carousel,
  SliderContainer,
  Slider,
  SliderPrevButton,
  SliderNextButton,
} from '@/components/carousel';

const reviews = [
  {
    name: 'Nusrat Jahan',
    city: 'Dhaka',
    rating: 5,
    comment:
      'Booking an appointment was super easy. I found a specialist quickly and got treatment the same day.',
  },
  {
    name: 'Mahmud Hasan',
    city: 'Chattogram',
    rating: 5,
    comment:
      'The video consultation feature saved me a lot of time. The doctor was professional and very helpful.',
  },
  {
    name: 'Farzana Rahman',
    city: 'Sylhet',
    rating: 4,
    comment:
      'Lab test booking and medicine delivery both worked smoothly. Great service and timely updates.',
  },
  {
    name: 'Mahmud Hasan',
    city: 'Chattogram',
    rating: 5,
    comment:
      'The video consultation feature saved me a lot of time. The doctor was professional and very helpful.',
  }
];

export const CustomerReviewSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-teal-700">
            Patient Voices
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
            Customer Reviews
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600 md:mx-0 md:text-base">
            Real feedback from patients who trust MyDoctor for everyday healthcare needs.
          </p>
        </div>

        <Carousel options={{ align: 'start', loop: true }} autoPlay autoPlayDelay={4500}>
          <div className="flex justify-end gap-3 mb-6">
            <SliderPrevButton
              className="size-11 rounded-full border border-teal-200 bg-white text-teal-700 hover:bg-teal-50 flex items-center justify-center cursor-pointer"
              aria-label="Previous review">
              <ChevronLeft size={18} />
            </SliderPrevButton>
            <SliderNextButton
              className="size-11 rounded-full border border-teal-200 bg-white text-teal-700 hover:bg-teal-50 flex items-center justify-center cursor-pointer"
              aria-label="Next review">
              <ChevronRight size={18} />
            </SliderNextButton>
          </div>

          <SliderContainer className="-ml-6">
            {reviews.map((review, index) => (
              <Slider key={index} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                <article className="h-full bg-teal-50/40 border border-teal-100 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-11 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center">
                      <Quote size={18} />
                    </div>
                    <div className="inline-flex items-center gap-1 text-amber-500">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} size={15} className="fill-amber-500" />
                      ))}
                    </div>
                  </div>

                  <p className="text-neutral-700 leading-relaxed mb-5">“{review.comment}”</p>

                  <div>
                    <h3 className="text-base font-bold text-neutral-900">{review.name}</h3>
                    <p className="text-sm text-neutral-600">{review.city}, Bangladesh</p>
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
