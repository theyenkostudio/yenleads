import { Award, UserCheck, Calculator, Search, Star, Users, ShieldCheck, Percent } from 'lucide-react';

export default function ValueGrid() {
  const features = [
    { title: "Independent Local Business", icon: <Award className="text-red-600" />, desc: "Serving the Clapham community with pride since 1989." },
    { title: "Friendly, Expert Service", icon: <UserCheck className="text-red-600" />, desc: "Professional advice you can trust from a well-mannered team." },
    { title: "Free Estimates & Advice", icon: <Calculator className="text-red-600" />, desc: "Transparent pricing on all repairs with no hidden surprises." },
    { title: "Free Consultation & Diagnosis", icon: <Search className="text-red-600" />, desc: "Complimentary initial look at your vehicle's issues." },
    { title: "Great Reputation", icon: <Star className="text-red-600" />, desc: "Loyal customers across London who return to us year after year." },
    { title: "New Customers Welcome", icon: <Users className="text-red-600" />, desc: "Always happy to see new faces and cars in our workshop." },
    { title: "German Car Specialists", icon: <ShieldCheck className="text-red-600" />, desc: "Expertise in VW, Mercedes, Audi, Seat, BMW, and Mini." },
    { title: "10% Exclusive Discount", icon: <Percent className="text-red-600" />, desc: "Special offer for new customers on full service and MOT." },
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-red-600 font-black uppercase tracking-[0.3em] text-xs mb-4">Total Confidence</h2>
          <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter text-stone-900 uppercase">
            GREAT REASONS TO <br /> CHOOSE SAMS AUTOS.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="bg-white p-8 border border-stone-200 hover:border-red-600 transition-colors group">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="font-black italic uppercase tracking-tight text-stone-900 mb-3">
                {item.title}
              </h4>
              <p className="text-sm text-stone-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
