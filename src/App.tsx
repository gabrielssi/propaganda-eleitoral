import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CampaignHero } from './components/CampaignHero';
import { ProgramProposalsSection } from './components/ProgramProposalsSection';
import { OfficialDocumentSection } from './components/OfficialDocumentSection';
import { IndicatorsSection } from './components/IndicatorsSection';
import { DemocracyThreatsSection } from './components/DemocracyThreatsSection';
import { VotingAbstentionSection } from './components/VotingAbstentionSection';
import { PdfViewerModal } from './components/PdfViewerModal';
import { ProposalDetailModal } from './components/ProposalDetailModal';
import { Footer } from './components/Footer';
import { ProgramProposal } from './data/programData';
import { ArrowUp, ArrowRight } from 'lucide-react';

export default function App() {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [selectedProposal, setSelectedProposal] = useState<ProgramProposal | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 selection:bg-red-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenPdfModal={() => setIsPdfModalOpen(true)} />

      {/* Main Campaign Content */}
      <main className="flex-1">
        {/* Campaign Hero with Photo & Official Slogans */}
        <CampaignHero onOpenPdfModal={() => setIsPdfModalOpen(true)} />

        {/* 13 Official Programmatic Axes */}
        <ProgramProposalsSection onSelectProposal={(proposal) => setSelectedProposal(proposal)} />

        {/* Official Registered Document Section (Calm, Dedicated, Non-Repetitive) */}
        <OfficialDocumentSection onOpenPdfModal={() => setIsPdfModalOpen(true)} />

        {/* Dynamic Socio-Economic Indicators & BCB Live API */}
        <IndicatorsSection />

        {/* Defesa da Democracia, Escândalos Bolsonaro, Pandemia e Fake News */}
        <DemocracyThreatsSection />

        {/* Por Que Votar em Lula, Importância do Voto & Simulador de Abstenção */}
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
              <a
                href="#propostas"
                className="inline-flex items-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg shadow-sm transition-all"
              >
                <span>Rever as 13 Diretrizes</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onOpenPdfModal={() => setIsPdfModalOpen(true)} />

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
