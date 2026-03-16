"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { useTranslations } from "next-intl";
import { Send, CheckCircle } from "lucide-react";

type FormState = "idle" | "submitting" | "success";

interface FieldState {
  value: string;
  touched: boolean;
}

const INITIAL_FIELDS: Record<string, FieldState> = {
  name: { value: "", touched: false },
  email: { value: "", touched: false },
  phone: { value: "", touched: false },
  location: { value: "", touched: false },
  address: { value: "", touched: false },
  message: { value: "", touched: false },
};

const REQUIRED = ["name", "email", "message"];

function FloatingField({
  id,
  label,
  type = "text",
  required,
  value,
  touched,
  onChange,
  onBlur,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  touched: boolean;
  onChange: (v: string) => void;
  onBlur: () => void;
}) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;
  const showError = required && touched && !value;

  return (
    <div className="floating-field">
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => { setFocused(false); onBlur(); }}
        className={`form-input ${showError ? "has-error" : ""}`}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className={`floating-label ${isActive ? "active" : ""}`}
      >
        {label}{required ? " *" : ""}
      </label>
      {showError && (
        <p className="field-error">Pakollinen kenttä</p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const t = useTranslations("contact");
  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState(INITIAL_FIELDS);

  function updateField(id: string, value: string) {
    setFields((prev) => ({ ...prev, [id]: { ...prev[id], value } }));
  }

  function touchField(id: string) {
    setFields((prev) => ({ ...prev, [id]: { ...prev[id], touched: true } }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Touch all required fields to trigger validation
    const updated = { ...fields };
    for (const key of REQUIRED) {
      updated[key] = { ...updated[key], touched: true };
    }
    setFields(updated);

    // Check if valid
    const hasErrors = REQUIRED.some((key) => !updated[key].value);
    if (hasErrors) return;

    setFormState("submitting");

    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 1500));

    setFormState("success");
  }

  if (formState === "success") {
    return (
      <div className="form-success-enter rounded-xl bg-white border border-surface-dark p-10 text-center">
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
        <FloatingField
          id="name"
          label={t("name")}
          required
          value={fields.name.value}
          touched={fields.name.touched}
          onChange={(v) => updateField("name", v)}
          onBlur={() => touchField("name")}
        />
        <FloatingField
          id="email"
          label={t("email")}
          type="email"
          required
          value={fields.email.value}
          touched={fields.email.touched}
          onChange={(v) => updateField("email", v)}
          onBlur={() => touchField("email")}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FloatingField
          id="phone"
          label={t("phone")}
          type="tel"
          value={fields.phone.value}
          touched={fields.phone.touched}
          onChange={(v) => updateField("phone", v)}
          onBlur={() => touchField("phone")}
        />
        <FloatingField
          id="location"
          label={t("location")}
          value={fields.location.value}
          touched={fields.location.touched}
          onChange={(v) => updateField("location", v)}
          onBlur={() => touchField("location")}
        />
      </div>

      <FloatingField
        id="address"
        label={t("address")}
        value={fields.address.value}
        touched={fields.address.touched}
        onChange={(v) => updateField("address", v)}
        onBlur={() => touchField("address")}
      />

      {/* Textarea keeps static label — floating labels don't work well on multi-line */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">
          {t("message")} *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={fields.message.value}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => updateField("message", e.target.value)}
          onBlur={() => touchField("message")}
          className={`form-input resize-none ${fields.message.touched && !fields.message.value ? "has-error" : ""}`}
          placeholder={t("messagePlaceholder")}
        />
        {fields.message.touched && !fields.message.value && (
          <p className="field-error">Pakollinen kenttä</p>
        )}
      </div>

      <p className="text-xs text-text-dim">
        {t("creditNote")}
      </p>

      <button
        type="submit"
        disabled={formState === "submitting"}
        className="btn-shimmer w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md font-semibold text-dark bg-copper hover:bg-copper-dark transition-colors text-sm disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {formState === "submitting" ? (
          <span className="btn-spinner" />
        ) : (
          <>
            <Send className="w-4 h-4" />
            {t("submit")}
          </>
        )}
      </button>
    </form>
  );
}
