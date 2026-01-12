import { ShieldCheck } from "lucide-react";

export default function SamsHero() {
  return (
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] flex items-center gap-2">
              <span className="w-8 h-px bg-red-600"/> Clapham&apos;s Trusted Specialist Since 1989
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-stone-900 leading-[0.9] tracking-tighter uppercase">
              REPAIRS & PARTS <br />
              <span className="text-stone-400">UNDER ONE ROOF.</span>
            </h1>
          </div>

          <div className="max-w-lg">
            <p className="text-xl text-stone-600 leading-relaxed font-medium">
              Reliable, experienced care for every vehicle. From MOTs and bodywork 
              to specialist German car servicing—we treat your car as if it were our own.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button className="bg-red-600 text-white px-10 py-5 text-xs font-black uppercase tracking-[0.2em] hover:bg-stone-900 transition-all shadow-xl shadow-red-600/10">
              Book Your MOT Today
            </button>
            <div className="border-l-2 border-stone-100 pl-6">
              <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1">New Customer Offer</p>
              <p className="text-sm font-bold text-stone-900">10% Discount on Service + MOT</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-50">
            {['Independent Local Business', 'Free Initial Diagnosis'].map((tag) => (
              <div key={tag} className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-stone-500">
                <ShieldCheck size={14} className="text-red-600" /> {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Professional Technical Visual - Showing a comprehensive workshop view */}
        <div className="relative md:pb-0 pb-4">
          <div className="aspect-square bg-stone-50 rounded-2xl overflow-hidden border border-stone-100">
             <img 
               src="/images/sams-auto/workshop-hero.webp" 
               alt="Sams Autos Workshop Service" 
               className="w-full h-full object-cover grayscale opacity-90"
             />
          </div>
          {/* Accent element to break the box */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-2xl hidden md:block border border-stone-50">
             <p className="text-4xl font-black italic text-stone-900">35+</p>
             <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Years of Reputation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
