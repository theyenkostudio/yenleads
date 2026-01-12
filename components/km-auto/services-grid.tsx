import { Wrench, ShieldCheck, Activity, Mountain, Award } from 'lucide-react';

export default function KMServiceGrid() {
  const specializedServices = [
    {
      title: "Precision Wheel Alignments",
      desc: "State-of-the-art alignment technology to ensure your tires wear evenly and your vehicle tracks straight.",
      icon: <Wrench className="text-red-600" />,
      img: "/images/km/alignment.webp" // One of your extracted images
    },
    {
      title: "Transmission Specialists",
      desc: "Expert diagnostics and complete transmission repair for all makes and models.",
      icon: <Activity className="text-red-600" />,
      img: "/images/km/transmission.webp"
    },
    {
      title: "Brake Repair & Service",
      desc: "Complete brake system inspection and high-quality parts replacement for total stopping power.",
      icon: <ShieldCheck className="text-red-600" />,
      img: "/images/km/brake.webp"
    },
    {
      title: "Professional ATV Repair",
      desc: "Specialized service for all-terrain vehicles—because if it has an engine, we can fix it.",
      icon: <Mountain className="text-red-600" />,
      img: "/images/km/atv.webp"
    }
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-red-600 font-black uppercase tracking-[0.3em] text-xs mb-4">
              Expertise You Can Trust
            </h2>
            <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter text-stone-900 uppercase leading-none">
              PREMIER REPAIR <br /> FOR BRANDON & FLOWOOD.
            </h3>
          </div>
          
          <div className="flex gap-6 pb-2">
            <div className="flex flex-col items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
              <img src="/icons/ase-logo.png" alt="ASE Certified" className="h-12 w-auto" />
              <span className="text-[8px] font-bold uppercase mt-2">ASE Certified</span>
            </div>
            <div className="flex flex-col items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
              <img src="/icons/asa-logo.png" alt="ASA Member" className="h-12 w-auto" />
              <span className="text-[8px] font-bold uppercase mt-2">ASA Member</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {specializedServices.map((service, index) => (
            <div key={index} className="group bg-white overflow-hidden border border-stone-200 flex flex-col md:flex-row h-full">
              <div className="md:w-1/3 overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-center space-y-4">
                <div className="p-3 bg-stone-50 w-fit rounded-lg">
                  {service.icon}
                </div>
                <h4 className="text-xl font-black italic uppercase tracking-tighter text-stone-900">
                  {service.title}
                </h4>
                <p className="text-sm text-stone-500 leading-relaxed font-medium">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
