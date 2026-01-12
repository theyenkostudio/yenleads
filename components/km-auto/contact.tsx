import { MapPin, Phone, Clock, CreditCard, Mail } from 'lucide-react';

export default function KMContact() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        {/* Left: Reach Mike & Karla */}
        <div className="space-y-12">
          <div>
            <h2 className="text-red-600 font-black uppercase tracking-[0.3em] text-xs mb-4">Find Us in Brandon</h2>
            <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter text-stone-900 uppercase">
              VISIT THE SHOP <br /> ON DEPOT DRIVE.
            </h3>
            <p className="text-stone-500 mt-6 leading-relaxed max-w-md italic">
              Serving Brandon, Flowood, and the surrounding areas with the utmost respect since we opened our doors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-10 border-t border-stone-100 pt-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-stone-900 font-black uppercase text-[10px] tracking-widest">
                <MapPin className="text-red-600" size={16} /> Workshop Address
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">
                1009 Depot Drive<br />
                Brandon, MS 39042
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-stone-900 font-black uppercase text-[10px] tracking-widest">
                <Clock className="text-red-600" size={16} /> Service Hours
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">
                Mon – Fri: 7:00am – 4:00pm<br />
                Sat & Sun: Closed
              </p>
            </div>
          </div>

          {/* Payment Trust Bar - Updated from their site */}
          <div className="pt-8 border-t border-stone-100 flex flex-col sm:flex-row items-center gap-6">
             <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Cards Accepted:</span>
             <img
               src="/images/km/all-credit-cards-accepted.png"
               alt="All major credit cards accepted - Visa, Mastercard, American Express, Discover"
               className="h-8 object-contain"
             />
          </div>
        </div>

        {/* Right: The Brandon/Flowood Map Interface */}
        <div className="relative">
          <div className="bg-stone-100 aspect-square rounded-2xl overflow-hidden border border-stone-200 shadow-2xl relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.45!2d-89.98!3d32.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888209!2s1009+Depot+Dr+Brandon+MS!" 
              className="w-full h-full border-0 grayscale" 
              allowFullScreen 
              loading="lazy"
            />
            
            {/* Call Action Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-stone-900 p-6 text-white flex justify-between items-center shadow-2xl">
              <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-red-500 mb-1">Direct Line</p>
                <p className="text-xl font-black italic uppercase">(601) 825-9093</p>
              </div>
              <a href="tel:6018259093" className="bg-red-600 p-4 hover:scale-110 transition-transform">
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
