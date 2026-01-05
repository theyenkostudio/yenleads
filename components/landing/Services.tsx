import { BusinessData } from "@/lib/types/business";
import {
  BoltIcon,
  HomeIcon,
  BuildingIcon,
  CarIcon,
  ShieldIcon,
  WrenchIcon,
  BatteryIcon,
  SunIcon,
} from "@/components/ui/Icons";

interface ServicesProps {
  business: BusinessData;
}

const iconComponents = {
  bolt: BoltIcon,
  home: HomeIcon,
  building: BuildingIcon,
  car: CarIcon,
  shield: ShieldIcon,
  wrench: WrenchIcon,
  battery: BatteryIcon,
  sun: SunIcon,
};

export function Services({ business }: ServicesProps) {
  const { services, servicesHeadline, servicesSubheadline, branding } = business;

  return (
    <section
      id="services"
      className="py-24 px-6"
      style={{
        backgroundColor: branding.darkMode ? "#111111" : "#f9fafb",
        color: branding.textColor,
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-sm font-semibold tracking-wider uppercase mb-4"
            style={{ color: branding.primaryColor }}
          >
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {servicesHeadline || "Our Services"}
          </h2>
          {servicesSubheadline && (
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: branding.darkMode ? "#9ca3af" : "#6b7280" }}
            >
              {servicesSubheadline}
            </p>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
              ? iconComponents[service.icon]
              : BoltIcon;

            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: branding.darkMode ? "#1a1a1a" : "#ffffff",
                  border: `1px solid ${branding.darkMode ? "#262626" : "#e5e7eb"}`,
                }}
              >
                {/* Hover Glow Effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                  style={{ backgroundColor: `${branding.primaryColor}10` }}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
                  style={{
                    backgroundColor: `${branding.primaryColor}15`,
                  }}
                >
                  <IconComponent
                    className="w-7 h-7 transition-colors duration-300"
                    style={{ color: branding.primaryColor }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p
                  className="leading-relaxed"
                  style={{ color: branding.darkMode ? "#9ca3af" : "#6b7280" }}
                >
                  {service.description}
                </p>

                {/* Arrow indicator on hover */}
                <div
                  className="mt-6 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: branding.primaryColor }}
                >
                  Learn more
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
