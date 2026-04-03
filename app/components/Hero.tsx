import Image from "next/image";
import content from "../../data/content.json";

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface" id="home">
      <div className="max-w-screen-2xl mx-auto px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        <div className="lg:col-span-5 space-y-8">
          <div className="inline-block px-3 py-1 bg-primary-fixed text-on-primary-fixed text-xs font-bold tracking-widest rounded-sm uppercase">
            {content.hero.badge}
          </div>
          <h1 className="text-6xl md:text-7xl font-headline font-extrabold text-primary leading-tight tracking-tighter">
            {content.hero.titleLine1} <br />
            <span className="text-secondary">{content.hero.titleLine2}</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
            {content.hero.description}
          </p>
          <div className="flex gap-4">
            <button className="text-on-primary px-8 py-4 rounded-lg font-headline font-bold flex items-center gap-2 group" style={{ background: "linear-gradient(135deg, #102660 0%, #2a3d77 100%)" }}>
              {content.hero.ctaPrimary}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <button className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-lg font-headline font-bold hover:bg-surface-variant transition-colors">
              {content.hero.ctaSecondary}
            </button>
          </div>
        </div>
        <div className="lg:col-span-7 relative w-full mt-12 lg:mt-0">
          <div className="absolute -z-10 inset-0 bg-secondary/5 rounded-full blur-3xl transform scale-150"></div>
          <div className="h-[400px] md:h-[500px] lg:h-[650px] w-full relative rounded-xl shadow-2xl overflow-hidden">
            <Image 
              alt="Industrial Laser Machine" 
              src="/images/machines/laser2.png"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-6 rounded-lg max-w-[280px] shadow-xl border border-outline-variant/20">
              <span className="font-headline font-black text-primary block mb-3 text-lg leading-tight">
                {content.hero.specs.title}
              </span>
              <div className="space-y-3 flex flex-col">
                {content.hero.specs.items.map((item, index) => (
                  <div key={index} className="flex flex-col text-xs border-b border-outline-variant/30 pb-2 last:border-0 last:pb-0">
                    <span className="text-on-surface-variant font-bold uppercase mb-0.5 opacity-80 tracking-widest text-[10px]">
                      {item.label}
                    </span>
                    <span className="font-semibold text-primary leading-snug">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
