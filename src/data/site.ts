export const siteConfig = {
  name: 'Hernani',
  title: 'Engenharia de software e soluções digitais',
  domain: 'https://hernani.dev',
  location: 'Belo Horizonte, Minas Gerais, Brasil',
  locale: 'pt-BR',
  links: {
    contact: '' as string,
    github: 'https://github.com/hernanijr',
  },
} as const;

export const services = [
  {
    number: '01',
    title: 'Sites e presença digital',
    description:
      'Sites institucionais, páginas de campanha e experiências para comunidades e eventos, com conteúdo claro, acessibilidade e uma base técnica preparada para evoluir.',
    examples: ['Sites institucionais', 'Páginas multilíngues', 'SEO técnico e performance'],
  },
  {
    number: '02',
    title: 'Software sob medida',
    description:
      'Aplicações web, painéis administrativos e ferramentas internas que se encaixam nos processos reais do seu negócio — em vez de adaptar o trabalho a uma solução genérica.',
    examples: ['Aplicações web', 'Painéis administrativos', 'Automação de fluxos'],
  },
  {
    number: '03',
    title: 'Back-end e integrações',
    description:
      'APIs, modelagem de dados e integrações para conectar sistemas, organizar informações e sustentar experiências digitais confiáveis.',
    examples: ['APIs REST', 'Integrações entre sistemas', 'Arquitetura e bancos de dados'],
  },
  {
    number: '04',
    title: 'Manutenção e evolução',
    description:
      'Melhorias para aplicações existentes, correções, otimizações de desempenho e acompanhamento técnico para que o produto continue atendendo às necessidades.',
    examples: ['Evolução de aplicações', 'Correções e melhorias técnicas', 'Otimização e manutenção'],
  },
] as const;

export const technologies = [
  {
    name: 'Aplicações e interfaces',
    description: 'Produtos web acessíveis, responsivos e fáceis de usar.',
    tools: ['React', 'Next.js', 'Astro', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Back-end e dados',
    description: 'Serviços, APIs e estruturas de dados para regras de negócio.',
    tools: ['Node.js', 'NestJS', 'APIs REST', 'PostgreSQL', 'MySQL'],
  },
  {
    name: 'Entrega e infraestrutura',
    description: 'Automação de publicação e infraestrutura adequada a cada projeto.',
    tools: ['AWS', 'Docker', 'Cloudflare', 'GitHub Actions', 'CI/CD'],
  },
] as const;

export const processSteps = [
  {
    number: '01',
    title: 'Entender o problema',
    description: 'Alinhamos objetivos, pessoas envolvidas e o que precisa melhorar antes de definir a solução.',
  },
  {
    number: '02',
    title: 'Definir escopo e solução',
    description: 'Escolhemos uma abordagem técnica proporcional ao contexto, com prioridades e entregas claras.',
  },
  {
    number: '03',
    title: 'Desenvolver e validar',
    description: 'Construímos em etapas, revisamos os detalhes e validamos o resultado com quem vai usar.',
  },
  {
    number: '04',
    title: 'Publicar e evoluir',
    description: 'Preparamos a publicação e podemos seguir com melhorias e manutenção conforme a necessidade.',
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
      { label: 'Conteúdo', value: 'Decap Turbo CMS com fluxo editorial' },
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
