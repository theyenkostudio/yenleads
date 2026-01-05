"use client";

import Image from "next/image";
import { BusinessData } from "@/lib/types/business";
import { PhoneIcon } from "@/components/ui/Icons";

interface HeroProps {
  business: BusinessData;
}

export function Hero({ business }: HeroProps) {
  const { hero, branding, contact, trustBadges, assets, name } = business;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      {assets?.heroImage && (
        <div className="absolute inset-0">
          <Image
            src={assets.heroImage}
            alt={name}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for readability */}
          <div
            className="absolute inset-0"
            style={{
              background: branding.darkMode
                ? "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.85) 100%)"
                : "linear-gradient(to bottom, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.95) 100%)",
            }}
          />
        </div>
      )}

      {/* Fallback solid background if no image */}
      {!assets?.heroImage && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: branding.backgroundColor }}
        />
      )}

      {/* Content */}
      <div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24"
        style={{ color: branding.textColor }}
      >
        {/* Trust Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {trustBadges.map((badge, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm"
              style={{
                backgroundColor: branding.darkMode
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(0,0,0,0.05)",
                border: `1px solid ${branding.darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"}`,
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: branding.primaryColor }}
              />
              {badge}
            </span>
          ))}
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl leading-[1.1]">
          {hero.headline}
        </h1>

        {/* Subheadline */}
        <p
          className="text-xl md:text-2xl max-w-2xl mb-10 leading-relaxed"
          style={{
            color: branding.darkMode
              ? "rgba(255,255,255,0.8)"
              : "rgba(0,0,0,0.7)",
          }}
        >
          {hero.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full transition-transform duration-200 hover:scale-105"
            style={{
              backgroundColor: branding.primaryColor,
              color: "#FFFFFF",
            }}
          >
            {hero.ctaText}
          </a>

          <a
            href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: branding.darkMode
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.05)",
              border: `2px solid ${branding.darkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.2)"}`,
            }}
          >
            <PhoneIcon className="w-5 h-5" />
            {contact.phone}
          </a>
        </div>

        {/* Emergency/24-7 Banner */}
        <div className="mt-12">
          <a
            href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
            className="inline-flex items-center gap-3 text-sm font-medium"
            style={{ color: branding.primaryColor }}
          >
            <span className="relative flex h-3 w-3">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: branding.primaryColor }}
              />
              <span
                className="relative inline-flex rounded-full h-3 w-3"
                style={{ backgroundColor: branding.primaryColor }}
              />
            </span>
            24/7 Emergency Service Available
          </a>
        </div>
      </div>
    </section>
  );
}
