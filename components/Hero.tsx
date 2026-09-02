import Image from "next/image";
import {
  FORM_HEADING,
  FORM_LEDE,
  HERO_EYEBROW,
  HERO_IMAGE,
  HERO_SUBHEAD,
  PAGE_META,
  STATUS_BADGE,
} from "@/lib/content";
import { CtaLink } from "./CtaLink";
import { LeadForm } from "./LeadForm";

export function Hero() {
  const meta = PAGE_META.home;
  return (
    <section className="relative overflow-hidden bg-brand-deep">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          width={HERO_IMAGE.width}
          height={HERO_IMAGE.height}
          priority
          sizes="100vw"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-deep/55" />
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] items-center gap-8 px-4 pb-10 pt-8 sm:px-5 md:gap-10 md:pb-16 md:pt-12 lg:grid-cols-2 lg:gap-12 lg:pb-20 lg:pt-16">
        <div>
          <p className="eyebrow !text-brand-accent">{HERO_EYEBROW}</p>
          <p className="badge-status mt-4">{STATUS_BADGE}</p>
          <h1 className="mt-5 max-w-[20ch] font-display font-semibold text-surface text-[clamp(1.85rem,5.4vw,3.35rem)] leading-[1.12]">
            {meta.h1}
          </h1>
          <p className="mt-4 max-w-[46ch] text-base text-surface/90 md:mt-5 md:text-lg">{HERO_SUBHEAD}</p>
          <div className="mt-6 hidden lg:block">
            <CtaLink href="#floor-plans-preview" location="hero_secondary" variant="ghost">
              View Preserve North floor plans
            </CtaLink>
          </div>
        </div>
        <div id="hero-register" className="scroll-mt-28 min-w-0 lg:max-w-lg lg:justify-self-end w-full">
          <LeadForm id="hero-register-form" compact heading={FORM_HEADING} lede={FORM_LEDE} />
        </div>
      </div>
    </section>
  );
}
