export default function KMFooter() {
  return (
    <footer className="bg-stone-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-16 pb-20 border-b border-stone-800">
        
        {/* Brand Column */}
        <div className="space-y-8">
          <div className="flex flex-col leading-none">
            <span className="text-3xl font-black italic tracking-tighter uppercase">
              K&M<span className="text-red-600">AUTO</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 mt-2">Repair & Service</span>
          </div>
          <p className="text-stone-400 text-sm leading-relaxed italic">
            "If it was easy, anybody could do it." Serving the Brandon community with expert care for all auto repair needs.
          </p>
        </div>

        {/* Links Column */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600">Explore</h4>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-stone-300">
            <li className="hover:text-white transition-colors cursor-pointer">Services</li>
            <li className="hover:text-white transition-colors cursor-pointer">Coupons</li>
            <li className="hover:text-white transition-colors cursor-pointer">Appointments</li>
            <li className="hover:text-white transition-colors cursor-pointer">Testimonials</li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600">The Shop</h4>
          <div className="space-y-4 text-sm text-stone-300">
            <p>1009 Depot Drive <br /> Brandon, MS 39042</p>
            <p className="font-black text-white">(601) 825-9093</p>
            <div className="flex gap-4 pt-2">
               <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                 <img src="/images/km/facebook.png" alt="Facebook" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
               </a>
               <a href="https://www.yelp.com/biz/k-and-m-auto-repair-brandon" target="_blank" rel="noopener noreferrer">
                 <img src="/images/km/yelp.png" alt="Yelp" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
               </a>
               <a href="https://www.google.com/search?q=K+%26+M+Auto+Repair+branden+ms#lrd=0x888281e0a27f8895:0xc9c34090d37de007,1,,,," target="_blank" rel="noopener noreferrer">
                 <img src="/images/km/google-G.png" alt="Google Reviews" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
               </a>
               <a href="https://www.surecritic.com/reviews/k--m-auto-repair?review_id=10875951" target="_blank" rel="noopener noreferrer">
                 <img src="/images/km/business_badge4.png" alt="SureCritic" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
               </a>
            </div>
          </div>
        </div>

        {/* Certs Column */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600">Certifications</h4>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white p-2 rounded grayscale hover:grayscale-0 transition-all">
              <img src="/images/km/asa-logo.png" alt="ASA" className="h-10 w-auto" />
            </div>
            <div className="bg-white p-2 rounded grayscale hover:grayscale-0 transition-all">
              <img src="/images/km/ase-cert.png" alt="ASE" className="h-10 w-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-600">
          © 2026 K & M Auto Repair. Professional Auto Care Brandon, MS.
        </p>
        <div className="flex gap-8 items-center">
           <span className="text-[9px] font-black text-stone-700 uppercase tracking-widest">Payments: Visa • MC • Amex • Disc</span>
           <div className="flex gap-4 text-[9px] font-black text-stone-500 uppercase tracking-widest">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
