import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getBusinessBySlug,
  getAllBusinessSlugs,
} from "@/lib/businesses";
import {
  Hero,
  Services,
  Credentials,
  About,
  Values,
  Contact,
  Footer,
} from "@/components/landing";

interface PageProps {
  params: Promise<{
    businessSlug: string;
  }>;
}

// Generate static params for all businesses
export async function generateStaticParams() {
  const slugs = getAllBusinessSlugs();
  return slugs.map((slug) => ({
    businessSlug: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { businessSlug } = await params;
  const business = getBusinessBySlug(businessSlug);

  if (!business) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${business.name} | ${business.tagline}`,
    description: business.hero.subheadline,
    openGraph: {
      title: `${business.name} | ${business.tagline}`,
      description: business.hero.subheadline,
      type: "website",
    },
  };
}

export default async function BusinessPage({ params }: PageProps) {
  const { businessSlug } = await params;
  const business = getBusinessBySlug(businessSlug);

  if (!business) {
    notFound();
  }

  return (
    <main>
      <Hero business={business} />
      <Services business={business} />
      <Credentials business={business} />
      <About business={business} />
      <Values business={business} />
      <Contact business={business} />
      <Footer business={business} />
    </main>
  );
}
