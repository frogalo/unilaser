import Image from "next/image";
import content from "../../data/content.json";

export default function About() {
  return (
    <section className="py-32 bg-surface-container-low" id="about">
      <div className="max-w-screen-2xl mx-auto px-12">
        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-12 lg:col-span-5 relative min-h-[400px]">
            <Image 
              className="w-full h-full object-cover rounded-xl shadow-xl" 
              alt="Hala Produkcyjna" 
              src="/images/machines/factory-workers-working.png"
              fill
              sizes="(max-width: 1024px) 100vw, 41vw"
            />
          </div>
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
            <h2 className="text-5xl font-headline font-black text-primary mb-8">
              {content.about.title}
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              {content.about.paragraphs.map((paragraph, index) => (
                <p key={index}>
                  {paragraph.includes("UNILASER") ? (
                    <>
                      <Image src="/images/logo.png" alt="UNILASER" width={100} height={26} className="h-[1.15em] w-auto inline-block -mt-1 mr-1" style={{ width: "auto", height: "auto" }} />
                      {paragraph.split("UNILASER")[1]}
                    </>
                  ) : paragraph}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-8 mt-12">
              {content.about.stats.map((stat, index) => (
                <div key={index}>
                  <span className="text-4xl font-headline font-black text-secondary block">
                    {stat.value}
                  </span>
                  <span className="text-sm font-label uppercase tracking-widest">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
