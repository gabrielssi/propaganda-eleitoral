export interface ThreatRecord {
  id: string;
  category: 'instituicoes' | 'desinformacao' | 'pandemia' | 'escandalos';
  badge: string;
  title: string;
  summary: string;
  facts: string[];
  contrastLula: string;
}

export const DEMOCRACY_THREATS: ThreatRecord[] = [
  {
    id: "instituicoes",
    category: "instituicoes",
    badge: "Ataque às Instituições e Tentativa de Golpe",
    title: "O Cerco Autoritário ao STF, TSE e a Trama de 8 de Janeiro",
    summary: "Durante quatro anos, a Presidência foi usada como palanque contra os pilares do Estado Democrático de Direito, culminando na invasão dos Três Poderes em 8 de janeiro de 2023.",
    facts: [
      "Ameaças abertas de descumprimento de decisões do Supremo Tribunal Federal e pedidos de impeachment ilegítimos de ministros.",
      "Ataques repetidos e infundados contra a lisura das urnas eletrônicas e a Justiça Eleitoral, buscando preparar o terreno para não aceitar o resultado das urnas.",
      "Investigações da Polícia Federal comprovaram a existência de minutas de decretos de golpe de Estado e monitoramento clandestino de autoridades públicas.",
      "A depredação terrorista das sedes dos Três Poderes em Brasília em 8 de janeiro de 2023, visando instaurar o caos institucional para provocar intervenção militar."
    ],
    contrastLula: "O governo Lula restabeleceu o diálogo republicano com o Judiciário e o Congresso, reestruturou o comando legalista das Forças Armadas e fortaleceu os órgãos de controle sem qualquer tipo de tutela ou aparelhamento."
  },
  {
    id: "desinformacao",
    category: "desinformacao",
    badge: "Milícias Digitais e Gabinete do Ódio",
    title: "Disseminação Coordenada de Fake News e Campanhas de Ódio",
    summary: "Estrutura montada dentro da máquina pública para fabricar mentiras em escala industrial, intimidar adversários, jornalistas e desacreditar a ciência.",
    facts: [
      "Comprovada existência do chamado 'Gabinete do Ódio', operado a partir de gabinetes palacianos e redes financiadas por empresários alinhados.",
      "Disparos em massa de mensagens falsas em aplicativos de mensagens com desinformação política e difamação de adversários e membros da sociedade civil.",
      "Campanhas orquestradas contra a liberdade de imprensa, com agressões verbais e ameaças físicas recorrentes a repórteres, com ênfase especial em mulheres jornalistas.",
      "Uso de agências de inteligência pública (caso da Abin paralela) para espionar jornalistas, opositores políticos e ministros da Suprema Corte."
    ],
    contrastLula: "Instituição da Política Nacional de Letramento Digital, transparência algorítmica com o Centro Nacional de Transparência e defesa inegociável da soberania digital contra o modelo predador de desinformação das big techs."
  },
  {
    id: "pandemia",
    category: "pandemia",
    badge: "Crise Sanitária e Negacionismo",
    title: "A Negligência Criminosa na Pandemia da Covid-19: 700 Mil Vidas",
    summary: "O Brasil representou cerca de 10% de todas as mortes globais por Covid-19 tendo apenas 2,7% da população mundial, fruto da omissão deliberada do governo federal anterior.",
    facts: [
      "Mais de 100 e-mails de farmacêuticas (como a Pfizer) oferecendo vacinas foram completamente ignorados pelo governo enquanto brasileiros morriam sem leitos.",
      "Incentivo ostensivo ao contágio em massa sob a falsa teoria da 'imunidade de rebanho', zombando de pessoas sem ar ('não sou coveiro', 'vai ficar chorando até quando?').",
      "Propagação criminosa de 'tratamentos precoces' ineficazes (cloroquina, hidroxicloroquina e ivermectina), inclusive com testes não autorizados e uso de dinheiro público em laboratórios do Exército.",
      "O colapso por asfixia em Manaus (AM), onde pacientes morreram sem oxigênio nos hospitais enquanto o Ministério da Saúde enviava comitiva para prescrever medicamentos comprovadamente inúteis.",
      "Queda vertiginosa nas coberturas vacinais gerais infantis como sarampo e poliomielite, destruindo o histórico padrão de excelência de vacinação do Brasil."
    ],
    contrastLula: "Resgate imediato do Programa Nacional de Imunizações (PNI), reconhecimento da UNICEF pela recuperação das taxas de vacinação infantil, expansão da Farmácia Popular e investimentos inéditos de R$ 34 bilhões no SUS através do Novo PAC."
  },
  {
    id: "escandalos",
    category: "escandalos",
    badge: "Patrimonialismo e Corrupção",
    title: "Escândalos da Família Bolsonaro e o Orçamento Secreto",
    summary: "Diferente da propaganda eleitoral moralista, o mandato anterior foi marcado por enriquecimento patrimonial suspeito, desvio de patrimônio da União e aparelhamento de órgãos fiscalizadores.",
    facts: [
      "O escândalo das Joias da Arábia Saudita: tentativa de apropriação indevida e venda ilegal no exterior de relógios de luxo e kits de joias milionárias pertencentes ao acervo de Estado.",
      "Compra de 51 imóveis pela família Bolsonaro negociados total ou parcialmente com uso de dinheiro vivo entre 1990 e 2022, revelada por investigação jornalística com base em escrituras de cartório.",
      "O esquema das 'Rachadinhas' nos gabinetes parlamentares dos filhos do ex-presidente, com repasse forçado de salários de funcionários fantasmas.",
      "Aparelhamento e trocas constantes de diretores e superintendentes da Polícia Federal sempre que investigações atingiam pessoas próximas à família.",
      "O 'Orçamento Secreto': liberação de dezenas de bilhões de reais em emendas de relator sem transparência nem critérios técnicos em troca de sustentação política no Congresso."
    ],
    contrastLula: "Revogação imediata de centenas de sigilos de 100 anos, fortalecimento da Controladoria-Geral da União (CGU) e do Portal da Transparência, e diálogo institucional respeitoso e aberto com a sociedade civil."
  }
];
