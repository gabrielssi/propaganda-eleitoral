export interface ProgramProposal {
  id: number;
  number: string;
  title: string;
  shortDesc: string;
  category: 'institucional' | 'social' | 'seguranca' | 'educacao' | 'saude' | 'cultura' | 'cidades' | 'economia' | 'agricultura' | 'energia' | 'meio-ambiente' | 'trabalho' | 'soberania';
  highlights: string[];
  fullDetails: string;
  iconName: string;
  pageRange: string;
}

export const PROGRAM_AXES: ProgramProposal[] = [
  {
    id: 1,
    number: "01",
    title: "Fortalecer a Democracia, a Participação Social e Modernizar o Estado",
    shortDesc: "Democracia real com reforma política, conselhos participativos recriados, transparência algorítmica e combate frontal ao orçamento secreto.",
    category: "institucional",
    highlights: [
      "Recriação de 28 conferências nacionais e expansão do Sistema de Participação Social",
      "PPA Participativo com mais de 1,4 milhão de cidadãos na plataforma Brasil Participativo",
      "Enfrentamento às distorções das emendas parlamentares e orçamento secreto",
      "Regulação democrática das redes sociais e plataformas para coibir desinformação e ódio",
      "Conselho Nacional pela Soberania Digital e Política Nacional de Letramento Digital",
      "Modernização do Gov.br com mais de 5.000 serviços públicos digitais integrados"
    ],
    fullDetails: "A democracia deve ser o sistema político que representa o povo, assegura vida livre e digna e promove o combate às desigualdades. Propomos enfrentar a grave distorção do atual sistema de emendas parlamentares (que consumiu R$ 50 bilhões em 2026), avançar na regulação das plataformas digitais contra o ódio e as fake news, e consolidar o projeto 'Um governo para cada pessoa' com inteligência de dados pública e soberania nacional.",
    iconName: "ShieldCheck",
    pageRange: "Págs. 15–18"
  },
  {
    id: 2,
    number: "02",
    title: "Combater as Desigualdades e Garantir Dignidade",
    shortDesc: "Isenção do IR até R$ 5.000, expansão do Bolsa Família, política de cuidados para mães e idosos e titulação recorde de terras quilombolas e indígenas.",
    category: "social",
    highlights: [
      "Isenção total de Imposto de Renda para quem ganha até R$ 5.000 mensais",
      "Bolsa Família com adicionais para crianças e adolescentes, retirando o Brasil do Mapa da Fome",
      "Menor patamar histórico do índice de Gini (0,504) e extrema pobreza em 4,6%",
      "Homologação de 20 novas terras indígenas (3,2 mi de hectares) e Ministério dos Povos Indígenas",
      "Criação das Cuidotecas (crianças de 3 a 12 anos), cozinhas solidárias e lavanderias públicas",
      "Pacto de Enfrentamento ao Feminicídio e ampliação das Casas da Mulher Brasileira"
    ],
    fullDetails: "O combate à desigualdade é a viga mestra: sob o princípio de 'colocar o pobre no orçamento e o rico no Imposto de Renda', tributamos fundos exclusivos e offshores para aliviar a carga sobre 15 milhões de trabalhadores. Estabelecemos a Política Nacional de Cuidados para apoiar as mulheres, expandimos o PADI Brasil (atenção ao idoso) e aceleramos a titulação quilombola.",
    iconName: "HeartHandshake",
    pageRange: "Págs. 18–26"
  },
  {
    id: 3,
    number: "03",
    title: "Proteger a Vida com uma Segurança Pública Mais Eficiente e Integrada",
    shortDesc: "Criação do Ministério da Segurança Pública com a PEC do SUSP, asfixia financeira do crime organizado e controle rigoroso de armas de fogo.",
    category: "seguranca",
    highlights: [
      "Aprovação da PEC da Segurança Pública e criação do Ministério da Segurança Pública",
      "Lei Antifacção: R$ 35,8 bilhões em prejuízos financeiros causados ao crime organizado",
      "Programa Celular Seguro com mais de 4 milhões de aparelhos protegidos",
      "R$ 10 bilhões do Fundo Nacional de Investimento em Infraestrutura Social (FIIS)",
      "Revogação dos decretos armamentistas e rastreabilidade total de armas e munições",
      "Inteligência tática nas fronteiras e cooperação integrada na Pan-Amazônia"
    ],
    fullDetails: "Segurança é dever do Estado e direito do povo. Diferente da demagogia armamentista do governo anterior que armou milícias e facções, a estratégia do governo Lula alia repressão qualificada, inteligência financeira para desarticular as cúpulas criminosas e presença social do Estado nas periferias com urbanização, iluminação e cultura.",
    iconName: "Shield",
    pageRange: "Págs. 26–30"
  },
  {
    id: 4,
    number: "04",
    title: "Garantir o Direito à Educação para Transformar Vidas",
    shortDesc: "Pé-de-Meia para 7,3 milhões de estudantes, 111 novos Institutos Federais, 3.562 novas creches e alfabetização de 80% das crianças na idade certa.",
    category: "educacao",
    highlights: [
      "Pé-de-Meia beneficiando 7,3 milhões de jovens e combatendo a evasão no Ensino Médio",
      "Compromisso Criança Alfabetizada atingindo 66% na idade certa, rumo a 80%",
      "Expansão dos Institutos Federais (IFs): 111 novos campi em 106 municípios",
      "Recursos do Novo PAC para 3.562 creches e pré-escolas em 2.360 municípios",
      "Pé-de-Meia Licenciatura e valorização contínua do Piso Nacional do Magistério",
      "Nova unidade do ITA no Ceará, Universidade Indígena e Universidade do Esporte"
    ],
    fullDetails: "A educação é a principal ferramenta de mobilidade social e soberania. O governo Lula recompôs os orçamentos universitários, retomou 5.967 obras de creches e escolas abandonadas, democratizou o acesso ao ensino técnico e conectou 75% das escolas com internet de alta velocidade, marchando para a universalização.",
    iconName: "GraduationCap",
    pageRange: "Págs. 30–34"
  },
  {
    id: 5,
    number: "05",
    title: "Fortalecer a Saúde com Equidade, Inovação e Soberania",
    shortDesc: "SUS fortalecido com o programa Agora Tem Especialistas, Farmácia Popular 100% gratuita para 41 remédios essenciais e recuperação histórica da cobertura vacinal.",
    category: "saude",
    highlights: [
      "Agora Tem Especialistas: 15 milhões de cirurgias e 31,4 milhões de consultas em 2025",
      "Farmácia Popular 100% gratuita: 27,3 milhões de pessoas atendidas com 41 remédios e absorventes",
      "Reversão do negacionismo vacinal com avanço em 15 das 16 principais vacinas infantis (reconhecido pelo UNICEF)",
      "Mais Médicos ampliado e focado em áreas vulneráveis e comunidades remotas",
      "Conclusão da fábrica da Hemobrás para autossuficiência em hemoderivados e insulina nacional",
      "Novo PAC da Saúde: 15 hospitais regionais, 101 policlínicas e 2.994 ambulâncias do SAMU"
    ],
    fullDetails: "Após o desastre da gestão anterior que negligenciou a pandemia da Covid-19 e causou mais de 700 mil mortes evitáveis, o SUS foi resgatado. Além de recuperar a confiança nas vacinas, criamos o Prontuário Único do Cidadão, expandimos a telessaúde e implantamos o Supercentro de Telediagnóstico do Câncer.",
    iconName: "Stethoscope",
    pageRange: "Págs. 34–40"
  },
  {
    id: 6,
    number: "06",
    title: "Cultura e Esporte como Vetores de Transformação Social",
    shortDesc: "Recriação do Ministério da Cultura, Lei Paulo Gustavo e Aldir Blanc consolidadas, Bolsa Atleta recorde e Marco Legal dos Games.",
    category: "cultura",
    highlights: [
      "Recriação do Ministério da Cultura (MinC) e Lei do Sistema Nacional de Cultura",
      "Aplicação de R$ 3,6 bilhões no Fundo do Audiovisual e retomada da Cota de Tela",
      "Cultura Viva com 16 mil Pontos e Pontões de Cultura por todo o território",
      "Bolsa Atleta com reajuste histórico e 11 mil atletas contemplados em 2026",
      "Marco Legal dos Games reconhecendo a indústria de jogos com fomento e CBO formal",
      "Copa do Mundo Feminina no Brasil (primeira vez na América do Sul) em 8 capitais"
    ],
    fullDetails: "A cultura foi libertada da perseguição ideológica do mandato anterior. Com investimentos recordes via Leis Rouanet, Aldir Blanc e Paulo Gustavo, a produção artística nacional voltou a gerar empregos. No esporte, garantimos preparação de ponta para os ciclos olímpicos e expandimos as Arenas Brasil no Novo PAC.",
    iconName: "Palette",
    pageRange: "Págs. 40–44"
  },
  {
    id: 7,
    number: "07",
    title: "Fortalecer o Direito à Cidade, Moradia e Mobilidade",
    shortDesc: "Meta ampliada de 3 milhões de moradias no Minha Casa Minha Vida, Periferia Viva e R$ 23,3 bilhões investidos em saneamento básico.",
    category: "cidades",
    highlights: [
      "Minha Casa Minha Vida: meta ampliada para 3 milhões de moradias até o final de 2026",
      "1 milhão de moradias quitadas para beneficiários do Bolsa Família e BPC",
      "Crédito imobiliário ultrapassou a barreira histórica de 10% do PIB brasileiro",
      "Periferia Viva com urbanização de favelas e regularização fundiária",
      "PAC Mobilidade: 233 km de metrôs/trens/VLTs e 296 km de corredores exclusivos BRT",
      "R$ 23,3 bilhões para abastecimento de água e tratamento de esgoto nas periferias"
    ],
    fullDetails: "Recriamos o Ministério das Cidades e retomamos milhares de canteiros de obras parados desde 2014. A moradia digna é tratada como pilar civilizatório: elevamos os padrões construtivos das habitações populares e ampliamos as faixas de renda para alcançar a classe trabalhadora média.",
    iconName: "Home",
    pageRange: "Págs. 44–47"
  },
  {
    id: 8,
    number: "08",
    title: "Economia Mais Sustentável, Produtiva e Digital",
    shortDesc: "Crescimento sustentado em 3% ao ano, retorno ao Top 10 das maiores economias mundiais, Nova Indústria Brasil (NIB) e Reforma Tributária histórica.",
    category: "economia",
    highlights: [
      "Brasil de volta ao grupo das 10 maiores economias do planeta",
      "Menor taxa de desemprego da série histórica e maior renda real do trabalho",
      "Reforma Tributária simplificando 5 impostos em 2 (IBS e CBS) com cesta básica isenta e cashback",
      "Nova Indústria Brasil (NIB) mobilizando R$ 860 bilhões em investimentos produtivos",
      "Plano Mais Produção acelerando a neoindustrialização verde e tecnologias de ponta",
      "Desenrola Brasil liberando milhões de famílias e pequenos negócios do endividamento"
    ],
    fullDetails: "Derrubamos o mito de que responsabilidade fiscal e responsabilidade social não convivem. Com o Novo Arcabouço Fiscal e cortes de privilégios para os super-ricos, reduzimos o déficit primário, controlamos a inflação abaixo da média da América Latina e reativamos os investimentos do setor produtivo.",
    iconName: "TrendingUp",
    pageRange: "Págs. 47–58"
  },
  {
    id: 9,
    number: "09",
    title: "Segurança Alimentar e Produção Agrícola Sustentável",
    shortDesc: "Brasil fora do Mapa da Fome da ONU, Plano Safra da Agricultura Familiar recorde e compras públicas da merenda escolar direto do pequeno produtor.",
    category: "agricultura",
    highlights: [
      "Saída oficial do Brasil do Mapa da Fome da ONU e menor insegurança alimentar da história",
      "Plano Safra da Agricultura Familiar com recorde absoluto de recursos e juros baixos",
      "Merenda escolar: 45% dos alimentos adquiridos diretamente da agricultura familiar e 80% in natura",
      "Retomada dos estoques reguladores da Conab para conter a inflação de alimentos",
      "Abertura de 656 novos mercados internacionais para o agronegócio e pecuária brasileira",
      "Liderança da Aliança Global contra a Fome e a Pobreza no G20 e na ONU"
    ],
    fullDetails: "Recebemos o Brasil na fila do osso e devolvemos a comida farta ao prato do trabalhador. Aliamos o apoio técnico e de crédito à agricultura familiar agroecológica à potência exportadora do agro moderno, investindo em biotecnologia da Embrapa e recuperação de pastagens degradadas.",
    iconName: "Utensils",
    pageRange: "Págs. 58–63"
  },
  {
    id: 10,
    number: "10",
    title: "Segurança Energética e Liderança na Transição Ecológica",
    shortDesc: "89% da matriz elétrica em fontes renováveis, Lei do Combustível do Futuro, Marco Legal do Hidrogênio Verde e Tarifa Social ampliada.",
    category: "energia",
    highlights: [
      "Brasil com 89% da matriz elétrica renovável (frente a 31% na média dos países da OCDE)",
      "Lei do Combustível do Futuro e Marco Legal do Hidrogênio de Baixa Emissão de Carbono",
      "Novo PAC Energia: R$ 595 bilhões em investimentos de geração e transmissão",
      "Programa Gás do Povo garantindo recarga gratuita de botijão para 15 milhões de famílias",
      "Retomada da indústria naval brasileira com 70 mil empregos e encomendas da Petrobras",
      "Programa Luz do Povo com conta de luz gratuita até 80 kWh/mês para 60 milhões de pessoas"
    ],
    fullDetails: "A transição energética brasileira é um vetor de soberania e geração de empregos qualificados. Conectamos Roraima ao Sistema Interligado Nacional, acabamos com o isolamento energético histórico e posicionamos a Petrobras como motor da transição para combustíveis de baixo carbono.",
    iconName: "Zap",
    pageRange: "Págs. 63–69"
  },
  {
    id: 11,
    number: "11",
    title: "Sustentabilidade Ambiental, Proteção dos Biomas e Clima",
    shortDesc: "Menor taxa de desmatamento da história da Amazônia, liderança na COP30 em Belém, Fundo Clima de R$ 179 bilhões e proteção aos direitos animais.",
    category: "meio-ambiente",
    highlights: [
      "Menor taxa de desmatamento da história recente da Amazônia Legal",
      "Presidência da COP30 em Belém e lançamento do Fundo Florestas Tropicais para Sempre (TFFF)",
      "Mobilização de R$ 179 bilhões pelo Fundo Clima e Eco Invest Brasil",
      "Nova meta climática (NDC) de reduzir de 59% a 67% das emissões líquidas de GEE até 2035",
      "Inédito Departamento de Direitos Animais, Lei do RG Animal e Programa ProPatinhas",
      "R$ 15 bilhões em segurança hídrica e expansão de 172 mil cisternas no Semiárido"
    ],
    fullDetails: "Após quatro anos de desmonte deliberado e queimadas recordes sob a gestão anterior, o Brasil restabeleceu a fiscalização do Ibama e ICMBio. O país voltou a ser referência internacional no combate ao aquecimento global, provando que é possível produzir sem desmatar.",
    iconName: "Leaf",
    pageRange: "Págs. 69–73"
  },
  {
    id: 12,
    number: "12",
    title: "Valorizar o Trabalho, Renda e Fim da Escala 6x1",
    shortDesc: "8 milhões de novos empregos criados, aumento real anual do salário mínimo, luta pelo fim da escala 6x1 e jornada de 40h sem redução salarial.",
    category: "trabalho",
    highlights: [
      "8,0 milhões de novos postos de trabalho formais gerados entre 2023 e 2026",
      "Política permanente de valorização real do salário mínimo acima da inflação",
      "Apoio e mobilização no Congresso pelo Fim da Escala 6x1 e jornada de 40 horas sem redução de salário",
      "Lei da Igualdade Salarial obrigatória entre homens e mulheres na mesma função",
      "Proteção previdenciária e combate à precarização de trabalhadores de aplicativos",
      "Plataforma Pública Nacional de Empregabilidade com Inteligência Artificial no SINE"
    ],
    fullDetails: "O trabalho humano está no centro do projeto nacional de desenvolvimento. Combatemos a pejotização fraudulenta, reestruturamos a fiscalização trabalhista contra trabalho análogo à escravidão e expandimos o crédito acessível para microempreendedores individuais com o Contrata+ Brasil.",
    iconName: "Briefcase",
    pageRange: "Págs. 73–77"
  },
  {
    id: 13,
    number: "13",
    title: "Defender a Soberania Nacional e o Protagonismo Internacional",
    shortDesc: "Diplomacia altiva e ativa, acordos do Mercosul, investimentos estratégicos nas Forças Armadas com o caça Gripen e cargueiro KC-390 brasileiro.",
    category: "soberania",
    highlights: [
      "Brasil anfitrião da COP30, do G20 e da Cúpula dos BRICS com voz ativa e autônoma",
      "Indústria de Defesa Soberana: fabricação de caças Gripen F-39 e aeronaves KC-390 no Brasil",
      "656 novos mercados abertos e conclusão de acordos comerciais com UE, EFTA e Singapura",
      "Defesa inegociável da autodeterminação dos povos e da paz global no Conselho da ONU",
      "Proteção soberana da Amazônia e da Amazônia Azul contra interferências estrangeiras",
      "R$ 20,4 bilhões executados em projetos estratégicos de segurança cibernética e defesa nacional"
    ],
    fullDetails: "O Brasil rompeu definitivamente com o servilismo e o isolamento vexatório internacional do governo anterior. Hoje, nossa política externa dialoga de igual para igual com as principais potências, lidera o Sul Global e defende os interesses do povo trabalhador com dignidade e paz.",
    iconName: "Globe",
    pageRange: "Págs. 77–83"
  }
];

export const COALITION_PARTIES = [
  { name: "PT", fullName: "Partido dos Trabalhadores", color: "bg-red-600 text-white" },
  { name: "PSB", fullName: "Partido Socialista Brasileiro", color: "bg-red-700 text-white" },
  { name: "PV", fullName: "Partido Verde", color: "bg-emerald-600 text-white" },
  { name: "PCdoB", fullName: "Partido Comunista do Brasil", color: "bg-red-800 text-white" },
  { name: "PDT", fullName: "Partido Democrático Trabalhista", color: "bg-blue-600 text-white" },
  { name: "PSOL", fullName: "Partido Socialismo e Liberdade", color: "bg-yellow-500 text-slate-900" },
  { name: "Rede", fullName: "Rede Sustentabilidade", color: "bg-teal-600 text-white" }
];
