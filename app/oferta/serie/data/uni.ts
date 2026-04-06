import { SeriesData } from "./types";

export const uniData: SeriesData = {
  slug: "uni",
  name: "UNI",
  category: "Nowoczesna technologia",
  headline: "Spawarka laserowa 3 w 1",
  description:
    "Uniwersalne rozwiazanie dla przemyslu 4.0. Precyzyjne spawanie, ciecie i czyszczenie w jednym urzadzeniu. Inzynieria zorientowana na wydajnosc i stabilnosc procesu.",
  heroImage: "/images/machines/laser2.png",
  heroImageAlt: "Seria UNI - mobilna spawarka laserowa 3 w 1",
  ctaPrimaryLabel: "Specyfikacja techniczna",
  ctaPrimaryHref: "#specyfikacja",
  ctaSecondaryLabel: "Zapytaj o oferte",
  ctaSecondaryHref: "/#contact",
  featureBadge: "Charakterystyka konstrukcyjna",
  featureTitle: "Loze obrobione cieplnie",
  featureDescription:
    "Konstrukcja poddana wysokotemperaturowej obrobce cieplnej redukuje naprezenia wewnetrzne i utrzymuje stabilnosc wymiarowa przy intensywnej eksploatacji.",
  statValue: "1.2G",
  statLabel: "Przyspieszenie",
  statDescription:
    "Dynamiczne przemieszczenia dzieki optymalizacji CAE i lekkiej, sztywnej konstrukcji.",
  highlights: [
    {
      icon: "analytics",
      title: "Analiza CAE",
      description:
        "Symulacje komputerowe pozwolily utrzymac wysoka sztywnosc przy zachowaniu dynamiki maszynowej.",
    },
    {
      icon: "verified",
      title: "Stabilnosc procesu",
      description:
        "Redukcja wibracji i precyzyjne sterowanie zapewniaja powtarzalna jakosc spoin.",
    },
    {
      icon: "layers",
      title: "Brak naprezen",
      description:
        "Proces wyzarzania ogranicza odksztalcenia konstrukcji podczas pracy i transportu.",
    },
  ],
  comparisonTitle: "Dane techniczne serii UNI",
  models: ["UNI 1000", "UNI 1500", "UNI 2000", "UNI 3000"],
  specs: [
    { label: "Typ lasera", values: ["Swiatlowodowy (Fiber)"], shared: true },
    { label: "Zrodlo lasera", values: ["BWT / MAX"], shared: true },
    {
      label: "Glowica robocza",
      values: ["3 w 1 (Spawanie / Ciecie / Czyszczenie)"],
      shared: true,
    },
    { label: "Moc znamionowa", values: ["1200W", "1800W", "2400W", "3400W"] },
    { label: "Moc lasera", values: ["1000W", "1500W", "2000W", "3000W"] },
    {
      label: "Predkosc spawania",
      values: ["0 - 120 mm/s", "0 - 150 mm/s", "0 - 180 mm/s", "0 - 200 mm/s"],
    },
    {
      label: "Max grubosc (Stal nierdz.)",
      values: ["3 mm", "4 mm", "5 mm", "6 mm"],
    },
    {
      label: "System chlodzenia",
      values: ["TEYU / Wodny o obiegu zamknietym"],
      shared: true,
    },
    { label: "Waga urzadzenia", values: ["~ 160 kg"], shared: true },
  ],
  components: [
    {
      icon: "settings_input_component",
      title: "Zrodlo MAX Laser",
      description:
        "Wydajne zrodlo fiber zapewnia stabilna jakosc wiazki i dluga zywotnosc ukladu.",
    },
    {
      icon: "target",
      title: "Glowica RAYTOOLS",
      description:
        "Precyzyjna optyka upraszcza prowadzenie procesu i utrzymuje wysoka powtarzalnosc.",
    },
    {
      icon: "memory",
      title: "Sterowanie CYPCUT / DELTA",
      description:
        "Intuicyjne oprogramowanie i wydajne serwonapedy zapewniaja pelna kontrole parametrow.",
    },
    {
      icon: "electrical_services",
      title: "Elektronika ABB / Schneider",
      description:
        "Komponenty przemyslowe klasy premium podnosza niezawodnosc i ulatwiaja serwis.",
    },
  ],
  gallery: [
    {
      src: "/images/machines/laser2.png",
      alt: "Seria UNI - widok urzadzenia",
      className: "h-52 md:translate-y-8",
    },
    {
      src: "/images/machines/factory-workers-working.png",
      alt: "Praca urzadzenia UNI na hali produkcyjnej",
      className: "h-68",
    },
    {
      src: "/images/machines/machine-controls.png",
      alt: "Sterowanie i elektronika serii UNI",
      className: "h-68 md:-translate-y-8",
    },
    {
      src: "/images/machines/welding-arm.png",
      alt: "Proces spawania laserowego",
      className: "h-52",
    },
  ],
};
