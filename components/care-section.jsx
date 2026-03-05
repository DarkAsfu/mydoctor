import React from 'react';
import { PhoneCall } from 'lucide-react';

export const CareSection = () => {
  return (
    <section className="px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-teal-50 border border-teal-100 rounded-3xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-4">
              Call To Action
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight mb-4">
              Need medical help today?
            </h2>
            <p className="text-neutral-600 text-base md:text-lg mb-8">
              Connect with trusted doctors, book tests, and get medicines from one place. Start your care journey now.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="cursor-pointer bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition">
                Book Appointment Now
              </button>
              <button className="cursor-pointer bg-white border border-teal-200 text-teal-700 px-6 py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2">
                <PhoneCall size={18} /> Call Emergency Support
              </button>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-teal-100 shadow-sm">
            <img
              src="https://images.pexels.com/photos/7088484/pexels-photo-7088484.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Doctor consulting patient"
              className="w-full h-80 md:h-105 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
