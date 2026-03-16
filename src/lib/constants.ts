export const SITE = {
  name: "LVI Asentimo Oy",
  shortName: "Asentimo",
  domain: "asentimo.fi",
  founded: "2001-01-01",
  foundedYear: 2001,
} as const;

export const CONTACT = {
  phone: "040 576 59 68",
  phoneHref: "tel:+358405765968",
  phone2: "0400 199 911",
  phone2Href: "tel:+358400199911",
  email: "info@asentimo.fi",
  address: "Häggesbölen rantatie 11",
  postalCode: "02480",
  city: "Kirkkonummi",
  fullAddress: "Häggesbölen rantatie 11, 02480 Kirkkonummi",
  businessId: "1652505-5",
  googleMapsLink: "https://www.google.com/maps/place/H%C3%A4ggesb%C3%B6len+rantatie+11,+02480+Kirkkonummi",
  ovtNumber: "003716525055",
} as const;

export const NAV_ITEMS = [
  { id: "palvelumme", href: "/palvelumme" },
  { id: "hinnasto", href: "/hinnasto" },
  { id: "referenssit", href: "/referenssit" },
  { id: "yhteistyokumppanit", href: "/yhteistyokumppanit" },
  { id: "yhteystiedot", href: "/yhteystiedot" },
] as const;

export const SERVICES = [
  { id: "lvi", icon: "wrench" },
  { id: "putkiremontit", icon: "construction" },
  { id: "viemarikuvaukset", icon: "camera" },
  { id: "huolto24h", icon: "siren" },
  { id: "huoltosopimukset", icon: "shield-check" },
  { id: "saaristo", icon: "ship" },
] as const;

export const AREA_FEES = [
  { city: "Espoo", priceExVat: 20, priceInclVat: 24.8 },
  { city: "Helsinki", priceExVat: 30, priceInclVat: 37.2 },
  { city: "Kirkkonummi", priceExVat: 30, priceInclVat: 37.2 },
  { city: "Vantaa", priceExVat: 30, priceInclVat: 37.2 },
] as const;

export const PRICING = {
  hourlyExVat: 49.5,
  hourlyInclVat: 61.4,
  vatRate: 25.5,
  minimumHours: 2,
} as const;

export type Partner = {
  name: string;
  location: string;
};

export const PARTNERS = {
  lvi: [
    { name: "LVI Ko-LGA Oy", location: "Espoo" },
    { name: "Masterpipe Oy", location: "Porvoo" },
    { name: "P.O.B-Tech Oy", location: "Espoo" },
    { name: "Ahlsell Oy", location: "Hyvinkää" },
  ] satisfies Partner[],
  sahko: [
    { name: "Nokkalan Sähkö Oy", location: "Sundsberg" },
    { name: "Laaksolahden Sähkö Oy", location: "Espoo" },
    { name: "Seawatt Oy", location: "Espoo" },
  ] satisfies Partner[],
  rakennus: [
    { name: "Espoon Puutyö Oy", location: "Helsinki" },
    { name: "Sonmak Group Oü", location: "Viro" },
    { name: "Tmi Tuomas Bergman", location: "Espoo" },
    { name: "Helsingin Sisustuspuu Oy", location: "Helsinki" },
  ] satisfies Partner[],
  suunnittelu: [
    { name: "LVI Uuskoski Consulting Oy", location: "Vantaa" },
    { name: "Tmi LVI-suunnittelu Olli Koivisto", location: "Espoo" },
    { name: "Insinööritoimisto Renholm Oy", location: "Espoo" },
    { name: "Buildnet Oy", location: "Helsinki" },
  ] satisfies Partner[],
} as const;

export const REFERENCES = [
  { year: 2014, project: "As Oy Kirkkonummen Helmi", type: "Linjasaneeraus", client: "Isännöintitoimisto" },
  { year: 2013, project: "As Oy Espoon Louhi", type: "Käyttövesiputkien uusinta", client: "Taloyhtiö" },
  { year: 2013, project: "Kiint. Oy Lasihytti", type: "Lämmönjakopaketin vaihto", client: "Kiinteistöyhtiö" },
  { year: 2012, project: "As Oy Haukilahden Ranta", type: "Linjasaneeraus", client: "Taloyhtiö" },
  { year: 2012, project: "Koy Niittykumpu 10", type: "LVI-saneeraus", client: "Kiinteistöyhtiö" },
  { year: 2011, project: "As Oy Westendinpuisto", type: "Käyttövesiputkien uusinta", client: "Taloyhtiö" },
  { year: 2011, project: "Helsingin kaupungin asunnot", type: "Lämpöjohtosaneeraus", client: "Helsingin kaupunki" },
  { year: 2010, project: "As Oy Espoon Otakallio", type: "Linjasaneeraus", client: "Taloyhtiö" },
  { year: 2010, project: "Ruukki Group, Hämeenlinna", type: "LVI-urakka", client: "Ruukki Group" },
  { year: 2009, project: "As Oy Tapiolan Jalava", type: "Linjasaneeraus", client: "Taloyhtiö" },
  { year: 2009, project: "Koy Rastaala", type: "Lämmönjakopaketin vaihto", client: "Kiinteistöyhtiö" },
  { year: 2008, project: "As Oy Matinkartano", type: "Käyttövesiputkien uusinta", client: "Taloyhtiö" },
  { year: 2008, project: "As Oy Espoon Kristiina", type: "Linjasaneeraus", client: "Taloyhtiö" },
  { year: 2007, project: "Kirkkonummen terveyskeskus", type: "LVI-saneeraus", client: "Kirkkonummen kunta" },
  { year: 2007, project: "As Oy Olarin Kumpu", type: "Linjasaneeraus", client: "Taloyhtiö" },
  { year: 2006, project: "As Oy Soukan Sato", type: "Lämpöjohtosaneeraus", client: "Taloyhtiö" },
  { year: 2006, project: "Koy Karakallio Center", type: "LVI-urakka", client: "Kiinteistöyhtiö" },
  { year: 2005, project: "As Oy Kivenlahden Ankkuri", type: "Linjasaneeraus", client: "Taloyhtiö" },
  { year: 2005, project: "Espoon kaupunki, päiväkoti", type: "LVI-urakka", client: "Espoon kaupunki" },
  { year: 2004, project: "As Oy Leppävaaran Torni", type: "Käyttövesiputkien uusinta", client: "Taloyhtiö" },
] as const;

export const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1975.5!2d24.4537!3d60.1244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sH%C3%A4ggesb%C3%B6len+rantatie+11%2C+02480+Kirkkonummi!5e0!3m2!1sfi!2sfi!4v1" as const;

export const WEBSITE_URL = "https://asentimo.fi";
