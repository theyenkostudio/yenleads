// components/ContactHub.tsx
export default function ContactHub() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* Left: Direct Lines & Location */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-red-600 mb-6 font-sans">Get In Touch</h2>
          <h3 className="text-4xl font-bold text-stone-900 mb-8 tracking-tighter font-sans">
            Ready for your next <br /> precision service?
          </h3>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-stone-100 flex items-center justify-center rounded-full text-red-600 font-bold italic">Ph</div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1 font-sans">Primary Dispatch</p>
                <a href="tel:6019919663" className="text-2xl font-bold text-stone-900 hover:text-red-600 transition-colors font-sans">601-991-9663</a>
                <p className="text-stone-400 text-sm mt-1 font-sans">Secondary: 601-991-3220</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-stone-100 flex items-center justify-center rounded-full text-red-600 font-bold italic">Lo</div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-1 font-sans">Visit The Shop</p>
                <p className="text-stone-900 font-bold font-sans underline decoration-stone-200 underline-offset-4">114 Centre Street, Ridgeland, MS 39157</p>
                <p className="text-stone-400 text-sm mt-1 font-sans italic">Open Mon – Fri: 8am – 5pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Quick Inquiry Form */}
        <div className="bg-stone-50 p-10 rounded-2xl border border-stone-100 shadow-xl shadow-stone-200/50">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name *" className="w-full bg-white border border-stone-200 p-4 text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all font-sans" required />
              <input type="tel" placeholder="Phone Number" className="w-full bg-white border border-stone-200 p-4 text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all font-sans" />
            </div>
            <input type="email" placeholder="Email Address *" className="w-full bg-white border border-stone-200 p-4 text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all font-sans" required />
            <textarea placeholder="Tell us about your Toyota, Honda, Acura, or Lexus..." rows={4} className="w-full bg-white border border-stone-200 p-4 text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all font-sans"></textarea>
            <button className="w-full bg-red-600 hover:bg-stone-900 text-white font-bold py-5 uppercase tracking-widest text-xs transition-all duration-500">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
