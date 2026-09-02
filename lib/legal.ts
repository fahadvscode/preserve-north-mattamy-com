import { LAST_UPDATED, SITE_ORG_NAME } from "./content";

export const PRIVACY_SECTIONS: { h2: string; paragraphs: string[] }[] = [
  {
    h2: "Who operates this website",
    paragraphs: [
      `${SITE_ORG_NAME} is an independent information and registration resource for Preserve North, a pre-construction community by Mattamy Homes in Oakville, Ontario. This site is not the official website of Mattamy Homes and is not affiliated with or endorsed by the builder. The canonical host is https://preservenorthmattamy.com/.`,
    ],
  },
  {
    h2: "What is collected and why",
    paragraphs: [
      "When you submit the registration form, this site collects five fields: first name, last name, email address, telephone number, and whether you are a licensed real estate agent. Those fields are used to respond to the registration request and to provide Preserve North project updates when Mattamy Homes releases pricing, floor plans, or a VIP launch date.",
      "The site also stores first-touch marketing parameters (utm_source, utm_medium, utm_campaign, utm_term, utm_content), the page path on which consent was given, and a timestamp of consent. Consent, timestamp, and page path together are the proof-of-consent record under Canada's Anti-Spam Legislation (CASL).",
    ],
  },
  {
    h2: "PIPEDA",
    paragraphs: [
      "This site is operated with the intent of complying with the Personal Information Protection and Electronic Documents Act (PIPEDA). Personal information is collected for identified purposes, limited to the registration fields described above, stored with a contractual processor, and retained only as long as needed for those purposes or as required by law.",
    ],
  },
  {
    h2: "Where data is stored",
    paragraphs: [
      "Registration records are stored with Supabase, a third-party processor that hosts a Postgres database. The operator does not sell personal information. Only the public anonymous key is used by this application to insert registration rows under a row-level security policy; a service-role credential is not exposed in browser code.",
    ],
  },
  {
    h2: "Retention and deletion",
    paragraphs: [
      "Registration records are retained for as long as they are needed to administer the Preserve North registration list, and for a reasonable period afterward to demonstrate CASL consent if a question arises, unless a shorter period is required by law.",
      "To request deletion of your personal information, use the same registration form on this site. Enter your name and contact details as usual, select whether you are a licensed real estate agent, and note in place of a normal inquiry that you are requesting deletion of your registration record. The Registration Team will process verified requests. This site carries no phone number or email address; the form is the sole contact mechanism, including for privacy and data-deletion requests.",
    ],
  },
  {
    h2: "Cookies and analytics",
    paragraphs: [
      "This site may use Google Analytics 4, Google Tag Manager, and the Meta (Facebook) Pixel to measure page views, form interactions, and completed registrations. These tools set cookies or similar identifiers and process device and usage data according to each vendor's own policy. Conversion events include a form_submit event in GA4 and a Lead event in the Meta Pixel after a successful registration, fired from the thank-you page. A floor_plan_view event may fire when collection cards on the floor-plans page enter the viewport. There is no phone_click event because this site publishes no phone number.",
      "Analytics identifiers are configured as environment variables and remain inactive until those values are supplied. Scripts load after the page becomes interactive so they do not delay the hero image or the answer-first summary.",
    ],
  },
  {
    h2: "CASL and unsubscribe",
    paragraphs: [
      "Electronic messages about Preserve North and similar pre-construction opportunities are sent only where the visitor has checked the consent box on the registration form. That checkbox is never pre-checked. Consent, the time of consent, and the page on which it was given are stored as a proof record. Every electronic message will include a working unsubscribe mechanism. You may also withdraw consent by submitting a request through the registration form.",
    ],
  },
  {
    h2: "Accessibility",
    paragraphs: [
      "This site is built to meet WCAG 2.1 Level AA. Ontario's Accessibility for Ontarians with Disabilities Act (AODA) applies to public-facing websites of this kind. If a page is difficult to use, submit a note through the registration form so the Registration Team can review it.",
    ],
  },
  {
    h2: "Contact for privacy requests",
    paragraphs: [
      "Privacy, access, correction, and deletion requests must be submitted through the registration form on this site. There is no phone number, personal email address, or named individual published anywhere on preservenorthmattamy.com.",
    ],
  },
];

export const TERMS_SECTIONS: { h2: string; paragraphs: string[] }[] = [
  {
    h2: "Independent information resource",
    paragraphs: [
      "This website is an independent information and registration resource for Preserve North, a pre-construction community in Oakville, Ontario being developed by Mattamy Homes. It is not the official website of Mattamy Homes and is not affiliated with, endorsed by, or operated by the builder. Nothing on this site should be read as a representation by Mattamy Homes.",
    ],
  },
  {
    h2: "Information is provided as-is",
    paragraphs: [
      `Information on this site is provided as-is for general information only. It is subject to change without notice and is not an offer to sell, a solicitation to buy, or a representation that any home is available. Prices, sizes, specifications, incentives, deposits and availability are subject to change without notice. E.&O.E. Information current as of ${LAST_UPDATED}.`,
      "Certain details — including starting prices, deposit schedule, occupancy timing, incentives, exact unit sizes, and assignment policy — have not been published by Mattamy Homes and are labelled as to be announced. They must be verified at release.",
    ],
  },
  {
    h2: "No legal, tax, financial or investment advice",
    paragraphs: [
      "Nothing on this site is legal, tax, financial or investment advice. Descriptions of deposits, occupancy, trails, and schools are general information. This site does not guarantee appreciation, allocation, approval, or returns.",
    ],
  },
  {
    h2: "Registration",
    paragraphs: [
      "Submitting the registration form requests to be added to a list to receive information when it is released. Registration is free and creates no obligation to purchase. Registration does not create VIP priority with the builder unless Mattamy Homes independently confirms such a program. The operator may refuse or remove a registration.",
    ],
  },
  {
    h2: "Intellectual property and imagery",
    paragraphs: [
      "Project names, builder names, and any official photographs or renderings remain the property of their respective owners. Photographs on this site are neighbourhood-context imagery used to illustrate trails, woodland, and the established character of earlier Preserve phases. They are not official Mattamy Homes architectural renderings of Preserve North and should not be treated as a representation of finished homes, landscaping, or views.",
    ],
  },
  {
    h2: "Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by Ontario law, the operator of this site is not liable for decisions made on the basis of information published here, including decisions to register or purchase. Verify all facts with the builder's released documents and your own advisors.",
    ],
  },
  {
    h2: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein.",
    ],
  },
];
