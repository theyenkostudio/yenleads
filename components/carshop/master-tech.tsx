// components/MasterTech.tsx
export default function MasterTech() {
  const achievements = [
    { label: "Experience", value: "40+ Years", detail: "Specializing in Honda & Acura since 1985" },
    { label: "Awarded", value: "National Champion", detail: "1st Place: Honda National Troubleshooting Contest" },
    { label: "Founded", value: "1997", detail: "Serving Ridgeland for nearly 3 decades" }
  ];

  return (
    <section className="py-24 bg-stone-900 text-white overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 border border-red-600/30 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
          <img 
            src="/images/carshop/master-technician.webp" 
            alt="David Morse - ASE Certified Master Technician" 
            className="relative z-10 w-full grayscale contrast-125"
          />
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-red-600 mb-6">Expertise You Can Trust</h2>
          <h3 className="text-5xl font-bold tracking-tighter mb-8 leading-tight">
            The standard for <br /> Japanese auto repair.
          </h3>
          <p className="text-stone-400 text-lg leading-relaxed mb-12">
            Led by ASE Certified Master Technician David Morse, our team brings factory-trained 
            precision to every service. David’s troubleshooting skills earned him a trip to Japan 
            after winning a national contest—excellence that he applies to every vehicle at CarShop Inc.
          </p>

          <div className="grid sm:grid-cols-3 gap-8 border-t border-stone-800 pt-12">
            {achievements.map((item) => (
              <div key={item.label}>
                <p className="text-3xl font-bold text-white mb-1">{item.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-red-600 mb-2">{item.label}</p>
                <p className="text-stone-500 text-xs leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
