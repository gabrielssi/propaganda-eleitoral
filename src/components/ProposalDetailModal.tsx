import { useState } from 'react';
import { X, Check, Copy, FileText, CheckCircle2 } from 'lucide-react';
import { ProgramProposal } from '../data/programData';

interface ProposalDetailModalProps {
  proposal: ProgramProposal | null;
  onClose: () => void;
  onOpenPdf: () => void;
}

export function ProposalDetailModal({ proposal, onClose, onOpenPdf }: ProposalDetailModalProps) {
  const [copied, setCopied] = useState(false);

  if (!proposal) return null;

  const handleCopy = () => {
    const textToCopy = `[Diretriz ${proposal.number} - Lula 2026] ${proposal.title}\n\n${proposal.shortDesc}\n\nPrincipais Ações:\n${proposal.highlights.map(h => `• ${h}`).join('\n')}\n\nSaiba mais no Programa Oficial de Governo.`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-neutral-950/80 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-2xl flex flex-col sm:rounded-2xl shadow-2xl overflow-hidden border-0 sm:border border-neutral-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="proposal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-neutral-200 bg-neutral-50 shrink-0">
          <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium truncate pr-2">
            <span className="font-mono font-bold text-red-600 text-sm">{proposal.number}</span>
            <span aria-hidden="true">·</span>
            <span className="capitalize truncate">{proposal.category.replace('-', ' ')}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono">{proposal.pageRange}</span>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-neutral-500 hover:text-neutral-800 rounded-lg hover:bg-neutral-200 transition-colors cursor-pointer shrink-0"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-8 overflow-y-auto space-y-5 sm:space-y-6 flex-1">
          <h2 id="proposal-title" className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight leading-snug">
            {proposal.title}
          </h2>

          <div className="p-3.5 sm:p-4 bg-red-50/70 border border-red-200/80 rounded-xl text-neutral-800 text-xs sm:text-sm leading-relaxed">
            {proposal.shortDesc}
          </div>

          <div>
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2 sm:mb-3">
              Contexto e Visão Estratégica do Governo
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              {proposal.fullDetails}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2 sm:mb-3">
              Compromissos e Ações Prioritárias Registradas ({proposal.highlights.length})
            </h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {proposal.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-neutral-800 bg-neutral-50 p-2.5 sm:p-3 rounded-lg border border-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-4 sm:px-6 py-3.5 bg-neutral-50 border-t border-neutral-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 shrink-0">
          <button
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2 text-xs font-semibold text-neutral-700 hover:text-neutral-900 bg-white border border-neutral-300 rounded-lg transition-colors cursor-pointer min-h-[44px] sm:min-h-0"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copiado para Área de Transferência!' : 'Copiar Resumo para WhatsApp'}</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenPdf();
            }}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-xs transition-colors cursor-pointer min-h-[44px] sm:min-h-0"
          >
            <FileText className="w-4 h-4" />
            <span>Consultar no PDF ({proposal.pageRange})</span>
          </button>
        </div>
      </div>
    </div>
  );
}
