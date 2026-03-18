"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { REFERENCES } from "@/lib/constants";
import { Link } from "@/i18n/navigation";

const STATS = [
  { key: "years" as const, valueKey: "yearsValue", contextKey: "yearsContext" },
  { key: "refs" as const, valueKey: "refsValue", contextKey: "refsContext" },
  { key: "emergency" as const, valueKey: "emergencyValue", contextKey: "emergencyContext" },
];

export default function SocialProof() {
  const t = useTranslations("socialProof");
  const tr = useTranslations("references");
  const featured = REFERENCES.slice(0, 3);

  return (
    <section className="bg-dark py-20 sm:py-28 section-angle-top">
      <div className="max-w-6xl mx-auto px-5">
        {/* Stats with context */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 mb-16 animate-on-scroll">
          {STATS.map((stat) => (
            <div key={stat.key}>
              <div className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight leading-none stat-glow">
                {t(stat.valueKey)}
              </div>
              <div className="text-sm text-text-light-muted mt-2 leading-relaxed">
                {t(stat.contextKey)}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-dark-border mb-12" />

        {/* Section header */}
        <div className="mb-8 animate-on-scroll">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-light tracking-tight">
            {tr("title")}
          </h2>
        </div>

        {/* Featured reference rows */}
        <div className="space-y-0 mb-10 stagger-children">
          {featured.map((ref, i) => (
            <div
              key={i}
              className="animate-on-scroll flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 py-4 border-b border-dark-border"
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
            {tr("viewAll")} ({REFERENCES.length})
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
