import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import FooterSection from "@/components/layout/FooterSection";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <>
      <section className="bg-dark pt-28 pb-20 min-h-[60vh] flex items-center">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h1 className="font-display text-6xl font-bold text-copper mb-4">404</h1>
          <h2 className="font-display text-2xl font-semibold text-text-light mb-4">
            {t("title")}
          </h2>
          <p className="text-text-light-muted mb-8 max-w-md mx-auto">
            {t("description")}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-dark bg-copper hover:bg-copper-dark transition-colors text-sm"
          >
            {t("backHome")}
          </Link>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
