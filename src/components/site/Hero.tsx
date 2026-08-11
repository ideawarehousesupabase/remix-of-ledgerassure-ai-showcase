import { ArrowRight, Landmark, FileText, Receipt, Sparkles, ShieldCheck, Leaf, Database, BadgeCheck } from "lucide-react";
import { Reveal } from "./Reveal";

function FlowNode({
  icon: Icon,
  label,
  sub,
}: {
  icon: React.ElementType;
  label: string;
  sub?: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-ink-border/50 bg-ink-2/60 px-3.5 py-3 backdrop-blur">
      <Icon className="size-4 shrink-0 text-accent" />
      <div className="min-w-0">
        <p className="text-[0.8rem] font-semibold text-ink-foreground">{label}</p>
        {sub && <p className="text-[0.7rem] leading-snug text-ink-muted">{sub}</p>}
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center py-2" aria-hidden>
      <svg width="2" height="26" viewBox="0 0 2 26" className="overflow-visible">
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="26"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeDasharray="4 6"
          strokeLinecap="round"
          style={{ animation: "flow-dash 1.6s linear infinite" }}
        />
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="surface-ink relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 size-[34rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-accent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--ink-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--ink-foreground) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 50% 0%, black, transparent 72%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-border/60 bg-ink-2/70 px-3.5 py-1.5 text-[0.72rem] font-semibold tracking-[0.14em] text-ink-muted uppercase">
            <span className="size-1.5 rounded-full bg-accent" />
            Designed for UK sole traders &amp; micro-businesses
          </span>

          <h1 className="mt-6 text-4xl leading-[1.06] font-extrabold text-ink-foreground sm:text-5xl lg:text-[3.65rem]">
            Bookkeeping, Compliance and Assurance —{" "}
            <span className="text-gradient-accent">Connected.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            LedgerAssure AI is designed to help UK sole traders and micro-businesses manage
            bookkeeping and Making Tax Digital compliance through one connected, evidence-backed
            platform — with assurance and ESG capabilities as they grow.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#platform"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Explore the Platform <ArrowRight className="size-4" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full border border-ink-border/70 px-7 py-3.5 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-2/70"
            >
              See Pricing
            </a>
          </div>

          <p className="mt-7 flex items-start gap-2 text-xs leading-relaxed text-ink-muted">
            <BadgeCheck className="mt-0.5 size-4 shrink-0 text-accent" />
            Designed to help UK sole traders and micro-businesses manage their finances and compliance
            in one connected place.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-ink-border/50 bg-ink-2/40 p-5 backdrop-blur-xl sm:p-7">
            <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-ink-muted uppercase">
              Unified Evidence Ledger — conceptual view
            </p>

            <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              <FlowNode icon={Landmark} label="Bank" sub="Open Banking (planned)" />
              <FlowNode icon={FileText} label="Invoices" sub="Document capture" />
              <FlowNode icon={Receipt} label="Receipts" sub="OCR-assisted" />
            </div>

            <Connector />
            <FlowNode icon={Sparkles} label="AI-assisted categorisation" sub="With confidence scoring" />
            <Connector />
            <FlowNode icon={ShieldCheck} label="Compliance checks" sub="Version-controlled rules engine" />
            <Connector />

            <div className="rounded-2xl border border-accent/40 bg-accent/10 px-4 py-4">
              <div className="flex items-center gap-2.5">
                <Database className="size-4 text-accent" />
                <p className="text-sm font-bold text-ink-foreground">Unified Evidence Ledger</p>
              </div>
              <p className="mt-1.5 text-[0.75rem] leading-relaxed text-ink-muted">
                Source record → financial data → categorisation → compliance checks → control
                results → reported figures.
              </p>
            </div>

            <Connector />

            <div className="grid grid-cols-3 gap-2.5">
              {[
                { icon: ShieldCheck, label: "Compliance" },
                { icon: BadgeCheck, label: "Assurance" },
                { icon: Leaf, label: "ESG" },
              ].map((o) => (
                <div
                  key={o.label}
                  className="rounded-xl border border-ink-border/50 bg-ink/50 px-2 py-3 text-center"
                >
                  <o.icon className="mx-auto size-4 text-accent" />
                  <p className="mt-1.5 text-[0.72rem] font-semibold text-ink-foreground">
                    {o.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}