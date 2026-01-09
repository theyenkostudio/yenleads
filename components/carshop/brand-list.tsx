// components/BrandGrid.tsx
export default function BrandGrid() {
  const brands = [
    { name: "Toyota", sub: "Reliability Perfected", img: "/images/carshop/toyota.webp" },
    { name: "Honda", sub: "Engineering Excellence", img: "/images/carshop/honda.webp" },
    { name: "Lexus", sub: "Luxury Maintained", img: "/images/carshop/lexus.webp" },
    { name: "Acura", sub: "Precision Performance", img: "/images/carshop/cura.webp" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-red-600 mb-4">Our Specialization</h2>
          <p className="text-4xl font-bold text-stone-900 tracking-tighter">
            Specialized in only four. <br /> Master of them all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <div key={brand.name} className="group relative overflow-hidden rounded-xl aspect-[4/5] bg-stone-100">
              <img 
                src={brand.img} 
                alt={`${brand.name} specialization`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-bold text-white mb-1">{brand.name}</h3>
                <p className="text-stone-300 text-xs uppercase tracking-widest font-medium">{brand.sub}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 border border-stone-100 bg-stone-50 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-stone-600 max-w-2xl text-center md:text-left">
            Because we specialize in only these car lines, we have the specific tools, factory knowledge, and 
            ongoing training to get the job done right the first time.
          </p>
          <button className="whitespace-nowrap px-8 py-4 border-2 border-stone-900 text-stone-900 font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all">
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
}
