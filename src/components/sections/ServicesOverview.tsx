"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

const SERVICE_IDS = ["lvi", "putkiremontit", "viemarikuvaukset", "huolto24h", "huoltosopimukset", "saaristo"];

export default function ServicesOverview() {
  const t = useTranslations("services");

  return (
    <section className="bg-warm-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section header — LEFT aligned */}
        <div className="mb-10">
          <span className="section-label">{t("sectionLabel")}</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text tracking-tight mb-4">
            {t("title")}
          </h2>
          <p className="text-text-muted max-w-xl">
            {t("subtitle")}
          </p>
        </div>

        {/* Service rows */}
        <div className="stagger-children">
          {SERVICE_IDS.map((id, i) => {
            const isEmergency = id === "huolto24h";
            const num = String(i + 1).padStart(2, "0");

            return (
              <div
                key={id}
                className={`animate-on-scroll service-row ${
                  isEmergency ? "!border-l-4 !border-l-emergency !pl-4" : ""
                }`}
              >
                <span className={`service-row-number ${isEmergency ? "!text-emergency" : ""}`}>
                  {num}
                </span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-text tracking-tight">
                    {t(`${id}.title`)}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mt-1 max-w-lg">
                    {t(`${id}.description`)}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 service-row-arrow" />
              </div>
            );
          })}
        </div>

        {/* View all link */}
        <div className="mt-10">
          <Link
            href="/palvelumme"
            className="inline-flex items-center gap-2 text-sm font-semibold text-copper hover:text-copper-dark transition-colors"
          >
            {t("viewAll")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
