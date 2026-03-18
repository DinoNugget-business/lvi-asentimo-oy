"use client";

import { useTranslations } from "next-intl";
import { useState, useMemo } from "react";
import PageHeader from "@/components/layout/PageHeader";
import FooterSection from "@/components/layout/FooterSection";
import ScrollAnimator from "@/components/ui/ScrollAnimator";
import { REFERENCES } from "@/lib/constants";

type FilterType = "all" | "linja" | "lampo" | "vesi" | "urakka";

export default function ReferenssitPage() {
  const t = useTranslations("references");
  const tp = useTranslations("referencesPage");
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

  // Group filtered references by year
  const grouped = useMemo(() => {
    const map = new Map<number, typeof REFERENCES[number][]>();
    for (const ref of filtered) {
      const list = map.get(ref.year) || [];
      list.push(ref);
      map.set(ref.year, list);
    }
    return Array.from(map.entries()).sort((a, b) => b[0] - a[0]);
  }, [filtered]);

  const years = REFERENCES.map((r) => r.year);
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);

  return (
    <>
      <ScrollAnimator />
      <PageHeader title={tp("pageTitle")} subtitle={tp("pageSubtitle")} />

      <section className="bg-warm-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5">
          {/* Summary */}
          <p className="text-sm text-text-muted mb-6 animate-on-scroll">
            {REFERENCES.length} projektia vuosina {minYear}–{maxYear}
          </p>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  filter === f.key
                    ? "bg-copper text-dark"
                    : "border border-surface-dark text-text-muted hover:border-copper/40 hover:text-copper"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Year-grouped references */}
          <div className="space-y-8">
            {grouped.map(([year, refs]) => (
              <div key={year} className="animate-on-scroll">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-copper tracking-tight mb-3">
                  {year}
                </h3>
                <div className="border-t border-surface-dark">
                  {refs.map((ref, i) => (
                    <div
                      key={i}
                      className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0 py-3 ${
                        i < refs.length - 1 ? "border-b border-surface-dark/50" : ""
                      }`}
                    >
                      <span className="font-medium text-text flex-1">{ref.project}</span>
                      <span className="text-sm text-text-muted sm:w-48">{ref.type}</span>
                      <span className="text-sm text-text-dim sm:w-40 hidden md:block">{ref.client}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-text-dim mt-8">
            {filtered.length} / {REFERENCES.length} projektia
          </p>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="bg-surface py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <p className="text-text-muted">
            Kiinnostavatko referenssimme?{" "}
            <a href="tel:+358405765968" className="font-semibold text-copper hover:text-copper-dark transition-colors">
              Pyydä tarjous
            </a>
          </p>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
