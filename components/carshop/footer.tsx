import Image from "next/image";
export default function CarshopFooter() {
  return (
    <footer className="bg-stone-950 text-white pt-20 pb-12">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-16 pb-16 border-b border-stone-900">
        <div className="space-y-6">
          <Image
            src="/images/carshop/carshop-white.svg"
            alt="Carshop Logo"
            width={150}
            height={50}
            className="object-contain"
          />
          <p className="text-stone-500 text-sm font-sans leading-relaxed">
            Founded in 1997. Built on 40 years of factory-trained automotive
            excellence. Mississippi&apos;s premier specialist for only four car
            lines.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-red-600 font-bold font-sans">
            Specialists In
          </h4>
          <ul className="text-stone-400 text-sm space-y-2 font-sans">
            <li className="hover:text-white transition-colors">
              Toyota Maintenance
            </li>
            <li className="hover:text-white transition-colors">
              Honda Performance
            </li>
            <li className="hover:text-white transition-colors">
              Lexus Luxury Care
            </li>
            <li className="hover:text-white transition-colors">
              Acura Precision Repair
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-red-600 font-bold font-sans">
            Follow Our Work
          </h4>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-stone-400 hover:text-white transition-colors font-sans"
          >
            <span className="text-xs font-bold italic font-sans underline decoration-stone-800">
              Facebook Page
            </span>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-10 text-[10px] uppercase tracking-[0.4em] text-stone-700 font-bold flex flex-wrap justify-between gap-4 font-sans">
        <p>© 2026 CarShop, Inc Ridgeland MS</p>
        <p>Master Certified Engineering</p>
      </div>
    </footer>
  );
}
