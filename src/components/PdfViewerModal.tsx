import { X, Download, FileText, ExternalLink } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PdfViewerModal({ isOpen, onClose }: PdfViewerModalProps) {
  if (!isOpen) return null;

  const pdfUrl = getAssetUrl('assets/aistudio/Programa-Governo-LULA-2026_75e2dab7.pdf');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-2xl w-full max-w-5xl h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-neutral-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pdf-modal-title"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 text-red-700 rounded-lg">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="pdf-modal-title" className="text-base font-bold text-neutral-900 leading-tight">
                Programa de Governo LULA 2026 (Documento Oficial em PDF)
              </h3>
              <p className="text-xs text-neutral-500">
                84 páginas · Diretrizes para o Programa de Transformação do Brasil
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              download="Programa-Governo-LULA-2026.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Baixar Arquivo PDF</span>
            </a>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-700 hover:text-neutral-900 bg-white border border-neutral-300 rounded-lg transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Abrir em Nova Aba</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-neutral-500 hover:text-neutral-800 rounded-lg hover:bg-neutral-200 transition-colors cursor-pointer ml-1"
              aria-label="Fechar visualizador"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Embedded PDF viewer */}
        <div className="flex-1 bg-neutral-100 relative">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=1`}
            title="Programa de Governo Lula 2026 PDF"
            className="w-full h-full border-none"
          />
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-2.5 bg-neutral-50 border-t border-neutral-200 text-xs text-neutral-500 flex items-center justify-between shrink-0">
          <span>Se o arquivo não abrir no seu navegador, clique no botão de download acima.</span>
          <button
            onClick={onClose}
            className="text-xs font-bold text-neutral-700 hover:text-neutral-900 cursor-pointer"
          >
            Fechar Janela
          </button>
        </div>
      </div>
    </div>
  );
}
