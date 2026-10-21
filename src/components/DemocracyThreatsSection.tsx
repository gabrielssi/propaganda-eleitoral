import { useState } from 'react';
import { 
  ShieldAlert, AlertTriangle, FileWarning, Eye, ShieldCheck, 
  HelpCircle, ExternalLink, CheckCircle2, ChevronRight
} from 'lucide-react';
import { DEMOCRACY_THREATS, ThreatRecord } from '../data/threatsData';

export function DemocracyThreatsSection() {
  const [activeDossier, setActiveDossier] = useState<string>("instituicoes");

  const currentRecord = DEMOCRACY_THREATS.find(t => t.id === activeDossier) || DEMOCRACY_THREATS[0];

  return (
    <section id="democracia" className="py-16 sm:py-24 bg-neutral-900 text-white border-b border-neutral-800 relative overflow-hidden">
      
      {/* Background ambient gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-red-500 uppercase mb-3">
            <ShieldAlert className="w-4 h-4 text-red-500" />
            <span>Memória Histórica e Compromisso Cívico</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-400">Democracia Sempre</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            A Ameaça Iminente à Democracia: Lembrar para Não Repetir
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            A democracia brasileira não é uma conquista permanente sem vigilância popular. O mandato anterior demonstrou com clareza o perigo da corrosão institucional por dentro do próprio Estado: ataques ao Judiciário, fake news em massa, escândalos patrimoniais e a trágica negligência na pandemia.
          </p>
        </div>

        {/* 4 Pillars Nav */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {DEMOCRACY_THREATS.map((threat) => {
            const isActive = activeDossier === threat.id;
            return (
              <button
                key={threat.id}
                onClick={() => setActiveDossier(threat.id)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-neutral-800 border-red-500 shadow-lg ring-1 ring-red-500/50'
                    : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/50 text-neutral-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${isActive ? 'text-red-400' : 'text-neutral-500'}`}>
                    Dossiê
                  </span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-red-500"></span>}
                </div>
                <h3 className={`text-sm font-bold leading-snug ${isActive ? 'text-white' : 'text-neutral-300'}`}>
                  {threat.badge}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Dossier Detailed Panel */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content: Facts and Summary */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest block mb-2">
                  Evidências e Fatos Documentados
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  {currentRecord.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed border-l-2 border-red-500/60 pl-4 py-1 italic bg-red-950/10">
                "{currentRecord.summary}"
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
                  Acontecimentos Reais Verificados:
                </span>
                <ul className="space-y-3">
                  {currentRecord.facts.map((fact, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300 leading-relaxed bg-neutral-900/50 p-3.5 rounded-lg border border-neutral-800/80">
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: The Contrast (Lula Government Restoration) */}
            <div className="lg:col-span-4 bg-neutral-900 p-6 rounded-xl border border-neutral-800 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>O Contraste Republicano</span>
              </div>

              <h4 className="text-base font-bold text-white leading-snug">
                Como o Governo Lula Restaura a Democracia e as Instituições
              </h4>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {currentRecord.contrastLula}
              </p>

              <div className="pt-4 border-t border-neutral-800 space-y-2 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Fim dos sigilos de 100 anos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Autonomia total da PF e CGU</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Respeito estrito aos Três Poderes</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#propostas"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 transition-colors"
                >
                  <span>Ver Propostas de Fortalecimento Democrático</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Warning Banner on Democratic Vigilance */}
        <div className="mt-8 p-6 bg-red-950/30 border border-red-900/50 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <FileWarning className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-white">A democracia se defende com o voto e a participação ativa</p>
              <p className="text-xs text-neutral-400 mt-0.5">
                O desmonte de políticas sociais e o avanço autoritário acontecem quando o povo perde a esperança ou deixa de votar.
              </p>
            </div>
          </div>
          <a
            href="#voto-abstencao"
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg whitespace-nowrap transition-colors"
          >
            Entenda o Impacto da Abstenção
          </a>
        </div>

      </div>
    </section>
  );
}
