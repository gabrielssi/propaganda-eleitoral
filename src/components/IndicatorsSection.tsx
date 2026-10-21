import { useState, useEffect } from 'react';
import { 
  TrendingUp, TrendingDown, RefreshCw, BarChart3, Database, 
  ExternalLink, CheckCircle, Info
} from 'lucide-react';
import { 
  OFFICIAL_KEY_INDICATORS, 
  CHART_DESEMPREGO_SERIES, 
  CHART_INFLACAO_SERIES, 
  CHART_SALARIO_MINIMO_REAL, 
  CHART_DESMATAMENTO_AMAZONIA,
  fetchLiveBCBData 
} from '../data/indicatorsData';

export function IndicatorsSection() {
  const [activeChartTab, setActiveChartTab] = useState<'desemprego' | 'inflacao' | 'salario' | 'desmatamento' | 'live_bcb'>('desemprego');
  const [liveBcbData, setLiveBcbData] = useState<{ period: string; value: number }[]>([]);
  const [liveTimestamp, setLiveTimestamp] = useState<string>("");
  const [loadingLive, setLoadingLive] = useState<boolean>(false);
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'economia' | 'social' | 'saude' | 'meio-ambiente'>('all');

  const loadBCB = async () => {
    setLoadingLive(true);
    const result = await fetchLiveBCBData();
    setLiveBcbData(result.data);
    setLiveTimestamp(result.timestamp);
    setLoadingLive(false);
  };

  useEffect(() => {
    loadBCB();
  }, []);

  const filteredMetrics = OFFICIAL_KEY_INDICATORS.filter(
    m => categoryFilter === 'all' || m.category === categoryFilter
  );

  return (
    <section id="indicadores" className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-700 uppercase mb-3">
              <Database className="w-3.5 h-3.5" />
              <span>Transparência e Dados Oficiais</span>
              <span aria-hidden="true">·</span>
              <span>Fontes: BCB, IBGE, INPE, FAO/ONU, IPEA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
              Indicadores do Desenvolvimento Econômico e Social
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 mt-3 leading-relaxed">
              Acompanhe com rigor estatístico os resultados concretos obtidos pela política de reconstrução nacional: inflação controlada, geração massiva de empregos formais, resgate do poder de compra e desmatamento contido.
            </p>
          </div>

          {/* Live API Refresh Button */}
          <div className="shrink-0 flex flex-col items-start md:items-end gap-1.5">
            <button
              onClick={loadBCB}
              disabled={loadingLive}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-lg text-xs font-bold text-neutral-800 shadow-2xs transition-all cursor-pointer active:scale-95 disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-emerald-600 ${loadingLive ? 'animate-spin' : ''}`} />
              <span>Atualizar via API Banco Central</span>
            </button>
            <span className="text-[11px] text-neutral-500 font-mono">
              Status da API: {liveTimestamp ? `Conectada (${liveTimestamp})` : 'Carregando...'}
            </span>
          </div>
        </div>

        {/* Dynamic Chart Container */}
        <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-sm mb-12">
          
          {/* Chart Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-100">
            <div>
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-1">
                Visualização Gráfica Interativa
              </span>
              <h3 className="text-xl font-bold text-neutral-900">
                {activeChartTab === 'desemprego' && 'Taxa de Desocupação Histórica (% Força de Trabalho)'}
                {activeChartTab === 'inflacao' && 'Inflação Anual IPCA (%) · Queda e Estabilidade'}
                {activeChartTab === 'salario' && 'Evolução do Salário Mínimo Nominal e Ganho Real (R$)'}
                {activeChartTab === 'desmatamento' && 'Taxa de Desmatamento na Amazônia Legal (km²/ano)'}
                {activeChartTab === 'live_bcb' && 'Série Mensal em Tempo Real do IPCA (API Oficial Banco Central)'}
              </h3>
            </div>

            {/* Segmented Chart Selector */}
            <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-lg overflow-x-auto">
              <button
                onClick={() => setActiveChartTab('desemprego')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  activeChartTab === 'desemprego' ? 'bg-white text-neutral-900 shadow-2xs' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Desemprego
              </button>
              <button
                onClick={() => setActiveChartTab('inflacao')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  activeChartTab === 'inflacao' ? 'bg-white text-neutral-900 shadow-2xs' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Inflação IPCA
              </button>
              <button
                onClick={() => setActiveChartTab('salario')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  activeChartTab === 'salario' ? 'bg-white text-neutral-900 shadow-2xs' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Salário Mínimo
              </button>
              <button
                onClick={() => setActiveChartTab('desmatamento')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  activeChartTab === 'desmatamento' ? 'bg-white text-neutral-900 shadow-2xs' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Amazônia
              </button>
              <button
                onClick={() => setActiveChartTab('live_bcb')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  activeChartTab === 'live_bcb' ? 'bg-red-600 text-white shadow-2xs' : 'text-red-700 hover:bg-red-50'
                }`}
              >
                <Database className="w-3 h-3" />
                <span>API BCB ao Vivo</span>
              </button>
            </div>
          </div>

          {/* Chart Render Area */}
          <div className="pt-6">
            
            {/* Chart 1: Desemprego */}
            {activeChartTab === 'desemprego' && (
              <div>
                <p className="text-xs text-neutral-500 mb-6">
                  Comparação da taxa média de desocupação (IBGE/PNAD Contínua). Observe a reversão sustentada de 13,5% no pico da gestão anterior para os atuais 6,4% no mandato Lula III.
                </p>
                <div className="h-64 sm:h-72 w-full flex items-end gap-2 sm:gap-4 pt-4 pb-2 border-b border-neutral-200">
                  {CHART_DESEMPREGO_SERIES.map((pt, i) => {
                    const heightPercent = (pt.value / 15) * 100;
                    const isLula = pt.reference.includes("Lula");
                    return (
                      <div key={i} className="flex-1 flex flex-col items-center justify-end h-full group relative">
                        {/* Tooltip */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-10 bg-neutral-900 text-white text-[11px] font-mono px-2 py-1 rounded shadow pointer-events-none whitespace-nowrap z-20">
                          {pt.period}: {pt.value}% ({pt.reference})
                        </div>
                        <span className="text-[11px] sm:text-xs font-mono font-bold text-neutral-800 mb-1 tabular-nums">
                          {pt.value}%
                        </span>
                        <div 
                          style={{ height: `${heightPercent}%` }}
                          className={`w-full max-w-[42px] rounded-t-md transition-all ${
                            isLula ? 'bg-emerald-600 group-hover:bg-emerald-500' : 'bg-neutral-300 group-hover:bg-neutral-400'
                          }`}
                        />
                        <span className="text-[10px] sm:text-xs font-medium text-neutral-500 mt-2 text-center whitespace-nowrap">
                          {pt.period.split(" ")[0]}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between text-xs text-neutral-500 mt-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-xs bg-neutral-300 inline-block"></span>
                      Mandato Anterior (2019-2022)
                    </span>
                    <span className="flex items-center gap-1.5 font-bold text-emerald-800">
                      <span className="w-3 h-3 rounded-xs bg-emerald-600 inline-block"></span>
                      Governo Lula III (2023-2026)
                    </span>
                  </div>
                  <span className="font-mono text-[11px]">Fonte: IBGE / PNADC</span>
                </div>
              </div>
            )}

            {/* Chart 2: Inflação IPCA */}
            {activeChartTab === 'inflacao' && (
              <div>
                <p className="text-xs text-neutral-500 mb-6">
                  Comportamento do IPCA oficial ao ano. O choque inflacionário descontrolado de 10,06% em 2021 cedeu lugar à menor média acumulada de um mandato na história recente (em torno de 4%).
                </p>
                <div className="h-64 sm:h-72 w-full flex items-end gap-2 sm:gap-4 pt-4 pb-2 border-b border-neutral-200">
                  {CHART_INFLACAO_SERIES.map((pt, i) => {
                    const heightPercent = (pt.value / 11) * 100;
                    const isHigh = pt.value > 6;
                    return (
                      <div key={i} className="flex-1 flex flex-col items-center justify-end h-full group relative">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-10 bg-neutral-900 text-white text-[11px] font-mono px-2 py-1 rounded shadow pointer-events-none whitespace-nowrap z-20">
                          {pt.period}: {pt.value}% ({pt.reference})
                        </div>
                        <span className="text-[11px] sm:text-xs font-mono font-bold text-neutral-800 mb-1 tabular-nums">
                          {pt.value}%
                        </span>
                        <div 
                          style={{ height: `${heightPercent}%` }}
                          className={`w-full max-w-[42px] rounded-t-md transition-all ${
                            isHigh ? 'bg-red-500 group-hover:bg-red-400' : 'bg-blue-600 group-hover:bg-blue-500'
                          }`}
                        />
                        <span className="text-[10px] sm:text-xs font-medium text-neutral-500 mt-2 text-center whitespace-nowrap">
                          {pt.period}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between text-xs text-neutral-500 mt-4">
                  <span className="text-neutral-600">
                    Média 2023-2026: <strong>4,2% a.a.</strong> (frente a 10,06% no pico de 2021)
                  </span>
                  <span className="font-mono text-[11px]">Fonte: Banco Central do Brasil / IBGE</span>
                </div>
              </div>
            )}

            {/* Chart 3: Salário Mínimo */}
            {activeChartTab === 'salario' && (
              <div>
                <p className="text-xs text-neutral-500 mb-6">
                  Salário Mínimo nominal (R$) e política de valorização real. Durante 2019-2022 o piso foi reajustado apenas pela inflação, sem ganho real; a partir de 2023, a valorização real voltou por lei permanente.
                </p>
                <div className="h-64 sm:h-72 w-full flex items-end gap-2 sm:gap-4 pt-4 pb-2 border-b border-neutral-200">
                  {CHART_SALARIO_MINIMO_REAL.map((pt, i) => {
                    const heightPercent = (pt.value / 1700) * 100;
                    const isLula = parseInt(pt.period) >= 2023;
                    return (
                      <div key={i} className="flex-1 flex flex-col items-center justify-end h-full group relative">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-10 bg-neutral-900 text-white text-[11px] font-mono px-2 py-1 rounded shadow pointer-events-none whitespace-nowrap z-20">
                          {pt.period}: R$ {pt.value} ({pt.realGrowth})
                        </div>
                        <span className="text-[10px] sm:text-xs font-mono font-bold text-neutral-800 mb-1 tabular-nums">
                          R${pt.value}
                        </span>
                        <div 
                          style={{ height: `${heightPercent}%` }}
                          className={`w-full max-w-[42px] rounded-t-md transition-all ${
                            isLula ? 'bg-amber-500 group-hover:bg-amber-400' : 'bg-neutral-300 group-hover:bg-neutral-400'
                          }`}
                        />
                        <span className="text-[10px] sm:text-xs font-medium text-neutral-500 mt-2 text-center whitespace-nowrap">
                          {pt.period}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between text-xs text-neutral-500 mt-4">
                  <span className="text-neutral-600">
                    Aumento real cumulativo de mais de <strong>+12% no poder de compra</strong> da classe trabalhadora.
                  </span>
                  <span className="font-mono text-[11px]">Fonte: Dieese / Ministério do Trabalho</span>
                </div>
              </div>
            )}

            {/* Chart 4: Amazônia */}
            {activeChartTab === 'desmatamento' && (
              <div>
                <p className="text-xs text-neutral-500 mb-6">
                  Área desmatada na Amazônia Legal em km²/ano (PRODES/INPE). Após atingir mais de 13.000 km² em 2021, a retomada da fiscalização reduziu a destruição em mais de 50%.
                </p>
                <div className="h-64 sm:h-72 w-full flex items-end gap-2 sm:gap-4 pt-4 pb-2 border-b border-neutral-200">
                  {CHART_DESMATAMENTO_AMAZONIA.map((pt, i) => {
                    const heightPercent = (pt.value / 14000) * 100;
                    const isLula = parseInt(pt.period) >= 2023;
                    return (
                      <div key={i} className="flex-1 flex flex-col items-center justify-end h-full group relative">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-10 bg-neutral-900 text-white text-[11px] font-mono px-2 py-1 rounded shadow pointer-events-none whitespace-nowrap z-20">
                          {pt.period}: {pt.value.toLocaleString('pt-BR')} km² ({pt.status})
                        </div>
                        <span className="text-[10px] sm:text-xs font-mono font-bold text-neutral-800 mb-1 tabular-nums">
                          {Math.round(pt.value / 1000)}k
                        </span>
                        <div 
                          style={{ height: `${heightPercent}%` }}
                          className={`w-full max-w-[42px] rounded-t-md transition-all ${
                            isLula ? 'bg-emerald-600 group-hover:bg-emerald-500' : 'bg-red-400 group-hover:bg-red-500'
                          }`}
                        />
                        <span className="text-[10px] sm:text-xs font-medium text-neutral-500 mt-2 text-center whitespace-nowrap">
                          {pt.period}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between text-xs text-neutral-500 mt-4">
                  <span className="text-emerald-800 font-semibold">
                    Queda de mais de 50% no desmatamento e meta oficial de desmatamento líquido zero até 2030.
                  </span>
                  <span className="font-mono text-[11px]">Fonte: PRODES / INPE</span>
                </div>
              </div>
            )}

            {/* Chart 5: Live BCB API */}
            {activeChartTab === 'live_bcb' && (
              <div>
                <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-lg text-xs mb-6">
                  <Info className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>
                    Dados consumidos diretamente da <strong>API Pública do Sistema Gerenciador de Séries Temporais (SGS) do Banco Central do Brasil</strong> (Série 433: IPCA variação mensal).
                  </span>
                </div>
                
                <div className="h-64 sm:h-72 w-full flex items-end gap-2 sm:gap-4 pt-4 pb-2 border-b border-neutral-200">
                  {liveBcbData.map((pt, i) => {
                    const clampedVal = Math.max(0, pt.value);
                    const heightPercent = Math.min(100, Math.max(10, (clampedVal / 1.0) * 100));
                    return (
                      <div key={i} className="flex-1 flex flex-col items-center justify-end h-full group relative">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-10 bg-neutral-900 text-white text-[11px] font-mono px-2 py-1 rounded shadow pointer-events-none whitespace-nowrap z-20">
                          Mês {pt.period}: {pt.value}%
                        </div>
                        <span className="text-[11px] sm:text-xs font-mono font-bold text-neutral-800 mb-1 tabular-nums">
                          {pt.value}%
                        </span>
                        <div 
                          style={{ height: `${heightPercent}%` }}
                          className="w-full max-w-[42px] rounded-t-md bg-red-600 hover:bg-red-500 transition-all"
                        />
                        <span className="text-[10px] sm:text-xs font-medium text-neutral-500 mt-2 text-center whitespace-nowrap">
                          {pt.period}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between text-xs text-neutral-500 mt-4">
                  <span>Atualizado em: <strong className="font-mono">{liveTimestamp}</strong></span>
                  <a 
                    href="https://dadosabertos.bcb.gov.br/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-red-600 hover:underline"
                  >
                    <span>Portal de Dados Abertos do BCB</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Category Filters for KPI Cards */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-1">
          <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider mr-2">Filtrar por:</span>
          {(['all', 'economia', 'social', 'saude', 'meio-ambiente'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                categoryFilter === cat
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-200/80 text-neutral-700 hover:bg-neutral-300'
              }`}
            >
              {cat === 'all' ? 'Todos os Indicadores' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* 8 Metric KPI Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredMetrics.map((metric) => (
            <div
              key={metric.id}
              className="bg-white rounded-xl border border-neutral-200/90 p-5 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
                  <span className="capitalize font-medium">{metric.category}</span>
                  <span className="text-[11px] text-emerald-700 font-semibold">{metric.change}</span>
                </div>

                <h4 className="text-sm font-bold text-neutral-800 leading-snug mb-3">
                  {metric.title}
                </h4>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight tabular-nums">
                    {metric.currentValue}
                  </span>
                  <span className="text-xs font-medium text-neutral-500">
                    {metric.unit}
                  </span>
                </div>

                <div className="text-[11px] text-neutral-500 mb-3 flex items-center gap-1">
                  <span className="font-semibold text-neutral-400">Anterior:</span>
                  <span className="line-through">{metric.previousValue}</span>
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed">
                  {metric.description}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-neutral-100 text-[10px] text-neutral-400 font-mono">
                {metric.source}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
