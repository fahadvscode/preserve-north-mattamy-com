import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { LastUpdated } from "@/components/Disclaimer";
import {
  PageFootForm,
  PageHeader,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/LayoutBits";
import { FAQS, FAQ_PAGE_INTRO, LINKS, PAGE_META } from "@/lib/content";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.faq();

export default function FaqPage() {
  const meta = PAGE_META.faq;

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
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <JsonLd data={faqPageSchema()} />
      <PageHeader
        h1={meta.h1}
        lede={FAQ_PAGE_INTRO}
      />
      <Section labelledBy="questions">
        <SectionHeading id="questions">Preserve North questions, answered first</SectionHeading>
        <LastUpdated className="mt-4" />
        <div className="mt-8">
          <FaqAccordion items={FAQS} />
        </div>
        <p className="mt-8 max-w-[62ch] text-text-primary">
          <TextLink href={LINKS.faqRegister.href}>{LINKS.faqRegister.text}</TextLink>
        </p>
      </Section>
      <PageFootForm formId="faq-register" />
    </>
  );
}
