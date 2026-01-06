
export default function Footer() {
  const socials = [
    { name: 'Facebook', icon: 'f', href: '#' },
    { name: 'LinkedIn', icon: 'in', href: '#' },
    { name: 'X', icon: '𝕏', href: '#' },
    { name: 'Email', icon: '✉', href: 'mailto:info@rogersref.com' }
  ];

  return (
    <footer className="bg-stone-950 text-white pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16 pb-16 border-b border-stone-800">
          
          {/* 1. Brand & Social Presence */}
          <div>
            <h3 className="text-2xl font-serif mb-6 uppercase tracking-tighter">
              Rogers <span className="text-red-600">Refrigeration</span>
            </h3>
            <p className="text-stone-500 text-sm mb-8 leading-relaxed max-w-xs">
              Providing high-performance HVAC/R solutions across Central Mississippi 
              with 20+ years of technical expertise.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 border border-stone-700 flex items-center justify-center text-stone-400 hover:bg-red-600 hover:text-white hover:border-transparent transition-all duration-300"
                  aria-label={social.name}
                >
                  <span className="text-sm font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* 2. Business Intelligence */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-300">Office Hours</h4>
            <div className="text-stone-500 text-sm space-y-2">
              <p>Monday – Friday</p>
              <p className="text-white font-medium">7:00am – 4:00pm</p>
              <p className="pt-4 text-red-500 font-bold uppercase tracking-widest text-[10px]">
                24/7 Emergency Support Available
              </p>
            </div>
          </div>

          {/* 3. Direct Connection */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-300">Contact Hub</h4>
            <div className="space-y-4">
              <a href="tel:6018965747" className="block group">
                <span className="text-stone-500 text-xs block mb-1">Brandon, MS Dispatch:</span>
                <span className="text-2xl font-serif text-white group-hover:text-red-600 transition-colors">
                  601-896-5747
                </span>
              </a>
              <p className="text-stone-500 text-sm underline underline-offset-8 decoration-stone-800">
                info@rogersref.com
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-stone-700 font-bold">
          <p>© 2026 Rogers Refrigeration LLC</p>
          <div className="flex gap-8">
            <span>Licensed & Insured</span>
            <span className="text-stone-500">Veteran Owned</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
