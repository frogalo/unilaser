import { SeriesData } from "./types";

export const series3015hData: SeriesData = {
  slug: "3015h",
  name: "3015H",
  category: "Wycinarki laserowe do blach",
  headline: "Bezpieczna maszyna o ultra-wysokiej mocy",
  description:
    "Wycinarka laserowa światłowodowa wykorzystuje wiązkę o wysokiej gęstości energii do cięcia. Zapewnia gładką i płaską powierzchnię cięcia bez konieczności wtórnej obróbki i szlifowania. Wydajność oraz cyfrowe sterowanie znacznie ograniczają koszty operacyjne, promując ekologię i szybkość na rynku metali.",
  heroImage: "/images/machines/serie/H/main-wide.png",
  heroImageAlt: "Wycinarka laserowa serii 3015H - ultra-wysoka moc",
  ctaPrimaryLabel: "Specyfikacja techniczna",
  ctaPrimaryHref: "#specyfikacja",
  ctaSecondaryLabel: "Zapytaj o oferte",
  ctaSecondaryHref: "/#contact",
  featureBadge: "Platforma operacyjna",
  featureTitle: "Spawane, potężne łoże maszyny",
  featureDescription:
    "Zbudowana pod obróbkę masywnych i grubych blach stalowych. Każda rama poddawana jest procesom obróbki cieplnej, śrutowania i cyfrowego frezowania CNC, gwarantując najdłuższą niezawodność.",
  statValue: "60 kW",
  statLabel: "Maksymalna moc",
  statDescription:
    "Niespotykana moc do bardzo szybkiego cięcia płyt ze wsparciem opcjonalnego cięcia rur do 300 mm.",
  highlights: [
    {
      icon: "cached",
      title: "Platforma wymienna w 13s",
      description:
        "Równoległy system stołów interaktywnych. Dzięki potężnym silnikom 2.2kW, stoliki przeładowują arkusze zaledwie w 13 sekund.",
    },
    {
      icon: "visibility",
      title: "Kierunkowy monitoring 720°",
      description:
        "Dwie bezkompromisowe kamery śledzące obszar na żywo ułatwiają bezpieczną precyzję działań i kontrolę błędów operatorskich.",
    },
    {
      icon: "air",
      title: "8-strefowy odpylacz",
      description:
        "Inteligentny system segmentowy uaktywniający zasysanie toksycznych pyłów tylko w aktualnym sektorze operacji głowicy.",
    },
  ],
  comparisonTitle: "Parametry maszyny 3015H",
  models: [
    "ZPG-3015H",
    "ZPG-4015H",
    "ZPG-4020H",
    "ZPG-6015H",
    "ZPG-6020H",
    "ZPG-6025H",
  ],
  specs: [
    {
      label: "Obszar roboczy osi X (mm)",
      values: ["1530", "1530", "2030", "1530", "2030", "2530"],
    },
    {
      label: "Obszar roboczy osi Y (mm)",
      values: ["3050", "4050", "4050", "6050", "6050", "6050"],
    },
    {
      label: "Nośność stołu (kg)",
      values: ["800", "1100", "1300", "2000", "2000", "2800"],
    },
    {
      label: "Maksymalna prędkość posuwu",
      values: ["200 m/min"],
      shared: true,
    },
    {
      label: "Maksymalne przyspieszenie",
      values: ["2.8G"],
      shared: true,
    },
    {
      label: "Dokładność pozycjonowania",
      values: ["0.03 mm/m"],
      shared: true,
    },
    {
      label: "Powtarzalność pozycjonowania",
      values: ["±0.02 mm"],
      shared: true,
    },
    {
      label: "Opcjonalna moc lasera (W)",
      values: ["1500W - 40000W"],
      shared: true,
    },
    {
      label: "Waga maszyny (kg)",
      values: ["2200", "3000", "3500", "4500", "5000", "5500"],
    },
    {
      label: "Wymiary całkowite (mm)",
      values: [
        "4150×2430×1800",
        "5150×2430×1800",
        "5150×2970×1800",
        "7450×2430×1800",
        "7450×2970×1800",
        "7450×3450×1800",
      ],
    },
  ],
  components: [
    {
      icon: "kitchen",
      title: "Niezależna szafa sterownicza z AC",
      description:
        "Uszczelniona układem z opcjonalną pełną autoklimatyzacją dbająca o wrażliwe komponenty elektroniczne, izolując je od drgań maszyny.",
    },
    {
      icon: "precision_manufacturing",
      title: "Automatyczny autofocus (Raytools, BLT)",
      description:
        "Dobierana na etapie konfiguracji głowica wyposażona w autofocus błyskawicznie korygujący ogniskową podczas nagłej zmiany grubości blachy.",
    },
    {
      icon: "code",
      title: "System SMART MANAGER 6",
      description:
        "Zaawansowany 'mózg' urządzenia optymalizujący algorytmy trajektorii. Doskonale obsługujący front-end od SMART COMPOSER.",
    },
  ],
  gallery: [
    {
      src: "/images/machines/serie/H/exchange-platform-1.png",
      alt: "System wymiennych stołów roboczych",
      className: "h-52 md:translate-y-8",
    },
    {
      src: "/images/machines/serie/H/machine-body.png",
      alt: "Wzmocnione łoże maszyny po obróbce cieplnej",
      className: "h-68",
    },
    {
      src: "/images/machines/serie/H/dust-removal-zones.png",
      alt: "Inteligentny system odciągu pyłów",
      className: "h-68 md:-translate-y-8",
    },
    {
      src: "/images/machines/serie/H/cameras.png",
      alt: "Podgląd procesu cięcia z kamer wewnętrznych",
      className: "h-52",
    },
  ],
};
