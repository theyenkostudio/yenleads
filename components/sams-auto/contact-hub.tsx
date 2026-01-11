import { MapPin, Train, Clock, Mail, Phone } from 'lucide-react';

export default function ContactHub() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left: Deep Location Details */}
        <div className="space-y-12">
          <div>
            <h2 className="text-red-600 font-black uppercase tracking-[0.3em] text-xs mb-4">Visit the Workshop</h2>
            <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter text-stone-900 uppercase">
              EASY ACCESS <br /> FROM THE TUBE.
            </h3>
            <p className="text-stone-500 mt-6 leading-relaxed max-w-md">
              We are located near **Stockwell tube station** (on the Northern line) 
              and **Clapham North** (Victoria line), making it easy to drop your vehicle 
              off on your morning commute.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-stone-900 font-black uppercase text-[10px] tracking-widest">
                <MapPin className="text-red-600" size={16} /> Physical Address
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">
                Union Muse, off Union Road<br />
                Clapham, London, SW4 6JP
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-stone-900 font-black uppercase text-[10px] tracking-widest">
                <Clock className="text-red-600" size={16} /> Opening Times
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">
                Mon – Fri: 8am – 6pm<br />
                Sat: 9am – 4pm | Sun: Closed
              </p>
            </div>
          </div>

          {/* Payment Trust Bar */}
          <div className="pt-8 border-t border-stone-100 flex items-center gap-6">
             <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">We Accept:</span>
             <div className="flex gap-4 grayscale opacity-50">
                {/* Visualizing the credit card icons from the contact page */}
                <img src="/images/sams-auto/visa.svg" alt="Visa" className="h-6" />
                <img src="/images/sams-auto/master-card.svg" alt="Mastercard" className="h-6" />
                <img src="/images/sams-auto/maestro.svg" alt="Maestro" className="h-6" />
             </div>
          </div>
        </div>

        {/* Right: The Interactive "Commuter" Map */}
        <div className="relative group">
          <div className="bg-stone-100 aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-stone-200 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
            {/* Image of a local area map of Clapham and Stockwell showing the workshop's location relative to the Stockwell and Clapham North tube stations */}
            <div className="absolute inset-0 bg-stone-200 animate-pulse flex items-center justify-center">
              <span className="text-xs font-bold uppercase text-stone-400">Loading Map...</span>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18..." 
              className="w-full h-full border-0 relative z-10" 
              allowFullScreen 
              loading="lazy"
            />
          </div>
          
          {/* Floating Action Card */}
          <div className="absolute -bottom-8 left-8 right-8 bg-stone-900 p-8 text-white shadow-2xl">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-1">Book Today</p>
                <p className="text-2xl font-black italic uppercase">020 7720 6265</p>
              </div>
              <button className="w-full sm:w-auto bg-red-600 hover:bg-white hover:text-red-600 text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest transition-all">
                Get Directions
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
