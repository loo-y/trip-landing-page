export type ProductItem = {
  title: string;
  duration: string;
  departure: string;
  rating: string;
  reviews: string;
  price: string;
  tag: string;
  image: string;
};

export type LandingConfig = {
  from: string;
  to: string;
  audience: string;
  heroTitle: string;
  heroBody: string;
  heroImage: string;
  filters: Array<{ label: string; value: string }>;
  stats: Array<{ value: string; label: string }>;
  products: ProductItem[];
  faqs: Array<{ question: string; answer: string }>;
};

const destinationLibrary: Record<
  string,
  {
    audience: string;
    image: string;
    body: string;
    products: ProductItem[];
    faqs: LandingConfig["faqs"];
  }
> = {
  europe: {
    audience: "multi-country classics, Alps scenery, and premium small-group departures",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80",
    body:
      "Configure one route module for dozens of city-pair landing pages. Swap departure city, destination region, price cues, and featured inventory without rebuilding the page structure.",
    products: [
      {
        title: "10-Day Classic Europe Seven Nations",
        duration: "10 days",
        departure: "Weekly departures",
        rating: "4.9",
        reviews: "1,284 reviews",
        price: "USD 1,599",
        tag: "Hot",
        image:
          "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Swiss Peaks and Lake Como Small Group",
        duration: "8 days",
        departure: "Apr-Oct",
        rating: "4.8",
        reviews: "863 reviews",
        price: "USD 1,899",
        tag: "Small group",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Romance in France and Italy Escape",
        duration: "11 days",
        departure: "Flexible departures",
        rating: "4.7",
        reviews: "642 reviews",
        price: "USD 2,180",
        tag: "Flights included",
        image:
          "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    faqs: [
      {
        question: "Can this page be reused for multiple departure cities?",
        answer: "Yes. The layout stays the same while hero copy, pricing, filters, and featured products are generated from the route params and config source.",
      },
      {
        question: "Can product data come from Trip.com APIs later?",
        answer: "Yes. The current config can be replaced by a loader that fetches inventory, pricing, and availability from your backend or partner API.",
      },
      {
        question: "Is this suitable for SEO landing-page scaling?",
        answer: "Yes. Each route can emit its own title, description, heading, structured data, and body copy for a specific from-to search intent.",
      },
    ],
  },
  japan: {
    audience: "cherry blossom departures, rail-connected cities, and short premium vacations",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1800&q=80",
    body:
      "Use the same system to target city-specific demand for Japan packages, including seasonality, cultural highlights, and different budget bands.",
    products: [
      {
        title: "Tokyo, Kyoto and Mount Fuji Circle",
        duration: "7 days",
        departure: "Daily departures",
        rating: "4.8",
        reviews: "924 reviews",
        price: "USD 1,280",
        tag: "Best seller",
        image:
          "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Hokkaido Snow and Onsen Journey",
        duration: "6 days",
        departure: "Winter season",
        rating: "4.7",
        reviews: "518 reviews",
        price: "USD 1,460",
        tag: "Seasonal",
        image:
          "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Osaka Family Food and Theme Park Escape",
        duration: "5 days",
        departure: "Family dates",
        rating: "4.6",
        reviews: "403 reviews",
        price: "USD 1,090",
        tag: "Family pick",
        image:
          "https://images.unsplash.com/photo-1526481280695-3c4691f7b97f?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    faqs: [
      {
        question: "Can I tune this for seasonality like sakura or snow trips?",
        answer: "Yes. The config can override hero messaging, featured products, and FAQ content by season or campaign window.",
      },
      {
        question: "Can different pages show different currencies?",
        answer: "Yes. Currency can be derived from the departure market or passed in from your CMS or API response.",
      },
      {
        question: "Can this be maintained by non-developers later?",
        answer: "Yes. The next step is moving this config into JSON, a CMS, or an internal admin surface instead of hardcoded TS objects.",
      },
    ],
  },
};

function titleCase(value: string) {
  return value
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function getLandingConfig(fromSlug: string, toSlug: string): LandingConfig {
  const from = titleCase(fromSlug);
  const toKey = toSlug.toLowerCase();
  const to = titleCase(toSlug);
  const destination = destinationLibrary[toKey] ?? destinationLibrary.europe;

  return {
    from,
    to,
    audience: destination.audience,
    heroTitle: `${from} to ${to} group tour packages`,
    heroBody: destination.body,
    heroImage: destination.image,
    filters: [
      { label: "Departure city", value: from },
      { label: "Destination", value: to },
      { label: "Travel month", value: "May - October 2026" },
      { label: "Group style", value: "Family / Couple / Small group" },
    ],
    stats: [
      { value: "1 route", label: "One physical page template powering many city-pair landers." },
      { value: "SEO-ready", label: "Each page can emit its own metadata and long-tail intent." },
      { value: "Config-first", label: "Products, copy, and FAQs can be swapped without touching layout." },
    ],
    products: destination.products.map((product) => ({
      ...product,
      departure: `${product.departure} from ${from}`,
    })),
    faqs: destination.faqs,
  };
}
