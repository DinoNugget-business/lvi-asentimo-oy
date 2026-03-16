"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { Link } from "@/i18n/navigation";

export default function ContactPreview() {
  const t = useTranslations("contactPreview");

  return (
    <section className="bg-warm-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info — typography-driven */}
          <div className="animate-on-scroll">
            <span className="section-label">{t("sectionLabel")}</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text tracking-tight mb-5">
              {t("title")}
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              {t("office")}
            </p>

            {/* Contact items — typography only, no icon boxes */}
            <div className="space-y-6 mb-8">
              <a href={CONTACT.phoneHref} className="block group">
                <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-medium block mb-0.5">Puhelin</span>
                <span className="font-display text-2xl sm:text-3xl font-bold text-copper tracking-tight group-hover:text-copper-dark transition-colors">
                  {CONTACT.phone}
                </span>
              </a>
              <a href={CONTACT.phone2Href} className="block group">
                <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-medium block mb-0.5">Hätähuolto 24/7</span>
                <span className="font-display text-2xl sm:text-3xl font-bold text-emergency tracking-tight group-hover:text-emergency-dark transition-colors">
                  {CONTACT.phone2}
                </span>
              </a>
              <a href={`mailto:${CONTACT.email}`} className="block group">
                <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-medium block mb-0.5">Sähköposti</span>
                <span className="text-base font-semibold text-text group-hover:text-copper transition-colors">
                  {CONTACT.email}
                </span>
              </a>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-medium block mb-0.5">Osoite</span>
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
            <div className="rounded-2xl overflow-hidden h-80 lg:h-full min-h-[320px] bg-surface">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1975.5!2d24.4537!3d60.1244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKirkkonummi!5e0!3m2!1sfi!2sfi!4v1"
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
