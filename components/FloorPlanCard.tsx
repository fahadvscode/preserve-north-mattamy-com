import { CTA_LABEL, FLOOR_PLAN_COLLECTIONS } from "@/lib/content";
import { CtaLink } from "./CtaLink";

export function FloorPlanCard({
  collection,
}: {
  collection: (typeof FLOOR_PLAN_COLLECTIONS)[number];
}) {
  return (
    <article className="stat-card flex h-full flex-col">
      <p className="eyebrow">Collection</p>
      <h3 className="mt-3 font-display text-2xl font-semibold text-brand-deep">
        {collection.name}
      </h3>
      <p className="mt-2 text-sm tabular text-text-muted">Sizes: {collection.sizes}</p>
      <p className="mt-1 text-sm tabular text-text-muted">Bedrooms: {collection.beds}</p>
      <p className="mt-4 flex-1 text-text-primary">{collection.summary}</p>
      <p className="mt-4 text-sm font-semibold text-brand-accent">{collection.status}</p>
      <CtaLink href="/register" location="floor_plan_card" className="btn-compact mt-6 w-full sm:w-auto sm:self-start">
        {CTA_LABEL}
      </CtaLink>
    </article>
  );
}
