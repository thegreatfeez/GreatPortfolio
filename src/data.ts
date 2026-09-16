import aegisImage from './assets/img/aegis.png'
import avatarImage from './assets/img/avatar.jpg'
import cryptoQuizImage from './assets/img/cryptoQuiz.png'
import gafImage from './assets/img/gaf.png'
import lumeLinkImage from './assets/img/lumlink.png'
import nairaStableImage from './assets/img/nairastable.png'
import prismImage from './assets/img/prism.png'

export type NavLink = {
  href: string
  label: string
}

export type DisciplineStatusTone = 'active' | 'progress'

export type Discipline = {
  id: string
  index: string
  kicker: string
  title: string
  description: string
  stack: string[]
  status: string
  statusTone: DisciplineStatusTone
  icon: 'contract' | 'cpu' | 'chart'
}

export type LearningTrack = {
  title: string
  provider: string
  detail: string
  tags: string[]
  horizon: string
}

export type SecurityPractice = {
  label: string
  title: string
  description: string
  points: string[]
  ctaLabel: string
  ctaHref: string
}

export type Project = {
  title: string
  description: string
  tags: string[]
  image: string
  liveLink: string
  codeLink: string
}

export type AuditComplexity = 'high' | 'medium' | 'low'

export type AuditEntry = {
  name: string
  category: string
  complexity: AuditComplexity
  findings: string
  reward: string
  actionLabel: string
  actionUrl: string
  icon: 'token' | 'diamond' | 'lock' | 'grid'
  iconUrl?: string
}

export type AuditHighlight = {
  title: string
  description: string
  icon: 'verified' | 'terminal' | 'shield'
}

export type ProjectStatusTone = 'primary' | 'tertiary' | 'error'

export type ProjectStatus = {
  label: string
  tone: ProjectStatusTone
}

export type FeaturedProject = {
  id: string
  name: string
  description: string
  tags: string[]
  status: ProjectStatus
  icon: 'code' | 'bank' | 'security' | 'hub'
  codeLink: string
  liveLink: string
  image: string
}

export type FooterLink = {
  href: string
  label: string
  external?: boolean
  icon: 'github' | 'linkedin' | 'x' | 'tiktok' | 'instagram'
}

export const site = {
  name: 'Adams Afeez',
  role: 'Web3 Developer · AI Engineering · Financial Analysis',
  headline: "Hey, I'm Adams Afeez",
  headlineAccent: 'I build at the intersection of web3, AI, and finance.',
  summary:
    "Blockchain developer expanding into AI engineering and financial analysis. I ship production-ready EVM smart contracts, and I'm using Python to explore natural language processing, data manipulation, and market fundamentals — converting algorithms into market logic.",
  ctaPrimary: 'View Projects',
  ctaSecondary: 'Get in Touch',
  copyrightSuffix: 'Adams Afeez. Crafted with care.',
  profileImage: avatarImage,
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/security', label: 'Security' },
]

export const tickerItems: string[] = [
  'Solidity & EVM',
  'AI Engineering',
  'Financial Analysis',
  'Natural Language Processing',
  'Market Fundamentals',
  'Data-Driven Systems',
  'Smart Contract Security',
]

export const disciplinesHeading = {
  eyebrow: 'Three disciplines',
  title: 'Where I am, and where I am heading.',
  description:
    'One core practice I ship with every week, and two I am actively building toward — all of it pointed at the same target: intelligent, data-driven systems.',
}

