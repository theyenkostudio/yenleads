import Image from 'next/image';

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-stone-800 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo & Veteran Badge */}
        <div className="flex items-center gap-4">
          <Image src="/images/electrical-solutions/ess-logo.svg" alt="ESS Electrical Logo" width={80} height={40} />
         
          <img src="/images/electrical-solutions/veteran-owned.jpeg" alt="Veteran Owned" className="h-8 hidden sm:block border-stone-700 pl-4" />
        </div>
        
        {/* Navigation */}
        <div className="hidden lg:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400">
          <a href="#services" className="hover:text-blue-400 transition-colors">Industrial</a>
          <a href="#tesla" className="hover:text-blue-400 transition-colors">Tesla Energy</a>
          <a href="#generac" className="hover:text-blue-400 transition-colors">Backup Power</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>

        {/* Dispatch Phone */}
        <a href="tel:7695727597" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-600/20">
          (769) 572-7597
        </a>
      </div>
    </nav>
  );
}
