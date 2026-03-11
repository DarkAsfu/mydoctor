'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const packages = [
  { id: 1, image: '/packages/package1.png', alt: 'Package 1' },
  { id: 2, image: '/packages/package2.png', alt: 'Package 2' },
  { id: 3, image: '/packages/package3.png', alt: 'Package 3' }
]

const SLIDES_PER_VIEW = 1

export const TreatmentPackagesSection = () => {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const autoplayRef = useRef(null)

  // Calculate total slides
  const totalSlides = packages.length
  const indicatorCount = totalSlides

  // Auto-advance carousel
  useEffect(() => {
    if (isHovered) return

    autoplayRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % indicatorCount)
    }, 3500)

    return () => clearInterval(autoplayRef.current)
  }, [isHovered, indicatorCount])

  const handlePrev = () => {
    setCurrent(prev => (prev - 1 + indicatorCount) % indicatorCount)
  }

  const handleNext = () => {
    setCurrent(prev => (prev + 1) % indicatorCount)
  }

  const handleDotClick = index => {
    setCurrent(index)
  }

  // Calculate transform percentage
  const translatePercent = -(current * 100)

  return (
    <section className="bg-linear-to-br from-teal-50/50 to-white py-20">
      <section className="max-w-7xl px-4 mx-auto">
        <div className='mb-12'>
          {/* Header */}
          <div className='text-center max-w-2xl mx-auto'>
            <p className='text-[11px] font-bold uppercase tracking-[0.18em] text-teal-700 mb-2'>
              Healthcare Solutions
            </p>
            <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-3'>
              Treatment Packages
            </h2>
            <p className='text-neutral-500 text-sm md:text-base'>
              Explore our curated treatment packages designed for your health
              needs
            </p>
          </div>
        </div>

        {/* Carousel - Full Width */}
        <div className=''>
          <div
            className='relative group'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Carousel container */}
            <div className='overflow-hidden'>
              <div
                className='flex transition-transform duration-500 ease-out'
                style={{ transform: `translateX(${translatePercent}%)` }}
              >
                {packages.map(pkg => (
                  <div key={pkg.id} className='shrink-0 w-full'>
                    <div
                      className='rounded-2xl overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl bg-neutral-50 flex items-center justify-center w-full'
                      style={{ aspectRatio: '1280 / 549' }}
                    >
                      <img
                        src={pkg.image}
                        alt={pkg.alt}
                        className='w-full h-auto object-contain rounded-2xl'
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {/* <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-8 z-20 rounded-full bg-white border border-teal-200 p-2.5 shadow-md transition hover:bg-teal-50 hover:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Previous slide">
            <ChevronLeft size={20} className="text-teal-700" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-8 z-20 rounded-full bg-white border border-teal-200 p-2.5 shadow-md transition hover:bg-teal-50 hover:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Next slide">
            <ChevronRight size={20} className="text-teal-700" />
          </button> */}

            {/* Pagination dots */}
            <div className='flex justify-center gap-2 mt-6'>
              {Array.from({ length: indicatorCount }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === current
                      ? 'bg-teal-600'
                      : 'bg-neutral-300 hover:bg-teal-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
