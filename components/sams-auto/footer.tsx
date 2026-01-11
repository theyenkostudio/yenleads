import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function SamsFooter() {
  return (
    <footer className="bg-white border-t border-stone-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-stone-100">
          
          {/* Column 1: Brand & Heritage */}
          <div className="space-y-6">
            <div className="bg-red-600 text-white px-4 py-1 font-black italic text-xl tracking-tighter uppercase inline-block">
              SAMS<span className="text-stone-900 ml-1">AUTOS</span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
              Clapham&apos;s independent specialist since 1989. Professional car repairs, MOTs, and parts under one roof.
            </p>
          </div>

          {/* Column 2: Our Services */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-900">Services</h4>
            <ul className="space-y-3 text-sm text-stone-500 font-bold uppercase tracking-widest">
              <li className="hover:text-red-600 transition-colors cursor-pointer text-[10px]">Official MOT Testing</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer text-[10px]">Mechanical Repairs</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer text-[10px]">German Car Specialist</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer text-[10px]">Bodywork & Parts</li>
            </ul>
          </div>

          {/* Column 3: Workshop Location */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-900">Visit Us</h4>
            <div className="text-sm text-stone-500 space-y-4">
              <p className="flex items-start gap-3">
                <MapPin size={16} className="text-red-600 shrink-0" />
                <span>Union Muse, off Union Road<br />Clapham, London, SW4 6JP</span>
              </p>
              <p className="flex items-center gap-3 italic text-stone-400 text-xs">
                Near Stockwell & Clapham North Tube
              </p>
            </div>
          </div>

          {/* Column 4: Urgent Contact */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-900">Book Today</h4>
            <div className="space-y-4">
              <a href="tel:02077206265" className="flex items-center gap-3 text-xl font-black italic text-stone-900 hover:text-red-600 transition-colors">
                <Phone size={18} className="text-red-600" /> 020 7720 6265
              </a>
              <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest">
                10% Discount for New Customers
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Payments & Copyright */}
        <div className="pt-10 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center lg:items-start gap-2">
            <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Secure Payments Accepted</p>
            <div className="flex gap-6 grayscale opacity-40 hover:opacity-100 transition-opacity">
              {/* These would be your SVG imports from SVGRepo or Brand Centers */}
              <img src="/images/sams-auto/visa.svg" alt="Visa" className="h-4 w-auto" />
              <img src="/images/sams-auto/master-card.svg" alt="Mastercard" className="h-4 w-auto" />
              <img src="/images/sams-auto/maestro.svg" alt="Maestro" className="h-4 w-auto" />
            </div>
          </div>
          
          <div className="flex flex-col lg:items-end gap-2 text-center lg:text-right">
            <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
              © 2026 Sams Autos | Independent Car Repair Specialist
            </p>
            <div className="flex gap-6 text-[9px] font-black uppercase tracking-widest text-stone-300">
              <a href="#" className="hover:text-stone-600">Privacy Policy</a>
              <a href="#" className="hover:text-stone-600">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
