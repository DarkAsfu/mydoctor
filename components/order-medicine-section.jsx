import React from 'react';
import {
  Carousel,
  SliderContainer,
  Slider,
  SliderDotButton,
} from '@/components/carousel';

const medicines = [
  {
    name: 'Napa Extend',
    strength: '665 mg Tablet',
    oldPrice: '৳160',
    price: '৳128',
    discount: '20% OFF',
    delivery: '12-24 Hours',
    image:
      'https://images.pexels.com/photos/208518/pexels-photo-208518.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'Seclo MUPS',
    strength: '20 mg Capsule',
    oldPrice: '৳220',
    price: '৳179',
    discount: '19% OFF',
    delivery: '12-24 Hours',
    image:
      'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'Monas',
    strength: '10 mg Tablet',
    oldPrice: '৳145',
    price: '৳119',
    discount: null,
    delivery: '24 Hours',
    image:
      'https://images.pexels.com/photos/3873145/pexels-photo-3873145.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'Xinc B',
    strength: 'Syrup 100 ml',
    oldPrice: '৳210',
    price: '৳168',
    discount: '20% OFF',
    delivery: '12-24 Hours',
    image:
      'https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'Amdocal',
    strength: '5 mg Tablet',
    oldPrice: '৳300',
    price: '৳249',
    discount: '17% OFF',
    delivery: '24 Hours',
    image:
      'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'Fexo',
    strength: '120 mg Tablet',
    oldPrice: '৳195',
    price: '৳159',
    discount: null,
    delivery: '12-24 Hours',
    image:
      'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export const OrderMedicineSection = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-teal-700">
            Pharmacy
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
            Order Medicine
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-600 max-w-2xl">
            Browse trusted medicines and add what you need for fast doorstep delivery.
          </p>
        </div>

        <Carousel
          className="relative"
          options={{
            loop: true,
            align: 'start',
            slidesToScroll: 1,
          }}
          autoPlay
          autoPlayDelay={3200}
          pauseOnHover
        >
          <SliderContainer className="-ml-3">
            {medicines.map((item) => (
              <Slider
                key={`${item.name}-${item.strength}`}
                className="pl-3 basis-[88%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <article className="group rounded-xl border border-teal-100 bg-white p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-teal-200">
                  <div className="relative mb-4 rounded-xl border border-neutral-100 bg-teal-50/30">
                    {item.discount ? (
                      <span className="absolute left-3 top-3 rounded-full bg-teal-600 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white">
                        {item.discount}
                      </span>
                    ) : null}

                    <span className="absolute right-3 top-3 rounded-full border border-teal-100 bg-white px-2.5 py-1 text-[10px] font-semibold text-teal-700">
                      {item.delivery}
                    </span>

                    <div className="aspect-4/3 w-full overflow-hidden rounded-lg bg-white">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <h3 className="text-base font-bold tracking-tight text-neutral-900">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-neutral-500">{item.strength}</p>

                  <div className="mt-4 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-xs text-neutral-400 line-through">{item.oldPrice}</p>
                      <p className="text-lg font-bold text-teal-700 leading-none">{item.price}</p>
                    </div>

                    <button
                      type="button"
                      className="rounded-xl bg-teal-600 px-4 py-1 md:py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    >
                      Add
                    </button>
                  </div>
                </article>
              </Slider>
            ))}
          </SliderContainer>

          <div className="mt-5 flex justify-center">
            <SliderDotButton activeClass="!bg-teal-600" className="gap-1.5" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
