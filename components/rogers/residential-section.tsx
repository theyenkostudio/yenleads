
export default function ResidentialServices() {
  const services = [
    "A/C Installation & Repair", "Heating & Furnace Services", 
    "Maintenance & Tune Ups", "Efficiency Testing", 
    "Ductwork & Ventilation", "Smart Home Systems", 
    "Residential Generators", "Emergency Services Available"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center" id="residential">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
          <img 
            src="/images/rogers-refrigeration/family.png" 
            alt="Family home comfort" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-6 rounded-lg shadow-lg">
            <p className="text-red-600 font-bold text-xl leading-tight">
              24/7 Emergency <br /> Support
            </p>
          </div>
        </div>
        
        <div>
          <h2 className="text-4xl font-serif text-stone-900 mb-6">Home Comfort Solutions</h2>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed">
            At Rogers Refrigeration, we specialize in delivering fast, reliable heating 
            and cooling services for homes across Central Mississippi. 
            From simple repairs to complete system installs, our licensed team ensures 
            your system runs smoothly year-round.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
            {services.map((item) => (
              <li key={item} className="flex items-center text-stone-700 font-medium">
                <span className="text-red-600 mr-2 text-lg">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
