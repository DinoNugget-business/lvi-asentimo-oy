"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { CONTACT } from "@/lib/constants";

const CORE_SERVICES = ["lvi", "putkiremontit", "viemarikuvaukset"];
const SPECIAL_SERVICES = ["huoltosopimukset", "saaristo"];

export default function ServicesOverview() {
  const t = useTranslations("services");

  return (
    <section className="bg-warm-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section header */}
        <div className="mb-10">
          <span className="section-label">{t("sectionLabel")}</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text tracking-tight mb-4">
            {t("title")}
          </h2>
          <p className="text-text-muted max-w-xl">
            {t("subtitle")}
          </p>
        </div>

        {/* Core services group */}
        <div className="mb-6">
          <h3 className="text-xs uppercase tracking-[0.15em] text-text-muted font-semibold mb-4">
            {t("coreGroupLabel")}
          </h3>
          <div className="stagger-children">
            {CORE_SERVICES.map((id) => (
              <ServiceRow key={id} id={id} t={t} />
            ))}
          </div>
        </div>

        {/* Special services group */}
        <div className="mb-6">
          <h3 className="text-xs uppercase tracking-[0.15em] text-text-muted font-semibold mb-4 mt-10">
            {t("specialGroupLabel")}
          </h3>
          <div className="stagger-children">
            {SPECIAL_SERVICES.map((id) => (
              <ServiceRow key={id} id={id} t={t} />
            ))}
          </div>
        </div>

        {/* Emergency row — full dark strip */}
        <div className="animate-on-scroll -mx-5 px-5 sm:mx-0 sm:px-0 mt-4">
          <div className="bg-dark rounded-none sm:rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emergency emergency-pulse" />
                <h3 className="font-display text-xl sm:text-2xl font-bold text-text-light tracking-tight">
                  {t("huolto24h.title")}
                </h3>
              </div>
              <p className="text-sm text-text-light-muted leading-relaxed max-w-lg">
                {t("huolto24h.description")}
              </p>
            </div>
            <a
              href={CONTACT.phone2Href}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md font-semibold text-white bg-emergency transition-colors hover:bg-emergency-dark text-sm tracking-wide shrink-0"
            >
              <Phone className="w-4 h-4" />
              {CONTACT.phone2}
            </a>
          </div>
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

function ServiceRow({ id, t }: { id: string; t: (key: string) => string }) {
  return (
    <div className="animate-on-scroll service-row">
      <span className="text-copper font-bold text-lg shrink-0">—</span>
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
}
