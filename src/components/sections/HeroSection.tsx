"use client";

import { Phone, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { CONTACT } from "@/lib/constants";
import { type MouseEvent } from "react";

function addRipple(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.className = "ripple-circle";
  ripple.style.left = `${e.clientX - rect.left - 10}px`;
  ripple.style.top = `${e.clientY - rect.top - 10}px`;
  el.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
}

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      className="relative min-h-screen flex items-end overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 20% 80%, rgba(200, 117, 51, 0.12) 0%, transparent 55%),
          radial-gradient(ellipse at 80% 20%, rgba(200, 117, 51, 0.06) 0%, transparent 45%),
          #0D1F2D
        `,
      }}
    >
      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 pb-16 pt-40 sm:pb-24 sm:pt-48">
        {/* Category label */}
        <p className="hero-heading section-label mb-5">
          {t("category")}
        </p>

        {/* Main headline — weight contrast */}
        <h1 className="hero-heading font-display hero-headline text-text-light max-w-[14ch] mb-6">
          <span className="block">{t("headlineStrong")}</span>
          <span className="thin text-copper">{t("headlineLight")}</span>
        </h1>

        {/* Tagline */}
        <p className="hero-subtext text-base sm:text-lg text-text-light-muted max-w-xl mb-10 leading-relaxed font-body">
          {t("tagline")}
        </p>

        {/* Trust stats */}
        <div className="hero-subtext flex flex-wrap items-center gap-x-8 gap-y-3 mb-10">
          <TrustStat value="25+" label={t("statYears")} />
          <span className="hidden sm:block w-px h-8 bg-dark-border" />
          <TrustStat value="40+" label={t("statRefs")} />
          <span className="hidden sm:block w-px h-8 bg-dark-border" />
          <TrustStat value="24/7" label={t("statEmergency")} accent />
        </div>

        {/* CTA row */}
        <div className="hero-ctas flex flex-col sm:flex-row gap-3 mb-8">
          <a
            href={CONTACT.phoneHref}
            onClick={addRipple}
            className="btn-ripple btn-shimmer inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-md font-semibold text-dark bg-copper transition-all hover:bg-copper-dark text-sm tracking-wide font-body"
          >
            <Phone className="w-4 h-4" />
            {t("callUs")} {CONTACT.phone}
          </a>
          <a
            href="/fi/yhteystiedot"
            onClick={addRipple}
            className="btn-ripple inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-md font-semibold text-text-light border border-dark-border transition-all hover:border-copper/40 hover:text-copper text-sm tracking-wide font-body"
          >
            {t("requestQuote")}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Emergency indicator */}
        <a
          href={CONTACT.phone2Href}
          className="hero-emergency inline-flex items-center gap-3 text-sm group"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emergency/15 emergency-pulse">
            <Phone className="w-3.5 h-3.5 text-emergency" />
          </span>
          <span className="text-text-light-muted group-hover:text-text-light transition-colors">
            {t("emergency")}{" "}
            <span className="font-semibold text-emergency">{CONTACT.phone2}</span>
          </span>
        </a>
      </div>
    </section>
  );
}

function TrustStat({ value, label, accent }: { value: string; label: string; accent?: boolean }) {
  return (
    <div className="flex flex-col">
      <span className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${accent ? "text-emergency" : "stat-glow"}`}>
        {value}
      </span>
      <span className="text-text-light-muted text-[11px] uppercase tracking-widest mt-0.5">
        {label}
      </span>
    </div>
  );
}
