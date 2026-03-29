import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";

import stylesheet from "./tailwind.css?url";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesheet }];

export const meta: MetaFunction = () => [
  { title: "Trip.com Escapes | 2026 Europe Group Tours" },
  {
    name: "description",
    content:
      "Discover 2026 Europe group tour packages departing from Hong Kong and Singapore with curated itineraries, transparent pricing, and trusted Trip.com service.",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#03112D" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        />
        <Meta />
        <Links />
      </head>
      <body className="bg-white text-ink antialiased">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  const title = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : "Unexpected error";

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="max-w-lg space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Trip.com Escapes</p>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-base text-slate-300">
          The landing page shell is up, but this route failed to render correctly.
        </p>
      </div>
    </main>
  );
}
