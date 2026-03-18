import { getTranslations } from "next-intl/server";
import PageHeader from "@/components/layout/PageHeader";
import FooterSection from "@/components/layout/FooterSection";
import ScrollAnimator from "@/components/ui/ScrollAnimator";
import { PARTNERS } from "@/lib/constants";

export async function generateMetadata() {
  const t = await getTranslations("partnersPage");
  return { title: t("pageTitle") };
}

export default async function YhteistyokumppanitPage() {
  const t = await getTranslations("partnersPage");

  const categories = [
    { key: "lvi" as const, label: t("lvi") },
    { key: "sahko" as const, label: t("sahko") },
    { key: "rakennus" as const, label: t("rakennus") },
    { key: "suunnittelu" as const, label: t("suunnittelu") },
  ];

  return (
    <>
      <ScrollAnimator />
      <PageHeader title={t("pageTitle")} subtitle={t("pageSubtitle")} />

      <section className="bg-warm-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5">
          {/* Intro paragraph */}
          <p className="text-text-muted max-w-2xl mb-12 leading-relaxed animate-on-scroll">
            {t("intro")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {categories.map(({ key, label }) => (
              <div key={key} className="animate-on-scroll">
                <div className="flex items-center gap-2 mb-3">
                  <span className="section-label mb-0">{label}</span>
                  <span className="text-xs text-text-dim">({PARTNERS[key].length})</span>
                </div>
                <div className="border-t border-surface-dark">
                  {PARTNERS[key].map((partner) => (
                    <div
                      key={partner.name}
                      className="flex items-center justify-between py-3 border-b border-surface-dark/60"
                    >
                      <span className="font-medium text-sm text-text">
                        {partner.name}
                      </span>
                      <span className="text-xs text-text-muted">
                        {partner.location}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
