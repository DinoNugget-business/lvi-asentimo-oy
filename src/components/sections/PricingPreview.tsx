"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { PRICING, AREA_FEES } from "@/lib/constants";
import { Link } from "@/i18n/navigation";

export default function PricingPreview() {
  const t = useTranslations("pricing");

  return (
    <section className="bg-warm-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Main pricing */}
          <div className="animate-on-scroll">
            <span className="section-label">{t("sectionLabel")}</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text tracking-tight mb-6">
              {t("title")}
            </h2>

            {/* Price display */}
            <div className="mb-6">
              <div className="text-xs uppercase tracking-wider text-text-muted mb-1">
                {t("hourlyRate")} ({t("exVat")})
              </div>
              <div className="font-display text-5xl sm:text-6xl font-bold text-text tracking-tight">
                {PRICING.hourlyExVat.toFixed(2).replace(".", ",")}
                <span className="text-xl text-text-muted font-normal ml-1">€{t("perHour")}</span>
              </div>
              <div className="text-sm text-text-muted mt-1">
                {t("inclVat")}: {PRICING.hourlyInclVat.toFixed(2).replace(".", ",")} €{t("perHour")}
              </div>
            </div>

            <p className="text-sm text-text-muted mb-6 accent-bar">
              {t("minimumNote")}
            </p>

            <Link
              href="/hinnasto"
              className="inline-flex items-center gap-2 text-sm font-semibold text-copper hover:text-copper-dark transition-colors"
            >
              {t("viewFull")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Area fees table */}
          <div className="animate-on-scroll anim-fadeRight">
            <h3 className="font-display text-lg font-semibold text-text mb-4">
              {t("areaFees")}
            </h3>
            <div className="rounded-xl overflow-hidden border border-surface-dark">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-dark text-text-light">
                    <th className="text-left py-3 px-4 font-semibold">{t("city")}</th>
                    <th className="text-right py-3 px-4 font-semibold">{t("exVat")}</th>
                    <th className="text-right py-3 px-4 font-semibold">{t("inclVat")}</th>
                  </tr>
                </thead>
                <tbody>
                  {AREA_FEES.map((fee, i) => (
                    <tr key={fee.city} className={i % 2 === 0 ? "bg-white" : "bg-bg-light"}>
                      <td className="py-3 px-4 font-medium">{fee.city}</td>
                      <td className="py-3 px-4 text-right">{fee.priceExVat.toFixed(2).replace(".", ",")} €</td>
                      <td className="py-3 px-4 text-right">{fee.priceInclVat.toFixed(2).replace(".", ",")} €</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
