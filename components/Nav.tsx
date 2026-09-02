"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CTA_NAV_LABEL, NAV } from "@/lib/content";
import { WordmarkLink } from "./Wordmark";
import { MobileNav } from "./MobileNav";
import { CtaLink } from "./CtaLink";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const ctaHref = pathname === "/" ? "#hero-register" : "/register";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-brand-deep transition-shadow duration-300 ${
        scrolled ? "shadow-card border-b border-white/10" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-4 py-3 sm:px-5">
        <WordmarkLink inverted />
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-4 xl:gap-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[14px] font-medium text-surface/90 hover:text-brand-accent xl:text-[15px]"
            >
              {item.label}
            </Link>
          ))}
          <CtaLink href={ctaHref} location="nav" className="btn-compact">
            {CTA_NAV_LABEL}
          </CtaLink>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
