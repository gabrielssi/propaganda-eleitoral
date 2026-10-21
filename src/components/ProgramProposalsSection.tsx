import { useState, useMemo } from 'react';
import { 
  Search, ArrowRight, ShieldCheck, HeartHandshake, Shield, GraduationCap, 
  Stethoscope, Palette, Home, TrendingUp, Utensils, Zap, Leaf, Briefcase, Globe,
  CheckCircle2
} from 'lucide-react';
import { PROGRAM_AXES, ProgramProposal } from '../data/programData';

interface ProgramProposalsSectionProps {
  onSelectProposal: (proposal: ProgramProposal) => void;
}

const CATEGORY_MAP: Record<string, string> = {
  all: "Todas as Áreas",
  social: "Social & Cidadania",
  economia: "Economia & Indústria",
  educacao: "Educação",
  saude: "Saúde & SUS",
  seguranca: "Segurança Pública",
  "meio-ambiente": "Meio Ambiente & Clima",
  trabalho: "Trabalho & Renda",
  energia: "Energia & PAC",
  cidades: "Cidades & Habitação",
  soberania: "Soberania & Relações Exteriores"
};

export function ProgramProposalsSection({ onSelectProposal }: ProgramProposalsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showAll, setShowAll] = useState<boolean>(false);

  const filteredProposals = useMemo(() => {
    return PROGRAM_AXES.filter((p) => {
      const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.shortDesc.toLowerCase().includes(q) ||
        p.fullDetails.toLowerCase().includes(q) ||
        p.highlights.some(h => h.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedProposals = useMemo(() => {
    if (selectedCategory !== 'all' || searchQuery.trim() !== '') {
      return filteredProposals;
    }
    return showAll ? filteredProposals : filteredProposals.slice(0, 6);
  }, [filteredProposals, selectedCategory, searchQuery, showAll]);

  // Icon mapping
  const renderIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-red-600" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-amber-600" />;
      case 'Shield': return <Shield className="w-6 h-6 text-blue-600" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-indigo-600" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-rose-600" />;
      case 'Palette': return <Palette className="w-6 h-6 text-purple-600" />;
      case 'Home': return <Home className="w-6 h-6 text-teal-600" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-emerald-600" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-orange-600" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-500" />;
      case 'Leaf': return <Leaf className="w-6 h-6 text-green-600" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-sky-600" />;
      case 'Globe': return <Globe className="w-6 h-6 text-cyan-600" />;
      default: return <ShieldCheck className="w-6 h-6 text-red-600" />;
    }
  };

  return (
    <section id="propostas" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-red-600 uppercase mb-3">
            <span>Plano Estratégico 2026–2030</span>
            <span aria-hidden="true">·</span>
            <span>Documento Integral</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight mb-4">
            As 13 Diretrizes Programáticas para a Transformação do Brasil
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Consulte as propostas registradas e estruturadas por eixos estratégicos. Cada compromisso se apoia nos avanços conquistados e aponta as reformas estruturais indispensáveis para o país.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center mb-8 pb-6 border-b border-neutral-200">
          
          {/* Interactive filter segmented buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {Object.entries(CATEGORY_MAP).slice(0, 7).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[38px] flex items-center ${
                  selectedCategory === key
                    ? 'bg-neutral-900 text-white shadow-2xs'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:max-w-xs">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por proposta, programa..."
              className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all min-h-[42px]"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-700 px-2 py-1 cursor-pointer"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Proposals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {displayedProposals.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between bg-neutral-50/70 hover:bg-neutral-50 border border-neutral-200/90 hover:border-neutral-300 rounded-xl p-5 sm:p-6 transition-all group"
            >
              <div>
                {/* Clean Metadata Header */}
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-neutral-900 text-sm">
                      {item.number}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="capitalize">{item.category.replace("-", " ")}</span>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400">{item.pageRange}</span>
                </div>

                {/* Icon & Title */}
                <div className="flex items-start gap-3.5 mb-3">
                  <div className="p-2.5 bg-white rounded-lg border border-neutral-200/80 shadow-2xs shrink-0 group-hover:scale-105 transition-transform">
                    {renderIcon(item.iconName)}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 leading-snug group-hover:text-red-700 transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                  {item.shortDesc}
                </p>

                {/* 2-3 Bullet Highlights */}
                <ul className="space-y-2 mb-6">
                  {item.highlights.slice(0, 3).map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-neutral-700 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer with Details Action */}
              <div className="pt-4 border-t border-neutral-200/70 flex items-center justify-between">
                <span className="text-xs text-neutral-500 font-medium">
                  {item.highlights.length} compromissos no plano
                </span>
                <button
                  onClick={() => onSelectProposal(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-800 transition-colors cursor-pointer group-hover:translate-x-0.5"
                >
                  <span>Ver Todos os Detalhes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </article>
          ))}
        </div>

        {/* Expand / Collapse Toggle if in 'all' view */}
        {selectedCategory === 'all' && !searchQuery && filteredProposals.length > 6 && (
          <div className="text-center py-4">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-2xs"
            >
              <span>{showAll ? 'Exibir Apenas as 6 Principais' : 'Mostrar Todas as 13 Diretrizes Programáticas'}</span>
              <ArrowRight className={`w-4 h-4 transition-transform ${showAll ? '-rotate-90' : 'rotate-90'}`} />
            </button>
          </div>
        )}

        {filteredProposals.length === 0 && (
          <div className="text-center py-16 bg-neutral-50 rounded-xl border border-neutral-200 p-8">
            <p className="text-base font-semibold text-neutral-800 mb-2">Nenhuma proposta encontrada para os filtros selecionados.</p>
            <p className="text-xs text-neutral-500 mb-4">Experimente remover a busca textual ou selecionar a categoria "Todas as Áreas".</p>
            <button
              onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
              className="px-4 py-2 bg-neutral-900 text-white text-xs font-semibold rounded-lg"
            >
              Redefinir Filtros
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
