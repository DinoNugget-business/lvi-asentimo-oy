"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { REFERENCES } from "@/lib/constants";
import { Link } from "@/i18n/navigation";

export default function ReferencesPreview() {
  const t = useTranslations("references");
  const featured = REFERENCES.slice(0, 5);

  return (
    <section className="bg-dark py-16 sm:py-24 section-angle-top">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section header */}
        <div className="mb-10 animate-on-scroll">
          <p className="text-xs tracking-[0.2em] uppercase font-medium text-copper mb-3 font-display">
            {t("sectionLabel")}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-light tracking-tight mb-4">
            {t("title")}
          </h2>
          <p className="text-text-light-muted max-w-xl">
            {t("subtitle")}
          </p>
        </div>

        {/* Reference rows */}
        <div className="space-y-0 mb-10 stagger-children">
          {featured.map((ref, i) => (
            <div
              key={i}
              className="animate-on-scroll flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 py-4 border-b border-dark-border group"
            >
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-copper sm:w-24 shrink-0 tracking-tight">
                {ref.year}
              </span>
              <span className="text-text-light font-medium flex-1">
                {ref.project}
              </span>
              <span className="text-sm text-text-light-muted sm:w-52">
                {ref.type}
              </span>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="animate-on-scroll">
          <Link
            href="/referenssit"
            className="inline-flex items-center gap-2 text-sm font-semibold text-copper hover:text-copper-light transition-colors"
          >
            {t("viewAll")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
