import { CalendarDays, Clock3, MapPinned, Star } from "lucide-react";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

export const featuredDeal = {
  title: "12-Day Grand Europe Highlights with Swiss Alps",
  summary:
    "A flagship 2026 package with flights, alpine rail segments, city-center hotels, and multilingual guided support.",
  price: "USD 2,399",
  departure: "From Hong Kong / Singapore",
  dates: "May - October 2026",
  duration: "12 days",
  rating: "4.9",
  reviews: "1,842 reviews",
  image:
    "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80",
};

export const deals = [
  {
    title: "Classic Europe Seven Nations",
    price: "USD 1,599",
    tag: "Hot",
    departure: "Hong Kong",
    duration: "10 days",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Swiss Peaks and Lake Como",
    price: "USD 1,899",
    tag: "Small group",
    departure: "Singapore",
    duration: "8 days",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "France and Italy Romance Trail",
    price: "USD 2,180",
    tag: "Flights included",
    departure: "Hong Kong",
    duration: "11 days",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Nordic Capitals with Aurora Option",
    price: "USD 2,280",
    tag: "Seasonal",
    departure: "Singapore",
    duration: "9 days",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Iberian Coast and Culture Escape",
    price: "USD 1,730",
    tag: "New",
    departure: "Hong Kong",
    duration: "8 days",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Balkan Highlights Explorer",
    price: "USD 1,680",
    tag: "Value",
    departure: "Singapore",
    duration: "9 days",
    rating: "4.5",
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Scotland Highlands and Edinburgh Rail",
    price: "USD 1,920",
    tag: "Rail",
    departure: "Hong Kong",
    duration: "7 days",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Central Europe Christmas Markets",
    price: "USD 1,560",
    tag: "Winter",
    departure: "Singapore",
    duration: "6 days",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1200&q=80",
  },
];

const chips = ["All deals", "Europe", "Japan", "Family", "Small group", "Flights included", "Under USD 2,000"];

export const seoFaqs = [
  {
    question: "What is included in these deals?",
    answer:
      "Most deals include hotels, guided itinerary elements, selected transfers, and visible package inclusions. Some also include round-trip flights and visa guidance.",
  },
  {
    question: "Are these deals good for first-time travelers?",
    answer:
      "Yes. Featured products prioritize easy routing, multilingual support, and balanced pacing, which makes them suitable for first-time Europe or Japan travelers.",
  },
  {
    question: "Can I filter deals by departure city and budget?",
    answer:
      "Yes. This page is designed to support filters such as departure market, travel month, budget range, and group type, while keeping product cards prominent.",
  },
  {
    question: "Will this page support SEO landing-page variants later?",
    answer:
      "Yes. The deals layout can be reused for market-specific pages such as Hong Kong to Europe or Singapore to Japan while keeping the same component structure.",
  },
];

const reviews = [
  {
    name: "Iris from Hong Kong",
    quote:
      "The deals page was much easier to scan than a typical landing page. I could compare prices and package tags almost immediately.",
  },
  {
    name: "Marcus from Singapore",
    quote:
      "The featured package gave me a clear recommendation, but the grid below still let me browse enough alternatives without feeling buried.",
  },
  {
    name: "Sofia from London",
    quote:
      "I liked that practical details were close to the product cards. It felt more like shopping inventory than reading a travel ad.",
  },
];

const editorialSections = [
  {
    title: "How to choose the right group tour deal",
    body:
      "Start with trip length, then compare inclusions like flights, hotel level, and guided segments. If you are traveling for the first time, shorter high-coverage itineraries usually convert better than ambitious multi-country routes.",
  },
  {
    title: "Best departure markets for these deals",
    body:
      "Hong Kong and Singapore departures typically work well for Europe and Japan collection pages because they map neatly to strong search intent and clear pricing expectations.",
  },
  {
    title: "What makes a deal page rank better",
    body:
      "A strong deals page needs more than product cards. It should include FAQs, intent-matched copy, internal links, and enough descriptive content to make each page semantically distinct.",
  },
];

const relatedLinks = [
  "Hong Kong to Europe deals",
  "Singapore to Japan tours",
  "Family group departures",
  "Flights included vacations",
  "Small-group premium tours",
  "2026 seasonal specials",
];

