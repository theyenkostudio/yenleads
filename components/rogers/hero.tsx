export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center bg-black overflow-hidden">
      {/* UNSPLASH IMAGE: Using a high-end interior/HVAC context. 
          The 'q=80' and 'auto=format' params ensure fast loading.
      */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.3) 100%), url('/images/rogers-refrigeration/hero.png')`
        }}
      />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12">
        <div className="animate-in fade-in slide-in-from-left duration-1000">
          <div className="flex items-center gap-2 mb-4">
             <span className="h-px w-6 bg-red-600"></span>
             <span className="text-red-600 font-bold tracking-widest uppercase text-sm">
               Central Mississippi&apos;s Trusted Experts
             </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-serif text-white leading-tight">
            Comfort Engineered <br /> 
            <span className="italic font-light text-stone-400">To Last.</span>
          </h1>
          
          <p className="text-xl text-stone-300 mt-6 max-w-xl leading-relaxed">
            From high-performance residential HVAC to commercial refrigeration, 
            we combine 20+ years of experience with next-gen technology.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold transition-all shadow-lg hover:shadow-red-600/20 active:scale-95">
              Book 24/7 Service
            </button>
            <button className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-md font-bold transition-all backdrop-blur-sm active:scale-95">
              Free Estimate
            </button>
          </div>
          
          {/* Subtle Trust Indicator */}
          <div className="mt-12 flex items-center gap-6 text-white/50 border-t border-white/10 pt-8">
            <div className="text-xs uppercase tracking-widest font-semibold">Licensed & Insured</div>
            <div className="text-xs uppercase tracking-widest font-semibold">Veteran Owned</div>
          </div>
        </div>
      </div>
    </section>
  );
}
