import type { MetaFunction } from "@remix-run/node";

import { DealsZhPage, dealsZh, seoFaqsZh } from "~/components/landing/deals-page-zh";

export const meta: MetaFunction = () => [
  { title: "精選優惠行程 | Trip.com Escapes 繁體中文" },
  {
    name: "description",
    content:
      "繁體中文版本的產品型優惠集合頁，包含主推產品、多張產品卡、FAQ 與 SEO 內容模組。",
  },
];

export default function DealsZhRoute() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: seoFaqsZh.map((faq) => ({
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
    itemListElement: dealsZh.map((deal, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: deal.title,
      url: "/deals-zh",
    })),
  };

  return (
    <>
      <DealsZhPage />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
    </>
  );
}
