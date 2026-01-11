"use client"

import React, { useState } from 'react';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';

export default function SamsHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        {/* Branding: High-impact minimal logo */}
        <div className="flex items-center gap-2">
          <div className="bg-red-600 text-white px-3 py-1 font-black italic text-2xl tracking-tighter">
            SAMS<span className="text-stone-900">AUTOS</span>
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

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden z-[60] text-stone-900">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Drawer (Matches the Light Mode Theme) */}
      <div className={`fixed inset-0 bg-white z-50 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-32 px-10 space-y-8">
          {['MOT Testing', 'German Specialists', 'Service & Repairs', 'Contact'].map((item) => (
            <a key={item} href="#" className="text-4xl font-black italic text-stone-900 uppercase tracking-tighter border-b border-stone-100 pb-4">
              {item}
            </a>
          ))}
          <a href="tel:02077206265" className="bg-red-600 text-white py-6 text-center text-xl font-black italic uppercase">
            Call the Workshop
          </a>
        </div>
      </div>
    </header>
  );
}
