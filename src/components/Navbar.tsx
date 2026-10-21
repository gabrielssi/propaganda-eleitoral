import { useState, useEffect } from 'react';
import { Menu, X, FileDown, BookOpen, BarChart2, CheckCircle2, ShieldAlert, Vote, FileText, Home } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  onOpenPdfModal: () => void;
}

export function Navbar({ activeTab, onSelectTab, onOpenPdfModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const handleNavClick = (tabId: string) => {
    onSelectTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-16 sm:h-20">
            
            {/* Zone 1: Brand Wordmark */}
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavClick('inicio'); }}
              className="flex items-center gap-2.5 sm:gap-3 shrink-0 group cursor-pointer"
              title="Voltar ao Início"
            >
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
            <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-semibold text-neutral-700">
              <button 
                onClick={() => handleNavClick('inicio')}
                className={`transition-colors whitespace-nowrap shrink-0 hover:text-red-600 py-1.5 cursor-pointer ${
                  activeTab === 'inicio' ? 'text-red-600 font-bold border-b-2 border-red-600' : ''
                }`}
              >
                Início
              </button>
              <button 
                onClick={() => handleNavClick('propostas')}
                className={`transition-colors whitespace-nowrap shrink-0 hover:text-red-600 py-1.5 cursor-pointer ${
                  activeTab === 'propostas' ? 'text-red-600 font-bold border-b-2 border-red-600' : ''
                }`}
              >
                13 Diretrizes
              </button>
              <button 
                onClick={() => handleNavClick('indicadores')}
                className={`transition-colors whitespace-nowrap shrink-0 hover:text-red-600 py-1.5 cursor-pointer ${
                  activeTab === 'indicadores' ? 'text-red-600 font-bold border-b-2 border-red-600' : ''
                }`}
              >
                Indicadores
              </button>
              <button 
                onClick={() => handleNavClick('democracia')}
                className={`transition-colors whitespace-nowrap shrink-0 hover:text-red-600 py-1.5 cursor-pointer ${
                  activeTab === 'democracia' ? 'text-red-600 font-bold border-b-2 border-red-600' : ''
                }`}
              >
                Defesa da Democracia
              </button>
              <button 
                onClick={() => handleNavClick('voto')}
                className={`transition-colors whitespace-nowrap shrink-0 hover:text-red-600 py-1.5 cursor-pointer ${
                  activeTab === 'voto' ? 'text-red-600 font-bold border-b-2 border-red-600' : ''
                }`}
              >
                Impacto do Voto
              </button>
            </nav>

            {/* Zone 3: 1 Primary Action (Desktop) */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                onClick={() => handleNavClick('documento')}
                className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-lg border transition-all whitespace-nowrap cursor-pointer min-h-[38px] ${
                  activeTab === 'documento'
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border-neutral-200'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-red-600" />
                <span>Programa em PDF (84 Págs)</span>
              </button>
            </div>

            {/* Mobile / Tablet Touch Hamburger Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-11 h-11 flex items-center justify-center text-neutral-700 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
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
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">Escolha uma Área para Explorar</span>
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
            <nav className="flex flex-col space-y-1.5 text-sm font-semibold text-neutral-800">
              <button 
                onClick={() => handleNavClick('inicio')}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors min-h-[46px] w-full ${
                  activeTab === 'inicio' ? 'bg-red-50 text-red-700 font-bold' : 'hover:bg-neutral-100'
                }`}
              >
                <Home className="w-4 h-4 text-neutral-700 shrink-0" />
                <span>Início & Painel Central</span>
              </button>

              <button 
                onClick={() => handleNavClick('propostas')}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors min-h-[46px] w-full ${
                  activeTab === 'propostas' ? 'bg-red-50 text-red-700 font-bold' : 'hover:bg-neutral-100'
                }`}
              >
                <BookOpen className="w-4 h-4 text-red-600 shrink-0" />
                <span>13 Diretrizes de Governo</span>
              </button>

              <button 
                onClick={() => handleNavClick('indicadores')}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors min-h-[46px] w-full ${
                  activeTab === 'indicadores' ? 'bg-red-50 text-red-700 font-bold' : 'hover:bg-neutral-100'
                }`}
              >
                <BarChart2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Indicadores Econômicos e Sociais</span>
              </button>

              <button 
                onClick={() => handleNavClick('democracia')}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors min-h-[46px] w-full ${
                  activeTab === 'democracia' ? 'bg-red-50 text-red-700 font-bold' : 'hover:bg-neutral-100'
                }`}
              >
                <ShieldAlert className="w-4 h-4 text-red-600 shrink-0" />
                <span>Ameaça à Democracia e Fatos</span>
              </button>

              <button 
                onClick={() => handleNavClick('voto')}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors min-h-[46px] w-full ${
                  activeTab === 'voto' ? 'bg-red-50 text-red-700 font-bold' : 'hover:bg-neutral-100'
                }`}
              >
                <Vote className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Impacto do Voto & Simulador</span>
              </button>

              <button 
                onClick={() => handleNavClick('documento')}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors min-h-[46px] w-full ${
                  activeTab === 'documento' ? 'bg-red-50 text-red-700 font-bold' : 'hover:bg-neutral-100'
                }`}
              >
                <FileText className="w-4 h-4 text-neutral-700 shrink-0" />
                <span>Documento Oficial (84 Págs PDF)</span>
              </button>
            </nav>

          </div>
        </div>
      )}
    </>
  );
}
