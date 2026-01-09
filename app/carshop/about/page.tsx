import AboutHero from "@/components/carshop/about-hero";
import ContactHub from "@/components/carshop/contact";
import CarshopFooter from "@/components/carshop/footer";
import CarshopHeader from "@/components/carshop/header";
import MapAndQR from "@/components/carshop/map-and-qr";

// app/about/page.tsx
export default function AboutPage() {
  const team = [
    {
      name: "David Morse",
      role: "Founder & Master Tech",
      xp: "40+ Years",
      bio: "Honda National Troubleshooting Champion. Factory trained in Japan.",
    },
    {
      name: "Steve McClintock",
      role: "Service Advisor",
      xp: "40+ Years",
      bio: "Service and parts specialist with over 20 years at CarShop Inc.",
    },
    {
      name: "Davis May",
      role: "Service Manager",
      xp: "10+ Years",
      bio: "Degree in Automotive Restoration from McPherson College.",
    },
    {
      name: "Austin Sorey",
      role: "Master Technician",
      xp: "20+ Years",
      bio: "Over 7 years of specialized excellence at CarShop Inc.",
    },
    {
      name: "Tony Resch",
      role: "Master Technician",
      xp: "35+ Years",
      bio: "Deep expertise in Japanese engineering and maintenance.",
    },
  ];

  return (
    <main className="bg-white">
      <CarshopHeader />
      <AboutHero />

      <section className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member) => (
            <div
              key={member.name}
              className="border-l-4 border-stone-100 p-8 hover:border-red-600 transition-all bg-stone-50"
            >
              <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2">
                {member.xp} Experience
              </p>
              <h3 className="text-2xl font-bold text-stone-900 mb-1">
                {member.name}
              </h3>
              <p className="text-stone-500 text-sm font-medium mb-4 italic">
                {member.role}
              </p>
              <p className="text-stone-600 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      <MapAndQR />
      <ContactHub />
      <CarshopFooter />
    </main>
  );
}
