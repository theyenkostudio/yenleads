/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

// components/MapAndQR.tsx
export default function MapAndQR() {
  return (
    <section className="bg-stone-50 py-24 border-t border-stone-100">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Interactive Google Map factored in from old site */}
        <div className="w-full h-112.5 bg-stone-200 rounded-2xl overflow-hidden shadow-inner border border-stone-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3369.3456789!2d-90.1345678!3d32.4123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8628328c688c3a7d%3A0x6a0a0a0a0a0a0a0a!2s114%20Centre%20St%2C%20Ridgeland%2C%20MS%2039157!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" 
          />
        </div>

        {/* The Working QR Hub */}
        <div className="text-center lg:text-left space-y-8">
          <div>
            <h3 className="text-3xl font-bold text-stone-900 mb-4 tracking-tighter">Instant GPS Navigation</h3>
            <p className="text-stone-600 mb-6 max-w-md">Scan the code with your phone camera to instantly load our Ridgeland location into your GPS.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="p-4 bg-white rounded-xl shadow-lg border border-stone-100 group">
              <img src="/images/carshop/qr-scanner.png" alt="Scan for GPS Directions" className="w-40 h-40 group-hover:scale-105 transition-transform" />
            </div>
            <div className="text-left space-y-4">
              <p className="text-xs font-bold text-red-600 uppercase tracking-widest">Arrival Instructions</p>
              <p className="text-sm text-stone-500 italic">Located on Centre Street, just off Highway 51 in the heart of Ridgeland.</p>
              <Link target="_blank"  href={"https://www.cybercommcentral.com/myqrpage.aspx?Id=29"} className="text-stone-900 font-bold underline decoration-red-600 underline-offset-8">Click for Manual Directions</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
