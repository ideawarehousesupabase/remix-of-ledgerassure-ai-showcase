import {
  ShieldCheck,
  Database,
  Sparkles,
  Landmark,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "./Reveal";


const architecture = [
  { icon: Landmark, title: "Data sources", sub: "Bank data, accounting software, invoices, receipts" },
  { icon: Sparkles, title: "AI-assisted categorisation", sub: "Off-the-shelf LLM with confidence scoring" },
  { icon: ShieldCheck, title: "Compliance rules", sub: "Version-controlled MTD, VAT and Income Tax rules" },
  { icon: Database, title: "Unified Evidence Ledger", sub: "Single versioned, traceable data structure", highlight: true },
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
          <Reveal>
            <EvidenceMockup />
          </Reveal>
          <Reveal delay={100}>
            <AssuranceMockup />
          </Reveal>
        </div>




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