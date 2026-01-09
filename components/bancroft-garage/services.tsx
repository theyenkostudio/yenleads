import {
  ClipboardCheck,
  Settings,
  Activity,
  Cpu,
  ShieldCheck,
  Paintbrush,
} from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      title: "MOT Testing",
      description:
        "Fully qualified MOT testers providing thorough inspections with free retests available.",
      icon: <ClipboardCheck className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Mechanical Servicing",
      description:
        "Comprehensive servicing for all European and Japanese models to the highest standards.",
      icon: <Settings className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Gearboxes & Belts",
      description:
        "Expert repair and replacement for mission-critical engine and transmission components.",
      icon: <Activity className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Diagnostics",
      description:
        "Advanced engine diagnostics to resolve complex electrical and performance issues.",
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Safety & Brakes",
      description:
        "Complete safety checks on tyres, suspension, and specialized braking systems.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Bodywork",
      description:
        "Professional body repairs and spraying to restore your vehicle to factory finish.",
      icon: <Paintbrush className="w-8 h-8 text-blue-600" />,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-700 mb-4">
              Precision Maintenance
            </h2>
            <p className="text-4xl md:text-5xl font-black text-stone-900 tracking-tighter italic">
              COMPREHENSIVE <br /> GARAGE SOLUTIONS.
            </p>
          </div>
          <p className="text-stone-500 max-w-xs text-sm leading-relaxed">
            With over 25 years of experience, our polite and well-mannered team
            handles every vehicle with absolute respect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-100 border border-stone-100">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-10 hover:bg-stone-50 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-8 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4 uppercase tracking-tight italic">
                {service.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
