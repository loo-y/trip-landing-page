import { Heart, PlaneTakeoff, Star } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import type { LandingConfig } from "~/lib/landing-data";

type Props = {
  config: LandingConfig;
};

export function ConfigurableCollectionPage({ config }: Props) {
  return (
    <main className="overflow-x-hidden bg-white">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <img src={config.heroImage} alt={`${config.to} travel destination`} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="shell relative z-10 py-6 sm:py-8">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xl font-extrabold tracking-[0.18em]">TRIP.COM ESCAPES</p>
              <p className="mt-1 text-xs uppercase tracking-[0.28em] text-white/60">Configurable route module</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="dark">{config.from}</Badge>
              <PlaneTakeoff className="h-4 w-4 text-sky-200" />
              <Badge variant="dark">{config.to}</Badge>
            </div>
          </header>

          <div className="grid min-h-[calc(100svh-96px)] items-center gap-12 py-10 lg:grid-cols-[minmax(0,1.05fr)_440px]">
            <div className="max-w-3xl animate-rise">
              <p className="eyebrow">{config.from} to {config.to}</p>
              <h1 className="mt-5 text-5xl font-extrabold leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                {config.heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
                {config.heroBody}
              </p>
              <p className="mt-4 max-w-xl text-sm uppercase tracking-[0.22em] text-white/54">
                Built for {config.audience}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild variant="accent" size="lg">
                  <a href="#products">See matched products</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/">Back to campaign home</a>
                </Button>
              </div>

              <div className="mt-12 grid gap-6 border-t border-white/12 pt-8 sm:grid-cols-3">
                {config.stats.map((stat) => (
                  <div key={stat.value}>
                    <p className="text-2xl font-bold sm:text-3xl">{stat.value}</p>
                    <p className="mt-2 text-sm text-white/68">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="glass rounded-[2rem] p-5 shadow-glow">
              <div className="rounded-[1.5rem] bg-slate-950/55 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200/80">Route-driven config</p>
                <div className="mt-6 space-y-4">
                  {config.filters.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/45">{item.label}</p>
                      <p className="mt-2 text-sm font-medium text-white">{item.value}</p>
                    </div>
                  ))}
                </div>

                <Button className="mt-6 w-full" size="lg">
                  Open matching inventory
                </Button>
                <p className="mt-3 text-center text-xs text-white/52">
                  Later this panel can bind to CMS config, query params, or API data.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="products" className="shell py-20 sm:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Reusable product module</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-ink sm:text-5xl">
              Same layout, different inventory. Only the config changes.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-slate-600">
            This is the version you can scale. Keep a single route and a shared component tree, then swap metadata, hero copy, and featured products per market pair.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {config.products.map((product) => (
            <article
              key={product.title}
              className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.14)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={product.image} alt={product.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/0 to-slate-950/0" />
                <Badge className="absolute left-4 top-4">{product.tag}</Badge>
                <button
                  aria-label={`Save ${product.title} to wishlist`}
                  className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-white/12 text-white backdrop-blur-md"
                >
                  <Heart className="h-4 w-4" />
                </button>
                <div className="absolute inset-x-4 bottom-4 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">{product.duration}</p>
                  <h3 className="mt-2 text-2xl font-semibold leading-tight">{product.title}</h3>
                </div>
              </div>

              <div className="space-y-5 p-5">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>{product.departure}</span>
                  <span className="inline-flex items-center gap-1 font-medium text-slate-700">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    {product.rating}
                  </span>
                </div>
                <p className="text-sm text-slate-500">{product.reviews}</p>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">From</p>
                    <p className="mt-1 text-2xl font-bold text-primary">{product.price}</p>
                  </div>
                  <Button size="sm">View details</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">How to scale it</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-ink sm:text-5xl">
              Route params now drive the page. Next step is moving config out of code.
            </h2>
            <div className="mt-8 space-y-4 text-base leading-7 text-slate-600">
              <p>Current route shape: <code>/trips/:from/:to</code></p>
              <p>Examples: <code>/trips/hong-kong/europe</code>, <code>/trips/singapore/japan</code></p>
              <p>Later you can source the config from CMS, JSON files, or API-backed inventory.</p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-[0_30px_80px_rgba(2,12,27,0.18)]">
            <p className="text-sm uppercase tracking-[0.26em] text-sky-200/70">Reusable FAQ module</p>
            <Accordion type="single" collapsible className="mt-6 space-y-4">
              {config.faqs.map((item, index) => (
                <AccordionItem key={item.question} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
}
