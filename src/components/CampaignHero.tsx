import { ArrowRight, FileDown, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { COALITION_PARTIES } from '../data/programData';

interface CampaignHeroProps {
  onOpenPdfModal: () => void;
}

export function CampaignHero({ onOpenPdfModal }: CampaignHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white border-b border-neutral-200 pt-8 pb-16 lg:py-20">
      {/* Decorative subtle Brazil geometry in background */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-[0.03] pointer-events-none select-none">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          <polygon points="50,5 95,50 50,95 5,50" stroke="#009B3A" strokeWidth="2" />
          <circle cx="50" cy="50" r="28" stroke="#002776" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-[1.08] text-balance mb-6">
              O que nos move são os <span className="text-red-600 underline decoration-amber-400 decoration-wavy decoration-2">sonhos do povo brasileiro.</span>
            </h1>

            {/* Subtitle from the official text */}
            <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed max-w-2xl mb-8">
              Diretrizes para o Programa de Transformação do Brasil: um país soberano, democrático, desenvolvido, sustentável e que coloca a classe trabalhadora no centro do orçamento da nação.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#propostas"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white text-base font-bold rounded-lg shadow-sm hover:shadow transition-all"
              >
                <span>Conhecer as 13 Diretrizes</span>
                <ArrowRight className="w-5 h-5 text-amber-400" />
              </a>

              <button
                onClick={onOpenPdfModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white text-base font-bold rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <FileDown className="w-5 h-5" />
                <span>Baixar Programa Oficial (PDF)</span>
              </button>

              <a
                href="#democracia"
                className="inline-flex items-center gap-2 px-5 py-3 text-neutral-700 hover:text-red-700 text-sm font-semibold border border-neutral-300 hover:border-red-300 rounded-lg transition-all"
              >
                <ShieldAlert className="w-4 h-4 text-red-600" />
                <span>Defesa da Democracia</span>
              </a>
            </div>

            {/* Coalition Parties Bar */}
            <div className="pt-6 border-t border-neutral-200">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                Coligação Democrática · Partidos Unidos pelo Brasil
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {COALITION_PARTIES.map((party) => (
                  <span
                    key={party.name}
                    title={party.fullName}
                    className={`px-3 py-1 text-xs font-black rounded tracking-wider shadow-2xs ${party.color}`}
                  >
                    {party.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset from Document */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative border with Brazilian colors */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-neutral-100">
                <img
                  src="/assets/extracted/capa_lula.jpg"
                  alt="Presidente Lula - Campanha Oficial 2026 com o povo brasileiro"
                  className="w-full h-auto object-cover max-h-[580px]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Overlay Badge */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-neutral-950/90 via-neutral-950/60 to-transparent text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-amber-400 font-bold">Documento Oficial Registrado</p>
                      <p className="text-base font-bold">Programa de Governo Lula 2026</p>
                    </div>
                    <button
                      onClick={onOpenPdfModal}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-xs font-semibold rounded text-white transition-all cursor-pointer"
                    >
                      <span>Abrir PDF</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Key Commitment Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl border border-neutral-200 shadow-xl max-w-xs hidden sm:block">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-900">Fora do Mapa da Fome</p>
                    <p className="text-[11px] text-neutral-600 mt-0.5">
                      Compromisso cumprido em 2024–2026 e ampliação do Bolsa Família e valorização do salário mínimo.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Column Quick Achievement Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-neutral-100/80 rounded-2xl border border-neutral-200/80">
          <div className="px-3 py-2">
            <span className="block text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">8 Milhões</span>
            <span className="text-xs sm:text-sm font-medium text-neutral-600">Novos empregos com carteira assinada</span>
          </div>
          <div className="px-3 py-2 border-l border-neutral-300/80">
            <span className="block text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">R$ 5.000</span>
            <span className="text-xs sm:text-sm font-medium text-neutral-600">Isenção total de Imposto de Renda</span>
          </div>
          <div className="px-3 py-2 border-l border-neutral-300/80">
            <span className="block text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">7,3 Milhões</span>
            <span className="text-xs sm:text-sm font-medium text-neutral-600">Jovens com bolsa poupança Pé-de-Meia</span>
          </div>
          <div className="px-3 py-2 border-l border-neutral-300/80">
            <span className="block text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">3 Milhões</span>
            <span className="text-xs sm:text-sm font-medium text-neutral-600">Casas no Minha Casa Minha Vida</span>
          </div>
        </div>

      </div>
    </section>
  );
}
