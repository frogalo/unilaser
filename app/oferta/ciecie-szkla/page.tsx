import Image from "next/image";
import Link from "next/link";
import content from "../../../data/content.json";

export default function OfertaCiecieSzkla() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16 w-full">
      {/* Hero Section / Title */}
      <section className="mb-24 flex flex-col md:flex-row items-end gap-12">
        <div className="md:w-2/3">
          <div className="flex items-center gap-2 mb-4 mt-15">
            <span className="w-12 h-[2px] bg-secondary"></span>
            <span className="font-headline text-secondary tracking-widest text-sm font-bold">ROZWIĄZANIA PRZEMYSŁOWE</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold text-primary tracking-tighter leading-none mb-6">
            Nasza <span className="text-secondary">Oferta.</span>
          </h1>
          <p className="text-on-surface-variant text-xl max-w-xl leading-relaxed">
            Inżynieryjna precyzja spotyka się z mocą przemysłową. Poznaj gamę naszych wysokowydajnych systemów do obróbki laserowej, zaprojektowanych dla nowoczesnego przemysłu.
          </p>
        </div>
        <div className="md:w-1/3 text-right hidden md:block">
          <Image 
            alt="UNILASER Brand Identity" 
            src="/images/logo.png" 
            width={400} 
            height={100} 
            style={{ width: "auto", height: "auto" }}
            className="rounded-xl ml-auto opacity-10" 
          />
        </div>
      </section>

      {/* Category: Cutting Series */}
      <section className="mb-32">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-4xl font-headline font-bold text-primary tracking-tight">Serie laserów do cięcia</h2>
          <div className="h-px flex-grow mx-8 bg-surface-container-highest"></div>
          <span className="font-headline text-on-surface-variant/50 text-xl">01</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <MachineCard 
            image="laser2"
            badge="Wydajność Standardowa" 
            title="SERIA E" 
            desc="Podstawowa seria laserów do cięcia bez zewnętrznej obudowy i bez opcji cięcia rur. Idealna do precyzyjnej obróbki arkuszy blach." 
          />
          <MachineCard 
            image="laser"
            badge="Wszechstronna Hybryda" 
            title="SERIA ET" 
            desc="Podstawowa seria laserów do cięcia bez zewnętrznej obudowy z przystawką do cięcia rur. Rozszerzona funkcjonalność dla profili zamkniętych." 
          />
          <MachineCard 
            image="laser2"
            badge="Szybkość Produkcyjna" 
            title="SERIA A" 
            desc="Podstawowa seria laserów do cięcia bez zewnętrznej obudowy z wymiennymi łożami roboczymi. Maksymalna wydajność dzięki skróceniu czasu załadunku." 
          />
          <MachineCard 
            image="laser"
            badge="Pełna Ochrona" 
            title="SERIA H" 
            desc="Seria laserów do cięcia z obudową bez opcji cięcia rur. Najwyższy poziom bezpieczeństwa pracy i czystości środowiska warsztatowego." 
          />
          <MachineCard 
            image="laser2"
            badge="Klasa Premium" 
            title="SERIA HT" 
            desc="Seria laserów do cięcia z obudową z opcją cięcia rur. Bezkompromisowe rozwiązanie łączące bezpieczeństwo i wszechstronność." 
          />
          <MachineCard 
            image="laser"
            badge="Specjalista od Rur" 
            title="SERIA T" 
            desc="Wyspecjalizowana seria laserów do cięcia rur i profili. Precyzyjna obróbka trójwymiarowa dla przemysłu konstrukcyjnego." 
          />

        </div>
      </section>

      {/* Category: Welding Series */}
      <section className="mb-32">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-4xl font-headline font-bold text-primary tracking-tight">Seria laserów do spawania</h2>
          <div className="h-px flex-grow mx-8 bg-surface-container-highest"></div>
          <span className="font-headline text-on-surface-variant/50 text-xl">02</span>
        </div>
        
        {/* SERIA UNI Featured Card */}
        <div className="relative overflow-hidden rounded-2xl bg-primary text-white p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-container to-transparent opacity-50 pointer-events-none"></div>
          <div className="md:w-1/2 relative z-10">
            <span className="inline-block px-4 py-1 bg-secondary text-white font-headline text-xs font-bold tracking-widest rounded-full mb-6">INNOWACJA 2024</span>
            <h3 className="text-5xl font-headline font-bold mb-6 tracking-tighter">SERIA UNI</h3>
            <p className="text-on-primary-container text-lg leading-relaxed mb-10 max-w-md">
                Przełomowa spawarka laserowa 3 w 1. Urządzenie łączące funkcje spawania, czyszczenia oraz cięcia w jednym kompaktowym module mobilnym.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <span className="font-headline text-sm font-medium">Precyzyjne Spawanie</span>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <span className="font-headline text-sm font-medium">Czyszczenie Laserowe</span>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <span className="font-headline text-sm font-medium">Cięcie Ręczne</span>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <span className="font-headline text-sm font-medium">Wysoka Mobilność</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-secondary text-white font-headline font-bold rounded hover:bg-secondary/90 transition-all uppercase">Zamów Pokaz</button>
              <button className="px-8 py-4 border border-white/20 font-headline font-bold rounded hover:bg-white/10 transition-all uppercase">Specyfikacja</button>
            </div>
          </div>
          <div className="md:w-1/2 relative z-10">
            <div className="aspect-square rounded-xl bg-white/5 backdrop-blur-sm p-4 border border-white/10 relative">
              <Image 
                alt="Seria UNI 3-in-1 Welder" 
                src="/images/machines/laser2.png" 
                fill
                className="object-cover rounded-xl opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Editorial Grid (Call to Action) */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2 bg-surface-container-high p-12 rounded-xl flex flex-col justify-center">
          <h4 className="text-3xl font-headline font-bold text-primary mb-4 leading-tight">Potrzebujesz indywidualnej specyfikacji technicznej?</h4>
          <p className="text-on-surface-variant mb-8">Nasi inżynierowie pomogą Ci dobrać optymalną moc i konfigurację lasera do Twoich specyficznych potrzeb produkcyjnych.</p>
          <Link href="/#contact" className="text-secondary font-headline font-bold flex items-center gap-2 group">
            SKONTAKTUJ SIĘ Z INŻYNIEREM <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">east</span>
          </Link>
        </div>
        <div className="bg-primary p-12 rounded-xl text-center flex flex-col justify-center items-center">
          <span className="material-symbols-outlined text-5xl text-on-primary-container mb-4">description</span>
          <span className="font-headline font-bold text-white uppercase tracking-widest text-xs">Katalog 2024</span>
          <p className="text-white/60 text-sm mt-2">PDF, 12MB</p>
        </div>
        <div className="bg-secondary p-12 rounded-xl text-center flex flex-col justify-center items-center">
          <span className="material-symbols-outlined text-5xl text-white mb-4">location_on</span>
          <span className="font-headline font-bold text-white uppercase tracking-widest text-xs">Salon Pokazowy</span>
          <p className="text-white/80 text-sm mt-2">Odwiedź nas na pokaz</p>
        </div>
      </section>
    </div>
  );
}

function MachineCard({ badge, title, desc, image }: { badge: string; title: string; desc: string; image: string }) {
  return (
    <div className="group bg-surface-container-low p-8 rounded-xl flex flex-col h-full transition-all hover:bg-surface-container-lowest hover:shadow-xl hover:shadow-primary/5">
      <div className="mb-8 aspect-video overflow-hidden rounded-lg bg-surface flex items-center justify-center relative">
        <Image 
          alt={`${title} Machine`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          src={`/images/machines/${image}.png`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex-grow">
        <span className="text-xs font-bold text-secondary font-headline tracking-widest uppercase mb-2 block">{badge}</span>
        <h3 className="text-2xl font-headline font-bold text-primary mb-4">{title}</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
          {desc}
        </p>
      </div>
      <button className="mt-auto flex items-center gap-2 text-primary font-headline font-bold hover:gap-4 transition-all uppercase">
        Specyfikacja <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </button>
    </div>
  );
}
