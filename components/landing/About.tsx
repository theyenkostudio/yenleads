import Image from "next/image";
import { BusinessData } from "@/lib/types/business";
import { CheckIcon } from "@/components/ui/Icons";

interface AboutProps {
  business: BusinessData;
}

export function About({ business }: AboutProps) {
  const { about, branding, assets } = business;

  // Get second image for about section (or fallback)
  const aboutImage = assets?.images?.[1] || assets?.heroImage;

  return (
    <section
      id="about"
      className="py-0 overflow-hidden"
      style={{ backgroundColor: branding.backgroundColor }}
    >
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Image Side */}
        <div className="relative h-[400px] lg:h-auto order-2 lg:order-1">
          {aboutImage ? (
            <Image
              src={aboutImage}
              alt="About"
              fill
              className="object-cover"
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: branding.darkMode ? "#111111" : "#f3f4f6",
              }}
            />
          )}
          {/* Subtle overlay on image */}
          <div
            className="absolute inset-0"
            style={{
              background: branding.darkMode
                ? "linear-gradient(to right, rgba(0,0,0,0.3), transparent)"
                : "linear-gradient(to right, rgba(255,255,255,0.2), transparent)",
            }}
          />
        </div>

        {/* Content Side */}
        <div
          className="flex items-center order-1 lg:order-2"
          style={{
            backgroundColor: branding.darkMode ? "#111111" : "#f9fafb",
          }}
        >
          <div
            className="px-8 lg:px-16 py-16 lg:py-24"
            style={{ color: branding.textColor }}
          >
            <span
              className="inline-block text-sm font-semibold tracking-wider uppercase mb-4"
              style={{ color: branding.primaryColor }}
            >
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {about.headline}
            </h2>

            <p
              className="text-lg leading-relaxed mb-8"
              style={{
                color: branding.darkMode
                  ? "rgba(255,255,255,0.7)"
                  : "rgba(0,0,0,0.6)",
              }}
            >
              {about.description}
            </p>

            {/* Highlights */}
            {about.highlights && about.highlights.length > 0 && (
              <ul className="space-y-4">
                {about.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${branding.primaryColor}20` }}
                    >
                      <CheckIcon
                        className="w-4 h-4"
                        style={{ color: branding.primaryColor }}
                      />
                    </div>
                    <span
                      className="font-medium"
                      style={{
                        color: branding.darkMode
                          ? "rgba(255,255,255,0.9)"
                          : "rgba(0,0,0,0.8)",
                      }}
                    >
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
