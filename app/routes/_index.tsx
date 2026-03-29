import type { MetaFunction } from "@remix-run/node";

import { MarketingHomePage } from "~/components/landing/marketing-home";

export const meta: MetaFunction = () => [
  { title: "Trip.com Escapes | Marketing Home" },
  {
    name: "description",
    content:
      "Brand-forward landing page plus a scalable route-driven template for configurable from-to travel pages.",
  },
];

export default function Index() {
  return <MarketingHomePage />;
}
