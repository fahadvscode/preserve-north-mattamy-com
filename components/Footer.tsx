import Link from "next/link";
import {
  CTA_LABEL,
  INDEPENDENCE_DISCLAIMER,
  LINKS,
  NAV,
} from "@/lib/content";
import { LastUpdated } from "./Disclaimer";
import { Wordmark } from "./Wordmark";
import { CtaLink } from "./CtaLink";

export function Footer() {
  return (
    <footer className="bg-brand-deep text-surface pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0">
      <div className="mx-auto max-w-[1200px] px-5 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Wordmark inverted />
            <p className="mt-5 max-w-[36ch] text-sm text-surface/75">
              Independent information and VIP registration for Preserve North by Mattamy
              Homes in Oakville, Ontario.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="eyebrow !text-brand-accent">Explore</p>
            <ul className="mt-4 space-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex min-h-11 items-center text-surface/90 hover:text-surface">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <CtaLink
                  href="/register"
                  location="footer"
                  variant="text"
                  className="inline-flex min-h-11 items-center text-surface/90 hover:text-surface"
                >
                  {CTA_LABEL}
                </CtaLink>
              </li>
              <li>
                <Link
                  href={LINKS.guide.href}
                  className="inline-flex min-h-11 items-center text-surface/90 hover:text-surface"
                >
                  {LINKS.guide.text}
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <p className="eyebrow !text-brand-accent">Registration Team</p>
            <p className="mt-4 text-sm text-surface/80">
              The lead form is the only contact channel on this site. No named individuals.
              Registration is free and creates no purchase obligation.
            </p>
            <p className="mt-6">
              <CtaLink
                href="/register"
                location="footer"
                variant="text"
                className="text-brand-accent hover:underline"
              >
                {CTA_LABEL}
              </CtaLink>
            </p>
            <LastUpdated className="mt-6 !text-surface/70" />
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 space-y-4">
          <p className="max-w-[78ch] text-sm text-surface/80">{INDEPENDENCE_DISCLAIMER}</p>
          <p className="text-sm text-surface/60">E.&O.E.</p>
          <p className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <Link href="/privacy" className="inline-flex min-h-11 items-center text-surface/80 hover:text-surface hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="inline-flex min-h-11 items-center text-surface/80 hover:text-surface hover:underline">
              Terms of Use
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
