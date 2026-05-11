import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Financial Technology Frontier — Payments Canada Summit 2026" },
      {
        name: "description",
        content:
          "FTF cover story: how Payments Canada Summit 2026 redrew the map for AI, trust, and the future of money.",
      },
      { property: "og:title", content: "Financial Technology Frontier" },
      {
        property: "og:description",
        content:
          "Cover story — The Agentic Inflection: 23 sessions across the AI track of Payments Canada Summit 2026.",
      },
      { property: "og:image", content: "/articles/images/session-01-hero.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#fcfbf8] text-neutral-900">
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <img
            src="https://fintechfrontiers.live/wp-content/uploads/2024/07/FTF-logo-01-e1720457608366-1.png"
            alt="Financial Technology Frontier"
            className="h-10 w-auto"
          />
          <div className="flex items-center gap-6">
            <a
              href="/articles/index.html"
              className="text-sm font-medium text-neutral-700 hover:text-neutral-950"
            >
              Summit Coverage →
            </a>
            <a
              href="/payment-canada-summit-20206-alix-md-reports.zip"
              download
              className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700"
            >
              Download Reports
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          Cover Story · Special Issue
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          The Agentic Inflection
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral-600 md:text-xl">
          How Payments Canada Summit 2026 redrew the map for AI, trust, and the
          future of money. Three days, 23 sessions, one inflection point for
          Canadian payments.
        </p>

        <a
          href="/articles/index.html"
          className="group mt-12 block overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-lg"
        >
          <div className="aspect-[16/9] overflow-hidden bg-neutral-100">
            <img
              src="/articles/images/session-01-hero.jpg"
              alt="Payments Canada Summit 2026"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            />
          </div>
          <div className="flex items-center justify-between gap-6 p-6 md:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Read the cover story
              </p>
              <p className="mt-2 text-xl font-semibold md:text-2xl">
                Payments Canada Summit 2026 — full coverage
              </p>
            </div>
            <span className="shrink-0 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition group-hover:bg-neutral-700">
              Read →
            </span>
          </div>
        </a>
      </main>

    </div>
  );
}
