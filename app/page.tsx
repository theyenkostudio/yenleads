import Link from "next/link";
import { getAllBusinesses } from "@/lib/businesses";

export default function Home() {
  const businesses = getAllBusinesses();

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <main className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm text-zinc-500 mb-2">yenko.studio</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Website Demos
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl">
            Custom landing page demos built for specific businesses. Click a
            card to view the demo page.
          </p>
        </div>

        {/* Business Cards */}
        {businesses.length > 0 ? (
          <div className="grid gap-6">
            {businesses.map((business) => (
              <Link
                key={business.slug}
                href={`/${business.slug}`}
                className="block p-6 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-xl font-semibold">{business.name}</h2>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${business.branding.primaryColor}20`,
                          color: business.branding.primaryColor,
                        }}
                      >
                        {business.industry}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-sm mb-3">
                      {business.location}
                    </p>
                    <p className="text-zinc-500 text-sm">{business.tagline}</p>
                  </div>
                  <div className="text-zinc-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-zinc-800">
                  {business.trustBadges.slice(0, 3).map((badge: string, i: number) => (
                    <span
                      key={i}
                      className="text-xs text-zinc-500 bg-zinc-800 px-2 py-1 rounded"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-zinc-500">
            <p>No demos yet. Add a business to get started.</p>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-600">
          <p>
            Built by{" "}
            <a
              href="https://yenko.studio"
              className="text-zinc-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              yenko.studio
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
