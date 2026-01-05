import { BusinessData } from "@/lib/types/business";

interface FooterProps {
  business: BusinessData;
}

export function Footer({ business }: FooterProps) {
  const { name, shortName, contact, branding, services } = business;

  return (
    <footer
      style={{
        backgroundColor: branding.darkMode ? "#050505" : "#111827",
        color: branding.textColor,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">{shortName || name}</h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: branding.darkMode ? "#6b7280" : "#9ca3af" }}
            >
              {business.tagline}
            </p>
            {/* Social Links */}
            {contact.social?.facebook && (
              <div className="flex gap-3">
                <a
                  href={contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200"
                  style={{
                    backgroundColor: branding.darkMode ? "#1a1a1a" : "#374151",
                  }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            )}
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 5).map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: branding.darkMode ? "#6b7280" : "#9ca3af" }}
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: branding.darkMode ? "#6b7280" : "#9ca3af" }}
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: branding.darkMode ? "#6b7280" : "#9ca3af" }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: branding.darkMode ? "#6b7280" : "#9ca3af" }}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: branding.darkMode ? "#6b7280" : "#9ca3af" }}
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: branding.darkMode ? "#6b7280" : "#9ca3af" }}
                >
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: branding.darkMode ? "#6b7280" : "#9ca3af" }}
                >
                  {contact.email}
                </a>
              </li>
              <li
                className="text-sm"
                style={{ color: branding.darkMode ? "#6b7280" : "#9ca3af" }}
              >
                {contact.address.street}
                <br />
                {contact.address.city}, {contact.address.state}{" "}
                {contact.address.zip}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{
            borderTop: `1px solid ${branding.darkMode ? "#1a1a1a" : "#374151"}`,
          }}
        >
          <p
            className="text-sm"
            style={{ color: branding.darkMode ? "#6b7280" : "#9ca3af" }}
          >
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <p
            className="text-sm"
            style={{ color: branding.darkMode ? "#4b5563" : "#6b7280" }}
          >
            Demo by{" "}
            <a
              href="https://yenko.studio"
              className="transition-colors duration-200 hover:text-white"
              style={{ color: branding.primaryColor }}
              target="_blank"
              rel="noopener noreferrer"
            >
              yenko.studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
