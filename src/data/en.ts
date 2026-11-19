import type { Locale } from './i18n';

export const englishContent = {
  locale: 'en' as Locale,
  metadata: {
    homeTitle: 'Hernani Junior — Software Engineer | Backend, APIs & Integrations',
    homeDescription:
      'Software engineer based in Belo Horizonte, Brazil, focused on backend development, APIs, system integration, and reliable applications. Node.js, TypeScript, and NestJS.',
    writingTitle: 'Writing | Hernani Junior — Software Engineering',
    writingDescription:
      'Articles, investigations, and lessons about software engineering, backend development, APIs, and system integration.',
    socialImageAlt:
      'Hernani Junior — software engineer focused on backend development, APIs, and system integration.',
  },
  navigation: {
    label: 'Main navigation',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    writing: 'Writing',
    stack: 'Stack',
    contact: 'Contact',
    language: 'PT',
    languageLabel: 'Read this website in Portuguese',
  },
  footer: {
    tagline: 'Software engineer focused on backend development, APIs, and system integration.',
    allRightsReserved: 'All rights reserved.',
    backToTop: 'Back to top',
  },
  home: {
    heroEyebrow: 'SOFTWARE ENGINEER · BELO HORIZONTE, BRAZIL',
    heroTitle: 'Software engineering focused on ',
    heroEmphasis: 'backend, APIs, and integrations.',
    heroDescription:
      'I build and evolve services, applications, and integrations, with a focus on reliability, code quality, and the operation of software systems.',
    viewProjects: 'View projects',
    professionalContact: 'Professional contact',
    visualHeading: 'SOFTWARE ENGINEERING',
    visualNote: 'Backend, integration\nand continuous improvement.',
    scrollLabel: 'A LITTLE ABOUT ME',
    aboutEyebrow: 'SOFTWARE ENGINEER · BACKEND AND FULL-STACK',
    aboutTitle: 'Building systems that connect ',
    aboutEmphasis: 'services, data, and people.',
    aboutParagraphs: [
      'I’m Hernani, a software engineer based in Belo Horizonte, Brazil, focused on backend development, APIs, and system integration. I mainly work with Node.js, TypeScript, and NestJS.',
      'Throughout my career, I have worked on corporate applications, asynchronous processing, integrations, observability, and the evolution of production systems. I also have full-stack experience with React and Next.js.',
    ],
    experienceLabel: 'PROFESSIONAL EXPERIENCE',
    experienceEyebrow: 'CAREER',
    experienceTitle: 'Experience across different software engineering contexts.',
    experienceIntro:
      'Professional work in application and service development, with a backend focus and complementary frontend experience.',
    currentRole: 'Software Engineer',
    currentPeriod: 'December 2025 — present',
    currentDescription:
      'Development and evolution of corporate solutions, primarily focused on backend work with contributions to full-stack initiatives. Building and maintaining services, APIs, and integrations with Node.js, TypeScript, and NestJS, alongside contributions to React applications.',
    technologiesUsed: 'Technologies used',
    previousExperience: 'PREVIOUS EXPERIENCE',
    expertiseLabel: 'AREAS OF EXPERTISE',
    expertiseEyebrow: 'TECHNICAL FOCUS',
    expertiseTitle:
      'Backend as a foundation. Integration and reliability as part of the work.',
    expertiseIntro:
      'An engineering perspective that considers contracts, data, operations, and maintainability — not just feature implementation.',
    expertiseAreas: [
      {
        title: 'Backend and APIs',
        description:
          'Building and evolving services, APIs, and business rules with attention to clear contracts, maintainability, and code quality.',
        examples: ['Node.js', 'TypeScript', 'NestJS', 'Express', 'REST APIs'],
      },
      {
        title: 'Integrations and distributed systems',
        description:
          'Connecting applications and platforms, asynchronous processing, and resilient workflows that help keep systems consistent.',
        examples: ['System integration', 'Queues and jobs', 'Idempotency', 'Retries and DLQs'],
      },
      {
        title: 'Data, reliability, and operations',
        description:
          'Data modeling and persistence, observability, and practices that help diagnose issues and evolve production applications.',
        examples: ['SQL and NoSQL', 'Observability', 'Automated testing', 'CI/CD'],
      },
    ],
    projectsLabel: 'FEATURED PROJECT',
    projectsEyebrow: 'REAL PROJECT, TECHNICAL DECISIONS',
    projectsTitle: 'A look at applied software engineering.',
    projectsIntro:
      'A case study covering requirements, implementation decisions, editorial workflows, and product delivery.',
    project: {
      name: 'Talk BH',
      eyebrow: 'FEATURED PROJECT · COMMUNITY',
      summary:
        'An independent community in Belo Horizonte organizes in-person meetups for English conversation. I built and maintain the website that presents the community and its events.',
      challenge:
        'The organizers needed to update information and content without relying on direct code changes to the website.',
      approach:
        'I built a responsive, bilingual experience with an independent editorial workflow, allowing organizers to manage content while keeping the public website fast and statically generated.',
      details: [
        { label: 'Interface', value: 'Astro, TypeScript, and Tailwind CSS' },
        { label: 'Content', value: 'Decap CMS and editorial workflow' },
        { label: 'Infrastructure', value: 'Cloudflare Workers and Static Assets' },
        { label: 'Delivery', value: 'GitHub Actions and CI/CD' },
      ],
      engineering:
        'Static generation keeps public content straightforward to serve. The CMS separates content editing from application code, while publication goes through GitHub reviews before reaching production.',
      craftsmanship:
        'The work also includes self-hosted fonts, responsive images, technical SEO, structured data, accessibility, and performance improvements.',
      contribution:
        'The community and its organizers define the meetups and provide the information and photographs. My contribution is the website development and the technical maintenance of its infrastructure.',
      website: 'https://talk.bh/',
      repository: 'https://github.com/hernanijr/talkbh',
    },
    technologyLabel: 'STACK AND PRACTICES',
    technologyEyebrow: 'TOOLS AND FUNDAMENTALS',
    technologyTitle: 'Technology chosen to fit the problem.',
    technologyIntro:
      'The focus is on building understandable, testable, and operable solutions using tools that fit each context.',
    technologies: [
      {
        name: 'Backend and APIs',
        description: 'Services, contracts, and business rules.',
        tools: ['Node.js', 'TypeScript', 'NestJS', 'Express', 'REST APIs'],
      },
      {
        name: 'Data and processing',
        description: 'Persistence, messaging, and asynchronous execution.',
        tools: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'BullMQ', 'Kafka'],
      },
      {
        name: 'Cloud and delivery',
        description: 'Infrastructure, automation, and deployment.',
        tools: ['AWS', 'Docker', 'ArgoCD', 'Helm', 'GitHub Actions', 'Cloudflare Workers'],
      },
      {
        name: 'Quality and observability',
        description: 'Practices to validate behavior and operate systems.',
        tools: ['Jest', 'OpenTelemetry', 'Grafana', 'Prometheus', 'Sentry', 'Kibana'],
      },
      {
        name: 'Complementary frontend',
        description: 'Experience building interfaces and complete web applications.',
        tools: ['React', 'Next.js', 'Astro', 'Tailwind CSS'],
      },
    ],
    contactLabel: 'PROFESSIONAL CONTACT',
    contactEyebrow: 'CONVERSATIONS ABOUT ENGINEERING',
    contactTitle: 'Let’s talk about ',
    contactEmphasis: 'software and technology.',
    contactDescription:
      'Open to conversations about software engineering opportunities, technical challenges, and knowledge sharing with others in the field.',
    sendEmail: 'Send an email',
    location: 'Based in',
    locationValue: 'Belo Horizonte, MG, Brazil',
  },
  writing: {
    sectionLabel: 'ARTICLES AND NOTES',
    eyebrow: 'TECHNICAL WRITING',
    title: 'Writing',
    intro:
      'Investigations, lessons, and ideas about software engineering. Writing based on studies, experience, and problems worth understanding in depth.',
    emptyEyebrow: 'IN PROGRESS, WITHOUT RUSH',
    emptyTitle: 'Good ideas need time to mature.',
    emptyDescription:
      'Articles will be published when they are ready. There is no publishing schedule: the priority is to document useful lessons, investigations, and technical decisions with context.',
    connect: 'Connect on LinkedIn or GitHub',
    backToWriting: 'Back to Writing',
    publishedOn: 'Published on',
    readTime: 'min read',
    updatedOn: 'Updated on',
    topics: 'Article topics',
    allArticles: 'All articles',
    professionalContact: 'Professional contact',
  },
} as const;
