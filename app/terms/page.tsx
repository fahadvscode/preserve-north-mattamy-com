import { JsonLd } from "@/components/JsonLd";
import { PageHeader, Prose, Section, SectionHeading } from "@/components/LayoutBits";
import { PAGE_META } from "@/lib/content";
import { TERMS_SECTIONS } from "@/lib/legal";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.terms();

export default function TermsPage() {
  const meta = PAGE_META.terms;

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
          { name: "Terms of Use", path: "/terms" },
        ])}
      />
      <PageHeader
        h1={meta.h1}
        lede="Terms of use for this independent Preserve North information and registration website."
      />
      {TERMS_SECTIONS.map((section, index) => (
        <Section key={section.h2} alt={index % 2 === 1} labelledBy={`terms-${index}`}>
          <SectionHeading id={`terms-${index}`}>{section.h2}</SectionHeading>
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
