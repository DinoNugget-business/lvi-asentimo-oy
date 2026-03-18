"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { CONTACT, GOOGLE_MAPS_EMBED } from "@/lib/constants";
import { Link } from "@/i18n/navigation";

export default function ContactPreview() {
  const t = useTranslations("contactPreview");

  return (
    <section className="bg-bg-light py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div className="animate-on-scroll">
            <span className="section-label">{t("sectionLabel")}</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text tracking-tight mb-3">
              {t("title")}
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              {t("subtitle")}
            </p>

            {/* Contact items */}
            <div className="space-y-5 mb-8">
              <a href={CONTACT.phoneHref} className="block group">
                <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-medium block mb-0.5">
                  Puhelin
                </span>
                <span className="font-display text-2xl sm:text-3xl font-bold text-copper tracking-tight group-hover:text-copper-dark transition-colors">
                  {CONTACT.phone}
                </span>
              </a>
              <a href={`mailto:${CONTACT.email}`} className="block group">
                <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-medium block mb-0.5">
                  Sähköposti
                </span>
                <span className="text-base font-semibold text-text group-hover:text-copper transition-colors">
                  {CONTACT.email}
                </span>
              </a>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-medium block mb-0.5">
                  Osoite
                </span>
                <span className="text-base font-semibold text-text">
                  {CONTACT.fullAddress}
                </span>
              </div>
            </div>

            <Link
              href="/yhteystiedot"
              className="inline-flex items-center gap-2 text-sm font-semibold text-copper hover:text-copper-dark transition-colors"
            >
              {t("viewContact")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Map */}
          <div className="animate-on-scroll anim-fadeRight">
            <div className="rounded-2xl overflow-hidden h-80 lg:h-full min-h-[360px] bg-surface">
              <iframe
                src={GOOGLE_MAPS_EMBED}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LVI Asentimo Oy sijainti"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
