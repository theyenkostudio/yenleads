export default function BancroftHero() {
  return (
    <section className="relative lg:pt-0 pt-8 min-h-[75vh] bg-stone-900 flex items-center overflow-hidden">
      {/* Background Image of a modern East London Garage */}
      <img
        src="/images/bancroft/hero.webp"
        className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
        alt="Bancroft Garage Workshop"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block bg-yellow-400 text-blue-900 px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-6">
            EST. 1990 — 25+ Years Experience
          </div>
          <h1 className="text-5xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 italic">
            YOUR CAR. <br />
            <span className="text-blue-500">OUR PRIORITY.</span>
          </h1>
          <p className="text-xl text-stone-300 mb-10 leading-relaxed max-w-xl">
            East London&apos;s well-established MOT and repair testing centre.
            Professional care for European and Japanese models.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-blue-900 transition-all">
              View All Services
            </button>
            <button className="border-2 border-white text-white px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-blue-900 transition-all">
              Emergency Repairs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
