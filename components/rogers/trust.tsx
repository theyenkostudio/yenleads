// components/TrustBar.tsx
export default function TrustBar() {
  const credentials = [
    { label: "Tesla Certified", sub: "Energy Partner", icon: "⚡" },
    { label: "Generac Authorized", sub: "Power Dealer", icon: "🔋" },
    { label: "Veteran Owned", sub: "Service First", icon: "🇺🇸" },
    { label: "20+ Years Exp", sub: "Central Mississippi", icon: "📍" }
  ];

  return (
    <section className="bg-white border-y border-stone-200 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {credentials.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center md:items-start text-center md:text-left group"
            >
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <h4 className="font-bold text-stone-900 tracking-tight uppercase text-sm md:text-base">
                  {item.label}
                </h4>
              </div>
              <p className="text-xs text-stone-500 font-medium tracking-widest uppercase">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
