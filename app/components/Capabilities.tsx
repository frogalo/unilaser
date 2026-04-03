import content from "../../data/content.json";
import Link from "next/link";

export default function Capabilities() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-12 text-center">
        <h2 className="text-4xl font-headline font-bold text-primary mb-4">
          {content.capabilities.title}
        </h2>
        <p className="text-on-surface-variant mb-16">
          {content.capabilities.description}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {content.capabilities.items.map((item: any, index) => {
            const CardContent = (
              <>
                <span className="block text-sm font-label uppercase tracking-widest mb-2 opacity-60">
                  {item.label}
                </span>
                <span className="text-2xl md:text-3xl font-headline font-black">
                  {item.value}
                </span>
              </>
            );
            
            const cardClass = "bg-surface-container-low p-8 rounded-lg group hover:bg-primary hover:text-on-primary transition-all block";

            return item.href ? (
              <Link key={index} href={item.href} className={cardClass}>
                {CardContent}
              </Link>
            ) : (
              <div key={index} className={cardClass}>
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
