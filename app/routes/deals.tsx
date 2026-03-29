import type { MetaFunction } from "@remix-run/node";

import { DealsPage, deals, seoFaqs } from "~/components/landing/deals-page";

export const meta: MetaFunction = () => [
  { title: "Deals Collection | Trip.com Escapes" },
  {
    name: "description",
    content:
      "A product-first deals page with a compact banner, featured package, and dense travel card grid for faster browsing.",
  },
];

export default function DealsRoute() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: seoFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: deals.map((deal, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: deal.title,
      url: "/deals",
    })),
  };

  return (
    <>
      <DealsPage />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
    </>
  );
}
