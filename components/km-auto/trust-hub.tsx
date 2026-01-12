import { Star, ShieldCheck, Laptop, MessageSquare } from 'lucide-react';

export default function KMTrustHub() {
  return (
    <section className="py-24 bg-white border-b border-stone-100">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Surecritic & Reviews */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
            <Star size={12} fill="currentColor" /> Verified Reviews
          </div>
          <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter text-stone-900 uppercase leading-none">
            REAL REVIEWS <br /> FROM YOUR NEIGHBORS.
          </h3>
          
          <div className="p-8 bg-stone-50 border-l-4 border-red-600 relative">
            <div className="flex text-red-600 mb-4 gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <p className="text-stone-600 italic text-lg leading-relaxed mb-6">
              &quot;Complete service and repair history is available for your vehicles. Just one more way we are helping you stay informed!&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-stone-200 rounded-full" />
              <div>
                <p className="text-sm font-black uppercase tracking-tight text-stone-900">Brian C.</p>
                <p className="text-xs text-stone-400">Jackson, MS — 01/07/2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Owner Auto Site Integration */}
        <div className="bg-stone-900 p-12 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
            <Laptop size={120} />
          </div>
          
          <div className="relative z-10 space-y-6">
            <h4 className="text-2xl font-black italic uppercase tracking-tighter">Owner Auto Site</h4>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              Track your vehicle's history, upcoming maintenance, and service records 24/7. Call us for login details to get started.
            </p>
            
            <div className="pt-4 space-y-4">
              <button className="w-full bg-red-600 hover:bg-white hover:text-red-600 text-white px-8 py-5 text-xs font-black uppercase tracking-[0.2em] transition-all">
                Access Your History
              </button>
              <p className="text-center text-[10px] font-bold uppercase tracking-widest text-stone-500">
                *Call (601) 825-9093 for login details
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
