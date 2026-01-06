// components/Services.tsx
export default function Services() {
  const residential = ["A/C Repair & Install", "Heating & Furnace", "Smart Home Systems", "Residential Generators"];
  const commercial = ["Ice Machines (Manitowoc/Hoshizaki)", "Walk-in Coolers & Freezers", "XLT Ovens & Industrial Cooking", "Preventative Maintenance"];

  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Residential Side */}
          <div className="bg-white p-12 rounded-2xl shadow-sm border border-stone-100">
            <h3 className="text-3xl font-serif mb-6 text-stone-900 underline decoration-red-600 decoration-4">Residential Experts</h3>
            <p className="text-stone-600 mb-8">Delivering 24/7 support to keep your Magnolia State home running smoothly year-round.</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {residential.map(item => (
                <li key={item} className="flex items-center text-stone-700 text-sm font-medium">
                  <span className="text-red-600 mr-2">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Commercial Side */}
          <div className="bg-stone-900 p-12 rounded-2xl text-white shadow-xl">
            <h3 className="text-3xl font-serif mb-6 underline decoration-red-500 decoration-4">Commercial Specialty</h3>
            <p className="text-stone-400 mb-8">We service, repair, and install all commercial heating, cooling, and refrigeration equipment.</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {commercial.map(item => (
                <li key={item} className="flex items-center text-stone-300 text-sm font-medium">
                  <span className="text-red-500 mr-2">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
