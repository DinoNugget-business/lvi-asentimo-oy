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

/** Maritime SVG illustration of archipelago service routes */
function ArchipelagoMap() {
  return (
    <svg
      viewBox="0 0 560 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        {/* Water gradient */}
        <radialGradient id="water" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#142838" />
          <stop offset="100%" stopColor="#0D1F2D" />
        </radialGradient>
        {/* Copper center glow */}
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C87533" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#C87533" stopOpacity="0" />
        </radialGradient>
        {/* Water ripple pattern */}
        <pattern id="waterRipple" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 20 Q10 16 20 20 Q30 24 40 20" fill="none" stroke="#1E3A4E" strokeWidth="0.5" opacity="0.12" />
          <path d="M0 32 Q10 28 20 32 Q30 36 40 32" fill="none" stroke="#1E3A4E" strokeWidth="0.4" opacity="0.08" />
          <path d="M0 8 Q10 4 20 8 Q30 12 40 8" fill="none" stroke="#1E3A4E" strokeWidth="0.3" opacity="0.06" />
        </pattern>
        {/* Island fill gradient */}
        <linearGradient id="islandFill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E3A4E" />
          <stop offset="100%" stopColor="#253D50" />
        </linearGradient>
        {/* Hub glow filter */}
        <filter id="copperGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Label background filter */}
        <filter id="labelBg" x="-0.15" y="-0.3" width="1.3" height="1.6">
          <feFlood floodColor="#0D1F2D" floodOpacity="0.7" result="bg" />
          <feMorphology in="SourceGraphic" operator="dilate" radius="2" result="expanded" />
          <feComposite in="bg" in2="expanded" operator="in" result="bgShape" />
          <feMerge>
            <feMergeNode in="bgShape" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Water layers */}
      <rect width="560" height="420" fill="url(#water)" />
      <rect width="560" height="420" fill="url(#waterRipple)" />
      <ellipse cx="280" cy="200" rx="220" ry="160" fill="url(#glow)" />

      {/* Secondary routes (inter-island) — lighter */}
      <g stroke="#C87533" strokeWidth="0.75" strokeDasharray="2 6" opacity="0.2">
        <line x1="120" y1="160" x2="280" y2="130" />
        <line x1="280" y1="130" x2="380" y2="180" />
        <line x1="380" y1="180" x2="440" y2="250" />
        <line x1="120" y1="160" x2="180" y2="200" />
      </g>

      {/* Primary routes (mainland to islands) — stronger */}
      <g stroke="#C87533" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.35">
        <line x1="200" y1="290" x2="120" y2="160" />
        <line x1="200" y1="290" x2="280" y2="130" />
        <line x1="200" y1="290" x2="380" y2="180" />
        <line x1="200" y1="290" x2="440" y2="250" />
      </g>

      {/* Mainland coastline — layered for depth */}
      <path
        d="M0 355 Q60 330 120 325 Q150 310 190 290 Q210 282 230 290 Q255 275 280 295 Q310 315 350 322 Q385 328 430 340 Q470 348 520 355 Q545 358 560 365 L560 420 L0 420 Z"
        fill="#1E3A4E" opacity="0.45"
      />
      <path
        d="M0 365 Q80 345 160 340 Q200 332 240 340 Q280 350 330 345 Q380 340 440 352 Q500 360 560 375 L560 420 L0 420 Z"
        fill="#1E3A4E" opacity="0.2"
      />

      {/* Islands — organic shapes */}
      {/* Espoo island */}
      <path
        d="M94,158 C98,148 110,142 122,143 C136,144 148,150 149,160 C150,170 142,176 130,177 C116,178 92,170 94,158 Z"
        fill="url(#islandFill)" opacity="0.55"
      />
      {/* Helsinki island (largest) */}
      <path
        d="M246,128 C252,118 268,112 284,113 C302,114 316,120 318,132 C320,144 310,152 296,153 C278,154 242,142 246,128 Z"
        fill="url(#islandFill)" opacity="0.55"
      />
      {/* Eastern island */}
      <path
        d="M358,178 C362,170 372,166 384,167 C396,168 406,174 406,184 C406,192 398,198 386,198 C372,198 356,190 358,178 Z"
        fill="url(#islandFill)" opacity="0.55"
      />
      {/* Saaristo outer island */}
      <path
        d="M414,248 C418,238 430,232 444,234 C458,236 470,244 468,254 C466,264 454,270 440,269 C426,268 412,260 414,248 Z"
        fill="url(#islandFill)" opacity="0.55"
      />
      {/* Small background islands (depth) */}
      <path
        d="M170,198 C174,192 182,189 190,190 C198,191 204,196 203,202 C202,208 194,212 186,211 C178,210 168,206 170,198 Z"
        fill="url(#islandFill)" opacity="0.3"
      />
      <path
        d="M332,228 C336,222 344,218 354,220 C362,222 368,228 366,234 C364,240 356,244 346,243 C338,242 330,236 332,228 Z"
        fill="url(#islandFill)" opacity="0.3"
      />

      {/* Boat silhouette on route */}
      <g transform="translate(162, 225) rotate(-50)">
        <path d="M-7,2 Q-5,-2.5 0,-3.5 Q5,-2.5 7,2 Q3.5,3.5 0,3.5 Q-3.5,3.5 -7,2 Z" fill="#C87533" opacity="0.65" />
        <line x1="0" y1="-3.5" x2="0" y2="-9" stroke="#C87533" strokeWidth="0.7" opacity="0.55" />
        <path d="M0,-9 Q3.5,-7 0.5,-4.5" fill="#C87533" opacity="0.45" />
      </g>

      {/* Service location dots — islands */}
      <circle cx="120" cy="160" r="3.5" fill="#C87533" opacity="0.8" />
      <circle cx="120" cy="160" r="6" fill="none" stroke="#C87533" strokeWidth="0.7" opacity="0.25" />
      <circle cx="280" cy="130" r="3.5" fill="#C87533" opacity="0.8" />
      <circle cx="280" cy="130" r="6" fill="none" stroke="#C87533" strokeWidth="0.7" opacity="0.25" />
      <circle cx="380" cy="180" r="3.5" fill="#C87533" opacity="0.8" />
      <circle cx="380" cy="180" r="6" fill="none" stroke="#C87533" strokeWidth="0.7" opacity="0.25" />
      <circle cx="440" cy="250" r="3.5" fill="#C87533" opacity="0.8" />
      <circle cx="440" cy="250" r="6" fill="none" stroke="#C87533" strokeWidth="0.7" opacity="0.25" />

      {/* Mainland hub — with pulsing ring */}
      <circle cx="200" cy="290" r="5" fill="#C87533" filter="url(#copperGlow)" />
      <circle cx="200" cy="290" r="10" fill="none" stroke="#C87533" strokeWidth="1" className="hub-ring" />

      {/* Labels with background */}
      <text x="200" y="278" fill="#C4D0DC" fontSize="10" fontWeight="600" fontFamily="sans-serif" textAnchor="middle" filter="url(#labelBg)">
        KIRKKONUMMI
      </text>
      <text x="120" y="146" fill="#8A9BB0" fontSize="8.5" fontFamily="sans-serif" textAnchor="middle" filter="url(#labelBg)">
        ESPOO
      </text>
      <text x="280" y="116" fill="#8A9BB0" fontSize="8.5" fontFamily="sans-serif" textAnchor="middle" filter="url(#labelBg)">
        HELSINKI
      </text>
      <text x="440" y="236" fill="#8A9BB0" fontSize="8.5" fontFamily="sans-serif" textAnchor="middle" fontStyle="italic" letterSpacing="0.1em" filter="url(#labelBg)">
        SAARISTO
      </text>

      {/* Compass rose */}
      <g transform="translate(520, 45)" opacity="0.3">
        <circle cx="0" cy="0" r="10" fill="none" stroke="#8A9BB0" strokeWidth="0.5" />
        <line x1="0" y1="10" x2="0" y2="-10" stroke="#8A9BB0" strokeWidth="0.5" />
        <polygon points="0,-10 -2.5,-4 2.5,-4" fill="#8A9BB0" />
        <text x="0" y="-14" fill="#8A9BB0" fontSize="5" textAnchor="middle" fontFamily="sans-serif">N</text>
      </g>
    </svg>
  );
}
