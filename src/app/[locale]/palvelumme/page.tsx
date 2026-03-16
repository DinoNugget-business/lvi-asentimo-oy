import { getTranslations } from "next-intl/server";
import { Siren } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import CtaBanner from "@/components/sections/CtaBanner";
import FooterSection from "@/components/layout/FooterSection";
import ScrollAnimator from "@/components/ui/ScrollAnimator";
import { CONTACT } from "@/lib/constants";

export async function generateMetadata() {
  const t = await getTranslations("servicesPage");
  return { title: t("pageTitle") };
}

const CORE_SERVICE_IDS = ["lvi", "putkiremontit", "viemarikuvaukset", "huolto24h", "huoltosopimukset", "saaristo"];

export default async function PalvelummePage() {
  const t = await getTranslations("servicesPage");
  const ts = await getTranslations("services");

  const relatedServices = [
    t("related1"),
    t("related2"),
    t("related3"),
    t("related4"),
    t("related5"),
  ];

  return (
    <>
      <ScrollAnimator />
      <PageHeader title={t("pageTitle")} subtitle={t("pageSubtitle")} />

      {/* Core services — row list */}
      <section className="bg-warm-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text tracking-tight mb-4">
            {t("coreTitle")}
          </h2>
          <p className="text-text-muted max-w-2xl mb-10">
            {t("coreDescription")}
          </p>

          <div className="stagger-children">
            {CORE_SERVICE_IDS.map((id, i) => {
              const isEmergency = id === "huolto24h";
              const num = String(i + 1).padStart(2, "0");

              return (
                <div
                  key={id}
                  className={`animate-on-scroll service-row ${
                    isEmergency ? "!border-l-4 !border-l-emergency !pl-4" : ""
                  }`}
                >
                  <span className={`service-row-number ${isEmergency ? "!text-emergency" : ""}`}>
                    {num}
                  </span>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-text tracking-tight">
                      {ts(`${id}.title`)}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed mt-1 max-w-lg">
                      {ts(`${id}.description`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related services — em-dash list */}
      <section className="bg-surface py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text tracking-tight mb-4">
            {t("relatedTitle")}
          </h2>
          <p className="text-text-muted max-w-2xl mb-10">
            {t("relatedDescription")}
          </p>

          <div className="space-y-0 stagger-children">
            {relatedServices.map((label) => (
              <div key={label} className="animate-on-scroll py-3 border-b border-surface-dark flex items-center">
                <span className="text-copper font-bold mr-3">—</span>
                <span className="font-medium text-sm text-text">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency section */}
      <section className="bg-dark py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-light tracking-tight mb-4">
              {t("emergencyTitle")}
            </h2>
            <p className="text-text-light-muted leading-relaxed mb-8">
              {t("emergencyDescription")}
            </p>
            <a
              href={CONTACT.phone2Href}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-md font-semibold text-white bg-emergency transition-all hover:bg-emergency-dark text-sm tracking-wide emergency-pulse"
            >
              <Siren className="w-4 h-4" />
              24/7 Hätähuolto: {CONTACT.phone2}
            </a>
          </div>
        </div>
      </section>

      <CtaBanner />
      <FooterSection />
    </>
  );
}
