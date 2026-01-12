import { Ticket, Scissors, Printer, Smartphone } from 'lucide-react';

export default function KMCoupons() {
  const coupons = [
    {
      title: "Full Synthetic Oil Change",
      value: "$10 OFF",
      desc: "Includes premium oil filter and 21-point safety inspection.",
      code: "KM-SYNTH"
    },
    {
      title: "Brake Service Special",
      value: "$25 OFF",
      desc: "Applies to front or rear brake pad and rotor replacement.",
      code: "KM-BRAKE"
    },
    {
      title: "A/C Performance Check",
      value: "FREE",
      desc: "Visual inspection and temperature performance test.",
      code: "KM-AC"
    }
  ];

  return (
    <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/5 -skew-x-12 translate-x-1/4" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-red-500 font-black uppercase tracking-[0.4em] text-xs mb-4">Limited Time Offers</h2>
          <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase mb-6">
            PREMIER SERVICE. <br /> <span className="text-red-600">BETTER VALUE.</span>
          </h3>
          <p className="text-stone-400 text-sm font-medium tracking-wide italic">
            "If it was easy, anybody could do it"—but saving money should be simple. 
            Show these on your phone or print at home.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {coupons.map((coupon, idx) => (
            <div key={idx} className="relative group">
              {/* The "Clipped" Coupon Look */}
              <div className="bg-white p-8 border-2 border-dashed border-stone-300 relative">
                {/* Visual "Hole Punch" notches for a coupon feel */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-stone-900 rounded-full" />
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-stone-900 rounded-full" />
                
                <div className="text-center space-y-4">
                  <span className="text-red-600 font-black text-4xl italic tracking-tighter">{coupon.value}</span>
                  <h4 className="text-stone-900 font-black uppercase text-sm tracking-tight leading-tight">{coupon.title}</h4>
                  <p className="text-stone-500 text-[10px] leading-relaxed uppercase font-bold tracking-widest">{coupon.desc}</p>
                  
                  <div className="pt-6 border-t border-stone-100 flex justify-between items-center">
                    <span className="text-[10px] font-black text-stone-300 uppercase italic">Code: {coupon.code}</span>
                    <button className="text-red-600 hover:text-stone-900 transition-colors">
                      <Printer size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-stone-500">
           <div className="flex items-center gap-3">
             <Smartphone size={20} className="text-red-600" />
             <span className="text-[10px] font-bold uppercase tracking-widest">Mobile redemption accepted</span>
           </div>
           <div className="flex items-center gap-3">
             <Scissors size={20} className="text-red-600" />
             <span className="text-[10px] font-bold uppercase tracking-widest">No printout necessary</span>
           </div>
        </div>
      </div>
    </section>
  );
}
