
export default function CommercialServices() {
  const brands = [
    "Manitowoc", "Hoshizaki", "XLT Ovens", "Heatcraft", 
    "Kolpak", "Beverage Air", "True"
  ];

  return (
    <section className="py-20 bg-stone-900 text-white overflow-hidden" id="commercial">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-4xl font-serif mb-6">Commercial & Industrial</h2>
          <p className="text-stone-400 text-lg mb-8 leading-relaxed">
            We service, repair, and install all commercial heating and cooling equipment. 
            Holding several major manufacturer certifications, we specialize in high-stakes 
            environments like industrial kitchens and cold storage.
          </p>
          
          <div className="space-y-6">
            <div className="p-6 bg-stone-800 rounded-xl border border-stone-700">
              <h4 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-3">Certified Expertise</h4>
              <p className="text-stone-300">Specialize in ice machines, coolers, and freezers.</p>
            </div>
            
            <div>
              <p className="text-sm font-bold text-stone-500 mb-4 uppercase tracking-widest">Authorized Service For:</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-stone-300 font-medium italic">
                {brands.map(brand => (
                  <span key={brand}>{brand}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="absolute -inset-4 bg-red-600/20 blur-3xl rounded-full" />
          <img 
            src="/images/rogers-refrigeration/technician.png" 
            alt="Commercial HVAC Technician" 
            className="relative rounded-2xl shadow-2xl border border-stone-800"
          />
        </div>
      </div>
    </section>
  );
}
