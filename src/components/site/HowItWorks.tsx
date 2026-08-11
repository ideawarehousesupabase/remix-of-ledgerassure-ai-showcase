import {
  Landmark,
  Camera,
  Sparkles,
  ShieldCheck,
  Link2,
  FileCheck2,
  Activity,
  Leaf,
  UserCheck,
} from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    icon: Landmark,
    title: "Connect",
    body: "Connect business financial sources, including bank information through planned Open Banking integrations with FCA-authorised providers, and accounting software where applicable.",
  },
  {
    icon: Camera,
    title: "Capture",
    body: "Capture invoices and receipts through document upload and capture, with OCR-assisted processing to normalise the information.",
  },
  {
    icon: Sparkles,
    title: "Categorise",
    body: "An off-the-shelf large language model assists with transaction categorisation and assigns a confidence level. Low-confidence classifications are routed to you for confirmation.",
  },
  {
    icon: ShieldCheck,
    title: "Check",
    body: "A version-controlled rules engine checks the data against relevant VAT, Making Tax Digital and Income Tax requirements, designed to identify misclassification, duplicates, missing VAT treatment and other inconsistencies.",
  },
  {
    icon: Link2,
    title: "Link the evidence",
    body: "Transaction + source document + categorisation + compliance result are connected through the Unified Evidence Ledger.",
  },
  {
    icon: FileCheck2,
    title: "Prepare",
    body: "The system prepares filing-ready financial information. LedgerAssure AI does not autonomously submit statutory tax returns — the business owner and/or accountant reviews and approves before submission.",
  },
  {
    icon: Activity,
    title: "Assure",
    body: "For customers using the Assurance layer, the same evidence supports continuous control checks and a live assurance status.",
  },
  {
    icon: Leaf,
    title: "Extend to ESG",
    body: "Where required, the same underlying evidence can support ESG and carbon reporting instead of a separate data collection process.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            How it works
          </p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Capture once. Keep it compliant, checked and evidence-backed.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Eight connected steps, designed to be understandable without accounting expertise.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-x-8 gap-y-2 md:grid-cols-2">
          {steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={(i % 2) * 80}
              className="relative flex gap-5 border-l border-border pb-8 pl-6 last:pb-0 md:border-l-0 md:pl-0"
            >
              <div className="relative shrink-0">
                <div className="flex size-12 items-center justify-center rounded-2xl border border-border bg-card shadow-soft">
                  <s.icon className="size-5 text-accent" />
                </div>
                <span className="absolute -top-2 -left-2 flex size-6 items-center justify-center rounded-full bg-primary text-[0.68rem] font-bold text-primary-foreground">
                  {i + 1}
                </span>
              </div>
              <div className="pt-1">
                <h3 className="text-base font-bold">{s.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10 flex items-start gap-3 rounded-2xl border border-accent/40 bg-accent/8 px-5 py-4">
          <UserCheck className="mt-0.5 size-5 shrink-0 text-accent" />
          <p className="text-sm leading-relaxed text-foreground">
            <strong>Human approval before statutory filing.</strong> LedgerAssure AI prepares
            filing-ready information — the business owner and/or accountant must review and approve
            the filing before submission.
          </p>
        </Reveal>
      </div>
    </section>
  );
}