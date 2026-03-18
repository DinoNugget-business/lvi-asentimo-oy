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

            {/* Feature list — horizontal on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="text-sm">
                <span className="text-copper font-bold mr-1.5">—</span>
                <span className="font-medium text-text">{t("feature1")}</span>
              </div>
              <div className="text-sm">
                <span className="text-copper font-bold mr-1.5">—</span>
                <span className="font-medium text-text">{t("feature2")}</span>
              </div>
              <div className="text-sm">
                <span className="text-copper font-bold mr-1.5">—</span>
                <span className="font-medium text-text">{t("feature3")}</span>
              </div>
            </div>

            {/* Service areas */}
            <p className="text-xs uppercase tracking-[0.15em] text-text-muted mb-6">
              {t("serviceAreas")}
            </p>

            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-copper hover:text-copper-dark transition-colors"
            >
              {t("cta")}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right visual — 7 cols: Archipelago map illustration */}
          <div className="lg:col-span-7 animate-on-scroll anim-fadeRight">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dark flex items-center justify-center">
              <ArchipelagoMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Abstract SVG illustration of archipelago service routes */
function ArchipelagoMap() {
  return (
    <svg
      viewBox="0 0 560 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Water gradient background */}
      <defs>
        <radialGradient id="water" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#142838" />
          <stop offset="100%" stopColor="#0D1F2D" />
        </radialGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C87533" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#C87533" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="560" height="420" fill="url(#water)" />

      {/* Subtle center glow */}
      <ellipse cx="280" cy="200" rx="200" ry="150" fill="url(#glow)" />

      {/* Service route lines */}
      <g stroke="#C87533" strokeWidth="1" strokeDasharray="4 6" opacity="0.3">
        {/* Mainland to islands */}
        <line x1="200" y1="280" x2="120" y2="160" />
        <line x1="200" y1="280" x2="280" y2="130" />
        <line x1="200" y1="280" x2="380" y2="180" />
        <line x1="200" y1="280" x2="440" y2="250" />
        {/* Inter-island connections */}
        <line x1="120" y1="160" x2="280" y2="130" />
        <line x1="280" y1="130" x2="380" y2="180" />
        <line x1="380" y1="180" x2="440" y2="250" />
      </g>

      {/* Coast / mainland shape */}
      <path
        d="M140 320 Q160 290 200 280 Q240 270 260 290 Q280 310 320 320 Q360 330 400 340 L400 420 L140 420 Z"
        fill="#1E3A4E"
        opacity="0.4"
      />

      {/* Island shapes — organic, varied */}
      <ellipse cx="120" cy="160" rx="28" ry="18" fill="#1E3A4E" opacity="0.5" />
      <ellipse cx="280" cy="130" rx="35" ry="20" fill="#1E3A4E" opacity="0.5" />
      <ellipse cx="380" cy="180" rx="25" ry="16" fill="#1E3A4E" opacity="0.5" />
      <ellipse cx="440" cy="250" rx="30" ry="18" fill="#1E3A4E" opacity="0.5" />
      <ellipse cx="180" cy="200" rx="18" ry="12" fill="#1E3A4E" opacity="0.35" />
      <ellipse cx="340" cy="230" rx="20" ry="14" fill="#1E3A4E" opacity="0.35" />

      {/* Service location dots */}
      <circle cx="200" cy="280" r="6" fill="#C87533" /> {/* Mainland base */}
      <circle cx="200" cy="280" r="10" fill="none" stroke="#C87533" strokeWidth="1" opacity="0.3" />
      <circle cx="120" cy="160" r="4" fill="#C87533" opacity="0.8" />
      <circle cx="280" cy="130" r="4" fill="#C87533" opacity="0.8" />
      <circle cx="380" cy="180" r="4" fill="#C87533" opacity="0.8" />
      <circle cx="440" cy="250" r="4" fill="#C87533" opacity="0.8" />

      {/* Labels */}
      <text x="200" y="270" fill="#8A9BB0" fontSize="9" fontFamily="sans-serif" textAnchor="middle">
        KIRKKONUMMI
      </text>
      <text x="120" y="148" fill="#8A9BB0" fontSize="8" fontFamily="sans-serif" textAnchor="middle">
        ESPOO
      </text>
      <text x="280" y="118" fill="#8A9BB0" fontSize="8" fontFamily="sans-serif" textAnchor="middle">
        HELSINKI
      </text>
      <text x="440" y="238" fill="#8A9BB0" fontSize="8" fontFamily="sans-serif" textAnchor="middle" opacity="0.7">
        SAARISTO
      </text>
    </svg>
  );
}
