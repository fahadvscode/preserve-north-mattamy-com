import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { PageHeader, Section, SectionHeading } from "@/components/LayoutBits";
import { FORM_HEADING, PAGE_META, REGISTER_LEDE } from "@/lib/content";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.register();

export default function RegisterPage() {
  const meta = PAGE_META.register;

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
          { name: "Register", path: "/register" },
        ])}
      />
      <PageHeader h1={meta.h1} lede={REGISTER_LEDE} />
      <Section labelledBy="vip">
        <SectionHeading id="vip">Preserve North VIP registration</SectionHeading>
        <p className="mt-4 max-w-[62ch] text-text-muted">
          First access to floor plans and pricing when released, and advance notice of the VIP
          launch date. Registration is a project benefit, not a claim of agent credentials.
        </p>
        <div className="mt-8 max-w-xl">
          <LeadForm id="register-page-form" heading={FORM_HEADING} lede={REGISTER_LEDE} />
        </div>
      </Section>
    </>
  );
}
