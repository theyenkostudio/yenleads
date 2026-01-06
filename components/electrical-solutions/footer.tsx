// components/Footer.tsx
export default function Footer() {
  return (
    <footer id="contact" className="bg-stone-950 text-white pt-20 pb-12">
      <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-16 pb-16 border-b border-stone-900">
        
        {/* Brand & Socials */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold tracking-tighter">ESS ELECTRICAL</h3>
          <p className="text-stone-500 text-sm max-w-xs">
            Precision electrical solutions for Rankin County and Central Mississippi.
          </p>
          <div className="flex gap-4">
             {/* Facebook icon as specifically requested from the old footer */}
             <a href="#" className="w-10 h-10 border border-stone-800 flex items-center justify-center hover:bg-blue-600 transition-all">
               <span className="text-xs font-bold italic">f</span>
             </a>
          </div>
        </div>

        {/* Dispatch & Operations */}
        <div className="space-y-4 text-sm">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold">Operations Hub</h4>
          <p className="text-stone-300 italic">218 Saint Paul Street, Pearl MS 39208</p>
          <div className="pt-4 space-y-1">
             <p className="text-stone-500 uppercase text-[10px] tracking-widest">Office Hours</p>
             <p>Monday – Friday: 7:00am – 4:00pm</p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="space-y-4">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold">Project Dispatch</h4>
          <a href="tel:7695727597" className="block text-3xl font-bold hover:text-blue-500 transition-colors">
            (769) 572-7597
          </a>
          <p className="text-stone-500 text-sm">info.ess.ms@gmail.com</p>
        </div>

      </div>
      <div className="container mx-auto px-6 pt-10 text-[10px] uppercase tracking-[0.3em] text-stone-700 font-bold flex flex-wrap justify-between gap-4">
        <p>© 2026 Electrical Solutions and Services LLC</p>
        <p>Pearl, Mississippi | Veteran Owned</p>
      </div>
    </footer>
  );
}
