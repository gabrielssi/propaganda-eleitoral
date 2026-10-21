import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { StickyTabBar, TabId } from './components/StickyTabBar';
import { CampaignHero } from './components/CampaignHero';
import { HomeDashboardOverview } from './components/HomeDashboardOverview';
import { ProgramProposalsSection } from './components/ProgramProposalsSection';
import { OfficialDocumentSection } from './components/OfficialDocumentSection';
import { IndicatorsSection } from './components/IndicatorsSection';
import { DemocracyThreatsSection } from './components/DemocracyThreatsSection';
import { VotingAbstentionSection } from './components/VotingAbstentionSection';
import { SectionNavFooter } from './components/SectionNavFooter';
import { PdfViewerModal } from './components/PdfViewerModal';
import { ProposalDetailModal } from './components/ProposalDetailModal';
import { Footer } from './components/Footer';
import { ProgramProposal } from './data/programData';
import { ArrowUp, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('inicio');
  const [viewMode, setViewMode] = useState<'tabs' | 'continuous'>('tabs');
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [selectedProposal, setSelectedProposal] = useState<ProgramProposal | null>(null);

  const handleSelectTab = (tabId: TabId | string) => {
    setActiveTab(tabId as TabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 selection:bg-red-600 selection:text-white">
      {/* Top Header Navigation */}
      <Navbar 
        activeTab={activeTab} 
        onSelectTab={handleSelectTab} 
        onOpenPdfModal={() => setIsPdfModalOpen(true)} 
      />

      {/* Sticky Fast-Switching Tab Bar (Stops Endless Scrolling) */}
      <StickyTabBar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        viewMode={viewMode}
        onToggleViewMode={() => setViewMode(viewMode === 'tabs' ? 'continuous' : 'tabs')}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {viewMode === 'tabs' ? (
          /* Focused Tabbed View - Zero Scroll Fatigue */
          <div>
            {activeTab === 'inicio' && (
              <>
                <CampaignHero 
                  onSelectTab={handleSelectTab} 
                  onOpenPdfModal={() => setIsPdfModalOpen(true)} 
                />
                <HomeDashboardOverview 
                  onSelectTab={handleSelectTab} 
                  onOpenPdfModal={() => setIsPdfModalOpen(true)} 
                />
              </>
            )}

            {activeTab === 'propostas' && (
              <>
                <ProgramProposalsSection onSelectProposal={(proposal) => setSelectedProposal(proposal)} />
                <SectionNavFooter
                  prevTab={{ id: 'inicio', label: 'Início' }}
                  nextTab={{ id: 'indicadores', label: 'Indicadores Socioeconômicos' }}
                  onSelectTab={handleSelectTab}
                />
              </>
            )}

            {activeTab === 'indicadores' && (
              <>
                <IndicatorsSection />
                <SectionNavFooter
                  prevTab={{ id: 'propostas', label: '13 Diretrizes' }}
                  nextTab={{ id: 'democracia', label: 'Defesa da Democracia' }}
                  onSelectTab={handleSelectTab}
                />
              </>
            )}

            {activeTab === 'democracia' && (
              <>
                <DemocracyThreatsSection />
                <SectionNavFooter
                  prevTab={{ id: 'indicadores', label: 'Indicadores' }}
                  nextTab={{ id: 'voto', label: 'Impacto do Voto' }}
                  onSelectTab={handleSelectTab}
                />
              </>
            )}

            {activeTab === 'voto' && (
              <>
                <VotingAbstentionSection />
                <SectionNavFooter
                  prevTab={{ id: 'democracia', label: 'Democracia' }}
                  nextTab={{ id: 'documento', label: 'Programa Oficial (PDF)' }}
                  onSelectTab={handleSelectTab}
                />
              </>
            )}

            {activeTab === 'documento' && (
              <>
                <OfficialDocumentSection onOpenPdfModal={() => setIsPdfModalOpen(true)} />
                <SectionNavFooter
                  prevTab={{ id: 'voto', label: 'Impacto do Voto' }}
                  nextTab={{ id: 'inicio', label: 'Voltar ao Início' }}
                  onSelectTab={handleSelectTab}
                />
              </>
            )}
          </div>
        ) : (
          /* Continuous Scroll View (Optional toggle for users who want full page stream) */
          <div>
            <div className="bg-amber-50 border-b border-amber-200 py-2.5 px-4 text-center text-xs text-amber-900 font-medium flex items-center justify-center gap-2">
              <span>Você está no modo contínuo.</span>
              <button
                onClick={() => setViewMode('tabs')}
                className="underline font-bold text-red-700 hover:text-red-900 cursor-pointer"
              >
                Voltar para navegação em abas focadas
              </button>
            </div>

            <CampaignHero onSelectTab={handleSelectTab} onOpenPdfModal={() => setIsPdfModalOpen(true)} />
            <ProgramProposalsSection onSelectProposal={(proposal) => setSelectedProposal(proposal)} />
            <OfficialDocumentSection onOpenPdfModal={() => setIsPdfModalOpen(true)} />
            <IndicatorsSection />
            <DemocracyThreatsSection />
            <VotingAbstentionSection />

            {/* Civic Conclusion Banner */}
            <section className="bg-neutral-900 text-white py-12 border-t border-neutral-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                    Eleições Gerais 2026
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    O Brasil segue em frente com a força do seu povo.
                  </h3>
                  <p className="text-sm text-neutral-400 mt-1 max-w-xl">
                    Conheça as propostas, participe dos debates cívicos e exerça a cidadania ativa pelo fortalecimento da nossa democracia.
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => handleSelectTab('propostas')}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg shadow-sm transition-all cursor-pointer"
                  >
                    <span>Rever as 13 Diretrizes</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer with Active Tab synchronization */}
      <Footer 
        onSelectTab={handleSelectTab} 
        onOpenPdfModal={() => setIsPdfModalOpen(true)} 
      />

      {/* Discreet Floating Back to Top Button */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={scrollToTop}
          title="Voltar ao Topo"
          className="p-3 bg-white hover:bg-neutral-100 text-neutral-700 hover:text-neutral-900 rounded-full shadow-md border border-neutral-200 transition-all cursor-pointer active:scale-95"
          aria-label="Voltar ao Topo"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      {/* Modals */}
      <PdfViewerModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />

      <ProposalDetailModal
        proposal={selectedProposal}
        onClose={() => setSelectedProposal(null)}
        onOpenPdf={() => setIsPdfModalOpen(true)}
      />
    </div>
  );
}
