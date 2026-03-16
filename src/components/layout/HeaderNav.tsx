"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { CONTACT, NAV_ITEMS } from "@/lib/constants";
import { Link, usePathname } from "@/i18n/navigation";

export default function HeaderNav() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!menuOpen) return;

    const nav = document.getElementById("mobile-nav");
    if (!nav) return;

    const focusable = nav.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    function handleTab(e: globalThis.KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }

    document.addEventListener("keydown", handleTab);
    first?.focus();

    return () => document.removeEventListener("keydown", handleTab);
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
        scrolled
          ? "bg-dark/80 backdrop-blur-xl backdrop-saturate-150 border-b border-white/[0.06] shadow-lg shadow-black/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto h-full px-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0 font-display font-bold text-text-light text-xl tracking-tight" aria-label={t("homeLink")}>
          LVI <span className="text-copper">ASENTIMO</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`nav-link text-sm font-medium transition-colors font-body ${
                pathname === item.href
                  ? "text-text-light"
                  : "text-text-light/60 hover:text-text-light"
              }`}
            >
              {t(item.id)}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Phone CTA — desktop */}
          <a
            href={CONTACT.phoneHref}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold bg-copper text-dark transition-colors hover:bg-copper-dark"
          >
            <Phone className="w-3.5 h-3.5" />
            {CONTACT.phone}
          </a>

          {/* Phone CTA — mobile */}
          <a
            href={CONTACT.phoneHref}
            className="sm:hidden w-11 h-11 rounded-md flex items-center justify-center bg-copper/15 text-copper"
            aria-label={t("emergency")}
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-md text-copper transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div id="mobile-nav" className="md:hidden bg-dark border-t border-dark-border">
          <nav className="px-5 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="mobile-nav-item py-3 text-base font-medium text-text-light/80 hover:text-text-light border-b border-dark-border font-body"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {t(item.id)}
              </Link>
            ))}
            <a
              href={CONTACT.phoneHref}
              className="mt-2 flex items-center gap-2 py-3 text-base font-bold text-copper"
            >
              <Phone className="w-4 h-4" />
              {CONTACT.phone}
            </a>
            <a
              href={CONTACT.phone2Href}
              className="flex items-center gap-2 py-3 text-sm text-text-light-muted"
            >
              <Phone className="w-3.5 h-3.5" />
              24/7: {CONTACT.phone2}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
