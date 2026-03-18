"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { PRICING } from "@/lib/constants";
import { Link } from "@/i18n/navigation";

export default function PricingPreview() {
  const t = useTranslations("pricing");

  return (
    <section className="bg-warm-white py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <div className="animate-on-scroll">
          <span className="section-label">{t("sectionLabel")}</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text tracking-tight mb-8">
            {t("title")}
          </h2>

          {/* Price display — focal point */}
          <div className="mb-6">
            <div className="text-xs uppercase tracking-wider text-text-muted mb-2">
              {t("hourlyRate")} ({t("exVat")})
            </div>
            <div className="font-display text-5xl sm:text-7xl font-extrabold text-text tracking-tight">
              {PRICING.hourlyExVat.toFixed(2).replace(".", ",")}
              <span className="text-xl sm:text-2xl text-text-muted font-normal ml-1">€{t("perHour")}</span>
            </div>
            <div className="text-sm text-text-muted mt-2">
              {t("inclVat")}: {PRICING.hourlyInclVat.toFixed(2).replace(".", ",")} €{t("perHour")}
            </div>
          </div>

          {/* Minimum + tax deduction */}
          <p className="text-sm text-text-muted mb-4">
            {t("minimumNote")}
          </p>

          <div className="inline-block bg-copper/10 text-copper font-medium text-sm px-4 py-2 rounded-md mb-8">
            {t("taxDeduction")} — {t("taxDeductionShort")}
          </div>

          <div>
            <Link
              href="/hinnasto"
              className="inline-flex items-center gap-2 text-sm font-semibold text-copper hover:text-copper-dark transition-colors"
            >
              {t("viewFull")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
