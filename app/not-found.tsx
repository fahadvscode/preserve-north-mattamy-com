import { PageHeader, Section } from "@/components/LayoutBits";
import { CtaLink } from "@/components/CtaLink";

export default function NotFound() {
  return (
    <>
      <PageHeader
        h1="Page not found"
        lede="That URL is not part of this independent Preserve North information site."
      />
      <Section labelledBy="back">
        <h2 id="back" className="sr-only">
          Return
        </h2>
        <CtaLink href="/" location="not_found">
          Back to Preserve North
        </CtaLink>
      </Section>
    </>
  );
}
