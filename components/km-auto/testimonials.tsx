'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Testimonial } from '@/lib/types/business';


interface TestimonialSliderProps {
  testimonials: Testimonial[];
  externalUrl?: string;
}

export default function KMTestimonialSlider({ testimonials, externalUrl }: TestimonialSliderProps) {
  const [active, setActive] = useState<number>(0);

  if (!testimonials || testimonials.length === 0) return null;

  const nextSlide = () => setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex gap-1 text-red-600 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter text-stone-900 uppercase">
            SureCritic Verified Reviews
          </h2>
          <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mt-2">
            Verified Customer Feedback from Brandon & Flowood
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative px-4">
          <div className="bg-white p-10 md:p-16 border border-stone-100 shadow-xl text-center">
            <p className="text-xl text-stone-600 italic leading-relaxed mb-8">
              "{testimonials[active].content}"
            </p>
            <div>
              <p className="font-black italic uppercase tracking-tight text-stone-900">
                {testimonials[active].name}
              </p>
              <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mt-1">
                {testimonials[active].role}
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <button onClick={prevSlide} className="p-4 bg-white border border-stone-100 shadow-md hover:text-red-600 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextSlide} className="p-4 bg-white border border-stone-100 shadow-md hover:text-red-600 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>

          {externalUrl && (
            <div className="mt-12 text-center">
              <a 
                href={externalUrl} 
                target="_blank" 
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 hover:text-stone-900 transition-colors"
              >
                View 500+ Reviews on SureCritic <ExternalLink size={12} />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
