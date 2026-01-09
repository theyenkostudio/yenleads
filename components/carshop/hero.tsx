// components/Hero.tsx
export default function CarshopHero() {
  return (
    <section className="relative pt-10 md:pt-0 lg:min-h-[85vh] bg-stone-50 flex items-center overflow-hidden">
      
      <div className="container mx-auto px-6 lg:pt-0 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-left">
          <div className="flex gap-2 mb-6">
             <span className="text-[10px] font-bold px-3 py-1 bg-stone-200 text-stone-600 uppercase tracking-widest">Toyota Specialist</span>
             <span className="text-[10px] font-bold px-3 py-1 bg-stone-200 text-stone-600 uppercase tracking-widest">Honda Specialist</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-stone-900 leading-[1.1] tracking-tighter mb-8">
            Factory Trained. <br />
            <span className="text-red-600">Master Certified.</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-stone-600 mb-10 max-w-lg leading-relaxed">
            Ridgeland&apos;s elite destination for specialized maintenance and repair 
            of Honda, Acura, Toyota, and Lexus vehicles since 1997.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
             <button className="bg-stone-900 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-red-600 transition-all w-full sm:w-auto">
               View All Services
             </button>
             <a href="tel:6019919663" className="border-2 border-stone-900 text-stone-900 text-center px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all w-full sm:w-auto">
               Call Now
             </a>
          </div>
        </div>

        {/* 3. 'hidden lg:block' removes the engine image on mobile entirely, 
              instantly fixing any vertical overflow or overlap issues.
        */}
        <div className="hidden lg:block relative">
          <div className="absolute -inset-10 bg-red-600/5 rounded-full blur-3xl" />
          <img 
            src="/images/carshop/hero-engine.webp" 
            alt="Precision Japanese Engine" 
            className="relative z-10 w-full h-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
