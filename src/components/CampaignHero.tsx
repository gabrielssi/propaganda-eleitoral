import { ArrowRight, FileDown, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { COALITION_PARTIES } from '../data/programData';
import { getAssetUrl } from '../utils/assets';

interface CampaignHeroProps {
  onSelectTab: (tabId: string) => void;
  onOpenPdfModal: () => void;
}

export function CampaignHero({ onSelectTab, onOpenPdfModal }: CampaignHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white border-b border-neutral-200 pt-8 pb-14 lg:py-16">
      {/* Decorative subtle Brazil geometry in background */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-[0.03] pointer-events-none select-none">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          <polygon points="50,5 95,50 50,95 5,50" stroke="#009B3A" strokeWidth="2" />
          <circle cx="50" cy="50" r="28" stroke="#002776" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Arguments */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Official Kicker */}
            <div className="flex items-center gap-2 mb-4 text-xs font-bold tracking-wider text-neutral-600 uppercase">
              <span className="inline-block w-2.5 h-2.5 bg-red-600 rounded-sm"></span>
              <span>Eleições 2026 · Brasil da Esperança</span>
              <span aria-hidden="true" className="text-neutral-300">/</span>
              <span className="text-red-600 font-extrabold">Federação Brasil da Esperança</span>
            </div>

            {/* Campaign Branding Box */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="bg-red-600 text-white font-black text-2xl sm:text-3xl px-4 py-1.5 rounded-sm tracking-tight shadow-sm transform -rotate-1">
                LULA
              </div>
              <div className="bg-blue-700 text-white font-bold text-sm sm:text-base px-3 py-1.5 rounded-sm uppercase tracking-wide">
                Presidente
              </div>
              <div className="bg-amber-400 text-neutral-900 font-black text-xs sm:text-sm px-2.5 py-1.5 rounded-sm uppercase tracking-wider">
                Vice Alckmin
              </div>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-[1.08] text-balance mb-6">
              O que nos move são os <span className="text-red-600 underline decoration-amber-400 decoration-wavy decoration-2">sonhos do povo brasileiro.</span>
            </h1>

            {/* Subtitle from the official text */}
            <p className="text-base sm:text-lg lg:text-xl text-neutral-700 leading-relaxed max-w-2xl mb-8">
              Diretrizes para o Programa de Transformação do Brasil: um país soberano, democrático, desenvolvido, sustentável e que coloca a classe trabalhadora no centro do orçamento da nação.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                onClick={() => onSelectTab('propostas')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 sm:py-3.5 bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white text-base font-bold rounded-xl sm:rounded-lg shadow-sm hover:shadow transition-all min-h-[48px] cursor-pointer"
              >
                <span>Conhecer as 13 Diretrizes</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onSelectTab('democracia')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-neutral-800 hover:text-red-700 text-sm font-bold bg-neutral-100 hover:bg-neutral-200 active:scale-[0.98] rounded-xl sm:rounded-lg transition-all min-h-[48px] cursor-pointer"
              >
                <ShieldAlert className="w-4 h-4 text-red-600" />
                <span>Defesa da Democracia</span>
              </button>
            </div>

            {/* Coalition Parties Bar */}
            <div className="pt-6 border-t border-neutral-200">
              <p className="text-[11px] sm:text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                Coligação Democrática · Partidos Unidos pelo Brasil
              </p>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {COALITION_PARTIES.map((party) => (
                  <span
                    key={party.name}
                    title={party.fullName}
                    className={`px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-black rounded tracking-wider shadow-2xs ${party.color}`}
                  >
                    {party.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset from Document */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Outer decorative border with Brazilian colors */}
              <div className="relative rounded-2xl overflow-hidden border-2 sm:border-4 border-white shadow-xl sm:shadow-2xl bg-neutral-100">
                <img
                  src={getAssetUrl('assets/extracted/capa_lula.jpg')}
                  alt="Presidente Lula - Campanha Oficial 2026 com o povo brasileiro"
                  className="w-full h-auto object-cover max-h-[580px]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Overlay Badge */}
                <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-neutral-950/90 via-neutral-950/60 to-transparent text-white">
                  <div>
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-amber-400 font-bold">Documento Registrado no TSE</p>
                    <p className="text-xs sm:text-sm font-bold text-neutral-100">Programa de Governo Lula 2026</p>
                  </div>
                </div>
              </div>

              {/* Floating Key Commitment Card */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-6 bg-white p-3.5 sm:p-4 rounded-xl border border-neutral-200 shadow-md sm:shadow-xl max-w-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-900">Fora do Mapa da Fome</p>
                    <p className="text-[11px] text-neutral-600 mt-0.5 leading-snug">
                      Compromisso cumprido em 2024–2026 e ampliação contínua do Bolsa Família e valorização do salário mínimo.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Column Quick Achievement Strip (Interactive to Indicadores Tab) */}
        <div 
          onClick={() => onSelectTab('indicadores')}
          className="mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 bg-neutral-100/90 hover:bg-neutral-100 rounded-2xl border border-neutral-200 cursor-pointer transition-all hover:border-red-300 group"
          title="Clique para ver gráficos e indicadores completos"
        >
          <div className="p-2 sm:px-3 sm:py-2">
            <span className="block text-xl sm:text-2xl lg:text-3xl font-black text-neutral-900 group-hover:text-red-700 transition-colors tracking-tight tabular-nums">8 Milhões</span>
            <span className="text-[11px] sm:text-xs font-medium text-neutral-600">Novos empregos formais</span>
          </div>
          <div className="p-2 sm:px-3 sm:py-2 border-l border-neutral-300">
            <span className="block text-xl sm:text-2xl lg:text-3xl font-black text-neutral-900 group-hover:text-red-700 transition-colors tracking-tight tabular-nums">R$ 5.000</span>
            <span className="text-[11px] sm:text-xs font-medium text-neutral-600">Isenção total de IR</span>
          </div>
          <div className="p-2 sm:px-3 sm:py-2 border-t sm:border-t-0 sm:border-l border-neutral-300">
            <span className="block text-xl sm:text-2xl lg:text-3xl font-black text-neutral-900 group-hover:text-red-700 transition-colors tracking-tight tabular-nums">7,3 Milhões</span>
            <span className="text-[11px] sm:text-xs font-medium text-neutral-600">Jovens no Pé-de-Meia</span>
          </div>
          <div className="p-2 sm:px-3 sm:py-2 border-t sm:border-t-0 border-l border-neutral-300">
            <span className="block text-xl sm:text-2xl lg:text-3xl font-black text-neutral-900 group-hover:text-red-700 transition-colors tracking-tight tabular-nums">3 Milhões</span>
            <span className="text-[11px] sm:text-xs font-medium text-neutral-600">Moradias no MCMV</span>
          </div>
        </div>

      </div>
    </section>
  );
}
