'use client'; // CRITICAL: This allows the menu to actually open/close

import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

export default function KMHeader() {
  const [isOpen, setIsOpen] = useState(false); // State to track mobile menu visibility

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-stone-100">
      {/* Top Utility Bar - Hidden on small mobile to save space */}
      <div className="bg-stone-900 py-2 text-white text-[10px] font-bold uppercase tracking-[0.2em]">
        <div className="container mx-auto px-6 flex justify-between italic">
          <span className="flex items-center gap-2">
            <MapPin size={12} className="text-red-600" /> Brandon & Flowood Premier Shop
          </span>
          <span className="hidden md:block italic">"If it was easy, anybody could do it."</span>
        </div>
      </div>
      
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        {/* Branding - Rebuilt to be legible on mobile */}
        <div className="flex flex-col leading-none">
          <span className="text-xl md:text-2xl font-black italic tracking-tighter text-stone-900 uppercase">
            K&M<span className="text-red-600">AUTO</span>
          </span>
          <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400">Repair & Service</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 text-[11px] font-black uppercase tracking-widest text-stone-600">
          <a href="#services" className="hover:text-red-600 transition-colors">Services</a>
          <a href="#coupons" className="hover:text-red-600 transition-colors">Coupons</a>
          <a href="#testimonials" className="hover:text-red-600 transition-colors">Testimonials</a>
          <a href="#appointments" className="hover:text-red-600 transition-colors">Appointments</a>
          <a href="#contact" className="hover:text-red-600 transition-colors">Contact Us</a>
          <a href="tel:6018259093" className="flex items-center gap-3 bg-red-600 text-white px-6 py-3 hover:bg-stone-900 transition-all">
            <Phone size={14} /> (601) 825-9093
          </a>
        </nav>

        {/* Mobile Toggle Button - Now with a functioning onClick */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden p-2 text-stone-900 transition-colors hover:bg-stone-50"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer - Animated Slide-down menu */}
      <div
        className={`
          lg:hidden fixed inset-x-0 top-[112px] bg-white border-b border-stone-200 shadow-xl
          transition-[transform,opacity] duration-300 ease-out origin-top
          ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}
        `}
      >
        <nav className="flex flex-col p-6 space-y-1">
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="text-lg font-black italic uppercase tracking-tighter text-stone-900 py-3 border-b border-stone-100 hover:text-red-600 transition-colors"
          >
            Services
          </a>
          <a
            href="#coupons"
            onClick={() => setIsOpen(false)}
            className="text-lg font-black italic uppercase tracking-tighter text-stone-900 py-3 border-b border-stone-100 hover:text-red-600 transition-colors"
          >
            Coupons
          </a>
          <a
            href="#testimonials"
            onClick={() => setIsOpen(false)}
            className="text-lg font-black italic uppercase tracking-tighter text-stone-900 py-3 border-b border-stone-100 hover:text-red-600 transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#appointments"
            onClick={() => setIsOpen(false)}
            className="text-lg font-black italic uppercase tracking-tighter text-stone-900 py-3 border-b border-stone-100 hover:text-red-600 transition-colors"
          >
            Appointments
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-lg font-black italic uppercase tracking-tighter text-stone-900 py-3 border-b border-stone-100 hover:text-red-600 transition-colors"
          >
            Contact Us
          </a>
          <div className="pt-4">
            <a
              href="tel:6018259093"
              className="w-full flex justify-center items-center gap-3 bg-red-600 text-white py-5 font-black uppercase tracking-widest italic hover:bg-stone-900 transition-colors"
            >
              <Phone size={18} /> Call (601) 825-9093
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
