import { BusinessData } from "@/lib/types/business";
import {
  CarIcon,
  BatteryIcon,
  BadgeIcon,
  AwardIcon,
  CheckIcon,
  StarIcon,
  ShieldIcon,
} from "@/components/ui/Icons";

interface CredentialsProps {
  business: BusinessData;
}

const iconComponents = {
  car: CarIcon,
  battery: BatteryIcon,
  badge: BadgeIcon,
  award: AwardIcon,
  check: CheckIcon,
  star: StarIcon,
  shield: ShieldIcon,
};

export function Credentials({ business }: CredentialsProps) {
  const { credentials, branding, shortName, name } = business;

  return (
    <section
      className="py-24 px-6"
      style={{
        backgroundColor: branding.backgroundColor,
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
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            The {shortName || name} Difference
          </h2>
        </div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {credentials.map((credential, index) => {
            const IconComponent = credential.icon
              ? iconComponents[credential.icon]
              : CheckIcon;

            return (
              <div
                key={index}
                className="flex gap-6 p-6 rounded-2xl transition-all duration-300"
                style={{
                  backgroundColor: branding.darkMode ? "#111111" : "#ffffff",
                  border: `1px solid ${branding.darkMode ? "#262626" : "#e5e7eb"}`,
                }}
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${branding.primaryColor}15` }}
                >
                  <IconComponent
                    className="w-8 h-8"
                    style={{ color: branding.primaryColor }}
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {credential.title}
                  </h3>
                  {credential.description && (
                    <p
                      className="leading-relaxed"
                      style={{ color: branding.darkMode ? "#9ca3af" : "#6b7280" }}
                    >
                      {credential.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
