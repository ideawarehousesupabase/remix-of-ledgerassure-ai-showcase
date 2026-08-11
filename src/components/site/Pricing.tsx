import { CheckCircle2, Leaf, LifeBuoy, Plug } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const tiers = [
  {
    label: "Core",
    sublabel: "Core / Compliance",
    price: "£18",
    unit: "/ month",
    audience: "For sole traders & micro-businesses",
    positioning: "Affordable bookkeeping + compliance foundation.",
    features: [
      "Financial data ingestion",
      "AI-assisted transaction categorisation",
      "VAT treatment",
      "Reconciliation",
      "Making Tax Digital compliance",
      "Tax-return preparation",
      "Evidence linking",
      "Pre-submission error checking",
    ],
    recommended: false,
  },
  {
    label: "Assurance",
    sublabel: "Assurance",
    price: "£35",
    unit: "/ month",
    audience: "For growing businesses or businesses seeking finance",
    positioning: "Continuous controls and a live assurance status.",
    features: [
      "Everything in Core / Compliance",
      "Continuous controls",
      "Reconciliation checks",
      "Completeness checks",
      "Duplicate detection",
      "Threshold testing",
      "Evidence trail",
      "Continuous assurance status",
      "Audit / review readiness",
    ],
    recommended: true,
  },
  {
    label: "Practice",
    sublabel: "Practice",
    price: "£45",
    unit: "per client / month",
    audience: "For accountancy firms",
    positioning: "Manage multiple clients from one console.",
    features: [
      "Multi-client practice console",
      "Multiple client management",
      "Accountant / reviewer workspace",
      "Centralised visibility",
    ],
    recommended: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            Market pricing
          </p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Planned pricing, kept simple and modular.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Start with the Compliance Core and add assurance, practice licensing or ESG/carbon only
            when the business needs them.
          </p>
        </Reveal>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal
              key={t.label}
              delay={i * 90}
              className={cn(
                "flex h-full flex-col rounded-3xl border p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8",
                t.recommended
                  ? "surface-ink border-accent/40 shadow-lift"
                  : "border-border bg-card shadow-soft",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={cn(
                    "text-[0.68rem] font-semibold tracking-[0.16em] uppercase",
                    t.recommended ? "text-accent" : "text-muted-foreground",
                  )}
                >
                  {t.sublabel}
                </span>
                {t.recommended && (
                  <span className="rounded-full bg-accent px-3 py-1 text-[0.66rem] font-bold tracking-wide text-accent-foreground uppercase">
                    Recommended
                  </span>
                )}
              </div>

              <div className="mt-5 flex items-baseline gap-2">
                <span
                  className={cn(
                    "text-4xl font-extrabold sm:text-5xl",
                    t.recommended ? "text-ink-foreground" : "text-foreground",
                  )}
                >
                  {t.price}
                </span>
                <span
                  className={cn(
                    "text-sm font-semibold",
                    t.recommended ? "text-ink-muted" : "text-muted-foreground",
                  )}
                >
                  {t.unit}
                </span>
              </div>

              <p
                className={cn(
                  "mt-3 text-sm font-semibold",
                  t.recommended ? "text-ink-foreground" : "text-foreground",
                )}
              >
                {t.audience}
              </p>
              <p
                className={cn(
                  "mt-1.5 text-sm leading-relaxed",
                  t.recommended ? "text-ink-muted" : "text-muted-foreground",
                )}
              >
                {t.positioning}
              </p>

              <ul className="mt-6 space-y-2.5 border-t pt-6 border-current/10">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className={cn(
                      "flex gap-2.5 text-sm leading-relaxed",
                      t.recommended ? "text-ink-muted" : "text-muted-foreground",
                    )}
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <h3 className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            Optional add-ons
          </h3>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary">
                <Leaf className="size-5 text-accent" />
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <p className="text-base font-bold">ESG / Carbon</p>
                  <p className="text-base font-extrabold">£20 / month</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Optional module activated when ESG/carbon reporting is needed. Not required by
                  every business.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary">
                <LifeBuoy className="size-5 text-accent" />
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <p className="text-base font-bold">Premium Support</p>
                  <p className="text-base font-extrabold">£12 / month</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Optional support add-on, not a separate subscription tier.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6 flex items-start gap-3 rounded-2xl border border-dashed border-border bg-background px-5 py-4">
          <Plug className="mt-0.5 size-4.5 shrink-0 text-muted-foreground" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground">API / embedded partners.</strong> A planned future
            partner/API revenue stream from Year 2. No public price is assigned.
          </p>
        </Reveal>
      </div>
    </section>
  );
}