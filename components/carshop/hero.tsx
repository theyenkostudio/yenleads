// components/Hero.tsx
export default function CarshopHero() {
  return (
    <section className="relative h-[85vh] bg-stone-50 flex items-center overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div className="flex gap-2 mb-6">
             {/* Brand Badges */}
             <span className="text-[10px] font-bold px-3 py-1 bg-stone-200 text-stone-600 uppercase tracking-widest">Toyota Specialist</span>
             <span className="text-[10px] font-bold px-3 py-1 bg-stone-200 text-stone-600 uppercase tracking-widest">Honda Specialist</span>
          </div>
          <h1 className="text-6xl lg:text-7xl font-bold text-stone-900 leading-tight tracking-tighter mb-8">
            Factory Trained. <br />
            <span className="text-red-600">Master Certified.</span>
          </h1>
          <p className="text-xl text-stone-600 mb-10 max-w-lg leading-relaxed">
            Ridgeland&apos;s elite destination for specialized maintenance and repair 
            of Honda, Acura, Toyota, and Lexus vehicles since 1997.
          </p>
          <div className="flex gap-4">
             <button className="bg-stone-900 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-red-600 transition-all">
               View All Services
             </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-10 bg-red-600/5 rounded-full blur-3xl" />
          <img src="/images/carshop/hero-engine.webp" alt="Precision Japanese Engine" className="relative z-10 w-full h-auto drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
}
