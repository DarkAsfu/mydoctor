import React from 'react';
import { Star, CalendarCheck } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Ananya Sharma',
    specialty: 'Cardiologist',
    experience: '12 Years Experience',
    rating: '4.9',
    availability: 'Available Today',
    consultancyFee: '৳1500',
    image: 'https://i.pravatar.cc/200?img=47',
  },
  {
    name: 'Dr. Rohan Mehta',
    specialty: 'Dermatologist',
    experience: '10 Years Experience',
    rating: '4.8',
    availability: 'Available Tomorrow',
    consultancyFee: '৳1200',
    image: 'https://i.pravatar.cc/200?img=12',
  },
  {
    name: 'Dr. Priya Nair',
    specialty: 'Pediatrician',
    experience: '9 Years Experience',
    rating: '4.9',
    availability: 'Available Today',
    consultancyFee: '৳1000',
    image: 'https://i.pravatar.cc/200?img=5',
  },
  {
    name: 'Dr. Vikram Rao',
    specialty: 'Orthopedic Specialist',
    experience: '14 Years Experience',
    rating: '4.7',
    availability: 'Available This Week',
    consultancyFee: '৳1800',
    image: 'https://i.pravatar.cc/200?img=15',
  },
];

export const TopDoctorsSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
            Top Doctors
          </h2>
          <p className="text-neutral-600 text-lg">
            Consult highly rated specialists trusted by thousands of patients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <article
              key={index}
              className="bg-teal-50/40 border border-teal-100 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="size-14 rounded-full overflow-hidden border-2 border-teal-200 mb-4 bg-white">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg font-bold text-neutral-900 mb-1">{doctor.name}</h3>
              <p className="text-teal-700 font-medium text-sm mb-2">{doctor.specialty}</p>
              <p className="text-neutral-600 text-sm mb-3">{doctor.experience}</p>

              <div className="flex items-center justify-between text-sm mb-4">
                <span className="inline-flex items-center gap-1 text-amber-500 font-semibold">
                  <Star size={16} className="fill-amber-500" /> {doctor.rating}
                </span>
                <span className="text-teal-700 font-medium">{doctor.availability}</span>
              </div>

              <p className="text-sm font-semibold text-neutral-700 mb-4">
                Consultancy Fee: <span className="text-teal-700">{doctor.consultancyFee}</span>
              </p>

              <button className="w-full cursor-pointer bg-teal-600 hover:bg-teal-700 text-white py-2.5 rounded-xl font-semibold transition inline-flex items-center justify-center gap-2">
                <CalendarCheck size={16} /> Book Appointment
              </button>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="cursor-pointer bg-white border border-teal-200 text-teal-700 hover:bg-teal-50 px-7 py-3 rounded-xl font-semibold transition">
            See All Doctors
          </button>
        </div>
      </div>
    </section>
  );
};
