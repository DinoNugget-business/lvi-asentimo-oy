import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import { routing } from "@/i18n/routing";
import { SITE, CONTACT, WEBSITE_URL } from "@/lib/constants";
import HeaderNav from "@/components/layout/HeaderNav";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ChatWidget from "@/components/ui/ChatWidget";
import "../globals.css";

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: {
      default: t("title"),
      template: `%s | ${SITE.name}`,
    },
    description: t("description"),
    metadataBase: new URL(WEBSITE_URL),
    openGraph: {
      type: "website",
      locale: "fi_FI",
      siteName: SITE.name,
      title: t("title"),
      description: t("description"),
    },
    twitter: {
      card: "summary",
      title: SITE.name,
      description: t("description"),
    },
    alternates: {
      canonical: `${WEBSITE_URL}/${locale}`,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    url: WEBSITE_URL,
    telephone: CONTACT.phoneHref.replace("tel:", ""),
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address,
      addressLocality: CONTACT.city,
      postalCode: CONTACT.postalCode,
      addressCountry: "FI",
    },
    foundingDate: SITE.founded,
    description: "Täyden palvelun putkiliike pääkaupunkiseudulla vuodesta 2001.",
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 60.19,
        longitude: 24.94,
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Palvelut",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "LVI-asennukset ja -korjaukset" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Putkiremontit ja linjasaneeraukset" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Viemärikuvaukset" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "24/7 hätähuolto" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Huoltosopimukset" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Saaristopalvelut" } },
      ],
    },
  };

  return (
    <html lang={locale} className={`${barlowCondensed.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <ScrollProgress />
          <HeaderNav />
          <main>{children}</main>
          <ChatWidget />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
