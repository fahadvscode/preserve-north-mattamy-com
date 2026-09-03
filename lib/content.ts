/**
 * Single source of truth for preservenorthmattamy.com — builder & master-plan spotlight.
 * Every page, metadata block, and JSON-LD block reads from this file.
 *
 * HOW TO BUMP FRESHNESS DATES:
 * When Mattamy Homes releases new Preserve North details (pricing, floor plans,
 * occupancy, incentives, deposit schedule), update LAST_UPDATED and LAST_UPDATED_ISO
 * here. Sitemap lastmod, footer, FAQ, JSON-LD dateModified, and disclaimer copy
 * all derive from these two constants.
 */

export const SITE_URL = "https://preservenorthmattamy.com";
export const SITE_NAME = "preservenorthmattamy.com";
export const SITE_ORG_NAME = "preservenorthmattamy.com";
export const PROJECT_NAME = "Preserve North";
export const PROJECT_NAME_FULL = "Preserve North by Mattamy Homes";
export const WORDMARK = "Preserve North";
export const BUILDER = "Mattamy Homes";
export const CITY = "Oakville";
export const SALES_CENTRE_ADDRESS = "1388 Dundas Street West, Oakville, ON L6M 4L8";
export const LAST_UPDATED = "September 1, 2026";
export const LAST_UPDATED_ISO = "2026-09-01";
export const STATUS = "Coming Soon — Registration Open";
export const STATUS_BADGE = "Coming Soon — Registration Open";
export const TAGLINE = "Where New Feels Established";
export const SITE_SOURCE = "preservenorthmattamy.com";

export const GEO = {
  // [UNVERIFIED — approximate] centroid of the North Oakville East Secondary Plan
  // Area near Dundas Street West & Sixth Line. Verify against the exact parcel before launch.
  latitude: 43.4945,
  longitude: -79.7378,
};

export const MAPS_EMBED_SRC =
  "https://maps.google.com/maps?q=Dundas%20Street%20West%20%26%20Sixth%20Line%2C%20Oakville%2C%20ON&z=14&output=embed";

export const HERO_EYEBROW = "PRE-CONSTRUCTION · OAKVILLE, ONTARIO · BUILDER SPOTLIGHT";
export const HERO_SUBHEAD =
  "Townhomes and detached homes by Mattamy Homes near Dundas Street West and Sixth Line — Phase 4 of The Preserve master-planned community.";
export const CTA_LABEL = "Register for Preserve North Updates";
export const CTA_NAV_LABEL = "VIP Registration";
export const FORM_HEADING = "VIP Registration";
export const FORM_LEDE =
  "Register for Preserve North community updates and receive first access to pricing and floor plans when Mattamy Homes releases them. Free, with no purchase obligation.";

export const HERO_IMAGE = {
  src: "/images/preserve-north-hero.webp",
  alt: "Preserve North by Mattamy Homes — oak woodland and trail context in North Oakville near Dundas Street West and Sixth Line",
  caption:
    "Trail and woodland context for Preserve North in North Oakville. Official architectural renderings have not been released by Mattamy Homes as of September 1, 2026.",
  width: 1536,
  height: 1024,
};

export const GALLERY_IMAGES = [
  {
    src: "/images/preserve-north-hero.webp",
    alt: "Preserve North oak woodland and trail context, North Oakville",
    caption:
      "Woodland and trail context near Preserve North. This is independent site photography used for neighbourhood atmosphere, not an official Mattamy Homes rendering of Preserve North.",
    width: 1536,
    height: 1024,
  },
  {
    src: "/images/preserve-north-nhs-trail.webp",
    alt: "Preserve North Natural Heritage System trail context in Oakville",
    caption:
      "Multi-use trail through woodland typical of North Oakville’s Natural Heritage System. Per the Town of Oakville Urban Design Brief, Preserve North is planned around an NHS corridor with a connected trail network.",
    width: 1536,
    height: 1024,
  },
  {
    src: "/images/preserve-north-existing-neighbourhood.webp",
    alt: "Existing Preserve community streetscape in Oakville, Phases 1 to 3 context",
    caption:
      "Established North Oakville streetscape illustrating the 2- to 3-storey character of earlier Preserve phases. This is neighbourhood-context photography, not a rendering of unreleased Preserve North elevations.",
    width: 1536,
    height: 1024,
  },
  {
    src: "/images/preserve-north-neighbourhood-park.webp",
    alt: "Neighbourhood park and oak meadow context planned near Preserve North",
    caption:
      "Park-meadow context illustrating the kind of neighbourhood greenspace described in Oakville’s Urban Design Brief for Phase 4, which plans a future neighbourhood park beside a future public elementary school site.",
    width: 1536,
    height: 1024,
  },
] as const;

export const INDEPENDENCE_DISCLAIMER =
  "This is an independent information and registration website for Preserve North. It is not the official website of Mattamy Homes and is not affiliated with or endorsed by the builder. All renderings, pricing, sizes, and specifications are for illustration only and are subject to change without notice. E.&O.E.";

export const SPECS_DISCLAIMER =
  "Prices, sizes, specifications, and availability are subject to change without notice. E.&O.E. Information current as of September 1, 2026.";

export const CASL_CONSENT =
  "I consent to receive electronic communications about Preserve North and similar pre-construction opportunities. I understand I can withdraw consent at any time using the unsubscribe link in any message.";

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  h1: string;
  robots?: { index: boolean; follow: boolean };
};

