import { FloorPlanCard } from "@/components/FloorPlanCard";
import { JsonLd } from "@/components/JsonLd";
import { SpecsDisclaimer } from "@/components/Disclaimer";
import { ViewOnce } from "@/components/ViewOnce";
import {
  PageFootForm,
  PageHeader,
  Prose,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/LayoutBits";
import {
  FLOOR_PLAN_COLLECTIONS,
  FLOOR_PLANS_ANSWER,
  FLOOR_PLANS_COPY,
  LINKS,
  PAGE_META,
} from "@/lib/content";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.floorPlans();

export default function FloorPlansPage() {
  const meta = PAGE_META.floorPlans;

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
          { name: "Floor Plans", path: "/floor-plans" },
        ])}
      />
      <PageHeader h1={meta.h1} lede={FLOOR_PLANS_ANSWER} />
      <Section labelledBy="tiers">
        <SectionHeading id="collections">Preserve North floor plans by collection</SectionHeading>
        <p className="mt-4 max-w-[62ch] text-text-muted">
          Townhomes and detached homes are the two planned tiers. Square footage and bedroom
          counts are to be announced.
        </p>
        <ViewOnce eventName="floor_plan_view">
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {FLOOR_PLAN_COLLECTIONS.map((collection) => (
              <FloorPlanCard key={collection.slug} collection={collection} />
            ))}
          </div>
        </ViewOnce>
        <SpecsDisclaimer className="mt-6" />
      </Section>
      <Section alt labelledBy="how-mattamy-releases">
        <SectionHeading id="how-mattamy-releases">How Mattamy typically releases collections</SectionHeading>
        <div className="mt-8">
          <Prose>
            {FLOOR_PLANS_COPY.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p>
              <TextLink href={LINKS.floorPlansPricing.href}>{LINKS.floorPlansPricing.text}</TextLink>
              {" · "}
              <TextLink href={LINKS.floorPlansRegister.href}>{LINKS.floorPlansRegister.text}</TextLink>
            </p>
          </Prose>
        </div>
      </Section>
      <PageFootForm formId="floor-plans-register" />
    </>
  );
}
