import Link from "next/link";
import Image from "next/image";

export default function CarshopHeader() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-stone-100 py-4 shadow-sm">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/carshop">
           <Image
              src="/images/carshop/carshop-black.svg"
              alt="Carshop Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>

        <div className="hidden lg:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500">
          {/* <Link href="/carshop" className="hover:text-red-600 transition-colors">Specialists</Link> */}
          <Link href="/carshop/about" className="text-stone-900 pb-1">
            About Our Team
          </Link>
          {/* <Link href="/#contact" className="hover:text-red-600 transition-colors">Location</Link> */}
        </div>

        {/* <div className="hidden lg:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500">
          <a href="#" className="hover:text-red-600">Toyota</a>
          <a href="#" className="hover:text-red-600">Honda</a>
          <a href="#" className="hover:text-red-600">Lexus</a>
          <a href="#" className="hover:text-red-600">Acura</a>
        </div> */}

        <div className="flex items-center gap-6">
          <a
            href="tel:6019919663"
            className="hidden md:block text-sm font-bold text-stone-900"
          >
            601-991-9663
          </a>
          <button className="bg-red-600 text-white px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-stone-900 transition-all">
            Schedule
          </button>
        </div>
      </div>
    </nav>
  );
}
