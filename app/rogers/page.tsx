// app/page.tsx

import CommercialServices from "@/components/rogers/commercial-section";
import ConversionHub from "@/components/rogers/conversion-hub";
import Footer from "@/components/rogers/footer";
import Header from "@/components/rogers/header";
import Hero from "@/components/rogers/hero";
import ResidentialServices from "@/components/rogers/residential-section";
// import TrustBar from "@/components/rogers/trust";


export default function LandingPage() {
  return (
    <main className="bg-stone-50 text-stone-900">
      <Header />
      {/* 1. HERO SECTION: Emotional & High-Authority */}
     <Hero />

      {/* 2. TRUST BAR: Strategic Authority Logos */}
     {/* <TrustBar /> */}

      {/* 3. DUAL-SERVICE TRACKS: High-Profit Niches */}
      {/* <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Mastering the Details of Every Space</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Licensed, insured, and certified to handle everything from residential smart homes to commercial ice machines.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-white p-10 rounded-xl shadow-sm border border-stone-200 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4">Residential Solutions</h3>
              <ul className="space-y-3 text-stone-600 mb-8">
                <li>• High-Efficiency A/C & Heating</li>
                <li>• Tesla Powerwall & EV Charging</li>
                <li>• Smart Home Thermostats & IAQ</li>
              </ul>
              <a href="/residential" className="text-red-600 font-bold group-hover:underline">Explore Home Comfort &rarr;</a>
            </div>
            
            <div className="group bg-stone-900 text-white p-10 rounded-xl shadow-sm hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4">Commercial & Industrial</h3>
              <ul className="space-y-3 text-stone-400 mb-8">
                <li>• Specialized Ice Machine Service</li>
                <li>• Walk-in Coolers & Industrial Freezers</li>
                <li>• Preventative Maintenance Plans</li>
              </ul>
              <a href="/commercial" className="text-red-500 font-bold group-hover:underline">Commercial Capability &rarr;</a>
            </div>
          </div>
        </div>
      </section> */}


      <ResidentialServices />
      <CommercialServices />
      <ConversionHub />
      <Footer />
    </main>
  );
}
