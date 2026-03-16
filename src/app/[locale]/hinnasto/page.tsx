import { getTranslations } from "next-intl/server";
import PageHeader from "@/components/layout/PageHeader";
import CtaBanner from "@/components/sections/CtaBanner";
import FooterSection from "@/components/layout/FooterSection";
import ScrollAnimator from "@/components/ui/ScrollAnimator";
import { PRICING, AREA_FEES } from "@/lib/constants";

export async function generateMetadata() {
  const t = await getTranslations("pricingPage");
  return { title: t("pageTitle") };
}

export default async function HinnastoPage() {
  const t = await getTranslations("pricingPage");
  const tp = await getTranslations("pricing");

  return (
    <>
      <ScrollAnimator />
      <PageHeader title={t("pageTitle")} subtitle={t("pageSubtitle")} />

      <section className="bg-warm-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-5">
          {/* Main pricing — no card wrapper */}
          <div className="animate-on-scroll mb-12">
            <h2 className="font-display text-xl font-semibold text-text mb-6">
              {tp("hourlyRate")}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-8">
              {/* Without VAT */}
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-medium mb-1">
                  {tp("exVat")}
                </div>
                <div className="font-display text-6xl sm:text-7xl font-extrabold text-copper tracking-tight leading-none">
                  {PRICING.hourlyExVat.toFixed(2).replace(".", ",")}
                  <span className="text-xl text-text-muted font-normal ml-1">€</span>
                </div>
                <div className="text-sm text-text-muted mt-1">{tp("perHour")}</div>
              </div>

              {/* With VAT */}
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-medium mb-1">
                  {tp("inclVat")}
                </div>
                <div className="font-display text-6xl sm:text-7xl font-extrabold text-text tracking-tight leading-none">
                  {PRICING.hourlyInclVat.toFixed(2).replace(".", ",")}
                  <span className="text-xl text-text-muted font-normal ml-1">€</span>
                </div>
                <div className="text-sm text-text-muted mt-1">{tp("perHour")}</div>
              </div>
            </div>

            <p className="text-sm text-text-muted accent-bar">
              {tp("minimumNote")}
            </p>
          </div>

          {/* Area fees */}
          <div className="animate-on-scroll mb-10">
            <h2 className="font-display text-xl font-semibold text-text mb-4">
              {tp("areaFees")}
            </h2>
            <div className="rounded-xl overflow-hidden border border-surface-dark">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-dark text-text-light">
                    <th className="text-left py-3 px-5 font-semibold">{tp("city")}</th>
                    <th className="text-right py-3 px-5 font-semibold">{tp("exVat")}</th>
                    <th className="text-right py-3 px-5 font-semibold">{tp("inclVat")}</th>
                  </tr>
                </thead>
                <tbody>
                  {AREA_FEES.map((fee, i) => (
                    <tr key={fee.city} className={i % 2 === 0 ? "bg-white" : "bg-bg-light"}>
                      <td className="py-3 px-5 font-medium">{fee.city}</td>
                      <td className="py-3 px-5 text-right">{fee.priceExVat.toFixed(2).replace(".", ",")} €</td>
                      <td className="py-3 px-5 text-right">{fee.priceInclVat.toFixed(2).replace(".", ",")} €</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tax deduction callout */}
          <div className="animate-on-scroll accent-bar bg-copper/5 rounded-r-xl p-6">
            <h3 className="font-display text-lg font-semibold text-text mb-2">
              {tp("taxDeduction")}
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              {tp("taxDeductionText")}
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
      <FooterSection />
    </>
  );
}
