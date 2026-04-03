import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-grow relative flex items-center justify-center overflow-hidden py-32 min-h-[70vh]">
      {/* Background Technical Elements */}
      <div className="absolute inset-0 technical-grid pointer-events-none opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-container-low/30 to-background pointer-events-none"></div>
      
      {/* Subtle Laser Beam Graphic */}
      <div className="container mx-auto px-6 relative z-10 w-full max-w-screen-2xl">
        <div className="max-w-2xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
          
          {/* Left: 404 Typography */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-primary-fixed text-on-primary-fixed rounded-sm text-[10px] font-label uppercase tracking-widest">
              <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
              System Error: Code 0x404
            </div>
            <h1 className="font-headline text-8xl md:text-9xl font-bold text-primary mb-2">404</h1>
            <div className="mt-8 space-y-6">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface leading-tight">
                Błąd 404: Strona nie istnieje.
              </h2>
              <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
                Przepraszamy, nie znaleźliśmy tej strony. Wygląda na to, że podane współrzędne doprowadziły do pustego sektora w naszej bazie danych.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-white rounded-lg font-label font-bold transition-all hover:shadow-lg active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined">home</span>
                  Wróć do strony głównej
                </Link>
                <Link 
                  href="/#technology"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface-container-highest text-on-surface rounded-lg font-label font-medium transition-all hover:bg-surface-variant"
                >
                  <span className="material-symbols-outlined">precision_manufacturing</span>
                  Przejrzyj naszą ofertę
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
