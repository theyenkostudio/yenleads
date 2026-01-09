/* eslint-disable @next/next/no-img-element */
// app/about/page.tsx - Hero Section
export default function AboutHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-stone-900">
      {/* The Team Legacy Image */}
      <img 
        src="/images/carshop/the-team.webp" 
        alt="The CarShop Inc. Specialist Team" 
        className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
      />
      
      {/* Branding Overlay */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-white text-5xl md:text-7xl font-black italic tracking-tighter mb-4">
          OUR <span className="text-red-600">LEGACY</span>
        </h1>
        <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
        <p className="text-stone-200 text-lg md:text-xl font-bold uppercase tracking-[0.4em]">
          165 Years of Combined Experience
        </p>
         <p className="text-xl text-stone-400 max-w-2xl mx-auto italic leading-relaxed">
            Founded in 1997 by David and Edna Morse, CarShop Inc. was built on a single 
            promise: doing the job right the first time.
          </p>
      </div>
      
      <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-transparent to-transparent" />
    </section>
  );
}
