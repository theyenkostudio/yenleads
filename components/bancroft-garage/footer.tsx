// components/Footer.tsx
import { Facebook, Shield, Wrench } from 'lucide-react';

export default function BancroftFooter() {
  return (
    <footer className="bg-stone-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-stone-900">

        {/* Brand Column */}
        <div className="space-y-6">
          <div className="text-2xl font-black italic tracking-tighter uppercase">
            BANCROFT<span className="text-blue-600">GARAGE</span>
          </div>
          <p className="text-stone-500 text-sm leading-relaxed">
            East London's well-established MOT and repair centre since 1990.
            Committed to treating every car as if it were our own.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-stone-900 flex items-center justify-center rounded-full hover:bg-blue-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Services Column */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Our Services</h4>
          <ul className="space-y-3 text-sm text-stone-400">
            <li className="hover:text-white transition-colors cursor-pointer">Official MOT Testing</li>
            <li className="hover:text-white transition-colors cursor-pointer">Mechanical Servicing</li>
            <li className="hover:text-white transition-colors cursor-pointer">Gearbox & Belts</li>
            <li className="hover:text-white transition-colors cursor-pointer">Engine Diagnostics</li>
          </ul>
        </div>

        {/* Compliance Column */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Reliability</h4>
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-yellow-400 shrink-0" />
            <p className="text-xs text-stone-400 leading-relaxed">
              Member of the <strong>Trust Your Garage</strong> scheme, providing total consumer confidence.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Wrench className="w-5 h-5 text-yellow-400 shrink-0" />
            <p className="text-xs text-stone-400 leading-relaxed">
              Specialists in European and Japanese models to the highest standards.
            </p>
          </div>
        </div>

        {/* Contact Quick-Link */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Visit Stepney</h4>
          <div className="text-sm text-stone-400 space-y-2">
            <p>Bancroft Road</p>
            <p>Stepney, London E1</p>
            <p className="pt-4 text-white font-bold">020 7790 6128</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-10 flex flex-col md:flex-row justify-between gap-6">
        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-600">
          © 2026 Bancroft Garage Ltd. All Rights Reserved.
        </p>
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-stone-600">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}