export function DealsPage() {
  return (
    <main className="min-h-screen bg-[#f4f8fc]">
      <section className="border-b border-slate-200 bg-white">
        <div className="shell py-5">
          <div className="overflow-hidden rounded-[1.75rem] bg-[linear-gradient(120deg,#03112d_0%,#0f2e73_55%,#0066ff_100%)] text-white shadow-[0_24px_70px_rgba(3,17,45,0.18)]">
            <div className="grid gap-6 px-6 py-7 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-sky-200">Deals page</p>
                <h1 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] sm:text-5xl">
                  More products, less poster.
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/78 sm:text-base">
                  This page is designed as a dense merchandised collection: one compact banner for orientation, one featured deal for focus, and a larger product surface for faster browsing.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/56">Inventory</p>
                  <p className="mt-2 text-2xl font-bold">80+ deals</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/56">Departure cities</p>
                  <p className="mt-2 text-2xl font-bold">HK / SG / US</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/56">Price band</p>
                  <p className="mt-2 text-2xl font-bold">USD 999+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-6">
        <div className="flex flex-wrap gap-3">
          {chips.map((chip, index) => (
            <button
              key={chip}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                index === 0
                  ? "bg-primary text-white"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-primary/30 hover:text-slate-950"
              }`}
            >
              {chip}
            </button>
          ))}
        </div>
      </section>

      <section className="shell pb-8">
        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <article className="overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <div className="grid lg:grid-cols-[1fr_1.05fr]">
              <div className="relative min-h-[320px]">
                <img src={featuredDeal.image} alt={featuredDeal.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <Badge className="absolute left-5 top-5">Featured deal</Badge>
              </div>
              <div className="flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Main recommendation</p>
                  <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-950">{featuredDeal.title}</h2>
                  <p className="mt-4 text-base leading-7 text-slate-600">{featuredDeal.summary}</p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 px-4 py-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <MapPinned className="h-4 w-4" />
                      {featuredDeal.departure}
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                      <CalendarDays className="h-4 w-4" />
                      {featuredDeal.dates}
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                      <Clock3 className="h-4 w-4" />
                      {featuredDeal.duration}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-950 px-4 py-4 text-white">
                    <div className="flex items-center gap-2 text-sm text-white/74">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      {featuredDeal.rating} · {featuredDeal.reviews}
                    </div>
                    <p className="mt-4 text-xs uppercase tracking-[0.24em] text-white/52">From</p>
                    <p className="mt-2 text-3xl font-bold">{featuredDeal.price}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button size="lg">View featured deal</Button>
                  <Button variant="ghost" size="lg" className="border border-slate-200 bg-white">
                    Save shortlist
                  </Button>
                </div>
              </div>
            </div>
          </article>

          <aside className="grid gap-4">
            <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.06)]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Browse intent</p>
              <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-slate-950">
                This layout prioritizes inventory scanning.
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Banner remains short. The real focus is below: more cards, visible pricing, stronger comparison density, and a main featured module instead of a full-screen hero.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-slate-950 p-6 text-white shadow-[0_24px_60px_rgba(3,17,45,0.14)]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200">Quick filters</p>
              <div className="mt-5 space-y-3">
                {[
                  ["Departure", "Hong Kong / Singapore"],
                  ["Travel month", "Flexible 2026 dates"],
                  ["Budget", "USD 1,000 - 2,500"],
                  ["Group type", "Family / Couple / Small group"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/12 bg-white/5 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/46">{label}</p>
                    <p className="mt-2 text-sm text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="shell pb-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Available deals</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              Product-first card grid
            </h2>
          </div>
          <Button variant="ghost" className="hidden border border-slate-200 bg-white lg:inline-flex">
            View all 80 deals
          </Button>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {deals.map((deal) => (
            <article
              key={deal.title}
              className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={deal.image} alt={deal.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 to-transparent" />
                <Badge className="absolute left-4 top-4">{deal.tag}</Badge>
              </div>
              <div className="space-y-4 p-5">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold leading-tight text-slate-950">{deal.title}</h3>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>{deal.departure}</span>
                    <span>{deal.duration}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-slate-700">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  {deal.rating}
                </div>
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">From</p>
                    <p className="mt-1 text-2xl font-bold text-primary">{deal.price}</p>
                  </div>
                  <Button size="sm">View deal</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-20">
        <div className="shell grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Editorial content</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              SEO-supporting content blocks for collection pages
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              These sections are intentionally more practical than promotional. They help the page cover search intent instead of relying only on banner copy and product cards.
            </p>
          </div>
          <div className="space-y-5">
            {editorialSections.map((section) => (
              <article key={section.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-950">{section.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Reviews and proof</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              Add readable review content instead of hiding everything in a slider
            </h2>
            <div className="mt-8 space-y-4">
              {reviews.map((review) => (
                <blockquote key={review.name} className="rounded-[1.5rem] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
                  <p className="text-base leading-7 text-slate-700">{review.quote}</p>
                  <footer className="mt-4 text-sm font-semibold text-slate-950">{review.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Related links</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              Internal links for crawl paths and topic depth
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {relatedLinks.map((link) => (
                <a
                  key={link}
                  href="/"
                  className="rounded-[1.25rem] border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700 transition hover:border-primary/25 hover:text-slate-950"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              Questions that widen long-tail coverage
            </h2>
          </div>
          <div className="space-y-4">
            {seoFaqs.map((faq) => (
              <article key={faq.question} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
                <h3 className="text-lg font-semibold text-slate-950">{faq.question}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
