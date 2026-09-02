import { JsonLd } from "@/components/JsonLd";
import { PageHeader, Prose, Section, SectionHeading } from "@/components/LayoutBits";
import { PAGE_META } from "@/lib/content";
import { PRIVACY_SECTIONS } from "@/lib/legal";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.privacy();

export default function PrivacyPage() {
  const meta = PAGE_META.privacy;

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
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <PageHeader
        h1={meta.h1}
        lede="How this independent Preserve North information site collects, stores, and protects registration data under PIPEDA and CASL."
      />
      {PRIVACY_SECTIONS.map((section, index) => (
        <Section key={section.h2} alt={index % 2 === 1} labelledBy={`privacy-${index}`}>
          <SectionHeading id={`privacy-${index}`}>{section.h2}</SectionHeading>
          <div className="mt-8">
            <Prose>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </Prose>
          </div>
        </Section>
      ))}
    </>
  );
}