export const disciplines: Discipline[] = [
  {
    id: 'contracts',
    index: '01',
    kicker: 'Core practice',
    title: 'Smart Contracts & Web3',
    description:
      'Production-ready Solidity and EVM systems — DeFi primitives, fully on-chain game assets, and full-stack Web3 products shipped end to end.',
    stack: ['Solidity', 'Foundry', 'Arbitrum', 'Base', 'Chainlink', 'React'],
    status: 'Shipping',
    statusTone: 'active',
    icon: 'contract',
  },
  {
    id: 'ai',
    index: '02',
    kicker: 'Expanding into',
    title: 'AI Engineering',
    description:
      'Using Python to build data manipulation pipelines and NLP tooling, with an emphasis on systems that earn their place rather than demo-ware.',
    stack: ['Python', 'Pandas', 'NumPy', 'NLP basics', 'Jupyter', 'LLM workflows'],
    status: 'In progress',
    statusTone: 'progress',
    icon: 'cpu',
  },
  {
    id: 'finance',
    index: '03',
    kicker: 'Expanding into',
    title: 'Financial Analysis',
    description:
      'Studying market fundamentals and financial modelling on a path toward quantitative systems — where algorithms meet market logic.',
    stack: ['Market fundamentals', 'Financial modelling', 'Data analysis', 'Quant foundations'],
    status: 'In progress',
    statusTone: 'progress',
    icon: 'chart',
  },
]

export const securityPractice: SecurityPractice = {
  label: 'Always sharpening',
  title: 'Security earns its keep as a standing discipline.',
  description:
    "Auditing is not my headline — it is a skill I keep sharp alongside everything else. Reading code for failure paths makes the contracts I ship safer, and it is a practice I am happy to keep doing indefinitely.",
  points: [
    'Manual review first, tooling second — Slither and Aderyn support the read, never replace it',
    'Contest reps on CodeHawks and Code4rena to keep the instinct honest',
    'Every finding written up with its failure path and a concrete fix',
  ],
  ctaLabel: 'See the audit log',
  ctaHref: '/security',
}

export const learningHeading = {
  eyebrow: 'Currently learning',
  title: 'In the middle of a deliberate rebuild.',
  description:
    'Three tracks running at once — an AI engineering course, a financial analyst bootcamp, and a longer road toward quantitative finance.',
}

export const learningTracks: LearningTrack[] = [
  {
    title: 'AI Engineering',
    provider: 'Udemy',
    detail:
      'Deepening Python fundamentals and applying them to NLP, data manipulation, and model-driven workflows.',
    tags: ['Python', 'NLP', 'Data pipelines'],
    horizon: 'Running now',
  },
  {
    title: 'Financial Analyst Bootcamp',
    provider: '6-week intensive',
    detail:
      'Market fundamentals, statement analysis, and the modelling habits behind sound financial judgement.',
    tags: ['Financial analysis', 'Modelling', 'Market fundamentals'],
    horizon: 'Running now',
  },
  {
    title: 'Quant Finance & Financial Engineering',
    provider: 'Long-term path',
    detail:
      'Where the two tracks converge — quantitative systems, market logic, and data-driven strategy.',
    tags: ['Quant', 'Financial engineering'],
    horizon: 'Next',
  },
]

export const spotlight = {
  title: 'Selected work',
  description:
    'A handful of shipped products across DeFi, on-chain games, and creator tooling.',
  ctaLabel: 'All projects',
  ctaHref: '/projects',
}

export const projects: Project[] = [
  {
    title: 'NairaStable (nNGN)',
    description:
      'An over-collateralized stablecoin pegged 1:1 to the Nigerian Naira, built on Arbitrum with ETH-backed vaults and automatic liquidations.',
    tags: ['#Solidity', '#Arbitrum', '#DeFi'],
    image: nairaStableImage,
    liveLink: 'https://n-ngn.vercel.app',
    codeLink: 'https://github.com/thegreatfeez/nNGN',
  },
  {
    title: 'Crypto Quiz Quest',
    description:
      'A crypto trivia game that mints real $IQX ERC-20 tokens and on-chain generated SVG NFT badges as rewards.',
    tags: ['#Solidity', '#React', '#NFT'],
    image: cryptoQuizImage,
    liveLink: 'https://crypto-quiz-lake.vercel.app',
    codeLink: 'https://github.com/thegreatfeez/Crypto-quiz',
  },
  {
    title: 'LumeLink',
    description:
      'A decentralized creator subscription platform powered by Base and Chainlink VRF.',
    tags: ['#Web3', '#Solidity', '#Base'],
    image: lumeLinkImage,
    liveLink: 'https://lumlnk.netlify.app/',
    codeLink: 'https://github.com/thegreatfeez/LumeLink',
  },
]

