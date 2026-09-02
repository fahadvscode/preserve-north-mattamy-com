import type { FaqItem } from "@/lib/content";

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.q} className="card p-5 md:p-6" open>
          <summary className="font-display text-xl font-semibold text-brand-deep min-h-11 cursor-pointer md:text-2xl">
            {item.q}
          </summary>
          <p className="prose-measure mt-4 text-text-primary">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
