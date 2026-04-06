import Image from "next/image";
import Link from "next/link";

export default function OfertaCiecieSzkla() {
  return (
    <div className="mx-auto w-full max-w-7xl px-8 py-16">
      <section className="mb-24 flex flex-col items-end gap-12 md:flex-row">
        <div className="md:w-2/3">
          <div className="mt-15 mb-4 flex items-center gap-2">
            <span className="h-[2px] w-12 bg-secondary" />
            <span className="font-headline text-sm font-bold tracking-widest text-secondary">
              ROZWIAZANIA PRZEMYSLOWE
            </span>
          </div>
          <h1 className="mb-6 font-headline text-6xl font-bold leading-none tracking-tighter text-primary md:text-8xl">
            Wycinanie <span className="text-secondary">Laserowe.</span>
          </h1>
          <p className="max-w-xl text-xl leading-relaxed text-on-surface-variant">
            Inżynieryjna precyzja spotyka się z mocą przemysłową. Poznaj game
            naszych wysokowydajnych systemów do obróbki laserowej,
            zaprojektowanych dla nowoczesnego przemysłu.
          </p>
        </div>
        <div className="hidden text-right md:block md:w-1/3">
          <Image
            alt="UNILASER Brand Identity"
            src="/images/logo.png"
            width={400}
            height={100}
            style={{ width: "auto", height: "auto" }}
            className="ml-auto rounded-xl opacity-10"
          />
        </div>
      </section>

      <section id="blachy" className="mb-24 scroll-mt-32">
        <div className="mb-12 flex items-baseline justify-between">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-primary">
            Wycinarki laserowe do blach
          </h2>
          <div className="mx-8 h-px flex-grow bg-surface-container-highest" />
          <span className="font-headline text-xl text-on-surface-variant/50">01</span>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <MachineCard id="series-3015h" slug="3015h" image="laser" badge="Do 40000W" title="Seria 3015H" desc="Maksymalna grubosc: 100 mm" />
          <MachineCard id="series-3015g" slug="3015g" image="laser2" badge="Do 20000W" title="Seria 3015G" desc="Maksymalna grubosc: 80 mm" />
          <MachineCard id="series-3015e" slug="3015e" image="laser" badge="Do 6000W" title="Seria 3015E" desc="Maksymalna grubosc: 30 mm" />
          <MachineCard id="series-3015a" slug="3015a" image="laser2" badge="Do 20000W" title="Seria 3015A" desc="Maksymalna grubosc: 50 mm" />
          <MachineCard id="series-r" slug="r" image="laser" badge="Do 40000W" title="Seria R" desc="Maksymalny obszar roboczy: 100 mm" />
          <MachineCard id="series-1313a" slug="1313a" image="laser2" badge="Do 3000W" title="Seria 1313A" desc="Maksymalna grubosc: 22 mm" />
        </div>
      </section>

      <section id="rury" className="mb-24 scroll-mt-32">
        <div className="mb-12 flex items-baseline justify-between">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-primary">
            Wycinarki laserowe do rur
          </h2>
          <div className="mx-8 h-px flex-grow bg-surface-container-highest" />
          <span className="font-headline text-xl text-on-surface-variant/50">02</span>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <MachineCard id="series-6016t" slug="6016t" image="laser" badge="Do 6000W" title="Seria 6016T" desc="Maksymalna grubosc: 30 mm" />
          <MachineCard id="series-6023t" slug="6023t" image="laser2" badge="Do 6000W" title="Seria 6023T" desc="Maksymalna grubosc: 30 mm" />
          <MachineCard id="series-6035t" slug="6035t" image="laser" badge="Do 6000W" title="Seria 6035T" desc="Maksymalna grubosc: 30 mm" />
        </div>
      </section>

      <section id="hybrydy" className="mb-24 scroll-mt-32">
        <div className="mb-12 flex items-baseline justify-between">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-primary">
            Wycinarki laserowe do blach i rur
          </h2>
          <div className="mx-8 h-px flex-grow bg-surface-container-highest" />
          <span className="font-headline text-xl text-on-surface-variant/50">03</span>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <MachineCard id="series-3015ht" slug="3015ht" image="laser2" badge="Do 40000W" title="Seria 3015HT" desc="Maksymalna grubosc: 100 mm" />
          <MachineCard id="series-3015gt" slug="3015gt" image="laser" badge="Do 20000W" title="Seria 3015GT" desc="Maksymalna grubosc: 80 mm" />
          <MachineCard id="series-3015et" slug="3015et" image="laser2" badge="Do 6000W" title="Seria 3015ET" desc="Maksymalna grubosc: 30 mm" />
          <MachineCard id="series-3015at" slug="3015at" image="laser" badge="Do 20000W" title="Seria 3015AT" desc="Maksymalna grubosc: 50 mm" />
        </div>
      </section>

      <section id="spawarki" className="mb-24 scroll-mt-32">
        <div className="mb-12 flex items-baseline justify-between">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-primary">
            Spawarki laserowe
          </h2>
          <div className="mx-8 h-px flex-grow bg-surface-container-highest" />
          <span className="font-headline text-xl text-on-surface-variant/50">04</span>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <MachineCard id="welding-standard" image="laser" badge="Do 3000W" title="Laser welding machine" desc="Maksymalna grubosc spawania: 8 mm" />
          <MachineCard id="welding-portable" image="laser2" badge="Do 3000W" title="Portable laser welding" desc="Maksymalna grubosc spawania: 8 mm" />
        </div>
      </section>

      <div className="mb-32 grid grid-cols-1 gap-12 md:grid-cols-2">
        <section id="czyszczarki" className="scroll-mt-32">
          <div className="mb-12 flex items-baseline justify-between">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary">
              Czyszczarki laserowe
            </h2>
            <div className="mx-4 h-px flex-grow bg-surface-container-highest" />
            <span className="font-headline text-xl text-on-surface-variant/50">05</span>
          </div>
          <MachineCard id="cleaning-standard" image="laser" badge="Do 3000W" title="Laser cleaning machine" desc="Obszar czyszczenia: 0~300 mm" />
        </section>

        <section id="znakowarki" className="scroll-mt-32">
          <div className="mb-12 flex items-baseline justify-between">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary">
              Znakowarki laserowe
            </h2>
            <div className="mx-4 h-px flex-grow bg-surface-container-highest" />
            <span className="font-headline text-xl text-on-surface-variant/50">06</span>
          </div>
          <MachineCard id="marking-standard" image="laser2" badge="Do 50W" title="Laser marking machine" desc="Rozmiar obszaru roboczego: 200x200 mm" />
        </section>
      </div>

      <section className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="flex flex-col justify-center rounded-xl bg-surface-container-high p-12 md:col-span-2">
          <h4 className="mb-4 font-headline text-3xl font-bold leading-tight text-primary">
            Potrzebujesz indywidualnej specyfikacji technicznej?
          </h4>
          <p className="mb-8 text-on-surface-variant">
            Nasi inzynierowie pomoga Ci dobrac optymalna moc i konfiguracje
            lasera do Twoich specyficznych potrzeb produkcyjnych.
          </p>
          <Link
            href="/#contact"
            className="group flex items-center gap-2 font-headline font-bold text-secondary"
          >
            SKONTAKTUJ SIE Z INZYNIEREM
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">
              east
            </span>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl bg-primary p-12 text-center">
          <span className="material-symbols-outlined mb-4 text-5xl text-on-primary-container">
            description
          </span>
          <span className="font-headline text-xs font-bold uppercase tracking-widest text-white">
            Katalog 2024
          </span>
          <p className="mt-2 text-sm text-white/60">PDF, 12MB</p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl bg-secondary p-12 text-center">
          <span className="material-symbols-outlined mb-4 text-5xl text-white">
            location_on
          </span>
          <span className="font-headline text-xs font-bold uppercase tracking-widest text-white">
            Salon pokazowy
          </span>
          <p className="mt-2 text-sm text-white/80">Odwiedz nas na pokaz</p>
        </div>
      </section>
    </div>
  );
}

