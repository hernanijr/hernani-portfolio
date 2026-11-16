export const siteConfig = {
  name: 'Hernani Junior',
  title: 'Engenheiro de Software | Backend, APIs e Integrações',
  domain: 'https://hernani.dev',
  location: 'Belo Horizonte, Minas Gerais, Brasil',
  locale: 'pt-BR',
  links: {
    contact: 'mailto:hernani.junior13@gmail.com?subject=Contato%20profissional',
    email: 'mailto:hernani.junior13@gmail.com',
    linkedin: 'https://www.linkedin.com/in/hernanivieirajr/',
    github: 'https://github.com/hernanijr',
  },
} as const;

export const expertiseAreas = [
  {
    number: '01',
    title: 'Backend e APIs',
    description:
      'Desenvolvimento e evolução de serviços, APIs e regras de negócio com atenção a contratos claros, manutenção e qualidade de código.',
    examples: ['Node.js', 'TypeScript', 'NestJS', 'Express', 'APIs REST'],
  },
  {
    number: '02',
    title: 'Integrações e sistemas distribuídos',
    description:
      'Conexão entre aplicações e plataformas, processamento assíncrono e fluxos resilientes para manter os sistemas consistentes.',
    examples: ['Integração entre sistemas', 'Filas e jobs', 'Idempotência', 'Retries e DLQ'],
  },
  {
    number: '03',
    title: 'Dados, confiabilidade e operação',
    description:
      'Modelagem e persistência de dados, observabilidade e práticas que ajudam a diagnosticar problemas e evoluir aplicações em produção.',
    examples: ['SQL e NoSQL', 'Observabilidade', 'Testes automatizados', 'CI/CD'],
  },
] as const;

export const technologies = [
  {
    name: 'Backend e APIs',
    description: 'Serviços, contratos e regras de negócio.',
    tools: ['Node.js', 'TypeScript', 'NestJS', 'Express', 'REST APIs'],
  },
  {
    name: 'Dados e processamento',
    description: 'Persistência, mensageria e execução assíncrona.',
    tools: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'BullMQ', 'Kafka'],
  },
  {
    name: 'Cloud e entrega',
    description: 'Infraestrutura, automação e publicação.',
    tools: ['AWS', 'Docker', 'ArgoCD', 'Helm', 'GitHub Actions', 'Cloudflare Workers'],
  },
  {
    name: 'Qualidade e observabilidade',
    description: 'Práticas para validar comportamento e operar sistemas.',
    tools: ['Jest', 'OpenTelemetry', 'Grafana', 'Prometheus', 'Sentry', 'Kibana'],
  },
  {
    name: 'Frontend complementar',
    description: 'Experiência construindo interfaces e aplicações web completas.',
    tools: ['React', 'Next.js', 'Astro', 'Tailwind CSS'],
  },
] as const;

export const projects = [
  {
    name: 'Talk BH',
    eyebrow: 'PROJETO EM DESTAQUE · COMUNIDADE',
    summary:
      'Uma comunidade independente em Belo Horizonte organiza encontros presenciais para conversar em inglês. Desenvolvi e mantenho o site que apresenta a comunidade e seus encontros.',
    challenge:
      'Os organizadores precisavam atualizar informações e conteúdo sem depender de mudanças diretas no código do site.',
    approach:
      'Estruturei uma experiência bilíngue e responsiva com um fluxo editorial independente, para que os organizadores gerenciem conteúdo enquanto o site permanece rápido e estático.',
    details: [
      { label: 'Interface', value: 'Astro, TypeScript e Tailwind CSS' },
      { label: 'Conteúdo', value: 'Decap CMS com fluxo editorial' },
      { label: 'Infraestrutura', value: 'Cloudflare Workers e Static Assets' },
      { label: 'Entrega', value: 'GitHub Actions e CI/CD' },
    ],
    engineering:
      'A geração estática mantém o conteúdo público simples de servir; o CMS separa a edição do código, e o fluxo de publicação passa por revisões no GitHub antes de chegar à produção.',
    craftsmanship:
      'O trabalho também inclui hospedagem local de fontes, imagens responsivas, SEO técnico, dados estruturados, acessibilidade e melhorias de desempenho.',
    contribution:
      'A comunidade e seus organizadores definem os encontros e fornecem as informações e fotografias. Minha contribuição é o desenvolvimento e a manutenção técnica do site e de sua infraestrutura.',
    website: 'https://talk.bh/',
    repository: 'https://github.com/hernanijr/talkbh',
  },
] as const;

export const experiments = [
  {
    name: 'Bom Dia Pra Quem',
    status: 'Protótipo',
    summary:
      'Experimento com geração de conteúdo assistida por LLM e integração de APIs externas, combinando coleta de dados e processamento com modelos de linguagem.',
    stack: ['Next.js', 'OpenAI API', 'Supabase', 'X API'],
    repository: 'https://github.com/hernanijr/bomdiapraquem',
  },
  {
    name: 'Cortex',
    status: 'Protótipo full-stack',
    summary:
      'Aplicação de produtividade explorando organização de tarefas, projetos, áreas e notas, com frontend React e API própria.',
    stack: ['Next.js', 'React', 'NestJS', 'Prisma', 'PostgreSQL'],
    repository: 'https://github.com/hernanijr/cortex-frontend',
    backendRepository: 'https://github.com/hernanijr/cortex-backend',
  },
  {
    name: 'Homebroker',
    status: 'Experimento de sistemas',
    summary:
      'Experimento em Go e Kafka para explorar livro de ofertas em memória, matching de ordens, processamento concorrente e execução parcial.',
    stack: ['Go', 'Kafka', 'Concorrência', 'Order book'],
    repository: 'https://github.com/hernanijr/homebroker',
  },
] as const;
