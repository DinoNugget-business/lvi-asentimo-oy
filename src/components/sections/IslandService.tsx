"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function IslandService() {
  const t = useTranslations("island");

  return (
    <section className="bg-surface py-16 sm:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left content — 5 cols */}
          <div className="lg:col-span-5 animate-on-scroll anim-fadeLeft">
            <span className="section-label">{t("sectionLabel")}</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text tracking-tight mb-5">
              {t("title")}
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              {t("description")}
            </p>

            {/* Feature list — em-dash style, no icons */}
            <div className="space-y-3 mb-8">
              <p className="text-sm font-medium text-text">
                <span className="text-copper mr-2">—</span>
                {t("feature1")}
              </p>
              <p className="text-sm font-medium text-text">
                <span className="text-copper mr-2">—</span>
                {t("feature2")}
              </p>
              <p className="text-sm font-medium text-text">
                <span className="text-copper mr-2">—</span>
                {t("feature3")}
              </p>
            </div>

            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-copper hover:text-copper-dark transition-colors"
            >
              {t("cta")}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right visual — 7 cols: dark typographic panel */}
          <div className="lg:col-span-7 animate-on-scroll anim-fadeRight">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dark flex items-center justify-center">
              {/* Ghosted typography */}
              <span
                className="font-display font-bold text-white/[0.04] select-none pointer-events-none whitespace-nowrap leading-none"
                style={{ fontSize: "clamp(5rem, 14vw, 12rem)" }}
                aria-hidden="true"
              >
                SAARISTO
              </span>
              {/* Diagonal accent stripe */}
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-16 h-[140%] bg-copper/10 rotate-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
