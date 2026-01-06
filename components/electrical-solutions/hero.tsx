
export default function ElectricalHero() {
  return (
    <section className="relative h-[95vh] flex items-center bg-black overflow-hidden">
      {/* Dynamic Background: Using a high-end industrial warehouse or solar array */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1558444479-c849cf58f17a?auto=format&fit=crop&q=80&w=2070')`
        }}
      />

      <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-1 border border-blue-500/30 bg-blue-500/10 rounded-full mb-6">
            <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em]">
              Central Mississippi&apos;s Energy Leaders
            </span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tighter mb-8">
            Precision Solutions. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Uninterrupted Power.
            </span>
          </h1>
          
          <p className="text-xl text-stone-400 mb-12 max-w-2xl leading-relaxed font-light">
            Veteran-owned electrical contracting specializing in industrial-scale power 
            distribution, certified Tesla energy storage, and Generac backup systems.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            <button className="bg-white text-black px-10 py-5 rounded-md font-bold text-sm uppercase tracking-widest hover:bg-blue-400 hover:text-white transition-all duration-500">
              Start Project Inquiry
            </button>
            <div className="flex items-center gap-4 px-6 border-l border-stone-800">
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Local Dispatch</p>
                <p className="text-white font-bold">Pearl, Mississippi</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Industrial Accent: Blue Glow Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
    </section>
  );
}
