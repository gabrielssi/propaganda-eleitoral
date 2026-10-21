import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CampaignHero } from './components/CampaignHero';
import { PdfDownloadHeroCard } from './components/PdfDownloadHeroCard';
import { ProgramProposalsSection } from './components/ProgramProposalsSection';
import { IndicatorsSection } from './components/IndicatorsSection';
import { DemocracyThreatsSection } from './components/DemocracyThreatsSection';
import { VotingAbstentionSection } from './components/VotingAbstentionSection';
import { PdfViewerModal } from './components/PdfViewerModal';
import { ProposalDetailModal } from './components/ProposalDetailModal';
import { Footer } from './components/Footer';
import { ProgramProposal } from './data/programData';
import { FileDown, ArrowUp } from 'lucide-react';

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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Prominent PDF Download & Reading Card */}
          <PdfDownloadHeroCard onOpenPdfModal={() => setIsPdfModalOpen(true)} />
        </div>

        {/* 13 Official Programmatic Axes */}
        <ProgramProposalsSection onSelectProposal={(proposal) => setSelectedProposal(proposal)} />

        {/* Dynamic Socio-Economic Indicators & BCB Live API */}
        <IndicatorsSection />

        {/* Defesa da Democracia, Escândalos Bolsonaro, Pandemia e Fake News */}
        <DemocracyThreatsSection />

        {/* Por Que Votar em Lula, Importância do Voto & Simulador de Abstenção */}
        <VotingAbstentionSection />

        {/* Final CTA Strip before footer */}
        <section className="bg-gradient-to-r from-red-700 via-red-600 to-red-800 text-white py-12 border-t border-red-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-1">
                Compromisso com o Futuro
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                O Brasil não pode voltar para trás.
              </h3>
              <p className="text-sm text-red-100 mt-1 max-w-xl">
                Baixe e compartilhe o Programa de Governo Lula 2026. A transformação do país continua com a força da classe trabalhadora.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setIsPdfModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-neutral-100 text-red-700 text-sm font-black rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer active:scale-95"
              >
                <FileDown className="w-4 h-4" />
                <span>Baixar PDF Oficial</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onOpenPdfModal={() => setIsPdfModalOpen(true)} />

      {/* Floating Action Button for instant PDF access */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-2">
        <button
          onClick={scrollToTop}
          title="Voltar ao Topo"
          className="p-3 bg-white/90 hover:bg-white text-neutral-700 hover:text-neutral-900 rounded-full shadow-lg border border-neutral-200 transition-all cursor-pointer active:scale-95"
          aria-label="Voltar ao Topo"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        <button
          onClick={() => setIsPdfModalOpen(true)}
          title="Baixar Programa Oficial em PDF"
          className="flex items-center gap-2 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-xl transition-all cursor-pointer active:scale-95 text-xs font-bold"
        >
          <FileDown className="w-4 h-4" />
          <span className="hidden sm:inline">PDF Oficial 2026</span>
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
