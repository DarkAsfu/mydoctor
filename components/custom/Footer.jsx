import React from 'react';
import { Mail, MapPin, PhoneCall } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-linear-to-br from-teal-900 to-teal-800 text-white mt-8">
            <div className="max-w-7xl mx-auto px-4 md:px-0 py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div>
                        <div className="mb-3">
                            <Image src="/logo.png" alt="MyDoctor logo" width={180} height={40} className="h-10 w-auto object-contain" />
                        </div>
                        <p className="text-teal-100 leading-relaxed">
                            Trusted healthcare platform to book appointments, consult doctors,
                            and access essential medical services.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-teal-100">
                            <li><a href="#" className="hover:text-white transition">Find Doctors</a></li>
                            <li><a href="#" className="hover:text-white transition">Hospitals</a></li>
                            <li><a href="#" className="hover:text-white transition">Book Appointment</a></li>
                            <li><a href="#" className="hover:text-white transition">Customer Reviews</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-teal-100">
                            <li>Video Consultation</li>
                            <li>Lab Tests</li>
                            <li>Medicine Delivery</li>
                            <li>Emergency Support</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <ul className="space-y-3 text-teal-100">
                            <li className="inline-flex items-center gap-2"><MapPin size={16} /> Dhaka, Bangladesh</li>
                            <li className="inline-flex items-center gap-2"><PhoneCall size={16} /> +880 1234-567890</li>
                            <li className="inline-flex items-center gap-2"><Mail size={16} /> support@mydoctor.com</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 pt-5 border-t border-teal-700 text-center text-teal-200 text-sm">
                    © {new Date().getFullYear()} MyDoctor. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;