import {
  ShieldCheck,
  Activity,
  Briefcase,
  Leaf,
  Database,
  Sparkles,
  Landmark,
  Plug,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "./Reveal";

const modules = [
  {
    icon: ShieldCheck,
    label: "Core / Compliance",
    title: "Compliance Core",
    price: "£18 / month",
    blurb:
      "The entry-level foundation and starting point for sole traders, micro-businesses and small owner-managed businesses.",
    points: [
      "Financial data ingestion",
      "Open Banking ingestion",
      "Receipt / invoice capture",
      "OCR-assisted document processing",
      "AI-assisted transaction categorisation",
      "VAT treatment and reconciliation",
      "Making Tax Digital compliance checks",
      "Tax-return preparation",
      "Evidence linking",
      "Pre-submission error checking",
    ],
  },
  {
    icon: Activity,
    label: "Assurance",
    title: "Continuous Assurance",
    price: "£35 / month",
    blurb:
      "For businesses that are growing, seeking finance, or need stronger evidence and control visibility.",
    points: [
      "Continuous controls",
      "Reconciliation checks",
      "Completeness checks",
      "Duplicate detection",
      "Threshold testing",
      "Evidence trail",
      "Continuous assurance status",
      "Audit / review readiness",
    ],
  },
  {
    icon: Briefcase,
    label: "Practice",
    title: "Practice Mode",
    price: "£45 per client / month",
    blurb: "Practice licensing designed for accountancy firms managing multiple clients.",
    points: [
      "Multi-client practice console",
      "Multiple client management",
      "Accountant / reviewer workspace",
      "Centralised client visibility",
    ],
  },
  {
    icon: Leaf,
    label: "ESG / Carbon",
    title: "ESG / Carbon (optional)",
    price: "£20 / month",
    blurb:
      "An optional module activated only when a business needs ESG/carbon reporting — using the financial evidence already captured.",
    points: [
      "ESG data",
      "Carbon reporting",
      "Scope 1 and Scope 2 estimation",
      "Emission-factor mapping",
      "Sustainability information",
      "Standards mapping",
    ],
  },
];

const architecture = [
  { icon: Landmark, title: "Data sources", sub: "Bank data, accounting software, invoices, receipts" },
  { icon: Sparkles, title: "AI-assisted categorisation", sub: "Off-the-shelf LLM with confidence scoring" },
  { icon: ShieldCheck, title: "Compliance rules", sub: "Version-controlled MTD, VAT and Income Tax rules" },
  { icon: Database, title: "Unified Evidence Ledger", sub: "Single versioned, traceable data structure", highlight: true },
];

const roadmap = [
  {
    phase: "Phase 1 / Compliance Core",
    time: "Months 1–8",
    items: [
      "Open Banking ingestion",
      "AI-assisted categorisation",
      "Making Tax Digital compliance",
      "VAT return preparation",
      "Evidence ledger",
      "MVP development",
      "Initial pilot",
    ],
  },
  {
    phase: "Phase 2 / Assurance + Practice",
    time: "Months 9–18 approximately",
    items: [
      "Continuous controls",
      "Reconciliation",
      "Completeness checks",
      "Duplicate checks",
      "Threshold checks",
      "Live assurance status",
      "Practice console",
      "Multi-client management",
    ],
  },
  {
    phase: "Phase 3 / ESG + Carbon",
    time: "Later development phase",
    items: [
      "ESG reporting",
      "Carbon calculations",
      "Scope 1 and Scope 2 estimation",
      "Emission-factor mapping",
      "Standards mapping",
      "Sustainability data",
    ],
  },
];

function EvidenceMockup() {
  return (
    <div className="rounded-3xl border border-ink-border/50 bg-ink-2/50 p-5 backdrop-blur sm:p-6">
      <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-ink-muted uppercase">
        Evidence ledger — conceptual
      </p>
      <div className="mt-4 rounded-2xl border border-ink-border/50 bg-ink/60 p-4">
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-sm font-bold text-ink-foreground">Supplier Invoice</p>
          <p className="text-sm font-extrabold text-ink-foreground">£420.00</p>
        </div>
        <ul className="mt-3 space-y-1.5">
          {["VAT treatment applied", "Verified source document", "Compliance checked"].map((t) => (
            <li key={t} className="flex items-center gap-2 text-[0.75rem] text-ink-muted">
              <CheckCircle2 className="size-3.5 text-signal-green" />
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center py-2" aria-hidden>
        <svg width="2" height="24" className="overflow-visible">
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="24"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeDasharray="4 6"
            strokeLinecap="round"
            style={{ animation: "flow-dash 1.6s linear infinite" }}
          />
        </svg>
      </div>
      <div className="rounded-2xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm font-semibold text-ink-foreground">
        VAT Return
      </div>
    </div>
  );
}

function AssuranceMockup() {
  return (
    <div className="rounded-3xl border border-ink-border/50 bg-ink-2/50 p-5 backdrop-blur sm:p-6">
      <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-ink-muted uppercase">
        Assurance status — conceptual
      </p>
      <div className="mt-4 flex items-center gap-3 rounded-2xl border border-ink-border/50 bg-ink/60 p-4">
        <span
          className="size-3 rounded-full bg-signal-green"
          style={{ animation: "pulse-soft 2.4s ease-in-out infinite" }}
        />
        <div>
          <p className="text-sm font-bold text-ink-foreground">Green</p>
          <p className="text-[0.72rem] text-ink-muted">Controls satisfactory</p>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2.5">
        {["Reconciliation", "Duplicates", "Completeness", "Thresholds"].map((c) => (
          <div
            key={c}
            className="flex items-center gap-2 rounded-xl border border-ink-border/40 bg-ink/40 px-3 py-2.5 text-[0.74rem] text-ink-foreground"
          >
            <CheckCircle2 className="size-3.5 text-signal-green" />
            {c}
          </div>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2 text-[0.68rem] text-ink-muted">
        <span className="flex items-center gap-1.5 rounded-full border border-ink-border/40 px-2.5 py-1">
          <span className="size-2 rounded-full bg-signal-green" /> Controls satisfactory
        </span>
        <span className="flex items-center gap-1.5 rounded-full border border-ink-border/40 px-2.5 py-1">
          <span className="size-2 rounded-full bg-signal-amber" /> Attention required
        </span>
        <span className="flex items-center gap-1.5 rounded-full border border-ink-border/40 px-2.5 py-1">
          <span className="size-2 rounded-full bg-signal-red" /> Significant unresolved issues
        </span>
      </div>
    </div>
  );
}

export function Platform() {
  return (
    <section id="platform" className="surface-ink relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 size-[32rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-accent)" }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-accent uppercase">
            Platform
          </p>
          <h2 className="mt-4 text-3xl font-extrabold text-ink-foreground sm:text-4xl">
            Powered by the Unified Evidence Ledger
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            A single, versioned data structure that connects the source record to the financial
            data, the categorisation, the compliance checks, the control results and the reported
            figures — so figures can be traced back to the evidence behind them. One evidence base
            supports bookkeeping, compliance, assurance and ESG/carbon.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {architecture.map((a, i) => (
            <Reveal
              key={a.title}
              delay={i * 90}
              className={`rounded-2xl border p-5 ${
                a.highlight
                  ? "border-accent/45 bg-accent/10"
                  : "border-ink-border/45 bg-ink-2/45"
              }`}
            >
              <a.icon className="size-5 text-accent" />
              <p className="mt-3.5 text-sm font-bold text-ink-foreground">{a.title}</p>
              <p className="mt-1.5 text-[0.78rem] leading-relaxed text-ink-muted">{a.sub}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-4 flex flex-wrap items-center gap-2 rounded-2xl border border-ink-border/45 bg-ink-2/35 px-5 py-4 text-sm text-ink-muted">
          <span className="font-semibold text-ink-foreground">Outputs:</span>
          <span className="rounded-full border border-ink-border/50 px-3 py-1 text-xs">Compliance</span>
          <span className="rounded-full border border-ink-border/50 px-3 py-1 text-xs">Assurance</span>
          <span className="rounded-full border border-ink-border/50 px-3 py-1 text-xs">ESG / Carbon</span>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {modules.map((m, i) => (
            <Reveal
              key={m.title}
              delay={i * 80}
              className="rounded-3xl border border-ink-border/45 bg-ink-2/45 p-7 transition-colors hover:border-accent/45"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-accent/15">
                  <m.icon className="size-5 text-accent" />
                </div>
                <span className="rounded-full border border-ink-border/50 px-3 py-1 text-[0.66rem] font-semibold tracking-[0.14em] text-ink-muted uppercase">
                  {m.label}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-ink-foreground">{m.title}</h3>
              <p className="mt-1 text-sm font-semibold text-accent">{m.price}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{m.blurb}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {m.points.map((p) => (
                  <li key={p} className="flex gap-2 text-[0.8rem] leading-relaxed text-ink-muted">
                    <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <EvidenceMockup />
          </Reveal>
          <Reveal delay={100}>
            <AssuranceMockup />
          </Reveal>
        </div>

        <Reveal className="mt-6 flex items-start gap-3 rounded-2xl border border-ink-border/45 bg-ink-2/35 px-5 py-4">
          <Plug className="mt-0.5 size-4.5 shrink-0 text-accent" />
          <p className="text-sm leading-relaxed text-ink-muted">
            <strong className="text-ink-foreground">Planned partner/API expansion.</strong> A future
            embedded platform opportunity identified from Year 2 — not a currently available
            feature.
          </p>
        </Reveal>

        <Reveal className="mt-16">
          <h3 className="text-2xl font-extrabold text-ink-foreground sm:text-3xl">
            Development roadmap
          </h3>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {roadmap.map((r, i) => (
            <Reveal
              key={r.phase}
              delay={i * 90}
              className="rounded-3xl border border-ink-border/45 bg-ink-2/40 p-6"
            >
              <p className="text-sm font-bold text-ink-foreground">{r.phase}</p>
              <p className="mt-1 text-xs font-semibold text-accent">{r.time}</p>
              <ul className="mt-4 space-y-2">
                {r.items.map((it) => (
                  <li key={it} className="flex gap-2 text-[0.8rem] text-ink-muted">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent/70" />
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-5 rounded-2xl border border-ink-border/45 bg-ink-2/35 px-5 py-4 text-sm leading-relaxed text-ink-muted">
          <strong className="text-ink-foreground">Future expansion:</strong> the Republic of Ireland
          is identified as a potential future expansion market after proven UK traction.
        </Reveal>
      </div>
    </section>
  );
}