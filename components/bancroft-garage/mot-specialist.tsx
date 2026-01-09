export default function MOTSpecialist() {
  return (
    <section className="py-20 bg-blue-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-yellow-400 font-black uppercase tracking-widest text-xs mb-4">
            Official Testing Station
          </h2>
          <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-6 leading-none">
            DON&apos;T TAKE A CHANCE <br /> WITH YOUR MOT.
          </h3>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            Our fully qualified MOT testers offer a complete same-day service.
            If your car doesn&apos;t pass the first time, we provide **Free
            Retests** to ensure you stay legal and safe on East London roads.
          </p>

          <ul className="space-y-4 mb-10">
            {[
              "Free retests on clutches and mechanical failures",
              "Full stockists of spare parts for quick fixes",
              "Competitive local East London rates",
              "Total confidence through Trust Your Garage membership",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm font-bold"
              >
                <div className="w-5 h-5 rounded-full bg-yellow-400 text-blue-900 flex items-center justify-center text-[10px]">
                  ✓
                </div>
                {item}
              </li>
            ))}
          </ul>

          <button className="bg-white text-blue-900 px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-yellow-400 transition-colors">
            Book Appointment: 020 7790 6128
          </button>
        </div>

        <div className="relative hidden lg:block">
          {/* Visual representing the MOT Checklist Diagram */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-2xl">
            <img
              src="/images/bancroft/mot-diagram.webp"
              alt="MOT Checklist"
              className="opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