export const PAGE_META: Record<string, PageMeta> = {
  home: {
    path: "/",
    title: "Preserve North Oakville | Mattamy Homes New Homes",
    description:
      "New townhomes & detached homes by Mattamy Homes in Oakville's Preserve North. Register for prices & floor plans.",
    h1: "Preserve North by Mattamy Homes — Phase 4 of The Preserve, Oakville",
  },
  floorPlans: {
    path: "/floor-plans",
    title: "Preserve North Floor Plans | Townhomes & Detached",
    description:
      "Explore planned collection tiers at Preserve North Oakville — townhomes and detached homes by Mattamy Homes.",
    h1: "Preserve North Floor Plans — Townhomes & Detached Homes",
  },
  pricing: {
    path: "/pricing",
    title: "Preserve North Prices | Deposit Structure Oakville",
    description:
      "Preserve North pricing and deposit structure, tracked and updated as Mattamy Homes releases details.",
    h1: "Preserve North Prices & Deposit Structure",
  },
  location: {
    path: "/location",
    title: "Preserve North Location | Dundas St W & Sixth Line",
    description:
      "Preserve North sits near Dundas Street West & Sixth Line in North Oakville — trails, transit & schools.",
    h1: "Preserve North Location — Dundas Street West & Sixth Line, Oakville",
  },
  gallery: {
    path: "/gallery",
    title: "Preserve North Renderings | Site Plan Oakville",
    description:
      "Renderings and site plan for Preserve North, Mattamy Homes' newest Oakville community.",
    h1: "Preserve North Renderings & Site Plan",
  },
  faq: {
    path: "/faq",
    title: "Preserve North FAQ | Prices, Deposit & VIP Access",
    description:
      "Answers to the most common Preserve North questions — pricing, deposit, launch date, schools & more.",
    h1: "Preserve North FAQ",
  },
  register: {
    path: "/register",
    title: "Register — Preserve North VIP Updates Oakville",
    description:
      "Register for Preserve North community updates and get first access to pricing and floor plans.",
    h1: "Register for Preserve North Updates",
  },
  thankYou: {
    path: "/thank-you",
    title: "Registration Received | Preserve North Oakville",
    description:
      "Your Preserve North VIP registration has been received. You will be notified when pricing and floor plans are released.",
    h1: "Registration received",
  },
  guide: {
    path: "/blog/mattamy-homes-oakville-builder-guide",
    title: "Mattamy Homes in Oakville: Preserve Builder Guide",
    description:
      "Mattamy Homes in Oakville: A Builder Guide to The Preserve Community — practical, sourced context for Oakville pre-construction buyers.",
    h1: "Mattamy Homes in Oakville: A Builder Guide to The Preserve Community",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy | preservenorthmattamy.com",
    description:
      "How this independent Preserve North information site collects, stores, and protects your data.",
    h1: "Privacy Policy",
  },
  terms: {
    path: "/terms",
    title: "Terms of Use | preservenorthmattamy.com",
    description:
      "Terms of use for this independent Preserve North information and registration website.",
    h1: "Terms of Use",
  },
};

