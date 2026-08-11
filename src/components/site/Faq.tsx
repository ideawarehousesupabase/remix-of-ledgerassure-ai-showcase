import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "What is LedgerAssure AI?",
    a: "LedgerAssure AI is a UK-based AI-powered software platform being developed for the UK's smallest businesses. It is designed to automate and simplify bookkeeping, Making Tax Digital compliance, tax-related financial preparation, continuous assurance for businesses that need it, and ESG/carbon reporting where required — through one connected, evidence-based system.",
  },
  {
    q: "Who is LedgerAssure AI designed for?",
    a: "Primarily UK sole traders, micro-businesses and owner-managed businesses with 0–9 employees that do not have an in-house finance or accounting function — for example tradespeople, self-employed consultants, small retailers and owner-managed service businesses. Accountancy practices are served through Practice Mode.",
  },
  {
    q: "What is the Unified Evidence Ledger?",
    a: "It is the architectural foundation of the platform: a single, versioned data structure that connects the source record (such as a bank transaction, invoice or receipt) to the financial data, the transaction categorisation, the compliance checks, the control results and the reported figures. It means figures can be traced back to their underlying source evidence and the results of the relevant checks, so one evidence base can support bookkeeping, compliance, assurance and ESG.",
  },
  {
    q: "How does AI help with bookkeeping?",
    a: "An off-the-shelf large language model is intended to assist with transaction categorisation. LedgerAssure AI is not training its own proprietary foundation model, and AI is not used alone — categorisation is combined with a version-controlled compliance rules engine.",
  },
  {
    q: "How does the platform handle low-confidence AI classifications?",
    a: "The categorisation system is designed to include confidence scoring. Where the system has low confidence in a classification, it is routed to the user to review and confirm. This human-confirmation step is a deliberate trust and safety mechanism.",
  },
  {
    q: "Does LedgerAssure AI support Making Tax Digital?",
    a: "Yes — the planned compliance rules engine is designed to apply relevant Making Tax Digital, VAT and Income Tax requirements, and to check financial information before filing preparation.",
  },
  {
    q: "Does LedgerAssure AI automatically submit my tax return?",
    a: "No. LedgerAssure AI does not autonomously submit statutory tax returns. Statutory filing requires review and approval by the business owner and/or accountant.",
  },
  {
    q: "What is Continuous Assurance?",
    a: "Continuous Assurance means the underlying evidence supports control checks that run continuously rather than only at period end — including reconciliation, completeness, duplicate detection and threshold testing — producing a continuously updated assurance state shown as green (controls satisfactory), amber (attention required) or red (significant unresolved issues).",
  },
  {
    q: "What is the Assurance plan?",
    a: "The Assurance plan is £35 per month. It is designed for businesses that are growing, seeking finance, or that need stronger evidence and control visibility, and includes everything in Core / Compliance plus continuous controls, reconciliation, completeness and duplicate checks, threshold testing, an evidence trail, continuous assurance status and audit/review readiness.",
  },
  {
    q: "Can accountants use LedgerAssure AI?",
    a: "Yes. Practice licensing is designed for accountancy firms, allowing practices to manage multiple clients from one console at £45 per client per month.",
  },
  {
    q: "What is Practice Mode?",
    a: "Practice Mode is the multi-client practice console for accountancy firms. It provides multiple client management, an accountant/reviewer workspace and centralised client visibility.",
  },
  {
    q: "What is the ESG / Carbon module?",
    a: "An optional module, priced at £20 per month, activated only when a business needs ESG/carbon reporting. Planned capabilities include ESG data, carbon reporting, Scope 1 and Scope 2 estimation, emission-factor mapping, sustainability information and standards mapping.",
  },
  {
    q: "Can I add ESG reporting later?",
    a: "Yes — that is the intent of the modular design. Because the same financial evidence is already captured in the Unified Evidence Ledger, ESG/carbon reporting can be activated later without building a completely separate data collection process.",
  },
  {
    q: "How much does LedgerAssure AI cost?",
    a: "Core / Compliance is £18 per month, Assurance is £35 per month, and Practice is £45 per client per month. Optional add-ons are ESG / Carbon at £20 per month and Premium Support at £12 per month. A partner/API revenue stream is planned from Year 2 and has no public price.",
  },
  {
    q: "Is LedgerAssure AI currently available?",
    a: "Not yet. The business is at the pre-build stage: the system and technical architecture have been designed, a novelty search has been completed, and the architecture has been validated at the design/IP stage. Customer interviews and Letters of Intent are underway or planned. There is currently no working prototype, MVP or customer pilot — these form part of the planned development roadmap.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Questions, answered plainly.</h2>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}