import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import { TabId } from './StickyTabBar';

interface SectionNavFooterProps {
  prevTab?: { id: TabId; label: string };
  nextTab?: { id: TabId; label: string };
  onSelectTab: (tabId: TabId) => void;
}

export function SectionNavFooter({ prevTab, nextTab, onSelectTab }: SectionNavFooterProps) {
  return (
    <div className="py-8 bg-neutral-100 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Back to Home or Previous Section */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
          <button
            onClick={() => onSelectTab('inicio')}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-bold text-neutral-700 hover:text-neutral-900 bg-white hover:bg-neutral-50 rounded-lg border border-neutral-200 shadow-2xs transition-all cursor-pointer min-h-[40px]"
          >
            <Home className="w-4 h-4 text-neutral-500" />
            <span>Voltar ao Início</span>
          </button>

          {prevTab && (
            <button
              onClick={() => onSelectTab(prevTab.id)}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-bold text-neutral-700 hover:text-neutral-900 bg-white hover:bg-neutral-50 rounded-lg border border-neutral-200 shadow-2xs transition-all cursor-pointer min-h-[40px]"
            >
              <ArrowLeft className="w-4 h-4 text-neutral-500" />
              <span>Anterior: {prevTab.label}</span>
            </button>
          )}
        </div>

        {/* Right: Next Section */}
        {nextTab && (
          <button
            onClick={() => onSelectTab(nextTab.id)}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-red-600 hover:bg-red-700 active:scale-[0.98] rounded-lg shadow-2xs transition-all cursor-pointer w-full sm:w-auto min-h-[40px]"
          >
            <span>Próximo: {nextTab.label}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}

      </div>
    </div>
  );
}
