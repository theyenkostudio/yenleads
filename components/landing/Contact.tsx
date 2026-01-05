"use client";

import Image from "next/image";
import { BusinessData } from "@/lib/types/business";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "@/components/ui/Icons";

interface ContactProps {
  business: BusinessData;
}

export function Contact({ business }: ContactProps) {
  const { contact, branding, assets } = business;

  // Use CTA/contact image (4th or 5th image) or fallback to hero
  const ctaImage = assets?.images?.[4] || assets?.images?.[3] || assets?.heroImage;

  return (
    <section id="contact" className="overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Contact Info Side */}
        <div
          className="px-8 lg:px-16 py-16 lg:py-24"
          style={{
            backgroundColor: branding.darkMode ? "#111111" : "#ffffff",
            color: branding.textColor,
          }}
        >
          <span
            className="inline-block text-sm font-semibold tracking-wider uppercase mb-4"
            style={{ color: branding.primaryColor }}
          >
            Get In Touch
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>

          <p
            className="text-lg mb-10"
            style={{
              color: branding.darkMode
                ? "rgba(255,255,255,0.7)"
                : "rgba(0,0,0,0.6)",
            }}
          >
            Contact us today for a free estimate. We&apos;re here to help with all
            your needs.
          </p>

          {/* Contact Cards */}
          <div className="space-y-4">
            <a
              href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: branding.darkMode ? "#1a1a1a" : "#f9fafb",
                border: `1px solid ${branding.darkMode ? "#262626" : "#e5e7eb"}`,
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${branding.primaryColor}15` }}
              >
                <PhoneIcon className="w-5 h-5" style={{ color: branding.primaryColor }} />
              </div>
              <div>
                <p className="text-sm opacity-60">Call Us</p>
                <p className="font-semibold">{contact.phone}</p>
              </div>
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: branding.darkMode ? "#1a1a1a" : "#f9fafb",
                border: `1px solid ${branding.darkMode ? "#262626" : "#e5e7eb"}`,
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${branding.primaryColor}15` }}
              >
                <MailIcon className="w-5 h-5" style={{ color: branding.primaryColor }} />
              </div>
              <div>
                <p className="text-sm opacity-60">Email</p>
                <p className="font-semibold">{contact.email}</p>
              </div>
            </a>

            <div
              className="flex items-center gap-4 p-4 rounded-xl"
              style={{
                backgroundColor: branding.darkMode ? "#1a1a1a" : "#f9fafb",
                border: `1px solid ${branding.darkMode ? "#262626" : "#e5e7eb"}`,
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${branding.primaryColor}15` }}
              >
                <ClockIcon className="w-5 h-5" style={{ color: branding.primaryColor }} />
              </div>
              <div>
                <p className="text-sm opacity-60">Hours</p>
                <p className="font-semibold">{contact.hours}</p>
              </div>
            </div>

            <div
              className="flex items-center gap-4 p-4 rounded-xl"
              style={{
                backgroundColor: branding.darkMode ? "#1a1a1a" : "#f9fafb",
                border: `1px solid ${branding.darkMode ? "#262626" : "#e5e7eb"}`,
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${branding.primaryColor}15` }}
              >
                <MapPinIcon className="w-5 h-5" style={{ color: branding.primaryColor }} />
              </div>
              <div>
                <p className="text-sm opacity-60">Location</p>
                <p className="font-semibold">
                  {contact.address.city}, {contact.address.state}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Image Side */}
        <div className="relative h-[400px] lg:h-auto">
          {ctaImage && (
            <Image
              src={ctaImage}
              alt="Contact Us"
              fill
              className="object-cover"
            />
          )}
          {/* Overlay with CTA */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: `linear-gradient(to top, ${branding.primaryColor}ee, ${branding.primaryColor}99)`,
            }}
          >
            <div className="text-center text-white px-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Let&apos;s Talk
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Get your free estimate today
              </p>
              <a
                href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-lg font-semibold rounded-full transition-transform duration-200 hover:scale-105"
                style={{ color: branding.primaryColor }}
              >
                <PhoneIcon className="w-5 h-5" />
                {contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
