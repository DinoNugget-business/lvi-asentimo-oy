import { getTranslations } from "next-intl/server";
import { ArrowRight, Phone } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import FooterSection from "@/components/layout/FooterSection";
import ScrollAnimator from "@/components/ui/ScrollAnimator";
import { CONTACT } from "@/lib/constants";

export async function generateMetadata() {
  const t = await getTranslations("servicesPage");
  return { title: t("pageTitle") };
}

const CORE_SERVICE_IDS = ["lvi", "putkiremontit", "viemarikuvaukset"];
const SPECIAL_SERVICE_IDS = ["huoltosopimukset", "saaristo"];

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

      {/* Core services */}
      <section className="bg-warm-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text tracking-tight mb-4">
            {t("coreTitle")}
          </h2>
          <p className="text-text-muted max-w-2xl mb-10">
            {t("coreDescription")}
          </p>

          <div className="stagger-children">
            {CORE_SERVICE_IDS.map((id) => (
              <div key={id} className="animate-on-scroll service-row">
                <span className="text-copper font-bold text-lg shrink-0">—</span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-text tracking-tight">
                    {ts(`${id}.title`)}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mt-1 max-w-lg">
                    {ts(`${id}.description`)}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 service-row-arrow" />
              </div>
            ))}
          </div>

          {/* Special services */}
          <h3 className="text-xs uppercase tracking-[0.15em] text-text-muted font-semibold mb-4 mt-12">
            {ts("specialGroupLabel")}
          </h3>
          <div className="stagger-children">
            {SPECIAL_SERVICE_IDS.map((id) => (
              <div key={id} className="animate-on-scroll service-row">
                <span className="text-copper font-bold text-lg shrink-0">—</span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-text tracking-tight">
                    {ts(`${id}.title`)}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mt-1 max-w-lg">
                    {ts(`${id}.description`)}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 service-row-arrow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services — horizontal flow */}
      <section className="bg-surface py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-text tracking-tight mb-4">
            {t("relatedTitle")}
          </h2>
          <p className="text-text-muted max-w-2xl mb-6 text-sm">
            {t("relatedDescription")}
          </p>
          <p className="text-sm text-text font-medium animate-on-scroll">
            {relatedServices.join(" · ")}
          </p>
        </div>
      </section>

      {/* Emergency section */}
      <section className="bg-dark py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-emergency emergency-pulse" />
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-light tracking-tight">
                {t("emergencyTitle")}
              </h2>
            </div>
            <p className="text-text-light-muted leading-relaxed mb-8">
              {t("emergencyDescription")}
            </p>
            <a
              href={CONTACT.phone2Href}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-md font-semibold text-white bg-emergency transition-all hover:bg-emergency-dark text-sm tracking-wide"
            >
              <Phone className="w-4 h-4" />
              24/7 Hätähuolto: {CONTACT.phone2}
            </a>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="bg-warm-white py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <p className="text-text-muted">
            Tarvitsetko apua LVI-asioissa?{" "}
            <a href={CONTACT.phoneHref} className="font-semibold text-copper hover:text-copper-dark transition-colors">
              Soita {CONTACT.phone}
            </a>
          </p>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
