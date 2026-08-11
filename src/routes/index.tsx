import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Platform } from "@/components/site/Platform";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Pricing } from "@/components/site/Pricing";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";

const description =
  "LedgerAssure AI is designed to help UK sole traders and micro-businesses manage bookkeeping, Making Tax Digital compliance and evidence-backed financial records, with optional assurance and ESG capabilities.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LedgerAssure AI | AI-Powered Bookkeeping & Compliance" },
      { name: "description", content: description },
      {
        property: "og:title",
        content: "LedgerAssure AI | AI-Powered Bookkeeping & Compliance",
      },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Platform />
        <HowItWorks />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
