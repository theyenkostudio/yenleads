// components/SpecialtySection.tsx
export default function SpecialtySection() {
  return (
    <section className="bg-stone-950 py-24 relative overflow-hidden">
      {/* Background Effect: Industrial Circuit Pattern */}
      <div className="absolute inset-0 opacity-5 grayscale invert" style={{ backgroundImage: "url('/circuit-pattern.png')" }} />
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-white mb-8">
            Commercial & <br /> <span className="text-blue-500">Inspection Expertise</span>
          </h2>
          <div className="space-y-8 text-stone-400 leading-relaxed">
            <div className="border-l-2 border-blue-500 pl-6 hover:bg-white/5 p-4 rounded-r transition-all">
              <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-sm italic">Code-Compliant Performance</h4>
              <p className="text-sm">We provide reliable electrical work for commercial spaces, maintaining systems with speed, safety, and professionalism to keep businesses uninterrupted.</p>
            </div>
            <div className="border-l-2 border-stone-800 pl-6 hover:bg-white/5 p-4 rounded-r transition-all">
              <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-sm italic">Detailed Home Inspections</h4>
              <p className="text-sm">Whether buying, selling, or maintaining, ESS delivers clear documentation and peace of mind to protect what matters most.</p>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-2 bg-blue-600/20 blur-2xl rounded-full group-hover:bg-blue-600/30 transition-all duration-700" />
          <div className="relative rounded-2xl border border-stone-800 overflow-hidden shadow-2xl">
            <img 
              src="/inspections-visual.jpg" 
              alt="Licensed electrician conducting detailed home inspection" 
              className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
