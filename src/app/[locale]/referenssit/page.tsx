"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import CtaBanner from "@/components/sections/CtaBanner";
import FooterSection from "@/components/layout/FooterSection";
import ScrollAnimator from "@/components/ui/ScrollAnimator";
import { REFERENCES } from "@/lib/constants";

type FilterType = "all" | "linja" | "lampo" | "vesi" | "urakka";

export default function ReferenssitPage() {
  const t = useTranslations("references");
  const [filter, setFilter] = useState<FilterType>("all");

  const filters: { key: FilterType; label: string }[] = [
    { key: "all", label: t("filterAll") },
    { key: "linja", label: t("filterLinja") },
    { key: "lampo", label: t("filterLampo") },
    { key: "vesi", label: t("filterVesi") },
    { key: "urakka", label: t("filterUrakka") },
  ];

  const filtered = REFERENCES.filter((ref) => {
    if (filter === "all") return true;
    if (filter === "linja") return ref.type.toLowerCase().includes("linjasaneeraus");
    if (filter === "lampo") return ref.type.toLowerCase().includes("lämpö") || ref.type.toLowerCase().includes("lämmön");
    if (filter === "vesi") return ref.type.toLowerCase().includes("käyttövesi");
    if (filter === "urakka") return ref.type.toLowerCase().includes("urakka") || ref.type.toLowerCase().includes("saneeraus");
    return true;
  });

  return (
    <>
      <ScrollAnimator />
      <PageHeader title={t("pageTitle")} subtitle={t("pageSubtitle")} />

      <section className="bg-warm-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5">
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === f.key
                    ? "bg-copper text-dark"
                    : "bg-surface text-text-muted hover:bg-surface-dark"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* References table */}
          <div className="rounded-xl overflow-hidden border border-surface-dark">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-dark text-text-light">
                    <th className="text-left py-3 px-5 font-semibold w-20">{t("year")}</th>
                    <th className="text-left py-3 px-5 font-semibold">{t("project")}</th>
                    <th className="text-left py-3 px-5 font-semibold hidden sm:table-cell">{t("type")}</th>
                    <th className="text-left py-3 px-5 font-semibold hidden md:table-cell">{t("client")}</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((ref, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-bg-light"}>
                      <td className="py-3 px-5 font-display text-lg font-extrabold text-copper tracking-tight">{ref.year}</td>
                      <td className="py-3 px-5 font-medium">{ref.project}</td>
                      <td className="py-3 px-5 text-text-muted hidden sm:table-cell">{ref.type}</td>
                      <td className="py-3 px-5 text-text-muted hidden md:table-cell">{ref.client}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-sm text-text-dim mt-4">
            {filtered.length} / {REFERENCES.length} projektia
          </p>
        </div>
      </section>

      <CtaBanner />
      <FooterSection />
    </>
  );
}