export const footerLinks: FooterLink[] = [
  {
    href: 'https://github.com/thegreatfeez',
    label: 'GitHub',
    external: true,
    icon: 'github',
  },
  {
    href: 'https://www.linkedin.com/in/thegreatfeez/',
    label: 'LinkedIn',
    external: true,
    icon: 'linkedin',
  },
  { href: 'https://x.com/thegreatfeez', label: 'X', external: true, icon: 'x' },
  {
    href: 'https://www.tiktok.com/@thegreatfeez',
    label: 'TikTok',
    external: true,
    icon: 'tiktok',
  },
  {
    href: 'https://www.instagram.com/thegreatfeez/',
    label: 'Instagram',
    external: true,
    icon: 'instagram',
  },
]

export const contact = {
  eyebrow: 'Open to',
  title: 'Smart contract work, data problems, and anything at the seam.',
  description:
    'I am open to Web3 engineering roles, AI and data collaborations, and freelance builds. If it sits between code and markets, I want to hear about it.',
  email: 'adamsafeez4@gmail.com',
}

export const securityPage = {
  eyebrow: 'Security track',
  title: 'Security practice &',
  titleAccent: 'published findings.',
  description:
    'Auditing is a discipline I keep sharp alongside my main work. This is the honest log — contest submissions, findings, and what they paid.',
  statusLabel: 'Always sharpening',
  tableHeadings: ['Project Name', 'Complexity', 'Key Findings', 'Reward', 'Action'],
  audits: [
    {
      name: 'Raisebox Faucet',
      category: 'CodeHawks First Flight',
      complexity: 'low',
      findings: '2 findings submitted',
      reward: '200 EXP',
      actionLabel: 'View Report',
      actionUrl: 'https://github.com/thegreatfeez/my-audit-report/blob/main/report.pdf',
      icon: 'token',
    },
    {
      name: 'Monetrix',
      category: 'Code4rena',
      complexity: 'medium',
      findings: '1 submission',
      reward: '$0',
      actionLabel: 'View Submission',
      actionUrl: 'https://code4rena.com/audits/2026-04-monetrix/submissions/S-468',
      icon: 'diamond',
    },
    {
      name: '0xMarkets Audit Contest',
      category: 'HackenProof',
      complexity: 'medium',
      findings:
        'Uncapped pool deployment ratio leaves queued withdrawals permanently stranded',
      reward: '$21.10',
      actionLabel: 'View Report',
      actionUrl: 'https://dashboard.hackenproof.com/user/reports/ZEROMARK-1106',
      icon: 'lock',
    },
    {
      name: '0xMarkets Audit Contest',
      category: 'HackenProof',
      complexity: 'high',
      findings:
        'Decimal mismatch in _totalValueLocked corrupts all share pricing after first pool deployment',
      reward: '$0.01',
      actionLabel: 'View Report',
      actionUrl: 'https://dashboard.hackenproof.com/user/reports/ZEROMARK-797',
      icon: 'grid',
    },
  ] as AuditEntry[],
  highlights: [
    {
      title: 'Manual first',
      description:
        'Every review starts with reading the code line by line. Static analysis and fuzzing come after it, never instead of it.',
      icon: 'terminal',
    },
    {
      title: 'Root cause, not symptoms',
      description:
        'Findings are written up with the failure path and a concrete fix, so the patch is obvious and the lesson sticks.',
      icon: 'verified',
    },
    {
      title: 'Compounding reps',
      description:
        'Contests and first flights are how the instinct stays sharp. Every round feeds straight back into how I build.',
      icon: 'shield',
    },
  ] as AuditHighlight[],
}

