'use client'
import React, { useEffect, useState } from 'react'
import { ArrowDownCircle, ChevronDown, Facebook, Instagram, Phone, Youtube } from 'lucide-react';
import Image from 'next/image';
import { useMediaQuery } from '@/components/use-media-query'
import MotionDrawer from '@/components/motion-drawer'

const serviceItems = [
  {
    title: 'Doctor Appointment',
    desc: 'Book specialist consultations quickly.',
  },
  {
    title: 'Treatment Package',
    desc: 'Choose complete treatment bundles.',
  },
  {
    title: 'Gyne & Fertility Care',
    desc: 'Focused women and fertility support.',
  },
  {
    title: 'Diagnostic Tests',
    desc: 'Lab tests with trusted partners.',
  },
  {
    title: 'Order Medicine',
    desc: 'Get medicines at your doorstep.',
  },
  {
    title: 'Treatment & Travel Card',
    desc: 'Manage treatment journey and travel.',
  },
];

const HeroNavbar = ({ isMobile, isScrolled }) => {
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  return (
    <>
      {!isScrolled && (
      <div className="w-full border-y border-teal-200 bg-white/90 backdrop-blur-xs">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-10 py-2.5 flex items-center justify-between text-xs md:text-sm text-neutral-700 font-semibold">
          <span className="inline-flex items-center gap-1.5 md:gap-2">
            <Phone size={16} className="text-teal-700" />
            +8801777112564
          </span>
          <div className="inline-flex items-center gap-1.5 md:gap-2">
            <a href="#" aria-label="Facebook" className="text-teal-700 hover:text-teal-900"><Facebook size={16} /></a>
            <a href="#" aria-label="Instagram" className="text-teal-700 hover:text-teal-900"><Instagram size={16} /></a>
            <a href="#" aria-label="Youtube" className="text-teal-700 hover:text-teal-900"><Youtube size={16} /></a>
          </div>
        </div>
      </div>
      )}

      {isMobile && (
        <div className={`flex gap-4 justify-between items-center px-4 overflow-visible transition-[background-color,box-shadow,padding] duration-300 ${isScrolled ? 'fixed left-0 top-0 z-50 w-full bg-white/95 py-3 shadow-md' : 'pt-4'}`}>
          <MotionDrawer
            direction="left"
            width={300}
            backgroundColor={'#ffffff'}
            headerContent={<Image src="/logo.png" alt="MyDoctor logo" width={1000} height={32} className="w-40 h-8 mt-1 object-contain" />}
            clsBtnClassName="bg-neutral-800 border-r border-neutral-900 text-white"
            contentClassName="bg-white border-r border-neutral-200 text-black"
            btnClassName="bg-white text-black relative w-fit p-2 left-0 top-0 rounded-full shadow-xs border border-neutral-200">
            <nav className="flex h-full flex-col">
              <div className="mb-6" />

              <div className="space-y-1">
                <a href="#" className="block rounded-lg px-3 py-2.5 text-base font-medium text-neutral-900 hover:bg-neutral-100">
                  Home
                </a>
                <a href="#" className="block rounded-lg px-3 py-2.5 text-base font-medium text-neutral-900 hover:bg-neutral-100">
                  About Us
                </a>

                <div className="rounded-xl bg-white">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between px-3 py-2.5 text-base font-medium text-neutral-900">
                    <span>Our Services</span>
                    <ChevronDown size={18} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileServicesOpen && (
                    <div className="mx-2 mb-2 grid gap-1 rounded-lg bg-teal-50/30 p-2">
                      {serviceItems.map((item) => (
                        <a
                          key={item.title}
                          href="#"
                          className="block rounded-md px-2.5 py-2 text-[0.78rem] font-semibold uppercase tracking-wide text-neutral-800 hover:bg-teal-100/70">
                          {item.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a href="#" className="block rounded-lg px-3 py-2.5 text-base font-medium text-neutral-900 hover:bg-neutral-100">
                  Business Partners
                </a>
                <a href="#" className="block rounded-lg px-3 py-2.5 text-base font-medium text-neutral-900 hover:bg-neutral-100">
                  Contact Us
                </a>
              </div>
            </nav>
          </MotionDrawer>

          <button className="cursor-pointer bg-teal-600 text-white px-3 py-2.5 relative z-10 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 transition">
            <ArrowDownCircle size={18} /> Book Appointment
          </button>
        </div>
      )}

      {!isMobile && (
        <header className={`z-30 w-full max-w-7xl mx-auto px-4 flex items-center justify-between transition-[background-color,box-shadow,padding,border-color] duration-300 ${isScrolled ? 'fixed left-1/2 top-0 z-50 w-[min(100%-2rem,80rem)] -translate-x-1/2 rounded-b-2xl border border-teal-100 bg-white/95 py-5 shadow-md backdrop-blur-md' : 'relative py-10'}`}>
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="MyDoctor logo" width={1700} height={34} className="w-40 h-8 object-contain" />
          </div>

          <nav className="hidden md:flex relative items-center gap-10 text-sm text-neutral-800 font-semibold">
            <a href="#" className="hover:text-black transition">Home</a>
            <a href="#" className="hover:text-black transition">About Us</a>

            <div className="group static">
              <button type="button" className="inline-flex items-center gap-1 hover:text-black transition">
                Our Services <ChevronDown size={15} />
              </button>

              <div className="invisible absolute left-1/2 top-full z-50 w-170 max-w-[calc(100vw-2rem)] -translate-x-1/2 pt-2 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="rounded-2xl border border-teal-200 bg-white p-4 shadow-2xl">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-teal-700">
                    Explore Our Services
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {serviceItems.map((item) => (
                      <a
                        key={item.title}
                        href="#"
                        className="rounded-xl border-teal-100 bg-teal-50/30 p-3 transition hover:border-teal-300 hover:bg-teal-50">
                        <p className="text-xs font-bold uppercase text-neutral-900">{item.title}</p>
                        <p className="mt-1 text-[11px] text-neutral-600">{item.desc}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <a href="#" className="hover:text-black transition">Business Partners</a>
            <a href="#" className="hover:text-black transition">Contact Us</a>
          </nav>

          <button className="cursor-pointer bg-teal-600 text-white px-3 py-2.5 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 transition">
            <ArrowDownCircle size={18} /> Book Appointments
          </button>
        </header>
      )}
    </>
  )
}

export const HeroShareApp = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative z-30 bg-transparent">
      <HeroNavbar isMobile={isMobile} isScrolled={isScrolled} />
    </section>
  )
}
