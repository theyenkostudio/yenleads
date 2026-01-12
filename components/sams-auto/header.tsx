"use client"

import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function SamsHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center relative z-[70]">
        {/* Branding */}
        <div className="flex items-center gap-2">
          <div className="bg-red-600 text-white px-3 py-1 font-black italic text-2xl tracking-tighter uppercase">
            SAMS<span className="text-stone-900 ml-1">AUTOS</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <div className="flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-stone-500">
            <a href="#" className="hover:text-red-600 transition-colors">MOT Testing</a>
            <a href="#" className="hover:text-red-600 transition-colors">German Specialists</a>
            <a href="#" className="hover:text-red-600 transition-colors">Service & Repairs</a>
            <a href="#" className="hover:text-red-600 transition-colors">Contact</a>
          </div>
          
          <div className="h-8 w-px bg-stone-200 mx-2" />
          
          <a href="tel:02077206265" className="flex items-center gap-3 group">
            <div className="bg-stone-100 p-2 rounded-full group-hover:bg-red-600 group-hover:text-white transition-all">
              <Phone size={16} />
            </div>
            <span className="text-sm font-black text-stone-900">020 7720 6265</span>
          </a>
        </nav>

        {/* Mobile Toggle - Ensure this stays above the red background */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden p-2 text-stone-900 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} className="text-white relative z-[80]" /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Drawer Fix: Added h-screen, w-full, and opacity control */}
      <div 
        className={`
          fixed inset-0 h-screen w-full bg-red-600 z-[60] transition-transform duration-500 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full pt-32 px-10 space-y-8 bg-red-600">
          {['MOT Testing', 'German Specialists', 'Service & Repairs', 'Contact'].map((item) => (
            <a 
              key={item} 
              href="#" 
              onClick={() => setIsOpen(false)}
              className="text-4xl font-black italic text-white uppercase tracking-tighter border-b border-white/20 pb-4 active:text-stone-900"
            >
              {item}
            </a>
          ))}
          <a 
            href="tel:02077206265" 
            className="mt-4 bg-white text-red-600 py-6 text-center text-xl font-black italic uppercase shadow-xl"
          >
            Call 020 7720 6265
          </a>
        </div>
      </div>
    </header>
  );
}
