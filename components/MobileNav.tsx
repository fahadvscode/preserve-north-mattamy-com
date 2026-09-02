"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CTA_LABEL, NAV } from "@/lib/content";
import { CtaLink } from "./CtaLink";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const ctaHref = pathname === "/" ? "#hero-register" : "/register";

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-white/30 px-3 text-sm font-semibold text-surface"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {open ? (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-white/10 bg-brand-deep px-5 py-4"
        >
          <nav aria-label="Mobile">
            <ul className="space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block min-h-11 py-2 font-medium text-surface"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <CtaLink
                  href={ctaHref}
                  location="mobile_nav"
                  className="mt-2 w-full"
                  onClick={() => setOpen(false)}
                >
                  {CTA_LABEL}
                </CtaLink>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
