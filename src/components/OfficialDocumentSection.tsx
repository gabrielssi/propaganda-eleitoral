import { FileText, Download, Eye, ShieldCheck, CheckCircle } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface OfficialDocumentSectionProps {
  onOpenPdfModal: () => void;
}

export function OfficialDocumentSection({ onOpenPdfModal }: OfficialDocumentSectionProps) {
  const pdfUrl = getAssetUrl('assets/aistudio/Programa-Governo-LULA-2026_75e2dab7.pdf');

  return (
    <section id="programa-oficial" className="py-16 bg-neutral-100/70 border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl p-5 sm:p-8 lg:p-10 border border-neutral-200 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
            
            {/* Left: Document Metadata and Information */}
            <div className="space-y-3.5 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-neutral-500 uppercase">
                <FileText className="w-4 h-4 text-red-600 shrink-0" />
                <span>Documentação Oficial · Eleições 2026</span>
                <span aria-hidden="true" className="text-neutral-300">·</span>
                <span className="text-neutral-600">84 Páginas</span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-neutral-900 tracking-tight leading-snug">
                Programa de Governo Lula 2026 na Íntegra
              </h2>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Consulte o plano de diretrizes registrado junto à Justiça Eleitoral. O documento detalha as metas econômicas, sociais, ambientais e institucionais para o próximo quadriênio de governo.
              </p>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-5 text-xs text-neutral-600 pt-1">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>13 Eixos Programáticos</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Metas de Curto e Longo Prazo</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Autenticidade Verificada</span>
                </div>
              </div>
            </div>

            {/* Right: Focused, Non-Intrusive Action Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0 md:min-w-[210px] w-full sm:w-auto">
              <a
                href={pdfUrl}
                download="Programa-Governo-LULA-2026.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white text-xs font-bold rounded-lg shadow-xs transition-colors text-center cursor-pointer min-h-[44px]"
              >
                <Download className="w-4 h-4" />
                <span>Baixar PDF Oficial</span>
              </a>

              <button
                onClick={onOpenPdfModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-neutral-100 hover:bg-neutral-200 active:scale-[0.98] text-neutral-800 text-xs font-semibold rounded-lg border border-neutral-300 transition-colors text-center cursor-pointer min-h-[44px]"
              >
                <Eye className="w-4 h-4 text-neutral-600" />
                <span>Ler no Navegador</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
