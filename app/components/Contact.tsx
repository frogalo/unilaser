import content from "../../data/content.json";

export default function Contact() {
  return (
    <section className="py-32 bg-surface" id="contact">
      <div className="max-w-screen-2xl mx-auto px-12">
        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="text-4xl font-headline font-black text-primary mb-6">
              {content.contact.title}
            </h2>
            <p className="text-on-surface-variant mb-12">
              {content.contact.description}
            </p>
            <div className="space-y-8">
              {content.contact.info.map((infoItem, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary">
                    {infoItem.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-primary">{infoItem.title}</h4>
                    <p className="text-sm text-on-surface-variant whitespace-pre-line">
                      {infoItem.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <form className="bg-surface-container-low p-10 rounded-xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-label text-on-surface-variant uppercase tracking-widest">
                    {content.contact.form.nameLabel}
                  </label>
                  <input 
                    className="w-full bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-primary p-4" 
                    placeholder={content.contact.form.namePlaceholder} 
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-label text-on-surface-variant uppercase tracking-widest">
                    {content.contact.form.emailLabel}
                  </label>
                  <input 
                    className="w-full bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-primary p-4" 
                    placeholder={content.contact.form.emailPlaceholder} 
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-label text-on-surface-variant uppercase tracking-widest">
                  {content.contact.form.subjectLabel}
                </label>
                <select className="w-full bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-primary p-4">
                  {content.contact.form.subjectOptions.map((option, index) => (
                    <option key={index}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-label text-on-surface-variant uppercase tracking-widest">
                  {content.contact.form.messageLabel}
                </label>
                <textarea 
                  className="w-full bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-primary p-4" 
                  placeholder={content.contact.form.messagePlaceholder} 
                  rows={4}
                ></textarea>
              </div>
              <button 
                className="w-full text-on-primary py-4 rounded-lg font-headline font-bold text-lg hover:opacity-90 transition-opacity" 
                style={{ background: "linear-gradient(135deg, #102660 0%, #2a3d77 100%)" }}
                type="submit"
              >
                {content.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
