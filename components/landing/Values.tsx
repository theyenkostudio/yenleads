import Image from "next/image";
import { BusinessData } from "@/lib/types/business";

interface ValuesProps {
  business: BusinessData;
}

export function Values({ business }: ValuesProps) {
  const { branding, assets, credentials } = business;

  // Use the comfort/values image (third image) or fallback
  const valuesImage = assets?.images?.[2];

  if (!valuesImage) return null;

  // Show top 4 values/credentials as simple list
  const values = credentials.slice(0, 4).map((c) => c.title);

  return (
    <section className="overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[500px]">
        {/* Values List Side */}
        <div
          className="relative flex items-center justify-center px-8 lg:px-16 py-16"
          style={{ backgroundColor: branding.darkMode ? "#0a0a0a" : "#f9fafb" }}
        >
          {/* Background blur decoration */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[100px] opacity-20"
            style={{ backgroundColor: branding.primaryColor }}
          />

          <div className="relative z-10 text-center lg:text-left">
            <ul className="space-y-4">
              {values.map((value, index) => (
                <li
                  key={index}
                  className="text-2xl md:text-3xl font-light italic"
                  style={{
                    color: branding.darkMode
                      ? "rgba(255,255,255,0.9)"
                      : "rgba(0,0,0,0.8)",
                  }}
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative h-[400px] lg:h-auto">
          <Image
            src={valuesImage}
            alt="Our Values"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
