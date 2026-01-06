// components/VeteranTrust.tsx
export default function VeteranTrust() {
  return (
    <section className="bg-black py-24 border-y border-stone-900">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center mb-8">
          <img 
            src="/images/electrical-solutions/veteran-owned.jpeg" 
            alt="Veteran Owned Business" 
            className="h-24 md:h-32 grayscale brightness-200"
          />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Built on Discipline. <span className="text-blue-500">Driven by Service.</span>
        </h2>
        
        <p className="text-stone-400 text-lg max-w-3xl mx-auto leading-relaxed">
          As a Veteran-owned electrical contractor, Electrical Solutions and Services LLC 
          operates with a standard of military precision. Whether we are 
          wiring a full-scale industrial warehouse or performing a residential panel upgrade, 
          we treat every project with the care and integrity it deserves.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-[10px] uppercase tracking-[0.4em] text-stone-500 font-bold">
          <span>Licensed & Insured</span>  <span>Pearl, MS Local</span>  <span>Master Electricians</span>
        </div>
      </div>
    </section>
  );
}