export const NAV = [
  { href: "/floor-plans", label: "Floor Plans" },
  { href: "/pricing", label: "Pricing" },
  { href: "/location", label: "Location" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog/mattamy-homes-oakville-builder-guide", label: "Builder Guide" },
] as const;

export const LINKS = {
  floorPlans: { href: "/floor-plans", text: "View Preserve North floor plans" },
  pricing: { href: "/pricing", text: "See Preserve North pricing & deposit structure" },
  location: { href: "/location", text: "Explore the Preserve North location" },
  faq: { href: "/faq", text: "Read the full Preserve North FAQ" },
  floorPlansPricing: { href: "/pricing", text: "Check current Preserve North pricing" },
  floorPlansRegister: { href: "/register", text: "Register for floor plan updates" },
  pricingRegister: {
    href: "/register",
    text: "Register to be notified when prices release",
  },
  locationFaq: { href: "/faq", text: "See more Preserve North location FAQs" },
  faqRegister: { href: "/register", text: "Register for Preserve North updates" },
  guide: {
    href: "/blog/mattamy-homes-oakville-builder-guide",
    text: "Mattamy Homes in Oakville: A Builder Guide to The Preserve Community",
  },
} as const;

export const QUICK_FACTS = [
  { label: "Builder", value: "Mattamy Homes" },
  { label: "Type", value: "Townhomes & Detached Homes" },
  { label: "Address / Area", value: "North Oakville — near Dundas Street West & Sixth Line" },
  { label: "City", value: "Oakville, Ontario" },
  { label: "Part of", value: "The Preserve (Phase 4)" },
  { label: "Site size", value: "107 acres (43.4 ha)" },
  { label: "Starting Price", value: "To be announced" },
  { label: "Deposit", value: "To be announced" },
  { label: "Occupancy", value: "To be announced" },
  { label: "Status", value: "Coming Soon — Registration Open" },
] as const;

export const HOME_ANSWER =
  "Preserve North is a new pre-construction community by Mattamy Homes in Oakville, Ontario, planned to offer townhomes and detached homes on the north edge of Mattamy's established Preserve neighbourhood. Located near Dundas Street West and Sixth Line, the project is currently in its Coming Soon stage, with pricing and floor plans to be released to registered buyers first.";

export const HOME_OVERVIEW = [
  "Preserve North is the newest phase of Mattamy Homes' Preserve community in North Oakville, extending the neighbourhood's existing street grid — Carding Mill Trail and Preserve Drive — north from the already-built Phases 1 through 3. The Town of Oakville's approved planning documents describe a 107-acre (43.4 ha) site designed around a Natural Heritage System corridor, with a future public elementary school and neighbourhood park sited centrally within the community.",
  "This site is an independent builder-and-master-plan resource for Preserve North. It focuses on who is building the community, how Phase 4 sits inside The Preserve and the North Oakville East Secondary Plan, and which facts are confirmed versus still unreleased. Mattamy Homes is referenced in the third person as the developer; this website is not the builder's official page.",
  "Mattamy Homes is Canada's largest privately-owned homebuilder, founded in Toronto in 1978. In Oakville specifically, the company has built out The Preserve since the early 2010s, giving Preserve North a rare advantage among new pre-construction launches: it connects into streets, trails, and a neighbourhood centre that already exist rather than being built from a blank field years from now.",
  "Per Oakville's Urban Design Brief for Phase 4, the community is planned around a mix of single detached homes on lots from roughly 34 to 65 feet and a block of street townhouses near the future neighbourhood centre on Preserve Drive. Building heights are planned at 2 to 3 storeys throughout, consistent with the architectural character of the earlier Preserve phases to the south.",
  "As of this page's last update, Mattamy Homes has not released pricing, floor plans, or a firm launch date for Preserve North. This site exists to track every verified detail as it becomes public and to give interested buyers a straightforward way to register for updates — the registration form above and the FAQ collect the questions buyers ask most at this stage.",
  "Preserve North by Mattamy Homes is therefore best understood as a coming-soon extension of a neighbourhood that already functions, not as a standalone first-phase brochure. Buyers who want the builder's Oakville delivery record, the secondary-plan geometry, and a registration path for VIP notice will find those three things on this domain. What they will not find is an invented price, an invented plan name, or a claim that this website is Mattamy's official channel.",
] as const;

export const BUILDER_TRACK_RECORD = [
  "Mattamy Homes was founded in Toronto in 1978 by Peter Gilgan and is Canada's largest privately-owned homebuilder as well as a top-25 U.S. builder. That corporate history is public record; it is relevant to Preserve North because Phase 4 is not a first Oakville outing — it is a continuation of a multi-phase community Mattamy has been delivering in North Oakville since the early 2010s.",
  "Preserve West and East Preserve, the earlier phases of The Preserve, are already built or selling near the shared sales-information address at 1388 Dundas Street West. Buyers comparing Preserve North with a typical greenfield launch should weigh that existing street grid, trail network, and neighbourhood-centre fabric, which the Town of Oakville's Urban Design Brief treats as the southern context Phase 4 extends.",
  "Mattamy's Ontario communities typically release product in named collections at VIP launch, with floor plans, elevations, and a staged deposit schedule published together. Preserve North has not yet reached that stage. Until Mattamy publishes those documents, this site reports collection tiers (townhomes and detached homes) and municipal planning facts only — never invented plan names, square footage, or prices.",
  "The sales-information point Mattamy lists for The Preserve is 1388 Dundas Street West, Oakville, ON L6M 4L8. That address serves earlier phases as well. It is useful orientation for anyone visiting the existing neighbourhood; it is not a substitute for a Phase 4 lot plan, and it does not mean Preserve North lots are for sale at that civic number today.",
] as const;

export const MASTER_PLAN_COPY = [
  "Preserve North sits inside the North Oakville East Secondary Plan Area. Approximate boundaries in the Town of Oakville Urban Design Brief (DA-131705, January 2021) place the Phase 4 lands north of Dundas Street West, south of Burnhamthorpe Road East, and west of Sixth Line, as an extension of Carding Mill Trail and Preserve Drive.",
  "The combined Phase 4 study area is 107 acres (43.4 ha). Housing types planned in that brief are single detached homes and street townhouses, with building heights of 2 to 3 storeys. A block of 22 street townhouses is proposed on the west side of Preserve Drive, south of the future public school — a municipal planning figure, subject to change, not a confirmed sales-release count.",
  "Community amenities in the approved plan include Natural Heritage System lands and a trail network, a future public elementary school, a future neighbourhood park, a multi-use trail, and a signed bike route. An existing Oakville Transit stop sits roughly 575 metres south on Preserve Drive at Sixteen Mile Drive. A Neighbourhood Centre with retail and mixed-use potential lies to the north of the Phase 4 lands.",
] as const;

export const COMPARISON_COPY = [
  "Preserve West is an earlier phase of Mattamy's Preserve community, already selling near 1388 Dundas Street West. Preserve North is the newer Phase 4 extension to the north of that existing neighbourhood, sharing the same builder, design vision, and connected trail network, but with its own distinct street layout, lot mix, and — once released — pricing.",
  "The comparison that matters for most buyers is infrastructure timing. Preserve North inherits sidewalks, trails, and a neighbourhood centre pattern already built through Phases 1–3, rather than asking purchasers to wait years for those elements to appear. What it does not yet have is a published price list, floor-plan booklet, or occupancy calendar — those remain to be announced at VIP launch.",
] as const;

export const AEO_PASSAGES: { heading: string; text: string }[] = [
  {
    heading: "What is Preserve North and who is building it?",
    text: "Preserve North is a new pre-construction community by Mattamy Homes in Oakville, Ontario, offering townhomes and detached homes. It is Phase 4 of Mattamy's established Preserve community in North Oakville, situated north of Dundas Street West and west of Sixth Line. The project is currently in its Coming Soon registration stage.",
  },
  {
    heading: "Where is Preserve North located in Oakville?",
    text: "Preserve North sits in North Oakville, bounded roughly by Burnhamthorpe Road East to the north, Dundas Street West to the south, and Sixth Line to the east, as an extension of Carding Mill Trail and Preserve Drive. It forms the northern extension of Mattamy's existing Preserve community within the North Oakville East Secondary Plan Area.",
  },
  {
    heading: "Is Preserve North part of The Preserve community?",
    text: "Yes. Preserve North is Phase 4 of Mattamy Homes' broader Preserve master-planned community in North Oakville, following Phases 1 through 3, which are already built and selling under names such as Preserve West and East Preserve. It shares the same design vision and connects directly into the existing street and trail network.",
  },
  {
    heading: "Who is Mattamy Homes and what is their track record in Oakville?",
    text: "Mattamy Homes is Canada's largest privately-owned homebuilder, founded in Toronto in 1978 by Peter Gilgan. In Oakville specifically, Mattamy has built the multi-phase Preserve community since the early 2010s, including Preserve West and East Preserve, with Preserve North (Phase 4) as its newest extension in North Oakville.",
  },
];

export const FLOOR_PLAN_COLLECTIONS = [
  {
    name: "Townhomes",
    slug: "townhomes",
    sizes: "Not yet released",
    beds: "Not yet released",
    status: "Plans to be announced at VIP launch",
    summary:
      "Planned as street townhomes near the future neighbourhood centre on Preserve Drive, per Oakville's approved Urban Design Brief. Individual plan names, square footage, and bedroom counts have not yet been released by Mattamy Homes. Register to be notified when Preserve North floor plans are published.",
  },
  {
    name: "Detached Homes",
    slug: "detached-homes",
    sizes: "Not yet released",
    beds: "Not yet released",
    status: "Plans to be announced at VIP launch",
    summary:
      "Planned on lots ranging from roughly 34 to 65 feet across Preserve North's low-density areas, with 2 to 3-storey building heights. Individual plan names, square footage, and bedroom counts have not yet been released by Mattamy Homes. Register to be notified when Preserve North floor plans are published.",
  },
] as const;

export const FLOOR_PLANS_ANSWER =
  "Preserve North floor plans have not been released by Mattamy Homes as of the project's Coming Soon stage. Planned collection tiers are street townhomes near the future neighbourhood centre on Preserve Drive and single detached homes on lots of roughly 34 to 65 feet. Exact plan names, square footage, and bedroom counts will be published at VIP launch.";

export const FLOOR_PLANS_COPY = [
  "Preserve North floor plans are the document set most buyers ask for first, and they are not yet public. Mattamy Homes has not issued plan names, interior dimensions, or bedroom and bathroom counts for this Phase 4 release. This page records the two collection tiers described in municipal planning documents — townhomes and detached homes — so that the page can be updated with real cards the moment a booklet is released.",
  "On other Ontario communities, Mattamy typically structures a launch as named collections rather than a single undifferentiated price list. Elevations, included features, and lot premiums are usually presented together with the floor plans at VIP. That pattern is a general Mattamy practice, not a confirmed Preserve North package; until the builder publishes Preserve North-specific materials, treat collection structure as expected process rather than a guaranteed product mix.",
  "The Town of Oakville Urban Design Brief for Phase 4 is the current source for lot geometry. Single detached lots are described in a 10.4 m to 15.25 m range (approximately 34 to 50 feet), with the broader low-density area also referenced at 34 to 65 feet. Building heights are planned at 2 to 3 storeys. Those figures describe the planning envelope, not a marketed model.",
  "A block of 22 street townhouses is proposed on the west side of Preserve Drive, south of the future public school, per the same brief. That is a municipal planning figure, subject to change, and must not be read as a confirmed number of homes in the sales release. Preserve North's actual release count has not been announced.",
  "Registered buyers are typically notified first when Mattamy Homes publishes floor plans. There is no cost to register on this site, and registration does not reserve a specific lot or plan. Use the form on this page to request floor-plan updates, then review pricing status once figures are released.",
  "Until a booklet exists, the honest description of Preserve North floor plans is a pair of collection tiers plus the planning envelope. Street townhomes are planned near the future neighbourhood centre on Preserve Drive. Detached homes occupy the low-density remainder on lots described from roughly 34 to 65 feet, at 2 to 3 storeys. That is the entire confirmed product statement as of September 1, 2026.",
  "Buyers comparing this page with aggregator lists should note the gap those lists leave: most Oakville directories mention “The Preserve” as a category or list Preserve West, and skip Phase 4 entirely. A dedicated, crawlable floor-plans page that refuses to invent model names is the correct pre-launch state. When Mattamy releases plans, this page will add real cards — names, sizes, and bedroom counts — rather than remaining a placeholder.",
  "Mattamy's other Ontario launches often separate traditional towns, rear-lane or dual-front product, and several detached lot widths into distinct collections, each with its own elevation package. Whether Preserve North follows that exact split is unknown. Do not treat another community's collection names as if they were Preserve North models. The 22-townhouse figure in the Urban Design Brief is a proposed block, subject to change, and is not a confirmed release count for the first sales phase.",
  "Register for floor plan updates if the next useful event is a booklet. Until then, Preserve North floor plans remain two labelled tiers — townhomes and detached homes — with sizes and bedroom counts to be announced.",
] as const;

export const PRICING_ANSWER =
  "Mattamy Homes has not released pricing for Preserve North as of its Coming Soon registration stage. Buyers who register for community updates typically receive first access to pricing and floor plans once the VIP launch phase begins. Nearby North Oakville pre-construction communities have recently launched in the $900,000 to $1.5 million-plus range.";

export const PRICING_AS_OF =
  "As of September 1, 2026, Mattamy Homes has not released pricing for Preserve North.";

export const PRICING_ROWS = [
  { type: "Townhomes", price: "To be announced", status: "Coming Soon" },
  { type: "Detached Homes", price: "To be announced", status: "Coming Soon" },
] as const;

export const DEPOSIT_ROWS = [
  { milestone: "Initial deposit on signing", amount: "To be announced", due: "To be announced at VIP launch" },
  { milestone: "Second staged deposit", amount: "To be announced", due: "To be announced at VIP launch" },
  { milestone: "Subsequent staged deposits", amount: "To be announced", due: "To be announced at VIP launch" },
  { milestone: "Balance on closing", amount: "To be announced", due: "Occupancy to be announced" },
] as const;

export const INCENTIVE_ROWS = [
  { item: "Decor dollars / design studio credit", status: "To be announced" },
  { item: "Capped development charges", status: "To be announced" },
  { item: "Assignment fee policy", status: "To be announced" },
  { item: "Other launch incentives", status: "To be announced" },
] as const;

export const PRICING_COPY = [
  "Preserve North prices have not been published. This page is the price-and-deposit tracker for the project: every cell below reads “To be announced” until Mattamy Homes issues a VIP price list. Nearby North Oakville pre-construction communities have recently launched from the $900,000s to over $1.5 million; those figures are market context, not a Preserve North offer.",
  "Mattamy Homes typically publishes a staged deposit schedule at VIP launch for its Ontario communities. The usual pattern — an initial deposit on signing, then further deposits at set intervals before occupancy — is described here as general process, not as a confirmed Preserve North schedule. Amounts, percentages, and due dates remain to be announced.",
  "Incentives such as decor dollars or capped development charges have appeared on other Mattamy Ontario launches in the past. Any Preserve North-specific incentive will be confirmed at VIP launch, not before. This site will not invent a number to fill a template slot.",
  "Occupancy and closing dates are likewise unreleased. Registered buyers are typically notified first when a VIP launch date and an occupancy window are set. Register to be notified when prices release.",
  "This Preserve North prices page is built as a tracker, not as a teaser. Every cell that would normally hold a dollar figure reads “To be announced” on purpose. Fabricating a starting price to rank for the query would be both inaccurate and a compliance failure. When Mattamy Homes issues a VIP list, the last-updated date in the site source file is the switch that republishes these tables.",
  "A general Mattamy Ontario VIP launch still tends to look like this: registered buyers receive a notice, a sales centre appointment window opens, collections and prices are presented together, and a staged deposit schedule is attached to the agreement of purchase and sale. The initial deposit is due on signing; later deposits follow at intervals the builder sets. None of those intervals is confirmed for Preserve North. Occupancy remains to be announced.",
  "Nearby North Oakville pre-construction communities have recently launched from the $900,000s to over $1.5 million. That range is market context for the corridor, not a Preserve North offer and not a prediction of where this project will land. Lot width, collection, and included features will move price more than any headline average. Until Mattamy publishes numbers, the only accurate Preserve North prices statement is that they have not been released.",
  "Incentives, including decor dollars or capped development charges that have appeared on other Mattamy Ontario launches, are also to be announced. Assignment fees, rental restrictions, and POTL or freehold confirmation for the townhouse block belong in the purchase agreement, not on a guess. This site omits a maintenance-fee line until townhomes are confirmed freehold versus POTL.",
  "Register to be notified when prices release. That is the entire conversion purpose of this tracker: a dated, crawlable record that Preserve North prices are unreleased, so that the same URL can carry real figures on the day Mattamy Homes publishes them.",
] as const;

export const LOCATION_ANSWER =
  "Preserve North sits in North Oakville, bounded roughly by Burnhamthorpe Road East to the north, Dundas Street West to the south, and Sixth Line to the east, as an extension of Carding Mill Trail and Preserve Drive. It forms the northern extension of Mattamy's existing Preserve community within the North Oakville East Secondary Plan Area.";

export const LOCATION_COPY = {
  intro: [
    "Preserve North location is defined by the North Oakville East Secondary Plan more than by a single municipal street address. The Phase 4 lands sit north of Dundas Street West, south of Burnhamthorpe Road East, and west of Sixth Line, extending Carding Mill Trail and Preserve Drive northward from the already-built Preserve community.",
    "Mattamy Homes lists a shared Preserve sales-information point at 1388 Dundas Street West, Oakville, ON L6M 4L8 — the same centre used for earlier Preserve phases. That address is a sales-centre reference, not a claim that every Preserve North lot fronts Dundas Street West.",
    "Anyone writing Preserve North location into a listing or a directory should use the same named edges: Dundas Street West, Sixth Line, Burnhamthorpe Road East, Carding Mill Trail, Preserve Drive, North Oakville East Secondary Plan. Consistency across those names is what answer engines cite.",
  ],
  masterPlan: [
    "Phase 4 is the northern continuation of a master plan that already has streets, trails, and a neighbourhood-centre pattern on the ground. The Town of Oakville Urban Design Brief (DA-131705) describes a 107-acre (43.4 ha) combined study area organized around a Natural Heritage System corridor, with a future public elementary school and neighbourhood park sited centrally.",
    "Housing in that brief is planned as single detached homes and street townhouses at 2 to 3 storeys. Lot widths for singles are described from about 10.4 m to 15.25 m (roughly 34 to 50 feet), with the low-density area also referenced across a 34- to 65-foot range. A 22-unit street-townhouse block is proposed on the west side of Preserve Drive, south of the future public school — a planning figure, subject to change.",
    "The Neighbourhood Centre to the north is planned for retail and mixed-use potential, giving Phase 4 a walkable commercial edge that many standalone Oakville launches still have to invent. To the south, Phases 1–3 already supply the street grid Preserve North is designed to join.",
    "That north-south relationship is the master-plan argument for Preserve North. A buyer standing on Preserve Drive in the existing neighbourhood is already on the street the Phase 4 lands are planned to continue. Carding Mill Trail is the other named spine. The Urban Design Brief treats those extensions as the organizing moves, not as optional later connections.",
    "Site size remains 107 acres (43.4 ha) for the combined Phase 4 study area. That figure is large enough to include NHS lands, a school block, a park, detached lots, and the townhouse block — which is why a unit count for the sales release has not been inferred from acreage on this site.",
  ],
  transit: [
    "Preserve North is positioned in North Oakville with practical access to Highway 407 to the north and the Dundas Street West / Sixth Line corridor for east-west and north-south travel. Drive times vary with traffic and should be verified by each buyer; the highway relationship is the planning fact, not a guaranteed commute clock.",
    "An existing Oakville Transit bus stop serves Preserve Drive at Sixteen Mile Drive, roughly 575 metres south of the Phase 4 lands, connecting into Oakville Transit's broader network. That stop already exists because earlier Preserve phases are occupied — another master-plan inheritance rather than a future promise.",
    "Dundas Street West is the east-west arterial along the southern edge of this planning area; Sixth Line is the north-south arterial along the east. Highway 407 sits to the north of Burnhamthorpe Road East. Those three named roads, plus the existing bus stop, are the transit and highway facts this page is willing to state. Door-to-office minutes are not.",
  ],
  schools: [
    "Preserve North falls within North Oakville, an area generally served by the Halton District School Board and the Halton Catholic District School Board. A future public elementary school site is planned within the Preserve North (Phase 4) lands itself, adjacent to a future neighbourhood park.",
    "Exact school assignments should be confirmed with the relevant board before purchase. Named catchment schools for this exact parcel are not confirmed on this site. [UNVERIFIED — confirm exact catchment with the Halton District School Board and Halton Catholic District School Board before launch.]",
    "The planned elementary school site inside Preserve North is the location fact that most distinguishes this community from a typical Oakville greenfield. It is still a future facility. Secondary-school catchments, French immersion, and Catholic versus public assignment can all differ from a neighbour one street south. This page will not name a specific school as “the Preserve North school” until a board confirms it.",
  ],
  trails: [
    "Preserve North is planned around a Natural Heritage System (NHS) corridor with a connected multi-use trail, a signed bike route along Carding Mill Trail, and a future neighbourhood park. These connect directly into the existing trail network built through Phases 1–3 of The Preserve to the south, per the Town of Oakville's approved trail plan.",
    "The NHS is not leftover landscaping. It is the organizing spine of the Phase 4 urban design: lots, the school/park pair, and the townhouse block are arranged in relation to that corridor. Buyers who want trail access on day one of occupancy should still confirm construction staging, because trail segments inside Phase 4 will be delivered with the new streets rather than appearing overnight.",
    "Taken together, the Preserve North location story is a master-plan continuation: Burnhamthorpe Road East to the north, Dundas Street West to the south, Sixth Line to the east, Carding Mill Trail and Preserve Drive running through, NHS lands as the green spine, a future school and park in the centre, and an existing bus stop already serving the occupied streets to the south. That is a more specific picture than “north Oakville new homes,” and it is the picture municipal documents actually support.",
  ],
};

export const FAQ_PAGE_INTRO =
  "This Preserve North FAQ answers the questions buyers actually type: who is building it, how Phase 4 differs from Preserve West, what the deposit might look like, which schools and trails are planned, and how VIP registration works. Every answer below is written to stand alone if quoted by an answer engine. Unreleased figures stay labelled as to be announced. Last updated: September 1, 2026.";

export type FaqItem = { q: string; a: string };


export const FAQS: FaqItem[] = [
  {
    q: "Who is the builder behind Preserve North?",
    a: "Preserve North is being built by Mattamy Homes, Canada's largest privately-owned homebuilder, founded in Toronto in 1978 by Peter Gilgan. Mattamy has built the multi-phase Preserve community in Oakville since the early 2010s, including the already-selling Preserve West and East Preserve phases.",
  },
  {
    q: "What is Preserve North?",
    a: "Preserve North is a new pre-construction community by Mattamy Homes in Oakville, Ontario, planned to offer single detached homes and street townhomes. It is Phase 4 of Mattamy's established Preserve community, located north of Dundas Street West and west of Sixth Line, and is currently in a Coming Soon, registration-only stage.",
  },
  {
    q: "What home types and sizes are available at Preserve North?",
    a: "Per the Town of Oakville's approved Urban Design Brief, Preserve North is planned to include single detached homes on lots ranging from roughly 34 to 65 feet and a block of 22 planned street townhouses near the future neighbourhood centre on Preserve Drive. Exact floor plans and square footage have not yet been released by Mattamy Homes.",
  },
  {
    q: "How does Preserve North compare to other Oakville pre-construction communities?",
    a: "Preserve North benefits from sitting inside an already-established master-planned community — The Preserve — with existing trails, streets, and a nearby neighbourhood centre already built out through Phases 1-3. Compared to standalone new-launch projects elsewhere in Oakville, it inherits infrastructure and amenities that are already in place rather than years away.",
  },
  {
    q: "How much do homes at Preserve North cost?",
    a: "Mattamy Homes has not released pricing for Preserve North as of its Coming Soon stage. Registered buyers typically receive first access to pricing and floor plans once the VIP launch phase begins; nearby North Oakville pre-construction communities have recently launched from the $900,000s to over $1.5 million.",
  },
  {
    q: "What schools serve Preserve North?",
    a: "Preserve North falls within North Oakville, generally served by the Halton District School Board and the Halton Catholic District School Board. Notably, a future public elementary school site is planned within the Preserve North (Phase 4) lands themselves, adjacent to a future neighbourhood park. Buyers should confirm exact school catchments with the relevant board before purchasing.",
  },
  {
    q: "How do I get VIP access to Preserve North?",
    a: "You can register for Preserve North community updates directly on this site using the five-field form — first name, last name, email, and phone. Registered buyers are typically notified ahead of the general public when floor plans, pricing, and the VIP launch date are announced by Mattamy Homes.",
  },
  {
    q: "What is the deposit structure for Preserve North?",
    a: "Preserve North's deposit structure has not been announced as of its Coming Soon stage. Mattamy Homes typically publishes a staged deposit schedule at VIP launch for its Ontario communities; registering for updates is the fastest way to receive this information when it is released.",
  },
  {
    q: "When is the launch or occupancy for Preserve North?",
    a: "Mattamy Homes has not announced a firm sales launch date or occupancy timeline for Preserve North. The project is currently in a Coming Soon, registration-only stage; registered buyers are typically notified first when a VIP launch date is set.",
  },
  {
    q: "Where exactly is Preserve North located?",
    a: "Preserve North sits in North Oakville within the North Oakville East Secondary Plan Area, bounded roughly by Burnhamthorpe Road East to the north, Dundas Street West to the south, and Sixth Line to the east, extending Carding Mill Trail and Preserve Drive northward from the existing Preserve community.",
  },
  {
    q: "Are there incentives at Preserve North?",
    a: "Incentives for Preserve North have not been announced as of its Coming Soon stage. Mattamy Homes has offered incentives such as decor dollars or capped development charges on other Ontario launches in the past; any Preserve North-specific incentives will be confirmed at VIP launch, not before.",
  },
  {
    q: "Is there a cost to register for Preserve North?",
    a: "No. Registering for Preserve North community updates is free and simply adds you to Mattamy Homes' notification list for this project. There is no obligation to purchase and no cost associated with registering.",
  },
  {
    q: "What is the assignment or rental policy at Preserve North?",
    a: "Mattamy Homes has not published an assignment or rental policy specific to Preserve North, as the project has not yet reached its agreement of purchase and sale stage. Assignment and rental terms are typically detailed in the builder's purchase agreement at VIP launch — confirm directly with Mattamy Homes before relying on any third-party summary.",
  },
  {
    q: "Is Preserve North a good investment?",
    a: "Preserve North sits within an established, amenity-rich master-planned community in a supply-constrained Oakville market — generally favourable investment fundamentals. As with any pre-construction purchase, buyers should weigh the currently unreleased pricing, deposit schedule, and closing timeline, and review the assignment and resale policy once Mattamy Homes publishes its purchase agreement.",
  },
  {
    q: "How is Preserve North different from Preserve West?",
    a: "Preserve West is an earlier phase of Mattamy's Preserve community, already selling near 1388 Dundas Street West. Preserve North is the newer Phase 4 extension to the north of that existing neighbourhood, sharing the same builder, design vision, and connected trail network, but with its own distinct street layout, lot mix, and — once released — pricing.",
  },
  {
    q: "What trails and green space are near Preserve North?",
    a: "Preserve North is planned around a Natural Heritage System (NHS) corridor with a connected multi-use trail, a signed bike route along Carding Mill Trail, and a future neighbourhood park. These connect directly into the existing trail network built through Phases 1-3 of The Preserve to the south, per the Town of Oakville's approved trail plan.",
  },
];

export const REGISTER_LEDE =
  "Registering for Preserve North community updates is how buyers typically receive first access to floor plans and pricing when they are released, plus advance notice of the VIP launch date. There is no purchase obligation and no cost to register.";

export const SITEMAP_ROUTES: {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/floor-plans", changeFrequency: "weekly", priority: 0.9 },
  { path: "/pricing", changeFrequency: "weekly", priority: 0.9 },
  { path: "/location", changeFrequency: "monthly", priority: 0.8 },
  { path: "/gallery", changeFrequency: "monthly", priority: 0.7 },
  { path: "/faq", changeFrequency: "weekly", priority: 0.8 },
  { path: "/register", changeFrequency: "monthly", priority: 0.9 },
  { path: "/thank-you", changeFrequency: "yearly", priority: 0.3 },
  { path: "/blog/mattamy-homes-oakville-builder-guide", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export const BLOG_GUIDE = {
  lede: "Mattamy Homes has been building in Oakville for more than a decade through The Preserve. This guide explains how that builder track record, the North Oakville East Secondary Plan, and Phase 4 (Preserve North) fit together for buyers evaluating a coming-soon launch.",
  sections: [
    {
      h2: "Who Mattamy Homes is — and why Oakville already knows the name",
      paragraphs: [
        "Mattamy Homes is Canada's largest privately-owned homebuilder, founded in Toronto in 1978 by Peter Gilgan. The company is also regularly listed among the largest homebuilders in the United States. Those facts are public corporate history. They matter in Oakville because Preserve North is not a first introduction: Mattamy has been delivering The Preserve in North Oakville since the early 2010s.",
        "Buyers comparing builders often look for a local delivery record rather than a national slogan. In this corridor, that record is The Preserve itself — Preserve West and East Preserve already on the ground near 1388 Dundas Street West, with streets, trails, and a neighbourhood-centre pattern that Phase 4 is designed to extend. A new Mattamy logo on a greenfield site elsewhere in the GTA would not carry the same continuity.",
        "This site is an independent information resource. It is not the official Mattamy Homes website and does not speak for the builder. Mattamy is described in the third person throughout. Marketing tagline on the builder's own Preserve North page is “Where New Feels Established,” which is a positioning statement, not a construction schedule.",
      ],
    },
    {
      h2: "The Preserve as a master plan, not a single street",
      paragraphs: [
        "The Preserve is a multi-phase community inside the North Oakville East Secondary Plan Area. Phases 1 through 3 are already built or selling. Preserve North is Phase 4: a 107-acre (43.4 ha) combined study area north of Dundas Street West, south of Burnhamthorpe Road East, and west of Sixth Line, documented in the Town of Oakville Urban Design Brief (DA-131705, January 2021).",
        "The brief describes an extension of Carding Mill Trail and Preserve Drive, a Natural Heritage System corridor, a future public elementary school, a future neighbourhood park, a multi-use trail, and a signed bike route. Housing types are single detached homes and street townhouses at 2 to 3 storeys. Those are planning facts. They are not a substitute for a sales booklet.",
        "Master-planned communities in the GTA sometimes sell a first phase against a brochure of future parks and schools. Preserve North's distinguishing planning fact is the reverse sequence: much of the southern fabric already exists. Whether that is worth a premium will depend on the unreleased price list, not on adjectives.",
      ],
    },
    {
      h2: "How Mattamy typically launches an Ontario community",
      paragraphs: [
        "Mattamy's public pattern on other Ontario communities is a Coming Soon registration period, then a VIP launch at which collections, floor plans, a price list, and a staged deposit schedule are released together. Registered buyers are typically notified ahead of a general public opening. That is a general process description. It is not a confirmed calendar for Preserve North.",
        "Until VIP, the useful documents are municipal: the Urban Design Brief, the secondary plan, and whatever Mattamy itself publishes on its official project page. The builder's official Preserve North page is a client-side JavaScript application; this independent site exists in part because crawlers and answer engines cannot reliably read that app.",
        "Deposit structures in Mattamy Ontario launches are commonly staged: an initial deposit on signing, then further deposits at intervals before occupancy. Amounts for Preserve North are to be announced. Assignment and rental terms live in the agreement of purchase and sale, which does not exist for this project yet. Do not rely on a third-party summary of another Mattamy community as if it were Preserve North policy.",
      ],
    },
    {
      h2: "Preserve North versus Preserve West",
      paragraphs: [
        "Preserve West is an earlier, currently selling phase centred near the Dundas Street West sales-information address. Preserve North is the Phase 4 extension north of that neighbourhood. Both share the builder, the design-height range, and the trail network. They do not share a published price list, because Preserve North has not released one.",
        "Lot mix will differ. Phase 4's brief emphasizes singles on roughly 34- to 65-foot lots plus a planned street-townhouse block near the future neighbourhood centre on Preserve Drive. Preserve West's marketed product is a separate release and should be compared only using that phase's own documents.",
        "For buyers who already know The Preserve, the decision is less “which builder” and more “which phase and which collection.” For buyers new to Oakville, the builder guide question is whether Mattamy's existing delivery in this neighbourhood reduces execution risk relative to a first-time site. That is a judgment, not a guarantee.",
      ],
    },
    {
      h2: "What North Oakville's planning framework actually locks in",
      paragraphs: [
        "The North Oakville East Secondary Plan is the municipal rulebook. It is why Phase 4 is organized around NHS lands rather than a conventional grid with leftover storm ponds. It is also why a public elementary school site and neighbourhood park appear in the centre of the plan rather than as optional marketing amenities.",
        "Transit context today includes an existing bus stop on Preserve Drive at Sixteen Mile Drive, about 575 metres south of the Phase 4 lands, plus the Dundas Street West and Sixth Line corridors and Highway 407 to the north. School boards are the Halton District School Board and the Halton Catholic District School Board; exact catchments for this parcel should be confirmed with those boards. Named schools are not listed here as confirmed.",
        "None of that framework publishes a home price. Oakville remains a supply-constrained market in general terms; that is commentary, not a Preserve North appreciation forecast. This guide does not claim guaranteed returns, allocation, or approval.",
      ],
    },
    {
      h2: "How to use this site as a buyer, not as a brochure",
      paragraphs: [
        "Use the VIP registration form on this site to request notice when Mattamy Homes releases Preserve North floor plans, pricing, deposit structure, incentives, and occupancy. Registration is free and is the only contact channel this independent site provides.",
        "Then read the location page for the secondary-plan and trail facts, the floor-plans page for collection tiers, the pricing page for the tracked “to be announced” tables, and the FAQ for the 16 questions buyers ask most. When Mattamy publishes new numbers, the dates at the top of lib/content.ts are the freshness switch for the whole site.",
        "Verify every figure against the builder's released purchase documents before making a decision. Municipal planning figures can change. Marketing taglines are not specifications. E.&O.E. Information current as of September 1, 2026.",
      ],
    },
    {
      h2: "Reading a Mattamy purchase package when it arrives",
      paragraphs: [
        "When Mattamy Homes eventually publishes a Preserve North VIP package, buyers should read it as a set of documents, not as a single brochure page. Floor plans, elevations, a price list, a deposit schedule, and the agreement of purchase and sale are separate instruments. A marketing booklet can change; the signed agreement is what governs deposits, occupancy targets, assignment, and included features.",
        "Compare any collection name in that package against this site's current statement that no Preserve North plan names have been released as of September 1, 2026. If the booklet and this page disagree, the builder's dated release wins — and this page should be updated the same day. Until then, treat aggregator snippets that list a price for “Preserve North” as referring to a different phase or to Oakville in general.",
        "The same discipline applies to schools and trails. A future public elementary school site inside Phase 4 is a planning allocation, not an open school. NHS trails on the approved plan are not the same as a finished multi-use path on closing day. Confirm staging with the builder's occupancy documents, and confirm catchments with the Halton District School Board and the Halton Catholic District School Board.",
      ],
    },
    {
      h2: "What this independent site will and will not do",
      paragraphs: [
        "This domain covers Preserve North from a builder-and-master-plan angle: who is building it, how Phase 4 sits inside The Preserve and the North Oakville East Secondary Plan, and how Mattamy has typically launched Ontario communities. It does not impersonate Mattamy Homes, does not publish an agent identity, and does not offer a phone number or email address. The five-field registration form is the only contact channel, including for privacy requests.",
        "Companion sites in the same project cluster may emphasize pricing tracking, lifestyle, or a general information hub. Each sets a self-referencing canonical. Facts such as the 107-acre study area, the Dundas Street West and Sixth Line context, and the Coming Soon status are necessarily shared; the sentences on this domain are written for the builder spotlight, not copied from a sibling.",
        "Register for Preserve North updates if the next useful event is a VIP price list and floor-plan booklet. Until that event, the sourced facts on this guide, the location page, and the FAQ are the complete public picture this independent site is willing to stand behind.",
        "Mattamy Homes in Oakville, for the purpose of this builder guide, means a multi-phase Preserve community already on the ground and a Coming Soon Phase 4 called Preserve North. That is the practical summary. Everything else — prices, plans, deposits, occupancy — waits on the builder's next release.",
      ],
    },
  ],
};

export const GALLERY_INTRO =
  "Official architectural renderings and a public marketing site plan for Preserve North have not been released by Mattamy Homes as of September 1, 2026. Renderings will be added here once released by Mattamy Homes. Until then, this gallery shows neighbourhood-context photography of trails, woodland, and the established Preserve-area street character that Phase 4 is planned to extend — clearly labelled so it is never mistaken for a project rendering.";
