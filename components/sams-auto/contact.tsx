export function SamsContactStrip() {
  return (
    <div className="bg-stone-950 py-12 border-y border-white/5">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div className="space-y-2">
          <p className="text-red-600 text-[10px] font-black uppercase tracking-widest">Find Us</p>
          <p className="text-white font-bold text-sm leading-tight">
            Union Muse, off Union Road <br />
            Clapham, London, SW4 6JP
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-red-600 text-[10px] font-black uppercase tracking-widest">Tube Access</p>
          <p className="text-white font-bold text-sm leading-tight">
            Short walk from Stockwell (Northern Line) <br />
            and Clapham North (Victoria Line).
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-red-600 text-[10px] font-black uppercase tracking-widest">Opening Hours</p>
          <p className="text-white font-bold text-sm leading-tight">
            Mon–Fri: 8am–6pm <br />
            Sat: 9am–4pm | Sun: Closed
          </p>
        </div>
      </div>
    </div>
  );
}
