
export default function ContactMailingList() {
  return (
    <section className="bg-stone-50 py-24 border-t border-stone-200" id="schedule">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-serif text-stone-900 mb-6">Schedule Online & Stay Connected</h2>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed">
            Join our mailing list for seasonal maintenance reminders or simply <br />
            <span className="font-bold text-red-600 underline">
              call us at <a href="tel:6018965747">601-896-5747</a>
            </span>.
          </p>
          <div className="flex items-center gap-4 text-stone-500 font-semibold uppercase text-xs tracking-[0.2em]">
            <span>Reliability</span> <span>•</span> <span>Expertise</span> <span>•</span> <span>24/7 Support</span>
          </div>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-xl shadow-stone-200/50 border border-stone-100">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Newsletter Subscription</label>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-stone-50 border border-stone-200 rounded-lg py-4 px-4 text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
                required
              />
            </div>
            <button className="w-full bg-stone-900 hover:bg-red-600 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all group">
              Subscribe Now
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
