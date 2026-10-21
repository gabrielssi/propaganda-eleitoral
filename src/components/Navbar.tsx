import { useState } from 'react';
import { Menu, X, FileDown, Eye } from 'lucide-react';

interface NavbarProps {
  onOpenPdfModal: () => void;
}

export function Navbar({ onOpenPdfModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center font-black text-white text-xl tracking-tighter shadow-sm group-hover:bg-red-700 transition-colors">
              13
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl tracking-tight text-neutral-900 leading-none">
                LULA <span className="text-red-600">2026</span>
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-neutral-500 uppercase mt-0.5">
                Programa Oficial de Governo
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (single line, clean typography) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-neutral-700">
            <a 
              href="#propostas" 
              className="hover:text-red-600 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              13 Diretrizes
            </a>
            <a 
              href="#indicadores" 
              className="hover:text-red-600 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Indicadores Oficiais
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

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenPdfModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-red-600 hover:bg-red-700 active:scale-[0.98] transition-all rounded-lg shadow-sm whitespace-nowrap cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              <span>Baixar Programa (PDF)</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-neutral-900 focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-base font-medium text-neutral-800">
            <a 
              href="#propostas" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-neutral-100"
            >
              13 Diretrizes do Governo
            </a>
            <a 
              href="#indicadores" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-neutral-100"
            >
              Indicadores e Dados Públicos
            </a>
            <a 
              href="#por-que-lula" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-neutral-100"
            >
              Por Que Votar no Lula
            </a>
            <a 
              href="#democracia" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-red-50 text-red-700 font-semibold"
            >
              Defesa da Democracia e Memória
            </a>
            <a 
              href="#voto-abstencao" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-neutral-100"
            >
              A Importância do Voto & Abstenção
            </a>
          </nav>
          <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPdfModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-red-600 rounded-lg shadow-sm"
            >
              <FileDown className="w-4 h-4" />
              <span>Ver e Baixar Programa Oficial (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
