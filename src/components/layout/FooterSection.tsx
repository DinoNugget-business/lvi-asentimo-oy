"use client";

import { useTranslations } from "next-intl";
import { SITE, CONTACT, NAV_ITEMS } from "@/lib/constants";
import { Link } from "@/i18n/navigation";

export default function FooterSection() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");

  return (
    <footer className="bg-dark">
      <div className="max-w-6xl mx-auto px-5 py-10">
        {/* Two columns */}
        <div className="flex flex-col sm:flex-row justify-between gap-8 mb-8">
          {/* Left: Brand */}
          <div className="max-w-sm">
            <div className="font-display font-bold text-text-light text-xl mb-2 tracking-tight">
              LVI <span className="text-copper">ASENTIMO</span>
            </div>
            <p className="text-sm leading-relaxed text-text-light-muted">
              {t("description")}
            </p>
          </div>

          {/* Right: Nav + emergency */}
          <div>
            <nav className="flex flex-wrap gap-x-5 gap-y-2 mb-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-sm text-text-light-muted transition-opacity hover:opacity-80"
                >
                  {tn(item.id)}
                </Link>
              ))}
            </nav>
            <a
              href={CONTACT.phone2Href}
              className="text-sm text-emergency font-semibold hover:opacity-80 transition-opacity"
            >
              {t("emergency")} {CONTACT.phone2}
            </a>
          </div>
        </div>

        {/* Copyright bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
          style={{
            borderTop: '1px solid transparent',
            borderImage: 'linear-gradient(90deg, #C87533 0%, #1E3A4E 40%, #1E3A4E 100%) 1',
          }}
        >
          <p className="text-xs text-text-light-muted/50">
            &copy; {new Date().getFullYear()} {SITE.name}. {t("rights")}
          </p>
          <p className="text-xs text-text-light-muted/50">
            {t("businessId")}: {CONTACT.businessId} · {t("espoo")} · {t("helsinki")} · {t("kirkkonummi")} · {t("vantaa")} · {t("saaristo")}
          </p>
        </div>
      </div>
    </footer>
  );
}
