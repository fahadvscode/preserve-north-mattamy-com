import { JsonLd } from "@/components/JsonLd";
import {
  PageFootForm,
  PageHeader,
  Prose,
  Section,
  SectionHeading,
} from "@/components/LayoutBits";
import { BLOG_GUIDE, PAGE_META } from "@/lib/content";
import { metadataByKey } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.guide();

export default function BuilderGuidePage() {
  const meta = PAGE_META.guide;

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
          { name: "Builder Guide", path: meta.path },
        ])}
      />
      <JsonLd data={articleSchema()} />
      <PageHeader h1={meta.h1} lede={BLOG_GUIDE.lede} />
      {BLOG_GUIDE.sections.map((section, index) => (
        <Section
          key={section.h2}
          alt={index % 2 === 1}
          labelledBy={`guide-${index}`}
        >
          <SectionHeading id={`guide-${index}`}>{section.h2}</SectionHeading>
          <div className="mt-8">
            <Prose>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </Prose>
          </div>
        </Section>
      ))}
      <PageFootForm formId="guide-register" />
    </>
  );
}
