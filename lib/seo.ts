import type { Metadata } from "next";
import { LAST_UPDATED_ISO, PAGE_META, SITE_NAME, SITE_URL, type PageMeta } from "./content";

export function canonical(path: string): string {
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path}`;
}

export function buildMetadata(page: PageMeta): Metadata {
  const url = canonical(page.path);
  const robots = page.robots ?? { index: true, follow: true };
  const ogImage = `${SITE_URL}/opengraph-image`;

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    robots,
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_CA",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [ogImage],
    },
    other: {
      "article:modified_time": LAST_UPDATED_ISO,
    },
  };
}

export const metadataByKey = {
  home: () => buildMetadata(PAGE_META.home),
  floorPlans: () => buildMetadata(PAGE_META.floorPlans),
  pricing: () => buildMetadata(PAGE_META.pricing),
  location: () => buildMetadata(PAGE_META.location),
  gallery: () => buildMetadata(PAGE_META.gallery),
  faq: () => buildMetadata(PAGE_META.faq),
  register: () => buildMetadata(PAGE_META.register),
  thankYou: () => buildMetadata(PAGE_META.thankYou),
  guide: () => buildMetadata(PAGE_META.guide),
  privacy: () => buildMetadata(PAGE_META.privacy),
  terms: () => buildMetadata(PAGE_META.terms),
};
