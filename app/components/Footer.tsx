import content from "../../data/content.json";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-slate-100 py-16 px-12 border-t border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-screen-2xl mx-auto">
        <div className="space-y-6">
          <Image
            alt="UNILASER Logo"
            src="/images/logo.png"
            width={120}
            height={32}
            className="h-8 w-auto mb-2"
            style={{ width: "auto", height: "auto" }}
          />
          <p className="text-slate-500 text-sm leading-relaxed">
            {content.footer.description}
          </p>
        </div>
        
        {content.footer.columns.map((col, index) => (
          <div key={index}>
            <h4 className="font-headline font-bold text-blue-900 mb-6 uppercase text-xs tracking-widest">
              {col.title}
            </h4>
            <ul className="space-y-4 text-sm text-slate-500">
              {col.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a className="hover:underline decoration-2 underline-offset-4" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="font-headline font-bold text-blue-900 mb-6 uppercase text-xs tracking-widest">
            {content.footer.office.title}
          </h4>
          <p className="text-sm text-slate-500 whitespace-pre-line">
            {content.footer.office.text}
          </p>
        </div>
      </div>
      
      <div className="max-w-screen-2xl mx-auto mt-16 pt-8 border-t border-slate-200">
        <p className="text-slate-400 text-xs text-center font-body uppercase tracking-widest flex items-center justify-center gap-2">
          © 2026 <img src="/images/logo.png" alt="UNILASER" className="h-[1.25em] w-auto grayscale opacity-50 block" /> Industrial Systems. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
