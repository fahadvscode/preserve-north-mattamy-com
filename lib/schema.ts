/**
 * JSON-LD builders. All blocks read from lib/content.ts.
 *
 * NO Offer/AggregateOffer until Mattamy Homes publishes official pricing.
 * NO RealEstateAgent, operator Person, or brokerage Organization.
 */

import {
  FAQS,
  GEO,
  HERO_IMAGE,
  HOME_ANSWER,
  LAST_UPDATED_ISO,
  PAGE_META,
  PROJECT_NAME,
  SITE_ORG_NAME,
  SITE_URL,
} from "./content";
import { canonical } from "./seo";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_ORG_NAME,
    url: `${SITE_URL}/`,
    inLanguage: "en-CA",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function siteOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_ORG_NAME,
    url: `${SITE_URL}/`,
    description:
      "An independent information and registration resource covering Preserve North, a pre-construction community by Mattamy Homes in Oakville, Ontario. Not affiliated with or endorsed by Mattamy Homes.",
  };
}

export function residenceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: PROJECT_NAME,
    description: HOME_ANSWER,
    url: `${SITE_URL}/`,
    image: `${SITE_URL}${HERO_IMAGE.src}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oakville",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
  };
}

/*
 * Activate Offer / AggregateOffer only after Mattamy Homes publishes official pricing.
 * Never emit this block with invented figures.
 *
 * {
 *   "@context": "https://schema.org",
 *   "@type": "AggregateOffer",
 *   "priceCurrency": "CAD",
 *   "lowPrice": "[FILL WHEN PRICES RELEASE]",
 *   "highPrice": "[FILL WHEN PRICES RELEASE]",
 *   "availability": "https://schema.org/PreOrder",
 *   "url": "https://preservenorthmattamy.com/pricing"
 * }
 */

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/faq#faqpage`,
    dateModified: LAST_UPDATED_ISO,
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonical(item.path),
    })),
  };
}

export function placeSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Preserve North Sales Information",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1388 Dundas Street West",
      addressLocality: "Oakville",
      addressRegion: "ON",
      postalCode: "L6M 4L8",
      addressCountry: "CA",
    },
  };
}

export function articleSchema() {
  const meta = PAGE_META.guide;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonical(meta.path)}#article`,
    headline: meta.h1,
    description: meta.description,
    datePublished: LAST_UPDATED_ISO,
    dateModified: LAST_UPDATED_ISO,
    inLanguage: "en-CA",
    mainEntityOfPage: canonical(meta.path),
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical(opts.path)}#webpage`,
    url: canonical(opts.path),
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    inLanguage: "en-CA",
    dateModified: LAST_UPDATED_ISO,
  };
}

export function imageObjectSchema(opts: {
  url: string;
  caption: string;
  description: string;
  width?: number;
  height?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: opts.url.startsWith("http") ? opts.url : `${SITE_URL}${opts.url}`,
    caption: opts.caption,
    description: opts.description,
    ...(opts.width ? { width: opts.width } : {}),
    ...(opts.height ? { height: opts.height } : {}),
  };
}

export function heroImageSchema() {
  return imageObjectSchema({
    url: HERO_IMAGE.src,
    caption: HERO_IMAGE.caption,
    description: HERO_IMAGE.alt,
    width: HERO_IMAGE.width,
    height: HERO_IMAGE.height,
  });
}
