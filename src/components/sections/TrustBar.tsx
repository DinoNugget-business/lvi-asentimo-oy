"use client";

import { useTranslations } from "next-intl";

export default function TrustBar() {
  const t = useTranslations("trust");

  const stats = [
    { value: t("years"), label: t("yearsLabel") },
    { value: t("refs"), label: t("refsLabel") },
    { value: t("emergency"), label: t("emergencyLabel") },
    { value: t("areas"), label: t("areasLabel") },
  ];

  return (
    <section className="bg-copper py-8 sm:py-10">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-dark tracking-tight leading-none">
                {stat.value}
              </div>
              <div className="text-xs text-dark/60 font-medium uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
