import { 
  BookOpen, BarChart2, ShieldAlert, Vote, FileText, 
  ArrowRight, CheckCircle2, TrendingUp, Sparkles, ShieldCheck, HeartHandshake
} from 'lucide-react';
import { TabId } from './StickyTabBar';

interface HomeDashboardOverviewProps {
  onSelectTab: (tabId: TabId) => void;
  onOpenPdfModal: () => void;
}

export function HomeDashboardOverview({ onSelectTab, onOpenPdfModal }: HomeDashboardOverviewProps) {
  return (
    <section className="py-12 sm:py-16 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-red-600 uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              <span>Painel Central de Navegação</span>
              <span aria-hidden="true" className="text-neutral-400">·</span>
              <span className="text-neutral-600">Escolha o que deseja consultar</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 tracking-tight leading-tight">
              O Programa em 5 Grandes Pilares Estratégicos
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
              Sem rolagem infinita: acesse diretamente o conteúdo de seu interesse com dados verificados, análises transparentes e propostas registradas.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectTab('propostas')}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-neutral-900 hover:bg-black text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
            >
              <span>Ver Todas as 13 Diretrizes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 5 Dynamic Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* Card 1: 13 Diretrizes */}
          <div 
            onClick={() => onSelectTab('propostas')}
            className="group bg-white rounded-2xl p-6 border border-neutral-200/90 hover:border-red-500 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700">
                  13 Eixos
                </span>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-red-600 transition-colors mb-2">
                13 Diretrizes de Governo
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                Plano com propostas detalhadas em Saúde, SUS, Educação, Meio Ambiente, Novo PAC, Trabalho Digno e Soberania.
              </p>

              <div className="space-y-1.5 text-xs text-neutral-700 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Pé-de-Meia para estudantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Reindustrialização verde e PAC</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-red-600 group-hover:text-red-700">
              <span>Explorar Propostas</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Indicadores Econômicos */}
          <div 
            onClick={() => onSelectTab('indicadores')}
            className="group bg-white rounded-2xl p-6 border border-neutral-200/90 hover:border-emerald-500 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                  <BarChart2 className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  API BCB Ao Vivo
                </span>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-emerald-700 transition-colors mb-2">
                Indicadores e Avanços Oficiais
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                Gráficos interativos com a evolução do desemprego, controle da inflação, ganho real do salário mínimo e dados do Banco Central.
              </p>

              <div className="space-y-1.5 text-xs text-neutral-700 mb-6">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Menor taxa de desemprego em 10 anos (6,2%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Inflação estabilizada dentro da meta oficial</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-emerald-700">
              <span>Ver Gráficos Interativos</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Defesa da Democracia */}
          <div 
            onClick={() => onSelectTab('democracia')}
            className="group bg-neutral-900 text-white rounded-2xl p-6 border border-neutral-800 hover:border-red-500 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-800 text-red-500 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-red-950 text-red-400 border border-red-800/40">
                  Memória Cívica
                </span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors mb-2">
                Defesa da Democracia & Fatos
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
                Dossiês documentados sobre a tentativa de golpe de 8 de janeiro, escândalos patrimoniais da família Bolsonaro, fake news e a CPI da Covid.
              </p>

              <div className="space-y-1.5 text-xs text-neutral-300 mb-6">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span>Ataques aos Três Poderes investigados pela PF</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span>Negligência sanitária documentada na CPI</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-bold text-red-400">
              <span>Acessar Dossiês</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Impacto do Voto & Simulador */}
          <div 
            onClick={() => onSelectTab('voto')}
            className="group bg-white rounded-2xl p-6 border border-neutral-200/90 hover:border-blue-500 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                  <Vote className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                  Simulador
                </span>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-blue-600 transition-colors mb-2">
                Impacto do Voto & Abstenção
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                Simulador matemático do impacto da abstenção nas urnas, 6 razões essenciais para votar em Lula e guia do eleitor no dia da votação.
              </p>

              <div className="space-y-1.5 text-xs text-neutral-700 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Simulador com slider eleitoral dinâmico</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Guia com e-Título, biometria e direitos</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-blue-600">
              <span>Abrir Simulador e Guia</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 5: Documento Oficial do TSE */}
          <div 
            onClick={() => onSelectTab('documento')}
            className="group bg-white rounded-2xl p-6 border border-neutral-200/90 hover:border-neutral-900 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between md:col-span-2 lg:col-span-2"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-900 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-800">
                  84 Páginas · PDF Oficial
                </span>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-red-600 transition-colors mb-2">
                Documento Oficial do Programa de Governo Lula 2026
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                Consulte a íntegra das 84 páginas protocoladas na Justiça Eleitoral com a fundamentação de cada meta nacional. Disponível para download direto e leitura imediata no navegador.
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-600 mb-6">
                <span className="inline-flex items-center gap-1 font-semibold text-neutral-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Documento autêntico
                </span>
                <span aria-hidden="true" className="text-neutral-300">·</span>
                <span>Registro Oficial na Justiça Eleitoral</span>
                <span aria-hidden="true" className="text-neutral-300">·</span>
                <span>Tamanho leve e formatado</span>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-neutral-900 group-hover:text-red-600">
              <span>Consultar Documento e Leitor</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
