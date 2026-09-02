import { JsonLd } from "@/components/JsonLd";
import { LocationMap } from "@/components/LocationMap";
import {
  PageFootForm,
  PageHeader,
  Prose,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/LayoutBits";
import { LINKS, LOCATION_ANSWER, LOCATION_COPY, PAGE_META, SALES_CENTRE_ADDRESS } from "@/lib/content";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, placeSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.location();

export default function LocationPage() {
  const meta = PAGE_META.location;

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
          { name: "Location", path: "/location" },
        ])}
      />
      <JsonLd data={placeSchema()} />
      <PageHeader h1={meta.h1} lede={LOCATION_ANSWER} />
      <Section labelledBy="intersection">
        <SectionHeading id="intersection">The intersection, stated plainly</SectionHeading>
        <div className="mt-8">
          <Prose>
            {LOCATION_COPY.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p>
              Sales-information address listed by Mattamy Homes: {SALES_CENTRE_ADDRESS}. That
              is a shared Preserve centre, not a claim that every Phase 4 lot fronts Dundas
              Street West.
            </p>
          </Prose>
        </div>
        <div className="mt-10">
          <LocationMap />
        </div>
      </Section>
      <Section alt labelledBy="master-plan-location">
        <SectionHeading id="master-plan-location">Phase 4, the Neighbourhood Centre, and the secondary plan</SectionHeading>
        <div className="mt-8">
          <Prose>
            {LOCATION_COPY.masterPlan.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <Section labelledBy="transit">
        <SectionHeading id="transit">Highways and transit that serve Preserve North</SectionHeading>
        <div className="mt-8">
          <Prose>
            {LOCATION_COPY.transit.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p>
              Preserve North is positioned in North Oakville with practical access to Highway 407
              to the north and the Dundas Street West / Sixth Line corridor for east-west and
              north-south travel. An existing bus stop serves Preserve Drive roughly 575 metres
              south of the Phase 4 lands, connecting into Oakville Transit&apos;s broader network.
            </p>
          </Prose>
        </div>
      </Section>
      <Section alt labelledBy="schools">
        <SectionHeading id="schools">Schools near Preserve North</SectionHeading>
        <div className="mt-8">
          <Prose>
            {LOCATION_COPY.schools.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Prose>
        </div>
      </Section>
      <Section labelledBy="trails">
        <SectionHeading id="trails">Natural Heritage System, trails, and the future park</SectionHeading>
        <div className="mt-8">
          <Prose>
            {LOCATION_COPY.trails.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <p>
              <TextLink href={LINKS.locationFaq.href}>{LINKS.locationFaq.text}</TextLink>
            </p>
          </Prose>
        </div>
      </Section>
      <PageFootForm formId="location-register" />
    </>
  );
}
