import { Layers } from "lucide-react";

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Platform", href: "#platform" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="surface-ink border-t border-ink-border/40">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl border border-ink-border/60 bg-ink-2/80">
                <Layers className="size-4.5 text-accent" />
              </span>
              <span className="text-base font-extrabold text-ink-foreground">
                LedgerAssure<span className="text-accent"> AI</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted">
              AI-powered bookkeeping, compliance and assurance designed for the UK&apos;s smallest
              businesses.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-ink-foreground uppercase">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink-foreground"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-ink-foreground uppercase">
              Founding team
            </p>
            <ul className="mt-5 space-y-4 text-sm text-ink-muted">
              <li>
                <span className="block font-semibold text-ink-foreground">Khushboo Mandaliya</span>
                Founder &amp; CEO
              </li>
              <li>
                <span className="block font-semibold text-ink-foreground">Shreeya Patel</span>
                Co-Founder &amp; CTO
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-border/35 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} LedgerAssure AI. All rights reserved.
          </p>
          <p className="text-xs text-ink-muted">
            Conceptual product visuals. Platform in planned development.
          </p>
        </div>
      </div>
    </footer>
  );
}