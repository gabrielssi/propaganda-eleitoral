import { 
  Home, BookOpen, BarChart2, ShieldAlert, Vote, FileText,
  Layers, Columns
} from 'lucide-react';

export type TabId = 'inicio' | 'propostas' | 'indicadores' | 'democracia' | 'voto' | 'documento';

interface StickyTabBarProps {
  activeTab: TabId;
  onSelectTab: (tabId: TabId) => void;
  viewMode: 'tabs' | 'continuous';
  onToggleViewMode: () => void;
}

const TABS: { id: TabId; label: string; shortLabel: string; icon: typeof Home; count?: string }[] = [
  { id: 'inicio', label: 'Início', shortLabel: 'Início', icon: Home },
  { id: 'propostas', label: '13 Diretrizes', shortLabel: '13 Eixos', icon: BookOpen, count: '13' },
  { id: 'indicadores', label: 'Indicadores', shortLabel: 'Dados', icon: BarChart2, count: 'BCB' },
  { id: 'democracia', label: 'Democracia', shortLabel: 'Democracia', icon: ShieldAlert, count: '4' },
  { id: 'voto', label: 'Impacto do Voto', shortLabel: 'Voto', icon: Vote },
  { id: 'documento', label: 'Programa PDF', shortLabel: 'PDF', icon: FileText, count: '84p' },
];

export function StickyTabBar({ 
  activeTab, 
  onSelectTab, 
  viewMode, 
  onToggleViewMode 
}: StickyTabBarProps) {
  return (
    <div className="sticky top-16 sm:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-2xs">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 py-2">
          
          {/* Scrollable Horizontal Tabs Container */}
          <nav 
            className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-none py-0.5 px-1 -mx-1"
            aria-label="Navegação por seções"
          >
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => onSelectTab(tab.id)}
                  className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 text-xs font-bold rounded-lg transition-all shrink-0 cursor-pointer min-h-[38px] ${
                    isActive
                      ? 'bg-red-600 text-white shadow-xs'
                      : 'bg-neutral-100 hover:bg-neutral-200/80 text-neutral-700 hover:text-neutral-900'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-neutral-500'}`} />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.shortLabel}</span>
                  {tab.count && (
                    <span 
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                        isActive 
                          ? 'bg-red-700 text-white' 
                          : 'bg-neutral-200 text-neutral-700'
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* View Mode Toggle: Tabs vs Continuous */}
          <div className="hidden md:flex items-center gap-1.5 shrink-0 pl-3 border-l border-neutral-200 text-xs text-neutral-500">
            <button
              onClick={onToggleViewMode}
              title={viewMode === 'tabs' ? 'Alternar para visualização contínua (página longa)' : 'Alternar para visualização em abas focadas'}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-md font-medium transition-colors cursor-pointer text-[11px]"
            >
              {viewMode === 'tabs' ? (
                <>
                  <Columns className="w-3.5 h-3.5 text-neutral-600" />
                  <span>Modo Focado (Abas)</span>
                </>
              ) : (
                <>
                  <Layers className="w-3.5 h-3.5 text-red-600" />
                  <span>Modo Contínuo (Tudo)</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
