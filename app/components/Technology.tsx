import content from "../../data/content.json";

export default function Technology() {
  return (
    <section className="py-32 bg-surface" id="technology">
      <div className="max-w-screen-2xl mx-auto px-12">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-secondary font-headline font-bold tracking-widest text-sm uppercase mb-4">
            {content.technology.badge}
          </span>
          <h2 className="text-5xl font-headline font-black text-primary tracking-tighter">
            {content.technology.title}
          </h2>
          <div className="w-24 h-1 bg-secondary mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {content.technology.benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`bg-surface-container-lowest p-10 rounded-lg shadow-sm border-b-4 transition-transform hover:-translate-y-2 ${index % 2 === 1 ? 'border-primary' : 'border-secondary'}`}
            >
              <span className="material-symbols-outlined text-secondary text-5xl mb-6">
                {benefit.icon}
              </span>
              <h3 className="text-xl font-headline font-bold text-primary mb-4">
                {benefit.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Deep Tech Section */}
        <div className="bg-primary text-on-primary p-16 rounded-xl grid grid-cols-12 gap-12 overflow-hidden relative">
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[300px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              biotech
            </span>
          </div>
          
          <div className="col-span-12 lg:col-span-6 z-10">
            <h3 className="text-3xl font-headline font-bold mb-8">
              {content.technology.deepTech.title}
            </h3>
            <p className="text-on-primary-container text-lg leading-relaxed mb-10">
              {content.technology.deepTech.description}
            </p>
            <ul className="space-y-4">
              {content.technology.deepTech.list.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary-fixed-dim">check_circle</span>
                  <span className="font-headline font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center z-10">
            <div className="p-1 bg-white/10 rounded-xl backdrop-blur-sm w-full max-w-sm">
              <div className="bg-surface-container-lowest p-8 rounded-lg text-on-surface">
                <h4 className="font-headline font-bold text-primary mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined">analytics</span>
                  {content.technology.deepTech.statsTitle}
                </h4>
                <div className="space-y-6">
                  {content.technology.deepTech.stats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-end border-b border-outline-variant pb-2">
                      <span className="text-sm font-medium">{stat.label}</span>
                      <span className="text-2xl font-headline font-black text-secondary">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
