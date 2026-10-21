import { useState, useEffect } from 'react';
import { Menu, X, FileDown, BookOpen, BarChart2, CheckCircle2, ShieldAlert, Vote } from 'lucide-react';

interface NavbarProps {
  onOpenPdfModal: () => void;
}

export function Navbar({ onOpenPdfModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close on ESC or window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-16 sm:h-20">
            
            {/* Zone 1: Brand Wordmark */}
            <a href="#" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-red-600 flex items-center justify-center font-black text-white text-base sm:text-xl tracking-tighter shadow-xs group-hover:bg-red-700 transition-colors">
                13
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-neutral-900 leading-none">
                  LULA <span className="text-red-600">2026</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold tracking-wider text-neutral-500 uppercase mt-0.5">
                  Programa Oficial de Governo
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (Desktop lg+) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-neutral-700">
              <a 
                href="#propostas" 
                className="hover:text-red-600 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
              >
                13 Diretrizes
              </a>
              <a 
                href="#programa-oficial" 
                className="hover:text-red-600 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
              >
                Documento Oficial
              </a>
              <a 
                href="#indicadores" 
                className="hover:text-red-600 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
              >
                Indicadores
              </a>
              <a 
                href="#por-que-lula" 
                className="hover:text-red-600 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
              >
                Por Que Votar
              </a>
              <a 
                href="#democracia" 
                className="hover:text-red-600 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 text-neutral-900 font-bold"
              >
                Defesa da Democracia
              </a>
              <a 
                href="#voto-abstencao" 
                className="hover:text-red-600 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
              >
                Impacto do Voto
              </a>
            </nav>

            {/* Zone 3: 1 Primary Action (Desktop) */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href="#programa-oficial"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-neutral-800 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 rounded-lg transition-colors whitespace-nowrap cursor-pointer min-h-[38px]"
              >
                <FileDown className="w-3.5 h-3.5 text-neutral-600" />
                <span>Programa em PDF</span>
              </a>
            </div>

            {/* Mobile / Tablet Touch Hamburger Button (min 44px) */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-11 h-11 flex items-center justify-center text-neutral-700 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-red-600" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay and Sheet */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col">
          {/* Backdrop */}
          <div 
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-neutral-950/50 backdrop-blur-xs transition-opacity" 
            aria-hidden="true"
          />

          {/* Drawer Menu */}
          <div className="relative z-10 bg-white border-b border-neutral-200 shadow-2xl px-5 pt-4 pb-8 flex flex-col space-y-4 max-h-[85vh] overflow-y-auto">
            
            {/* Top Close bar */}
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">Navegação Principal</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-md text-neutral-500 hover:bg-neutral-100"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links with >= 44px touch targets */}
            <nav className="flex flex-col space-y-1 text-sm font-semibold text-neutral-800">
              <a 
                href="#propostas" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-neutral-100 active:bg-neutral-200 transition-colors min-h-[46px]"
              >
                <BookOpen className="w-4 h-4 text-red-600 shrink-0" />
                <span>13 Diretrizes de Governo</span>
              </a>

              <a 
                href="#programa-oficial" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-neutral-100 active:bg-neutral-200 transition-colors min-h-[46px]"
              >
                <FileDown className="w-4 h-4 text-neutral-600 shrink-0" />
                <span>Documento Oficial na Íntegra (PDF)</span>
              </a>

              <a 
                href="#indicadores" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-neutral-100 active:bg-neutral-200 transition-colors min-h-[46px]"
              >
                <BarChart2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Indicadores Econômicos e Sociais</span>
              </a>

              <a 
                href="#por-que-lula" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-neutral-100 active:bg-neutral-200 transition-colors min-h-[46px]"
              >
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Por Que Votar no Lula</span>
              </a>

              <a 
                href="#democracia" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-red-50 text-red-700 font-bold active:bg-red-100 transition-colors min-h-[46px]"
              >
                <ShieldAlert className="w-4 h-4 text-red-600 shrink-0" />
                <span>Ameaça à Democracia e Fatos</span>
              </a>

              <a 
                href="#voto-abstencao" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-neutral-100 active:bg-neutral-200 transition-colors min-h-[46px]"
              >
                <Vote className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Importância do Voto & Simulador</span>
              </a>
            </nav>

            <div className="pt-3 border-t border-neutral-100">
              <a
                href="#programa-oficial"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-lg border border-neutral-200 min-h-[44px]"
              >
                <FileDown className="w-4 h-4 text-neutral-600" />
                <span>Consultar PDF Registrado no TSE</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