function FeatureItem({ label }: { label: string }) {
  return (
    <div className="flex gap-3">
      <span className="material-symbols-outlined text-secondary">
        check_circle
      </span>
      <span className="font-headline text-sm font-medium">{label}</span>
    </div>
  );
}

function MachineCard({
  id,
  badge,
  title,
  desc,
  image,
  slug,
}: {
  id?: string;
  badge: string;
  title: string;
  desc: string;
  image: string;
  slug?: string;
}) {
  const content = (
    <div
      id={id}
      className={`group flex h-full flex-col rounded-xl bg-surface-container-low p-8 transition-all hover:bg-surface-container-lowest hover:shadow-xl hover:shadow-primary/5 xl:scroll-mt-32 ${slug ? 'cursor-pointer' : ''}`}
    >
      <div className="relative mb-8 aspect-video overflow-hidden rounded-lg bg-surface">
        <Image
          alt={`${title} machine`}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          src={`/images/machines/${image}.png`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex-grow">
        <span className="mb-2 block font-headline text-xs font-bold tracking-widest text-secondary uppercase">
          {badge}
        </span>
        <h3 className="mb-4 font-headline text-2xl font-bold text-primary">
          {title}
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">
          {desc}
        </p>
      </div>
      <span className="mt-auto flex items-center gap-2 font-headline font-bold uppercase text-primary">
        Specyfikacja
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </span>
    </div>
  );

  if (slug) {
    return (
      <Link href={`/oferta/serie/${slug}`} className="block h-full w-full">
        {content}
      </Link>
    );
  }

  return content;
}
