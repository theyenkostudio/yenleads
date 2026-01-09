"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

export default function BancroftHeader() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll when menu is open to prevent background jumping
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-[100] bg-white border-b border-stone-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Branding */}
        <div className="z-[110] bg-blue-800 text-white px-3 py-1 font-black italic text-xl tracking-tighter">
          BANCROFT<span className="text-yellow-400">GARAGE</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500 hover:text-blue-800 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="tel:02077906128"
            className="ml-4 bg-blue-800 text-white px-5 py-2 text-xs font-bold uppercase tracking-widest"
          >
            020 7790 6128
          </a>
        </nav>

        {/* MOBILE TOGGLE - The Fix: Higher Z-Index and Conditional Color */}
        <button
          className={`lg:hidden z-[120] p-2 transition-colors duration-300 ${isOpen ? "text-white" : "text-stone-900"}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY - The Fix: Slightly lower Z-Index than the button */}
      <div
        className={`
        fixed inset-0 bg-stone-950 z-[115] transition-all duration-500 ease-in-out lg:hidden
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
      >
        <div
          className={`
          flex flex-col h-full pt-32 px-8 transform transition-transform duration-500
          ${isOpen ? "translate-y-0" : "translate-y-8"}
        `}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex justify-between items-center py-6 border-b border-stone-800 text-3xl font-black italic text-white uppercase tracking-tighter"
            >
              {item.name}
              <ChevronRight className="text-blue-600" />
            </a>
          ))}

          <div className="mt-auto pb-12">
            <p className="text-stone-500 text-[10px] uppercase tracking-widest font-bold mb-4">
              Official Testing Station
            </p>
            <a
              href="tel:02077906128"
              className="block w-full text-center bg-blue-800 py-6 text-xl font-black italic text-white"
            >
              020 7790 6128
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
