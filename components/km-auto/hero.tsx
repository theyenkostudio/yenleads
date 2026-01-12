"use client"


import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

const heroSlides = [
  { img: "/images/km/truck.png", alt: "K&M Custom Service Vehicle" },
  { img: "/images/km/workshop-view.png", alt: "Precision Diagnostic Bay" },
  { img: "/images/km/office-view.png", alt: "Professional Wheel Alignment" },
  { img: "/images/km/entrance-view.png", alt: "ASE Certified Technicians" }
];

export default function KMHero() {
  const [current, setCurrent] = useState(0);

  // Auto-slide logic similar to their current site
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === heroSlides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? heroSlides.length - 1 : current - 1);

  return (
    <section className="relative min-h-[90vh] bg-white pt-28 flex items-center overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Content Side */}
        <div className="space-y-8">
          {/* <div className="inline-flex items-center gap-3 bg-stone-50 px-4 py-2 border border-stone-100">
            <Award size={16} className="text-red-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-500">
              ASE Certified Master Technicians
            </span>
          </div> */}

          <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter text-stone-900 uppercase leading-[0.85]">
            YOUR CAR DESERVES <br />
            <span className="text-red-600">MASTER</span> <br />
            TECHNICIANS.
          </h1>

          <p className="text-lg text-stone-600 leading-relaxed max-w-lg font-medium">
            Mike & Karla Perry have built Brandon's most trusted auto shop — where ASE-certified expertise meets small-town integrity. From alignments to transmissions, your car is in master hands.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-stone-900 text-white px-10 py-5 text-xs font-black uppercase tracking-widest hover:bg-red-600 transition-all">
              Schedule Appointment
            </button>
            <button className="border-2 border-stone-900 px-10 py-5 text-xs font-black uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all">
              View Coupons
            </button>
          </div>
        </div>

        {/* Professional Carousel Side */}
        <div className="relative group hidden lg:block">
          <div className="aspect-[4/3] bg-stone-100 overflow-hidden rounded-2xl border border-stone-100 shadow-2xl">
            {heroSlides.map((slide, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
              >
                <img src={slide.img} alt={slide.alt} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-6 -right-6 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={prevSlide} className="p-3 bg-white shadow-xl hover:text-red-600 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="p-3 bg-white shadow-xl hover:text-red-600 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute -bottom-8 left-0 flex gap-4">
            {heroSlides.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 transition-all duration-500 ${i === current ? 'w-12 bg-red-600' : 'w-4 bg-stone-200'}`} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
