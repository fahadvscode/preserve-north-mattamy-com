export function AnswerFirstSummary({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-surface-alt section-space" aria-labelledby="answer-first">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-5">
        <h2 id="answer-first" className="font-display font-semibold text-[clamp(1.5rem,3vw,2.25rem)] text-brand-deep max-w-[28ch]">
          {heading}
        </h2>
        <div className="prose-measure mt-6 text-text-primary">{children}</div>
      </div>
    </section>
  );
}
