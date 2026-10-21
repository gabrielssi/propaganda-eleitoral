import { FileText, Download, Eye, ExternalLink, ShieldCheck, Check } from 'lucide-react';

interface PdfDownloadHeroCardProps {
  onOpenPdfModal: () => void;
}

export function PdfDownloadHeroCard({ onOpenPdfModal }: PdfDownloadHeroCardProps) {
  const pdfUrl = "/assets/aistudio/Programa-Governo-LULA-2026_75e2dab7.pdf";

  return (
    <div className="bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white rounded-2xl p-6 sm:p-8 border border-neutral-800 shadow-xl relative overflow-hidden my-12">
      {/* Decorative background glow */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Document Icon & Summary */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-amber-400 uppercase">
            <span className="w-2 h-2 rounded-full bg-amber-400 inline-block"></span>
            <span>Documento Integral Autêntico</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-400">PDF Oficial · 84 Páginas</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Programa de Governo Lula 2026: <br className="hidden sm:inline" />
            <span className="text-neutral-300 font-normal">
              Diretrizes para o Programa de Transformação do Brasil
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
            Acesse o plano completo com as 13 diretrizes programáticas prioritárias para os próximos quatro anos de mandato. O documento abrange os compromissos com soberania nacional, justiça tributária, saúde pública, educação básica, reindustrialização verde e fortalecimento da democracia.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>13 Eixos Estratégicos</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Metas Fiscais e Sociais</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Registrado no TSE</span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="lg:col-span-4 flex flex-col gap-3 justify-center bg-neutral-900/60 p-5 rounded-xl border border-neutral-800">
          <div className="text-center sm:text-left mb-1">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Acesso Imediato</span>
            <p className="text-sm font-bold text-white">Formato PDF Oficial (3,4 MB)</p>
          </div>

          <a
            href={pdfUrl}
            download="Programa-Governo-LULA-2026.pdf"
            className="flex items-center justify-center gap-2.5 w-full py-3.5 px-5 bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white text-sm font-bold rounded-lg shadow-md transition-all text-center cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Baixar PDF Completo</span>
          </a>

          <button
            onClick={onOpenPdfModal}
            className="flex items-center justify-center gap-2 w-full py-3 px-5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-sm font-semibold rounded-lg border border-neutral-700 transition-all cursor-pointer"
          >
            <Eye className="w-4 h-4 text-neutral-400" />
            <span>Folhear Online no Navegador</span>
          </button>

          <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-1">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
              Arquivo Autêntico e Verificado
            </span>
            <span>Versão Final 2026</span>
          </div>
        </div>

      </div>
    </div>
  );
}
