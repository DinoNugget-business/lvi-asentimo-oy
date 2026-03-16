"use client";

import { useTranslations } from "next-intl";
import { SITE, CONTACT, NAV_ITEMS } from "@/lib/constants";
import { Link } from "@/i18n/navigation";

export default function FooterSection() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");

  return (
    <footer className="bg-dark relative overflow-hidden">
      {/* Oversized brand name — ghosted typographic background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-bold text-white/[0.025] whitespace-nowrap select-none pointer-events-none"
        style={{ fontSize: "clamp(5rem, 14vw, 12rem)" }}
        aria-hidden="true"
      >
        ASENTIMO
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 py-12">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Col 1: Brand */}
          <div>
            <div className="font-display font-bold text-text-light text-xl mb-3 tracking-tight">
              LVI <span className="text-copper">ASENTIMO</span>
            </div>
            <p className="text-sm leading-relaxed mb-3 text-text-light-muted">
              {t("description")}
            </p>
            <p className="text-xs text-text-light-muted/50">
              {t("businessId")}: {CONTACT.businessId}
            </p>
          </div>

          {/* Col 2: Quick links + Service areas */}
          <div>
            <h3 className="font-semibold text-sm mb-3 text-text-light">
              {t("quickLinks")}
            </h3>
            <nav className="space-y-2 mb-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="block text-sm text-text-light-muted transition-opacity hover:opacity-80"
                >
                  {tn(item.id)}
                </Link>
              ))}
            </nav>
            <h3 className="font-semibold text-sm mb-2 text-text-light">
              {t("serviceAreas")}
            </h3>
            <p className="text-sm text-text-light-muted">
              {t("espoo")} · {t("helsinki")} · {t("kirkkonummi")} · {t("vantaa")} · {t("saaristo")}
            </p>
          </div>

          {/* Col 3: Contact — typography only, no icons */}
          <div>
            <h3 className="font-semibold text-sm mb-3 text-text-light">
              {t("contactTitle")}
            </h3>
            <div className="space-y-3">
              <a
                href={CONTACT.phoneHref}
                className="block text-sm text-copper font-semibold hover:opacity-80 transition-opacity"
              >
                {CONTACT.phone}
              </a>
              <a
                href={CONTACT.phone2Href}
                className="block text-sm text-emergency font-semibold hover:opacity-80 transition-opacity"
              >
                {t("emergency")} {CONTACT.phone2}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="block text-sm text-text-light-muted hover:opacity-80 transition-opacity"
              >
                {CONTACT.email}
              </a>
              <p className="text-sm text-text-light-muted">
                {CONTACT.fullAddress}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="pt-6 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-light-muted/50">
            &copy; {new Date().getFullYear()} {SITE.name}. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
