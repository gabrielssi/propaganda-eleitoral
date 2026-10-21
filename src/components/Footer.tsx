import { FileDown, ExternalLink } from 'lucide-react';
import { COALITION_PARTIES } from '../data/programData';

interface FooterProps {
  onOpenPdfModal: () => void;
}

export function Footer({ onOpenPdfModal }: FooterProps) {
  return (
    <footer className="bg-neutral-950 text-neutral-400 text-sm border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand & Manifesto */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-red-600 flex items-center justify-center font-black text-white text-lg tracking-tighter">
                13
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                LULA <span className="text-red-500">2026</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Plataforma cívica oficial do Programa de Governo da Coligação Brasil da Esperança. Construindo um país democrático, soberano, sustentável e com justiça social.
            </p>

            <div className="pt-2">
              <a
                href="#programa-oficial"
                className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
              >
                <FileDown className="w-3.5 h-3.5 text-neutral-500" />
                <span>Consultar documento oficial completo (PDF)</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navegação do Programa
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#propostas" className="hover:text-white transition-colors">
                  13 Diretrizes Programáticas
                </a>
              </li>
              <li>
                <a href="#indicadores" className="hover:text-white transition-colors">
                  Indicadores Socioeconômicos
                </a>
              </li>
              <li>
                <a href="#por-que-lula" className="hover:text-white transition-colors">
                  Por Que Votar em Lula
                </a>
              </li>
              <li>
                <a href="#democracia" className="hover:text-white transition-colors">
                  Defesa da Democracia e Fatos
                </a>
              </li>
              <li>
                <a href="#voto-abstencao" className="hover:text-white transition-colors">
                  Simulador de Abstenção
                </a>
              </li>
            </ul>
          </div>

          {/* Official Resources & Transparency */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Portais Públicos e Dados
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="https://www.tse.jus.br" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Tribunal Superior Eleitoral (TSE)</span>
                  <ExternalLink className="w-3 h-3 text-neutral-600" />
                </a>
              </li>
              <li>
                <a 
                  href="https://dadosabertos.bcb.gov.br" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>API de Séries do Banco Central do Brasil</span>
                  <ExternalLink className="w-3 h-3 text-neutral-600" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.gov.br/cgu/pt-br" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Portal da Transparência / CGU</span>
                  <ExternalLink className="w-3 h-3 text-neutral-600" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.ibge.gov.br" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>IBGE · Dados e Séries Históricas</span>
                  <ExternalLink className="w-3 h-3 text-neutral-600" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Coalition badges and legal notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-500">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-neutral-400">Partidos da Coligação:</span>
            {COALITION_PARTIES.map(p => (
              <span key={p.name} className="px-2 py-0.5 rounded bg-neutral-900 text-neutral-300 font-bold text-[10px]">
                {p.name}
              </span>
            ))}
          </div>

          <div className="text-center md:text-right text-[11px] text-neutral-500">
            <span>Eleições Gerais 2026 · Brasil da Esperança</span>
            <span className="mx-2">·</span>
            <span>CNPJ da Campanha devidamente registrado</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
