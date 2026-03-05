import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MyDoctor | Doctor Appointment Booking",
  description: "Book doctor appointments online quickly and securely.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
