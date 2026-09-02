import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import {
  PageFootForm,
  PageHeader,
  Section,
  SectionHeading,
} from "@/components/LayoutBits";
import { GALLERY_IMAGES, GALLERY_INTRO, PAGE_META } from "@/lib/content";
import { metadataByKey } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const metadata = metadataByKey.gallery();

export default function GalleryPage() {
  const meta = PAGE_META.gallery;

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
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <PageHeader h1={meta.h1} lede={GALLERY_INTRO} />
      <Section labelledBy="pending">
        <SectionHeading id="pending">Renderings will be added here once released by Mattamy Homes</SectionHeading>
        <p className="mt-4 max-w-[62ch] text-text-muted">
          Official Preserve North renderings and a marketing site plan have not been published.
          The photographs below are neighbourhood-context imagery, not project elevations.
        </p>
        <ul className="mt-10 grid gap-8 md:grid-cols-2">
          {GALLERY_IMAGES.map((image) => (
            <li key={image.src} className="card overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full object-cover"
              />
              <p className="p-4 text-sm text-text-muted">{image.caption}</p>
            </li>
          ))}
        </ul>
      </Section>
      <PageFootForm formId="gallery-register" />
    </>
  );
}
