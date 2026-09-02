"use client";

import { usePathname } from "next/navigation";
import { CTA_LABEL } from "@/lib/content";
import { CtaLink } from "./CtaLink";

export function StickyMobileCta() {
  const pathname = usePathname();
  if (pathname === "/register" || pathname === "/thank-you") return null;

  const href = pathname === "/" ? "#hero-register" : "/register";

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface p-3 md:hidden pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <CtaLink href={href} location="sticky_bar" className="w-full text-[15px] sm:text-base">
        {CTA_LABEL}
      </CtaLink>
    </div>
  );
}
