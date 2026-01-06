// components/ServicesGrid.tsx
export default function ServicesGrid() {
  const services = [
    {
      title: "Industrial Experts",
      description:
        "Handling power distribution, lighting systems, and equipment circuits with speed and safety for uninterrupted operations.",
      badge: "Power Distribution",
      image: "/images/electrical-solutions/industry.png", // Referenced from image_0a9f8b
    },
    {
      title: "Tesla Energy Partner",
      description:
        "Certified to install and support Tesla energy products, including Powerwall storage and high-speed EV charging solutions.",
      badge: "Certified Installer",
      image: "/images/electrical-solutions/tesla.png", // Referenced from image_0a9fce
    },
    {
      title: "Backup Power Systems",
      description:
        "Authorized Generac Dealers providing dependable backup power for homes and businesses across Mississippi.",
      badge: "Authorized Dealer",
      image: "/images/electrical-solutions/bolt.png", // Referenced from image_0a9f34
    },
  ];

  return (
    <section id="services" className="bg-black py-24 border-t border-stone-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Full-Spectrum{" "}
              <span className="text-blue-500 underline decoration-stone-800 underline-offset-8">
                Electrical Services
              </span>
            </h2>
            <p className="text-stone-400 text-lg">
              From full-home rewiring and panel upgrades to complex industrial
              documentation, we deliver code-compliant solutions with military
              precision.
            </p>
          </div>
          <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-xs">
            <span>Precision</span> <span>•</span> <span>Safety</span>{" "}
            <span>•</span> <span>Support</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-stone-900 border border-stone-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
            >
              {/* Background Image - Right Side, Faded */}
              <div
                className="absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-center opacity-10 group-hover:opacity-15 transition-opacity duration-500"
                style={{
                  backgroundImage: `url(${service.image})`,
                  maskImage:
                    "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
                }}
              />

              {/* Visual Accent: Blue Glow on Hover */}
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-stone-800 text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded mb-6">
                  {service.badge}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                <button className="flex items-center text-white text-xs font-bold uppercase tracking-widest group-hover:text-blue-400 transition-colors">
                  Learn More{" "}
                  <span className="ml-2 group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
