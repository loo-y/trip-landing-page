import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { ConfigurableCollectionPage } from "~/components/landing/configurable-collection";
import { getLandingConfig } from "~/lib/landing-data";

export async function loader({ params }: LoaderFunctionArgs) {
  const from = params.from ?? "hong-kong";
  const to = params.to ?? "europe";
  return json({ config: getLandingConfig(from, to) });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const title = data ? `${data.config.from} to ${data.config.to} Group Tours | Trip.com Escapes` : "Trip Collection";
  const description = data
    ? `Configurable landing page for ${data.config.from} to ${data.config.to} travel packages, designed for scalable SEO and reusable product merchandising.`
    : "Configurable travel landing page.";

  return [{ title }, { name: "description", content: description }];
};

export default function TripsFromToRoute() {
  const { config } = useLoaderData<typeof loader>();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <ConfigurableCollectionPage config={config} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
