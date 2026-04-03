import Image from "next/image";
import content from "../../data/content.json";

export default function VideoSection() {
  return (
    <section className="bg-surface-container-low py-32 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-12">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4 self-center">
            <h2 className="text-4xl font-headline font-bold text-primary mb-6">
              {content.video.title}
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              {content.video.description}
            </p>
            <div className="flex items-center gap-4 text-secondary font-headline font-bold cursor-pointer group">
              <span className="material-symbols-outlined text-4xl">play_circle</span>
              <span className="border-b-2 border-secondary/20 group-hover:border-secondary transition-all">
                Obejrzyj demonstrację video
              </span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="aspect-video bg-primary-container rounded-xl relative overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-white text-8xl opacity-80 group-hover:scale-110 transition-transform">
                  play_arrow
                </span>
              </div>
              <Image 
                className="w-full h-full object-cover" 
                alt="Video thumbnail"
                src="/images/machines/laser.png"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
