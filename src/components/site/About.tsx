import { AlertTriangle, Link2, Users } from "lucide-react";
import { Reveal } from "./Reveal";

const problems = [
  "Manage bookkeeping and compliance manually — slow, stressful and error-prone.",
  "Or pay for multiple disconnected accounting, bookkeeping, tax, audit-readiness and sustainability tools.",
  "Separate systems mean data is manually entered, reconciled and moved between tools.",
];

export function About() {
  return (
    <section id="about" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            About
          </p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Built for the UK&apos;s smallest businesses — where compliance pressure is highest and
            finance support is thinnest.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Around 5.3 million UK businesses have between 0 and 9 employees. Most have no in-house
            finance function. LedgerAssure AI exists to bring bookkeeping, Making Tax Digital
            compliance, evidence and assurance together into one connected, evidence-based system —
            capture financial information once, and continuously turn it into compliant,
            evidence-backed financial information.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-secondary">
              <AlertTriangle className="size-5 text-foreground" />
            </div>
            <h3 className="mt-5 text-xl font-bold">The problem</h3>
            <ul className="mt-4 space-y-3.5">
              {problems.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={100}
            className="surface-ink rounded-3xl border border-ink-border/40 p-7 sm:p-9"
          >
            <div className="flex size-11 items-center justify-center rounded-2xl bg-accent/15">
              <Link2 className="size-5 text-accent" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-ink-foreground">Why LedgerAssure AI</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Traditional bookkeeping tools are built around <strong>record → report</strong>.
              LedgerAssure AI is designed around{" "}
              <strong className="text-ink-foreground">
                capture → categorise → check → evidence → prepare → assure → report
              </strong>
              , so potential issues can be identified before filing rather than after.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Designed for tradespeople, self-employed consultants, small retailers and
              owner-managed service businesses — people who may not have accounting expertise.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <h3 className="text-2xl font-extrabold sm:text-3xl">The founding team</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Complementary founders: domain, compliance, product and commercial paired with
            technology, architecture and engineering.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-secondary text-lg font-extrabold text-primary">
                KM
              </div>
              <div>
                <h4 className="text-lg font-bold">Khushboo Mandaliya</h4>
                <p className="text-sm font-semibold text-accent">Founder &amp; CEO</p>
              </div>
            </div>
            <p className="mt-5 text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
              Responsibilities
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Product functional requirements",
                "Compliance logic",
                "VAT / Making Tax Digital",
                "Reconciliation controls",
                "ESG requirements",
                "Commercial strategy",
                "Regulatory positioning",
                "Go-to-market direction",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-secondary text-lg font-extrabold text-primary">
                SP
              </div>
              <div>
                <h4 className="text-lg font-bold">Shreeya Patel</h4>
                <p className="text-sm font-semibold text-accent">Co-Founder &amp; CTO</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Technical co-founder and full-time CTO, with experience across AWS/cloud technologies,
              full-stack development, Python, JavaScript, MySQL, cloud architecture and serverless
              application development.
            </p>
            <div className="mt-5 space-y-3 rounded-2xl bg-muted/60 p-4">
              <p className="flex gap-2.5 text-xs leading-relaxed text-muted-foreground">
                <GraduationCap className="mt-0.5 size-4 shrink-0 text-foreground/70" />
                Bachelor of Engineering in Computer Engineering; Diploma in Computer Engineering.
              </p>
              <p className="flex gap-2.5 text-xs leading-relaxed text-muted-foreground">
                <Cpu className="mt-0.5 size-4 shrink-0 text-foreground/70" />
                Leads technical architecture and cloud infrastructure for the planned platform.
              </p>
            </div>
            <p className="mt-5 text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
              Responsibilities
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Technical architecture",
                "Cloud infrastructure",
                "Open Banking integrations",
                "OCR integrations",
                "LLM integrations",
                "Data pipelines",
                "Evidence-ledger implementation",
                "Later Assurance development",
                "Later ESG development",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-muted/50 p-5">
          <Users className="size-5 shrink-0 text-foreground/70" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Current status:</strong> the system and technical
            architecture have been designed and a novelty search completed, with the architecture
            validated at the design/IP stage. Customer interviews and Letters of Intent are
            underway/planned. There is currently no working prototype, MVP or customer pilot.
          </p>
        </Reveal>
      </div>
    </section>
  );
}