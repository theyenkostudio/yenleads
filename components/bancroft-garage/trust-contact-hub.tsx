import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export default function TrustContactHub() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: Contact Information */}
        <div className="space-y-12">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-700 mb-4">
              Visit Us in Stepney
            </h2>
            <h3 className="text-4xl md:text-5xl font-black italic text-stone-900 tracking-tighter mb-6">
              YOUR LOCAL <br /> LONDON GARAGE.
            </h3>
            <p className="text-stone-500 max-w-md leading-relaxed">
              Conveniently located in East London, providing same-day service
              for MOTs, repairs, and general maintenance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-800 font-bold uppercase text-[10px] tracking-widest">
                <MapPin className="w-4 h-4" /> The Workshop
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">
                Bancroft Road, Stepney
                <br />
                London, E1
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-800 font-bold uppercase text-[10px] tracking-widest">
                <Clock className="w-4 h-4" /> Business Hours
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">
                Mon – Fri: 8:30am – 5:30pm
                <br />
                Weekends: By Appointment
              </p>
            </div>
          </div>

          <div className="p-8 bg-stone-50 border-l-4 border-yellow-400">
            <h4 className="font-black italic mb-2">
              Member: Trust Your Garage
            </h4>
            <p className="text-sm text-stone-500 mb-4">
              We provide consumers with total confidence in all of the work that
              we undertake.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-widest hover:text-blue-900"
            >
              Verify Accreditation <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Right: Quick Action & Map Placeholder */}
        <div className="relative">
          <div className="bg-stone-900 p-6 sm:p-10 text-white rounded-lg shadow-2xl relative z-10">
            <h4 className="text-2xl font-black italic mb-6">QUICK BOOKING</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4 sm:gap-6 p-4 bg-white/5 border border-white/10 hover:border-yellow-400 transition-colors cursor-pointer">
                <Phone className="w-6 h-6 text-yellow-400 shrink-0" />
                <div className="min-w-0">
                  <p className="text-[10px] uppercase font-bold text-stone-400">
                    Call the Garage
                  </p>
                  <p className="text-lg sm:text-xl font-bold">020 7790 6128</p>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-6 p-4 bg-white/5 border border-white/10 hover:border-yellow-400 transition-colors cursor-pointer">
                <Mail className="w-6 h-6 text-yellow-400 shrink-0" />
                <div className="min-w-0">
                  <p className="text-[10px] uppercase font-bold text-stone-400">
                    Email Service
                  </p>
                  <p className="text-base sm:text-xl font-bold break-all sm:break-normal">info@bancroftgarage.co.uk</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-full h-full bg-blue-800/10 -z-10 rounded-lg translate-x-4 translate-y-4" />
        </div>
      </div>
    </section>
  );
}