export const projectsPage = {
  eyebrow: 'Portfolio',
  title: 'Shipped products &',
  titleAccent: 'protocol experiments.',
  description:
    'Work across smart contract engineering, on-chain systems, and AI-adjacent tooling — every one of them deployed and clickable.',
  projects: [
    {
      id: 'PROJ-001',
      name: 'NairaStable (nNGN)',
      description:
        'An over-collateralized stablecoin pegged 1:1 to the Nigerian Naira, built on Arbitrum. ETH-backed vaults with liquidations at a 150% collateral ratio keep the peg solvent.',
      tags: ['Solidity', 'Arbitrum', 'Foundry', 'DeFi'],
      status: { label: 'Live Demo', tone: 'tertiary' },
      icon: 'bank',
      liveLink: 'https://n-ngn.vercel.app',
      codeLink: 'https://github.com/thegreatfeez/nNGN',
      image: nairaStableImage,
    },
    {
      id: 'PROJ-002',
      name: 'Crypto Quiz Quest',
      description:
        'A crypto trivia game that mints real $IQX ERC-20 tokens and fully on-chain generated SVG NFT badges as rewards for correct answers.',
      tags: ['Solidity', 'React', 'ERC-20', 'On-chain SVG'],
      status: { label: 'Live Demo', tone: 'tertiary' },
      icon: 'code',
      liveLink: 'https://crypto-quiz-lake.vercel.app',
      codeLink: 'https://github.com/thegreatfeez/Crypto-quiz',
      image: cryptoQuizImage,
    },
    {
      id: 'PROJ-003',
      name: 'Prism Protocol',
      description:
        'A fully on-chain gaming asset ecosystem built with the Diamond pattern — every NFT is generated entirely on-chain, with staking and borrowing against game assets.',
      tags: ['Solidity', 'Diamond Pattern', 'NFT', 'HashKey Chain'],
      status: { label: 'Live Demo', tone: 'tertiary' },
      icon: 'hub',
      liveLink: 'https://prism-protocol-nine.vercel.app',
      codeLink: 'https://github.com/thegreatfeez/PRISM_PROTOCOL',
      image: prismImage,
    },
    {
      id: 'PROJ-004',
      name: 'Aegis',
      description:
        'An AI-powered yield strategy protocol on Mantle that commits every AI recommendation on-chain before execution, keeping automated strategies auditable.',
      tags: ['Solidity', 'Mantle', 'AI', 'DeFi'],
      status: { label: 'Live Demo', tone: 'tertiary' },
      icon: 'security',
      liveLink: 'https://aegis-protocol-xi.vercel.app',
      codeLink: 'https://github.com/thegreatfeez/Aegis',
      image: aegisImage,
    },
    {
      id: 'PROJ-005',
      name: 'Gaf Faucet',
      description:
        'A testnet token faucet built during the Web3Bridge Solidity cohort — rate-limited claims that dispense test tokens for local development.',
      tags: ['Solidity', 'Foundry'],
      status: { label: 'Live Demo', tone: 'tertiary' },
      icon: 'code',
      liveLink: 'https://gaffaucet.vercel.app',
      codeLink: 'https://github.com/thegreatfeez/WEB3BRIDGE',
      image: gafImage,
    },
    {
      id: 'PROJ-006',
      name: 'LumeLink',
      description:
        'A decentralized creator subscription platform built on Base with Chainlink VRF and IPFS profiles.',
      tags: ['Solidity', 'Base L2', 'Chainlink', 'React'],
      status: { label: 'Live Demo', tone: 'tertiary' },
      icon: 'hub',
      liveLink: 'https://lumlnk.netlify.app/',
      codeLink: 'https://github.com/thegreatfeez/LumeLink',
      image: lumeLinkImage,
    },
  ] as FeaturedProject[],
  cta: {
    title: "Let's build something that holds up.",
    description:
      'Open to contract work, Web3 and data engineering roles, and product collaborations. Tell me what you are building.',
    primary: 'Start a Project',
    secondary: 'See Live Demos',
  },
}
