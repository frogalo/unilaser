import Link from "next/link";
import Image from "next/image";
import content from "../../data/content.json";

const Header = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-50/85 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-12 py-4 w-full max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-4">
          <Image
            alt="UNILASER Logo"
            src="/images/logo.png"
            width={120}
            height={32}
            className="h-8 w-auto"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {content.nav.links.map((link, index) => (
            <div key={index} className="relative group py-2">
              <Link
                href={link.href}
                className={`font-headline font-bold tracking-tight transition-colors flex items-center gap-1 ${
                  index === 0 
                    ? "text-blue-700 border-b-2 border-blue-700 pb-1" 
                    : "text-slate-600 hover:text-blue-900"
                }`}
              >
                {link.label}
                {link.sublinks && <span className="material-symbols-outlined text-[16px]">expand_more</span>}
              </Link>
              {link.sublinks && (
                <div className="absolute top-full mt-0 left-0 w-56 bg-white shadow-xl rounded-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 flex flex-col z-50">
                  {link.sublinks.map((sublink: any, subIndex) => (
                    <div key={subIndex} className="relative group/sub">
                      <Link 
                        href={sublink.href}
                        className="px-4 py-2 text-sm font-headline font-semibold text-slate-600 hover:text-blue-900 hover:bg-slate-50 transition-colors flex justify-between items-center"
                      >
                        {sublink.label}
                        {sublink.sublinks && <span className="material-symbols-outlined text-[16px]">chevron_right</span>}
                      </Link>
                      {sublink.sublinks && (
                        <div className="absolute top-0 left-full mt-0 ml-0 w-56 bg-white shadow-xl rounded-lg border border-slate-100 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 py-2 flex flex-col z-50">
                          {sublink.sublinks.map((deepLink: any, deepIndex: number) => (
                            <Link 
                              key={deepIndex} 
                              href={deepLink.href}
                              className="px-4 py-2 text-sm font-headline font-semibold text-slate-600 hover:text-blue-900 hover:bg-slate-50 transition-colors block"
                            >
                              {deepLink.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-headline font-semibold text-sm hover:opacity-90 transition-opacity">
          {content.nav.cta}
        </button>
      </div>
    </nav>
  );
};

export default Header;
