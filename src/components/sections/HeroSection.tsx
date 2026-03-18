"use client";

import { Phone, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CONTACT } from "@/lib/constants";
import { addRipple } from "@/lib/ripple";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      className="relative hero-min-h flex items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 20% 80%, rgba(200, 117, 51, 0.12) 0%, transparent 55%),
          radial-gradient(ellipse at 80% 20%, rgba(200, 117, 51, 0.06) 0%, transparent 45%),
          #0D1F2D
        `,
      }}
    >
      {/* Blueprint grid overlay */}
      <div className="hero-blueprint" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 py-24 sm:py-32">
        {/* Category label */}
        <p className="hero-heading section-label mb-5">
          {t("category")}
        </p>

        {/* Main headline — weight contrast */}
        <h1 className="hero-heading font-display hero-headline text-text-light max-w-[14ch] mb-6">
          <span className="block">{t("headlineStrong")}</span>
          <span className="thin text-copper">{t("headlineLight")}</span>
        </h1>

        {/* Tagline */}
        <p className="hero-subtext text-base sm:text-lg text-text-light-muted max-w-xl mb-10 leading-relaxed font-body">
          {t("tagline")}
        </p>

        {/* CTA row */}
        <div className="hero-ctas flex flex-col sm:flex-row gap-3 mb-10">
          <a
            href={CONTACT.phoneHref}
            onClick={addRipple}
            className="btn-ripple btn-shimmer inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-md font-semibold text-dark bg-copper transition-colors hover:bg-copper-dark text-sm tracking-wide font-body"
          >
            <Phone className="w-4 h-4" />
            {t("callUs")} {CONTACT.phone}
          </a>
          <Link
            href="/yhteystiedot"
            onClick={addRipple}
            className="btn-ripple inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-md font-semibold text-text-light border border-dark-border transition-colors hover:border-copper/40 hover:text-copper text-sm tracking-wide font-body"
          >
            {t("requestQuote")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Emergency — simple text, no icon box */}
        <p className="hero-emergency text-sm text-text-light-muted">
          {t("emergency")}{" "}
          <a
            href={CONTACT.phone2Href}
            className="font-semibold text-emergency hover:text-emergency-dark transition-colors"
          >
            {CONTACT.phone2}
          </a>
        </p>
      </div>
    </section>
  );
}
