"use client";

import { useTranslations } from "next-intl";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { CONTACT } from "@/lib/constants";
import { addRipple } from "@/lib/ripple";

export default function CtaBanner() {
  const t = useTranslations("cta");

  return (
    <section className="bg-dark py-14 sm:py-20 section-angle-top">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
          {/* Left: headline */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light tracking-tight mb-3">
              {t("title")}
            </h2>
            <p className="text-text-light-muted max-w-lg">
              {t("subtitle")}
            </p>
          </div>

          {/* Right: CTAs stacked */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href={CONTACT.phoneHref}
              onClick={addRipple}
              className="btn-ripple btn-shimmer inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-md font-semibold text-dark bg-copper transition-colors hover:bg-copper-dark text-sm tracking-wide"
            >
              <Phone className="w-4 h-4" />
              {t("callNow")} {CONTACT.phone}
            </a>
            <Link
              href="/yhteystiedot"
              onClick={addRipple}
              className="btn-ripple inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-md font-semibold text-text-light border border-dark-border transition-colors hover:border-copper/40 hover:text-copper text-sm tracking-wide"
            >
              {t("requestQuote")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
