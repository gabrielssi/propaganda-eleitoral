import { X, Download, FileText, ExternalLink, AlertCircle } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PdfViewerModal({ isOpen, onClose }: PdfViewerModalProps) {
  if (!isOpen) return null;

  const pdfUrl = getAssetUrl('assets/aistudio/Programa-Governo-LULA-2026_75e2dab7.pdf');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 lg:p-6 bg-neutral-950/85 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="bg-white w-full h-full sm:h-[92vh] sm:max-w-5xl flex flex-col sm:rounded-2xl shadow-2xl overflow-hidden border-0 sm:border border-neutral-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pdf-modal-title"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-neutral-200 bg-neutral-50 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
            <div className="p-2 bg-red-100 text-red-700 rounded-lg shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="truncate">
              <h3 id="pdf-modal-title" className="text-sm sm:text-base font-bold text-neutral-900 leading-tight truncate">
                Programa de Governo Lula 2026
              </h3>
              <p className="text-[11px] sm:text-xs text-neutral-500 truncate">
                84 páginas · Documento Oficial TSE
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={pdfUrl}
              download="Programa-Governo-LULA-2026.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-xs transition-colors cursor-pointer min-h-[40px]"
            >
              <Download className="w-4 h-4" />
              <span className="hidden xs:inline">Baixar PDF</span>
            </a>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-neutral-700 hover:text-neutral-900 bg-white border border-neutral-300 rounded-lg transition-colors min-h-[40px]"
              title="Abrir no leitor nativo"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden md:inline">Nova Aba</span>
            </a>

            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center text-neutral-500 hover:text-neutral-800 rounded-lg hover:bg-neutral-200 transition-colors cursor-pointer ml-1"
              aria-label="Fechar visualizador"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile notice banner for phones where PDF iframe might not render */}
        <div className="sm:hidden px-4 py-2 bg-amber-50 border-b border-amber-200 text-[11px] text-amber-900 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>No celular, se o leitor não carregar abaixo, toque em <strong>Baixar PDF</strong> ou <strong>Nova Aba</strong>.</span>
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
        <div className="px-4 sm:px-6 py-2.5 bg-neutral-50 border-t border-neutral-200 text-xs text-neutral-500 flex items-center justify-between shrink-0">
          <span className="truncate pr-2">Diretrizes para a Transformação do Brasil</span>
          <button
            onClick={onClose}
            className="text-xs font-bold text-neutral-700 hover:text-neutral-900 cursor-pointer min-h-[36px] px-2 py-1 shrink-0"
          >
            Fechar Janela
          </button>
        </div>
      </div>
    </div>
  );
}
