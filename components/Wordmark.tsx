import Link from "next/link";
import { WORDMARK } from "@/lib/content";

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  const color = inverted ? "text-surface" : "text-brand-deep";
  const rule = inverted ? "bg-brand-accent" : "bg-brand-accent";

  return (
    <span className={`inline-flex flex-col ${color}`}>
      <span className="font-display text-[1.35rem] font-semibold leading-none tracking-tight md:text-[1.5rem]">
        {WORDMARK}
      </span>
      <span className={`mt-1.5 block h-px w-12 ${rule}`} aria-hidden="true" />
    </span>
  );
}

export function WordmarkLink({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" aria-label={`${WORDMARK} home`} className="min-h-11 inline-flex items-center">
      <Wordmark inverted={inverted} />
    </Link>
  );
}
