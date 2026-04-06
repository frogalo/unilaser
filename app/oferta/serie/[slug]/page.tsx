import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSeriesBySlug, getSeriesSlugs } from "../series-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return getSeriesSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/oferta/serie/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const series = getSeriesBySlug(slug);

  if (!series) {
    return {
      title: "Seria nie znaleziona | UNILASER",
    };
  }

  return {
    title: `Seria ${series.name} | UNILASER`,
    description: series.description,
  };
}

export default async function SeriesPage(
  props: PageProps<"/oferta/serie/[slug]">
) {
  const { slug } = await props.params;
  const series = getSeriesBySlug(slug);

  if (!series) {
    notFound();
  }

  return (
    <div className="bg-surface text-on-surface">
      <section className="relative overflow-hidden pt-28 pb-24">
        <div className="absolute inset-0 technical-grid opacity-40" />
        <div className="absolute top-8 right-0 h-80 w-80 rounded-full bg-primary/6 blur-3xl" />
        <div className="mx-auto max-w-7xl px-8">
          <div className="relative z-10 mb-16 text-center">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-sm bg-primary-fixed px-3 py-1 text-on-primary-fixed">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                electric_bolt
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.25em]">
                {series.category}
              </span>
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-[0.9] tracking-tighter text-primary md:text-8xl">
              SERIA {series.name}
              <br />
              <span className="text-secondary">{series.headline}</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
              {series.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={series.ctaPrimaryHref}
                className="inline-flex items-center gap-2 rounded-xl bg-secondary px-8 py-4 font-headline font-bold text-white shadow-lg transition-all hover:bg-secondary-container"
              >
                {series.ctaPrimaryLabel}
                <span className="material-symbols-outlined">south</span>
              </Link>
              <Link
                href={series.ctaSecondaryHref}
                className="rounded-xl bg-surface-container-highest px-8 py-4 font-headline font-bold text-on-surface transition-all hover:bg-surface-dim"
              >
                {series.ctaSecondaryLabel}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="technical-glass relative overflow-hidden rounded-[2.5rem] border border-outline-variant/20 p-8 shadow-2xl">
              <div className="relative aspect-[3/1] overflow-hidden rounded-3xl bg-surface-container-low shadow-inner">
                <Image
                  src={series.heroImage}
                  alt={series.heroImageAlt}
                  fill
                  priority
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-secondary">
              {series.featureBadge}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Zoptymalizowana konstrukcja do pracy ciaglej
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-10 shadow-sm md:col-span-2">
              <div className="relative z-10 max-w-xl">
                <span className="material-symbols-outlined mb-6 text-4xl text-secondary">
                  precision_manufacturing
                </span>
                <h3 className="mb-4 text-2xl font-bold text-primary">
                  {series.featureTitle}
                </h3>
                <p className="leading-relaxed text-on-surface-variant">
                  {series.featureDescription}
                </p>
              </div>
              <span
                className="material-symbols-outlined absolute right-0 bottom-0 text-[11rem] text-primary/8"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                architecture
              </span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl bg-primary p-10 text-center text-white">
              <div className="mb-2 font-headline text-6xl font-bold">
                {series.statValue}
              </div>
              <div className="text-sm uppercase tracking-[0.3em] text-on-primary-container">
                {series.statLabel}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                {series.statDescription}
              </p>
            </div>

            {series.highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-outline-variant/10 bg-surface-container-lowest p-8 shadow-sm"
              >
                <span className="material-symbols-outlined mb-4 text-secondary">
                  {item.icon}
                </span>
                <h4 className="mb-2 text-lg font-bold text-primary">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="specyfikacja" className="py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-primary">
              {series.comparisonTitle}
            </h2>
            <p className="text-on-surface-variant">
              Porownaj modele i wybierz konfiguracje dopasowana do potrzeb
              produkcyjnych.
            </p>
          </div>

          <div className="overflow-x-auto rounded-[1.5rem] border border-outline-variant/20 shadow-xl">
            <table className="w-full min-w-[760px] border-collapse bg-surface-container-lowest text-left text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-6 font-headline font-semibold">Parametr</th>
                  {series.models.map((model) => (
                    <th
                      key={model}
                      className="border-l border-white/10 p-6 font-headline font-semibold"
                    >
                      {model}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {series.specs.map((row, index) => (
                  <tr
                    key={row.label}
                    className={`border-b border-outline-variant/20 transition-colors hover:bg-surface-container-low ${
                      index % 2 === 1 ? "bg-surface-container-low/30" : ""
                    }`}
                  >
                    <td className="p-6 font-bold text-primary">{row.label}</td>
                    {row.shared ? (
                      <td className="p-6" colSpan={series.models.length}>
                        {row.values[0]}
                      </td>
                    ) : (
                      row.values.map((value, vIndex) => (
                        <td
                          key={`${row.label}-${vIndex}`}
                          className="border-l border-outline-variant/20 p-6"
                        >
                          {value}
                        </td>
                      ))
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface-container-high py-24">
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-16 px-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-8 text-4xl font-bold tracking-tight text-primary">
              Kluczowe komponenty
            </h2>
            <div className="space-y-6">
              {series.components.map((component) => (
                <div key={component.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface-container-lowest text-secondary shadow-sm">
                    <span className="material-symbols-outlined">
                      {component.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">
                      {component.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-on-surface-variant">
                      {component.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {series.gallery.map((image) => (
              <div
                key={image.alt}
                className={`relative overflow-hidden rounded-2xl shadow-lg ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-4 px-8 md:grid-cols-4">
          <div className="rounded-2xl bg-surface-container-high p-10 md:col-span-2">
            <h2 className="mb-4 text-3xl font-bold leading-tight text-primary">
              Potrzebujesz indywidualnej konfiguracji serii {series.name}?
            </h2>
            <p className="mb-8 text-on-surface-variant">
              Dobierzemy moc, osprzet i parametry pracy pod Twoj material,
              wydajnosc i oczekiwany proces.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 font-headline font-bold text-secondary"
            >
              Skontaktuj sie z inzynierem
              <span className="material-symbols-outlined">east</span>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl bg-primary p-10 text-center text-white">
            <span className="material-symbols-outlined mb-4 text-5xl text-on-primary-container">
              description
            </span>
            <span className="font-headline text-xs font-bold uppercase tracking-[0.3em]">
              Karta produktu
            </span>
            <p className="mt-2 text-sm text-white/70">Przygotujemy PDF pod zapytanie</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl bg-secondary p-10 text-center text-white">
            <span className="material-symbols-outlined mb-4 text-5xl">
              smart_display
            </span>
            <span className="font-headline text-xs font-bold uppercase tracking-[0.3em]">
              Pokaz maszyny
            </span>
            <p className="mt-2 text-sm text-white/80">Prezentacja online lub na miejscu</p>
          </div>
        </div>
      </section>
    </div>
  );
}
