import { JsonLd } from "@/components/JsonLd";
import { SpecsDisclaimer } from "@/components/Disclaimer";
import {
  DepositScheduleTable,
  IncentivesTable,
  PricingTable,
} from "@/components/PricingTable";
import {
  PageFootForm,
  PageHeader,
  Prose,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/LayoutBits";
import { LINKS, PAGE_META, PRICING_ANSWER, PRICING_AS_OF, PRICING_COPY } from "@/lib/content";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.pricing();

export default function PricingPage() {
  const meta = PAGE_META.pricing;

  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: meta.path,
          name: meta.title,
          description: meta.description,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <PageHeader h1={meta.h1} lede={PRICING_ANSWER} />
      <Section labelledBy="status">
        <SectionHeading id="status">Preserve North prices — current status</SectionHeading>
        <p className="mt-4 max-w-[62ch] font-semibold text-brand-deep">{PRICING_AS_OF}</p>
        <div className="mt-8">
          <PricingTable />
        </div>
        <SpecsDisclaimer className="mt-6" />
      </Section>
      <Section alt labelledBy="deposit">
        <SectionHeading id="deposit">Preserve North deposit structure</SectionHeading>
        <p className="mt-4 max-w-[62ch] text-text-muted">
          The rows below describe a typical Mattamy Ontario VIP launch pattern. They are not a
          confirmed Preserve North schedule.
        </p>
        <div className="mt-8">
          <DepositScheduleTable />
        </div>
      </Section>
      <Section labelledBy="incentives">
        <SectionHeading id="incentives">Incentives — to be announced</SectionHeading>
        <div className="mt-8">
          <IncentivesTable />
        </div>
      </Section>
      <Section alt labelledBy="tracker">
        <SectionHeading id="tracker">How this price tracker works</SectionHeading>
        <div className="mt-8">
          <Prose>
            {PRICING_COPY.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p>
              Occupancy for Preserve North is to be announced.{" "}
              <TextLink href={LINKS.pricingRegister.href}>{LINKS.pricingRegister.text}</TextLink>
            </p>
          </Prose>
        </div>
      </Section>
      <PageFootForm formId="pricing-register" />
    </>
  );
}
