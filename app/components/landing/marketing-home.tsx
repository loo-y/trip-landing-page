import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

const products = [
  {
    title: "10-Day Classic Europe Seven Nations",
    duration: "10 days",
    departure: "Weekly from Hong Kong",
    price: "HKD 12,999",
    tag: "Hot",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Swiss Peaks and Lake Como Small Group",
    duration: "8 days",
    departure: "From Singapore, Apr-Oct",
    price: "USD 1,899",
    tag: "10 seats left",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Romance in France and Italy Escape",
    duration: "11 days",
    departure: "Flexible departure dates",
    price: "SGD 2,180",
    tag: "Flights included",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
  },
];

export function MarketingHomePage() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative min-h-screen bg-slate-950 text-white">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80"
          alt="European coastal vacation destination"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-x-0 top-24 h-64 bg-[radial-gradient(circle_at_top,rgba(0,204,255,0.28),transparent_62%)]" />

        <div className="shell relative z-10 flex min-h-screen flex-col">
          <header className="flex items-center justify-between py-6">
            <div>
              <p className="text-xl font-extrabold tracking-[0.18em] text-white">TRIP.COM ESCAPES</p>
              <p className="mt-1 text-xs uppercase tracking-[0.28em] text-white/60">Curated Group Vacations</p>
            </div>
            <nav className="hidden items-center gap-8 text-sm text-white/80 lg:flex">
              <a href="#packages" className="transition hover:text-white">Packages</a>
              <a href="#template" className="transition hover:text-white">Template</a>
              <a href="/trips/hong-kong/europe" className="transition hover:text-white">Dynamic sample</a>
            </nav>
          </header>

          <div className="grid flex-1 items-center gap-14 py-8 lg:grid-cols-[minmax(0,1.1fr)_420px] lg:py-14">
            <div className="max-w-3xl animate-rise">
              <p className="eyebrow">Campaign landing page</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Brand-forward travel storytelling for hero campaigns and seasonal launches.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/78 sm:text-lg">
                This remains your high-impact marketing version. It is useful for top-level promotions, brand campaigns, and polished first impressions.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button asChild variant="accent" size="lg">
                  <a href="#packages">Explore packages</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/trips/hong-kong/europe">Open configurable version</a>
                </Button>
              </div>
            </div>

            <aside className="glass animate-float rounded-[2rem] p-5 shadow-glow">
              <div className="rounded-[1.5rem] bg-slate-950/55 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200/80">Use case split</p>
                <div className="mt-6 space-y-4">
                  {[
                    ["Current page", "Campaign / brand-forward"],
                    ["New page", "Configurable from-to lander"],
                    ["Stack", "Remix route modules + React components"],
                    ["UI direction", "shadcn-style reusable primitives"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/45">{label}</p>
                      <p className="mt-2 text-sm font-medium text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="packages" className="shell py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Preserved page</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-ink sm:text-5xl">
            The original marketing-style landing page stays available as the premium showcase version.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.title} className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={product.image} alt={product.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/0 to-slate-950/0" />
                <Badge className="absolute left-4 top-4">{product.tag}</Badge>
                <div className="absolute inset-x-4 bottom-4 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">{product.duration}</p>
                  <h3 className="mt-2 text-2xl font-semibold leading-tight">{product.title}</h3>
                </div>
              </div>
              <div className="space-y-4 p-5">
                <p className="text-sm text-slate-500">{product.departure}</p>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">From</p>
                    <p className="mt-1 text-2xl font-bold text-primary">{product.price}</p>
                  </div>
                  <Button asChild size="sm">
                    <a href="/">View details</a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="template" className="bg-mist py-20 sm:py-24">
        <div className="shell flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">New direction</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-ink sm:text-5xl">
              A second page template now targets scalable “from X to Y” landing pages.
            </h2>
          </div>
          <Button asChild variant="default" size="lg">
            <a href="/trips/singapore/japan">See example route</a>
          </Button>
        </div>
      </section>
    </main>
  );
}
