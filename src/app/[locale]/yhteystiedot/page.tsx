import { getTranslations } from "next-intl/server";
import PageHeader from "@/components/layout/PageHeader";
import FooterSection from "@/components/layout/FooterSection";
import ContactForm from "@/components/ui/ContactForm";
import ScrollAnimator from "@/components/ui/ScrollAnimator";
import { CONTACT } from "@/lib/constants";

export async function generateMetadata() {
  const t = await getTranslations("contact");
  return { title: t("pageTitle") };
}

export default async function YhteystiedotPage() {
  const t = await getTranslations("contact");

  return (
    <>
      <ScrollAnimator />
      <PageHeader title={t("pageTitle")} subtitle={t("pageSubtitle")} />

      <section className="bg-warm-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: Contact form — 3 cols */}
            <div className="lg:col-span-3 animate-on-scroll">
              <ContactForm />
            </div>

            {/* Right: Contact info — 2 cols, typography-driven */}
            <div className="lg:col-span-2 space-y-8 animate-on-scroll anim-fadeRight">
              {/* Contact details — label above, value below */}
              <div>
                <h3 className="font-display text-lg font-semibold text-text mb-6">
                  {t("pageTitle")}
                </h3>
                <div className="space-y-5">
                  <a href={CONTACT.phoneHref} className="block group">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-medium block mb-0.5">Puhelin</span>
                    <span className="font-display text-2xl font-bold text-copper tracking-tight group-hover:text-copper-dark transition-colors">
                      {CONTACT.phone}
                    </span>
                  </a>
                  <a href={CONTACT.phone2Href} className="block group">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-medium block mb-0.5">Hätähuolto 24/7</span>
                    <span className="font-display text-2xl font-bold text-emergency tracking-tight group-hover:text-emergency-dark transition-colors">
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
                      {CONTACT.address}
                    </span>
                    <span className="block text-sm text-text-muted">
                      {CONTACT.postalCode} {CONTACT.city}
                    </span>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-surface-dark">
                  <p className="text-xs text-text-muted">
                    Y-tunnus: {CONTACT.businessId}
                  </p>
                </div>
              </div>

              {/* Invoicing info */}
              <div className="accent-bar">
                <h3 className="font-display text-lg font-semibold text-text mb-2">
                  {t("invoicing")}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-2">
                  {t("invoicingText")}
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  {t("paperInvoice")}
                </p>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden h-56 bg-surface">
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

      <FooterSection />
    </>
  );
}
