import { useState } from 'react';
import { 
  Vote, UserCheck, AlertOctagon, HelpCircle, ArrowRight, CheckCircle2, 
  Sparkles, ExternalLink, Calculator, Landmark
} from 'lucide-react';
import { WHY_VOTE_LULA, ABSTENTION_IMPACT_DATA, VOTER_GUIDE_STEPS } from '../data/civicVotingData';

export function VotingAbstentionSection() {
  // Simulator state: default national abstention % (typically ~20.6% in 2022)
  const [simulatedAbstention, setSimulatedAbstention] = useState<number>(20.6);

  // Total Brazilian electorate ~156 million
  const totalElectorate = 156000000;
  const abstentionVotes = Math.round((simulatedAbstention / 100) * totalElectorate);
  const activeVotes = totalElectorate - abstentionVotes;
  // In a 50% + 1 vote runoff system:
  const votesToWin = Math.floor(activeVotes / 2) + 1;
  const percentOfTotalElectorateNeeded = ((votesToWin / totalElectorate) * 100).toFixed(1);

  const [activeSubTab, setActiveSubTab] = useState<'motivos' | 'simulador' | 'guia' | 'tudo'>('motivos');

  return (
    <section id="voto-abstencao" className="py-12 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sub-tab Navigation Switcher */}
        <div className="mb-10 pb-4 border-b border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none max-w-full pb-1 sm:pb-0">
            <button
              onClick={() => setActiveSubTab('motivos')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all shrink-0 cursor-pointer min-h-[38px] ${
                activeSubTab === 'motivos'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
              }`}
            >
              1. Por Que Votar no Lula (6 Motivos)
            </button>

            <button
              onClick={() => setActiveSubTab('simulador')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all shrink-0 cursor-pointer min-h-[38px] ${
                activeSubTab === 'simulador'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
              }`}
            >
              2. Simulador de Abstenção
            </button>

            <button
              onClick={() => setActiveSubTab('guia')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all shrink-0 cursor-pointer min-h-[38px] ${
                activeSubTab === 'guia'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
              }`}
            >
              3. Guia do Eleitor
            </button>

            <button
              onClick={() => setActiveSubTab('tudo')}
              className={`px-3 py-2 text-xs font-medium rounded-lg transition-all shrink-0 cursor-pointer min-h-[38px] ${
                activeSubTab === 'tudo'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-600'
              }`}
            >
              Ver Tudo
            </button>
          </div>

          <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider hidden sm:inline">
            Voto, Democracia & Cidadania
          </span>
        </div>
        
        {/* Sub-section 1: Por Que Votar no Governo Lula */}
        {(activeSubTab === 'motivos' || activeSubTab === 'tudo') && (
          <div id="por-que-lula" className="mb-14">
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-red-600 uppercase mb-2">
                <span>Compromisso e Resultados</span>
                <span aria-hidden="true">·</span>
                <span>Eleições 2026</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 tracking-tight leading-tight mb-3">
                Por Que Votar no Governo Lula em 2026?
              </h2>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                O voto em Lula representa a escolha consciente pela continuidade do desenvolvimento com inclusão, ampliação de direitos históricos e soberania brasileira. Não são promessas no vazio: são entregas comprovadas no bolso, na mesa e na vida do trabalhador.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {WHY_VOTE_LULA.map((reason) => (
                <div
                  key={reason.id}
                  className="bg-neutral-50 border border-neutral-200 rounded-xl p-5 flex flex-col justify-between hover:border-red-300 hover:bg-red-50/20 transition-all group"
                >
                  <div>
                    <div className="flex items-baseline justify-between mb-3">
                      <span className="text-2xl font-black text-neutral-900 tracking-tight tabular-nums group-hover:text-red-700 transition-colors">
                        {reason.metric}
                      </span>
                      <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
                        {reason.metricLabel}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-neutral-900 leading-snug mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-xs font-semibold text-red-600 mb-2">
                      {reason.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-neutral-200/60 flex items-center gap-1.5 text-xs font-bold text-neutral-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Meta assegurada no Programa Oficial</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sub-section 2: A Importância do Voto & O Impacto das Abstenções */}
        {(activeSubTab === 'simulador' || activeSubTab === 'tudo') && (
          <div className="bg-neutral-900 text-white rounded-3xl p-6 sm:p-10 mb-14 border border-neutral-800 shadow-xl">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-amber-400 uppercase mb-3">
              <Vote className="w-4 h-4 text-amber-400" />
              <span>Consciência Cívica e Soberania Popular</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-3">
              O Voto é Decisivo: O Perigo da Abstenção nas Urnas
            </h3>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              O voto é o instrumento soberano onde a voz do milionário e a voz do trabalhador valem exatamente o mesmo peso. Não comparecer ou anular transfere o destino da sua aposentadoria, do salário mínimo e da escola dos seus filhos para quem não defende os seus interesses.
            </p>
          </div>

          {/* Interactive Abstention Simulator */}
          <div className="bg-neutral-950 p-4 sm:p-6 lg:p-8 rounded-2xl border border-neutral-800 mb-8 sm:mb-10">
            <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider mb-4">
              <Calculator className="w-4 h-4" />
              <span>Simulador Interativo: Como a Abstenção Distorce o Resultado</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              {/* Slider Control */}
              <div className="lg:col-span-6 space-y-3.5 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <label htmlFor="abstention-slider" className="text-xs sm:text-sm font-semibold text-neutral-200">
                    Taxa Hipotética de Abstenção:
                  </label>
                  <span className="text-base sm:text-lg font-mono font-bold text-amber-400 tabular-nums">
                    {simulatedAbstention.toFixed(1)}%
                  </span>
                </div>

                <input
                  id="abstention-slider"
                  type="range"
                  min="5"
                  max="35"
                  step="0.5"
                  value={simulatedAbstention}
                  onChange={(e) => setSimulatedAbstention(parseFloat(e.target.value))}
                  className="w-full h-3 sm:h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-600 touch-pan-x"
                />

                <div className="flex justify-between text-[10px] sm:text-[11px] text-neutral-500 font-mono">
                  <span>5% (Maciça)</span>
                  <span>20.6% (2022)</span>
                  <span>35% (Vácuo)</span>
                </div>

                <p className="text-[11px] sm:text-xs text-neutral-400 leading-relaxed pt-1">
                  Arraste o controle acima para visualizar o impacto matemático: quanto maior a abstenção, menor é o número absoluto de votos que um candidato radical precisa obter para vencer e governar a nação.
                </p>
              </div>

              {/* Live Simulator Calculation Results */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-2.5 sm:gap-3">
                <div className="bg-neutral-900 p-3 sm:p-4 rounded-xl border border-neutral-800">
                  <span className="text-[10px] sm:text-[11px] text-neutral-400 block mb-1">Eleitores Ausentes</span>
                  <span className="text-lg sm:text-2xl font-black font-mono text-red-400 tabular-nums">
                    {(abstentionVotes / 1000000).toFixed(1)} Mi
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-neutral-500 block mt-0.5 sm:mt-1">
                    Vozes que não opinam
                  </span>
                </div>

                <div className="bg-neutral-900 p-3 sm:p-4 rounded-xl border border-neutral-800">
                  <span className="text-[10px] sm:text-[11px] text-neutral-400 block mb-1">Votos Válidos</span>
                  <span className="text-lg sm:text-2xl font-black font-mono text-emerald-400 tabular-nums">
                    {(activeVotes / 1000000).toFixed(1)} Mi
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-neutral-500 block mt-0.5 sm:mt-1">
                    Decidem o presidente
                  </span>
                </div>

                <div className="col-span-2 bg-neutral-900/90 p-3.5 sm:p-4 rounded-xl border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs text-neutral-300 font-medium">Votos necessários para ser eleito:</span>
                    <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5">
                      Basta conquistar <strong>{percentOfTotalElectorateNeeded}%</strong> da população total para vencer.
                    </p>
                  </div>
                  <span className="text-lg sm:text-xl font-black font-mono text-white tabular-nums shrink-0">
                    {(votesToWin / 1000000).toFixed(1)} Mi
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Historical Evidence Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {ABSTENTION_IMPACT_DATA.historicalElections.map((election, i) => (
              <div key={i} className="bg-neutral-950 p-4 rounded-xl border border-neutral-800">
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
                  <span className="font-bold text-white">{election.year}</span>
                  <span className="font-mono text-amber-400">{election.abstentionRate}</span>
                </div>
                <p className="text-xs font-semibold text-neutral-300 mb-1.5">{election.abstentionCount}</p>
                <p className="text-[11px] text-neutral-400 leading-relaxed">{election.insight}</p>
              </div>
            ))}
          </div>

          {/* Pedagogic Takeaways */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-neutral-800">
            {ABSTENTION_IMPACT_DATA.simulationLessons.map((lesson, idx) => (
              <div key={idx} className="space-y-1">
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  {lesson.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {lesson.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

        {/* Sub-section 3: Guia Prático do Eleitor */}
        {(activeSubTab === 'guia' || activeSubTab === 'tudo') && (
          <div>
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-1">
                Cidadania Ativa
              </span>
              <h3 className="text-2xl font-bold text-neutral-900">
                Guia Prático do Eleitor: Vote com Segurança e Certeza
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                Tudo o que você precisa saber para exercer o seu direito democrático com tranquilidade no dia da eleição.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VOTER_GUIDE_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="bg-neutral-50 border border-neutral-200 rounded-xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-2xl font-black text-red-600 block mb-2">
                      {step.step}
                    </span>
                    <h4 className="text-base font-bold text-neutral-900 mb-2 leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                      {step.desc}
                    </p>
                  </div>

                  <a
                    href={step.actionLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-800 transition-colors pt-2 border-t border-neutral-200"
                  >
                    <span>{step.actionText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
