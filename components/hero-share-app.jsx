'use client'
import React, { useRef } from 'react'
import { ArrowDownCircle } from 'lucide-react';
import Image from 'next/image';
import { TimelineAnimation } from '@/components/timeline-animation'
import { useMediaQuery } from '@/components/use-media-query'
import MotionDrawer from '@/components/motion-drawer'
import SearchBar from '@/components/custom/SearchBar';

export const HeroShareApp = () => {
  const timelineRef = useRef(null)
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <section
      ref={timelineRef}
      className="min-h-screen bg-teal-50 text-neutral-900 relative overflow-hidden flex flex-col">
      {/* Mobile Navigation */}
      {isMobile && (
        <div className="flex gap-4 justify-between items-center px-4 pt-4">
          <MotionDrawer
            direction="left"
            width={300}
            backgroundColor={'#ffffff'}
            clsBtnClassName="bg-neutral-800 border-r border-neutral-900 text-white"
            contentClassName="bg-white border-r border-neutral-200 text-black"
            btnClassName="bg-white text-black relative w-fit p-2 left-0 top-0 rounded-full shadow-xs border border-neutral-200">
            <nav className="space-y-4 ">
              <div className="flex items-center gap-2 text-black">
                <Image src="/logo.png" alt="MyDoctor logo" width={1000} height={32} className="w-40 h-8 object-contain" />
               
              </div>
              <a
                href="#"
                className="block p-2 hover:bg-neutral-200 hover:text-black rounded-sm">
                Find Doctors
              </a>
              <a
                href="#"
                className="block p-2 hover:bg-neutral-200 hover:text-black rounded-sm">
                Hospitals
              </a>
              <a
                href="#"
                className="block p-2 hover:bg-neutral-200 hover:text-black rounded-sm">
                Video Consult
              </a>
              <a
                href="#"
                className="block p-2 hover:bg-neutral-200 hover:text-black rounded-sm">
                Lab Tests
              </a>
              <a
                href="#"
                className="block p-2 hover:bg-neutral-200 hover:text-black rounded-sm">
                Order Medicines
              </a>
            </nav>
          </MotionDrawer>
          <button
            className="cursor-pointer bg-teal-600 text-white px-3 py-2.5  relative z-10 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 transition">
            <ArrowDownCircle size={18} /> Book Appointment
          </button>
        </div>
      )}
      {/* Navbar */}
      {!isMobile && (
        <header
          className="relative z-10 w-full max-w-7xl mx-auto px-10 py-10 flex items-center justify-between">
          <TimelineAnimation
            timelineRef={timelineRef}
            animationNum={0}
            className="flex items-center gap-2">
            <Image src="/logo.png" alt="MyDoctor logo" width={1700} height={34} className="w-40 h-8 object-contain" />
            
          </TimelineAnimation>
          <TimelineAnimation
            as="nav"
            timelineRef={timelineRef}
            animationNum={1}
            className="hidden md:flex items-center gap-10 text-sm text-neutral-800 font-semibold">
            <a href="#" className="hover:text-black transition">
              Find Doctors
            </a>
            <a href="#" className="hover:text-black transition">
              Hospitals
            </a>
            <a href="#" className="hover:text-black transition">
              Video Consult
            </a>
            <a href="#" className="hover:text-black transition">
              Lab Tests
            </a>
            <a href="#" className="hover:text-black transition">
              Order Medicines
            </a>
          </TimelineAnimation>
          <TimelineAnimation
            as="button"
            timelineRef={timelineRef}
            animationNum={2}
            className="cursor-pointer bg-teal-600 text-white px-3 py-2.5 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 transition">
            <ArrowDownCircle size={18} /> Book Appointment
          </TimelineAnimation>
        </header>
      )}
      <TimelineAnimation
        timelineRef={timelineRef}
        animationNum={1}
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #0f766e 100%)',
        }} />
      <div
        className="relative z-10 grow flex flex-col items-center justify-center text-center px-4 pt-10">
        <TimelineAnimation
          timelineRef={timelineRef}
          animationNum={3}
          className="flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full border border-teal-200 shadow-sm mb-8">
          <div className="flex -space-x-3">
            <img
              className="w-7 h-7 rounded-full border-2 border-white"
              src="https://picsum.photos/seed/u1/100"
              alt="Patient avatar 1" />
            <img
              className="w-7 h-7 rounded-full border-2 border-white"
              src="https://picsum.photos/seed/u2/100"
              alt="Patient avatar 2" />
            <img
              className="w-7 h-7 rounded-full border-2 border-white"
              src="https://picsum.photos/seed/u3/100"
              alt="Patient avatar 3" />
          </div>
          <span className="text-sm font-bold text-neutral-600">
            Trusted by 12,000+ Patients
          </span>
        </TimelineAnimation>

        <h1
          className="text-3xl md:text-5xl font-black tracking-tighter text-neutral-800 max-w-5xl leading-[0.9] mb-10">
          <TimelineAnimation as="span" timelineRef={timelineRef} animationNum={4}>
            Care You Trust,
          </TimelineAnimation>
          <br />
          <TimelineAnimation as="span" timelineRef={timelineRef} animationNum={5}>
            Appointments Made Easy
          </TimelineAnimation>
        </h1>

        <TimelineAnimation
          as="p"
          timelineRef={timelineRef}
          animationNum={6}
          className="text-xl md:text-2xl text-neutral-800 font-semibold max-w-2xl mb-12">
          Find top doctors, choose your preferred time, and book secure
          appointments in minutes.
        </TimelineAnimation>

        <TimelineAnimation
          timelineRef={timelineRef}
          animationNum={7}
          className="w-full flex justify-center">
          <SearchBar />
        </TimelineAnimation>

        <div className="flex flex-col sm:flex-row gap-4 items-center mb-24">
          <TimelineAnimation
            as="button"
            timelineRef={timelineRef}
            animationNum={8}
            className="bg-linear-to-t from-teal-500 to-teal-700 cursor-pointer text-white px-4 py-4 rounded-xl font-semibold text-xl shadow-2xl flex items-center gap-3 transition">
            <svg viewBox="0 0 814 1000" className="w-8 h-8">
              <path
                fill="#fff"
                d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
            </svg>
            Book on iOS App
          </TimelineAnimation>
          <TimelineAnimation
            as="button"
            timelineRef={timelineRef}
            animationNum={9}
            className="cursor-pointer bg-teal-900 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl flex items-center gap-3 transition">
            <svg
              fillRule="evenodd"
              clipRule="evenodd"
              className="w-8 h-8"
              imageRendering="optimizeQuality"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              viewBox="0 0 466 511.98">
              <g fillRule="nonzero">
                <path
                  fill="#EA4335"
                  d="M199.9 237.8 1.4 470.17c7.22 24.57 30.16 41.81 55.8 41.81 11.16 0 20.93-2.79 29.3-8.37l244.16-139.46L199.9 237.8z" />
                <path
                  fill="#FBBC04"
                  d="m433.91 205.1-104.65-60-111.61 110.22 113.01 108.83 104.64-58.6c18.14-9.77 30.7-29.3 30.7-50.23-1.4-20.93-13.95-40.46-32.09-50.22z" />
                <path
                  fill="#34A853"
                  d="M199.42 273.45 329.27 145.1 87.9 8.37C79.53 2.79 68.36 0 57.2 0 30.7 0 6.98 18.14 1.4 41.86l198.02 231.59z" />
                <path
                  fill="#4285F4"
                  d="M1.39 41.86C0 46.04 0 51.63 0 57.2v397.64c0 5.57 0 9.76 1.4 15.34l216.27-214.86L1.39 41.86z" />
              </g>
            </svg>
            Book on Android
          </TimelineAnimation>
        </div>
      </div>
    </section>
  );
}
