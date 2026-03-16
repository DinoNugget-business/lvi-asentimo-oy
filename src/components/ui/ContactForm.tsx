"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-white border border-surface-dark p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-display text-xl font-semibold text-text mb-2">
          {t("successTitle")}
        </h3>
        <p className="text-text-muted text-sm">
          {t("successText")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl bg-white border border-surface-dark p-6 sm:p-8 space-y-5">
      <h3 className="font-display text-xl font-semibold text-text mb-2">
        {t("formTitle")}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">{t("name")} *</label>
          <input type="text" required className="form-input" />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">{t("email")} *</label>
          <input type="email" required className="form-input" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">{t("phone")}</label>
          <input type="tel" className="form-input" />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">{t("location")}</label>
          <input type="text" className="form-input" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">{t("address")}</label>
        <input type="text" className="form-input" />
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-1.5">{t("message")} *</label>
        <textarea
          required
          rows={5}
          className="form-input resize-none"
          placeholder={t("messagePlaceholder")}
        />
      </div>

      <p className="text-xs text-text-dim">
        {t("creditNote")}
      </p>

      <button
        type="submit"
        className="btn-shimmer w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md font-semibold text-dark bg-copper hover:bg-copper-dark transition-colors text-sm"
      >
        <Send className="w-4 h-4" />
        {t("submit")}
      </button>
    </form>
  );
}
