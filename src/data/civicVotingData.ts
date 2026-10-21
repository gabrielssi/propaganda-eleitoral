export interface WhyVoteReason {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  metricLabel: string;
}

export const WHY_VOTE_LULA: WhyVoteReason[] = [
  {
    id: 1,
    title: "Economia que Põe Comida na Mesa",
    subtitle: "Crescimento de 3% ao ano e Brasil fora do Mapa da Fome",
    description: "Com responsabilidade social e fiscal aliadas, o Brasil voltou ao Top 10 das maiores potências mundiais, gerou 8 milhões de empregos e atingiu o menor índice de desemprego da história recente.",
    metric: "8 Milhões",
    metricLabel: "Novos empregos formais gerados"
  },
  {
    id: 2,
    title: "Justiça Tributária Real",
    subtitle: "Isenção do IR até R$ 5 mil e tributação dos super-ricos",
    description: "Pela primeira vez, quem ganha até R$ 5.000 não paga Imposto de Renda. O topo da pirâmide (offshores e fundos exclusivos) passou a pagar sua cota justa, financiando serviços públicos de qualidade.",
    metric: "R$ 5.000",
    metricLabel: "Faixa de isenção total do IRPF"
  },
  {
    id: 3,
    title: "Educação com Futuro Garantido",
    subtitle: "Pé-de-Meia, creches do PAC e 111 novos Institutos Federais",
    description: "Nenhum estudante precisa abandonar a escola por falta de renda. O programa Pé-de-Meia já beneficia 7,3 milhões de jovens e o ensino em tempo integral foi priorizado nacionalmente.",
    metric: "7,3 Mi",
    metricLabel: "Alunos atendidos pelo Pé-de-Meia"
  },
  {
    id: 4,
    title: "Saúde Pública e Resgate do SUS",
    subtitle: "Mais Médicos, Farmácia Popular 100% gratuita e vacinação em alta",
    description: "O Agora Tem Especialistas realizou mais de 15 milhões de cirurgias no SUS em 2025. A cobertura vacinal das crianças foi restaurada após o desmonte obscurantista do governo anterior.",
    metric: "15 Mi",
    metricLabel: "Cirurgias feitas no SUS em 2025"
  },
  {
    id: 5,
    title: "Sustentabilidade e Soberania Global",
    subtitle: "Desmatamento em queda recorde e presidência da COP30 em Belém",
    description: "O Brasil deixou o isolamento vexatório para se tornar anfitrião global das maiores cúpulas do planeta (G20, BRICS e COP30), preservando a soberania da Amazônia com ciência e desenvolvimento.",
    metric: "-50%+",
    metricLabel: "Redução no desmatamento na Amazônia"
  },
  {
    id: 6,
    title: "Trabalho Digno e Fim da Escala 6x1",
    subtitle: "Aumento real do salário mínimo e redução da jornada para 40h",
    description: "O trabalho não pode custar a vida e a saúde das pessoas. O governo Lula lidera a luta pela aprovação da jornada máxima de 40 horas sem redução de salário e apoio ao fim da exaustiva escala 6x1.",
    metric: "40 Horas",
    metricLabel: "Meta de jornada máxima semanal"
  }
];

export const ABSTENTION_IMPACT_DATA = {
  summary: "A abstenção nas urnas é a renúncia ao direito mais sagrado conquistado pela democracia: decidir quem comanda o país, define as leis e distribui o orçamento público. Em eleições polarizadas, abster-se ou votar nulo não é neutralidade — é transferir o poder de escolha para os setores mais radicais e articulados.",
  historicalElections: [
    {
      year: "2022 (2º Turno)",
      abstentionRate: "20,59%",
      abstentionCount: "32,2 milhões de eleitores",
      marginVictory: "2,1 milhões de votos",
      insight: "A abstenção foi 15 vezes maior do que a diferença entre os dois candidatos presidenciais. Cada voto fez história."
    },
    {
      year: "2018 (2º Turno)",
      abstentionRate: "21,30%",
      abstentionCount: "31,3 milhões de eleitores",
      marginVictory: "10,7 milhões de votos",
      insight: "Mais de 42 milhões de pessoas não votaram em nenhum dos candidatos (abstenções + brancos e nulos), abrindo caminho para o ciclo de destruição social e institucional."
    },
    {
      year: "2024 (Municipais)",
      abstentionRate: "21,71%",
      abstentionCount: "33,8 milhões de eleitores",
      marginVictory: "Centenas de prefeituras decididas por menos de 500 votos",
      insight: "O afastamento das urnas favorece políticos fisiológicos e o controle do voto por currais eleitorais do crime e milícias."
    }
  ],
  simulationLessons: [
    {
      title: "Quem se cala, deixa o extremismo falar",
      desc: "Grupos extremistas e financistas mobilizam seus eleitores com 100% de presença. Quando você se abstém, o peso percentual do voto deles aumenta matematicamente."
    },
    {
      title: "O voto é a arma da classe trabalhadora",
      desc: "Os super-ricos contam com o poder econômico, lobby no Congresso e grandes conglomerados. O povo trabalhador tem na urna o momento em que todo voto tem rigorosamente o mesmo valor."
    },
    {
      title: "A abstenção é terreno fértil para o retrocesso",
      desc: "Foi no vácuo de participação política que nasceram os piores retrocessos dos direitos trabalhistas, o congelamento dos gastos da saúde e o calote de aposentadorias."
    }
  ]
};

export const VOTER_GUIDE_STEPS = [
  {
    step: "01",
    title: "Consulte sua Situação Eleitoral",
    desc: "Acesse o aplicativo oficial e-Título ou o portal do TSE para verificar se seu título está regular, conferir sua zona e seção eleitoral.",
    actionLink: "https://www.tse.jus.br",
    actionText: "Acessar Portal do TSE"
  },
  {
    step: "02",
    title: "Documentos Aceitos na Urna",
    desc: "Basta apresentar um documento oficial com foto (RG, CNH, Passaporte, Carteira de Trabalho física ou o próprio e-Título com biometria cadastrada). Não é obrigatório levar o título em papel.",
    actionLink: "https://www.tse.jus.br/servicos-eleitorais/titulo-e-local-de-votacao",
    actionText: "Ver Documentos Válidos"
  },
  {
    step: "03",
    title: "Como Justificar a Ausência",
    desc: "Se estiver fora do seu município no dia da eleição, você pode justificar pelo app e-Título no próprio dia das 8h às 17h, ou em até 60 dias após cada turno.",
    actionLink: "https://www.tse.jus.br/servicos-eleitorais/justificativa-eleitoral",
    actionText: "Guia de Justificativa"
  },
  {
    step: "04",
    title: "Denuncie Fake News e Assédio Eleitoral",
    desc: "Patrão que ameaça demitir quem vota em determinado candidato comete crime eleitoral. Denuncie no app Pardal do TSE ou no Ministério Público do Trabalho (MPT).",
    actionLink: "https://www.mpt.mp.br",
    actionText: "Denúncias ao MPT"
  }
];
