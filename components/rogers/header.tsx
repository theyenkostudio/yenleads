// components/Header.tsx
export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-serif font-bold tracking-tighter text-stone-900">
          ROGERS <span className="text-red-600">REFRIGERATION</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-stone-500">
          <a href="#residential" className="hover:text-red-600 transition-colors">Residential</a>
          <a href="#commercial" className="hover:text-red-600 transition-colors">Commercial</a>
          <a href="#schedule" className="hover:text-red-600 transition-colors">Schedule</a>
        </div>

        <a href="tel:6018965747" className="bg-stone-900 text-white px-5 py-2.5 rounded text-sm font-bold hover:bg-red-600 transition-colors">
          601-896-5747
        </a>
      </div>
    </nav>
  );
}
