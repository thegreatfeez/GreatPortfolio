import cryptoNigeriaImage from './assets/cryptoNigeria2026.png'
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
  pageHref: string
  pageLabel: string
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
  { href: '/audits', label: 'Audits' },
  { href: '/models', label: 'AI Models' },
  { href: '/finance', label: 'Finance' },
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
    pageHref: '/projects',
    pageLabel: 'View projects',
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
    pageHref: '/models',
    pageLabel: 'Page coming soon',
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
    pageHref: '/finance',
    pageLabel: 'View the case study',
  },
]

export const auditPractice: SecurityPractice = {
  label: 'Always sharpening',
  title: 'Security earns its keep as a standing discipline.',
  description:
    "Auditing is not my headline — it is a skill I keep sharp alongside everything else. Reading code for failure paths makes the contracts I ship safer, and the log below is updated every time a round closes.",
  points: [
    'Manual review first, tooling second — Slither and Aderyn support the read, never replace it',
    'Contest reps on CodeHawks and Code4rena to keep the instinct honest',
    'Every finding written up with its failure path and a concrete fix',
  ],
  ctaLabel: 'Open the audit log',
  ctaHref: '/audits',
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

export const auditsPage = {
  eyebrow: 'Audit log',
  title: 'Audits &',
  titleAccent: 'published findings.',
  description:
    'Auditing is a discipline I keep sharp alongside my main work. This is the honest log — every contest submission, what I found, and what it paid. It grows every time a round closes.',
  statusLabel: 'Tracking live',
  summaryLabel: 'Running totals',
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

export type RoadmapStatus = 'in-progress' | 'planned'

export type RoadmapItem = {
  title: string
  description: string
  tags: string[]
  status: RoadmapStatus
}

export type RoadmapPage = {
  eyebrow: string
  title: string
  titleAccent: string
  description: string
  statusLabel: string
  note: string
  items: RoadmapItem[]
  cta: {
    title: string
    description: string
    primary: string
  }
}

export const modelsPage: RoadmapPage = {
  eyebrow: 'AI engineering',
  title: 'Models, experiments &',
  titleAccent: 'things in the oven.',
  description:
    'A home for the AI side of the work — NLP experiments, data pipelines, and the model runs worth showing. Nothing is published here yet because nothing has earned it yet. The first entries land as soon as they are worth your time.',
  statusLabel: 'First entries landing soon',
  note: 'In the meantime, the AI work that already shipped is on the projects page — Aegis commits every AI recommendation on-chain before execution.',
  items: [
    {
      title: 'NLP experiments',
      description:
        'Text classification and sentiment work over market and on-chain commentary, built while working through the AI engineering course.',
      tags: ['Python', 'NLP', 'Classification'],
      status: 'in-progress',
    },
    {
      title: 'Market data pipelines',
      description:
        'Python pipelines that pull, clean, and feature-engineer market data so a model has something honest to learn from.',
      tags: ['Pandas', 'NumPy', 'ETL'],
      status: 'planned',
    },
    {
      title: 'Model notebooks',
      description:
        'Documented training and evaluation runs — dataset, method, results, and where the thing failed. Published alongside the code.',
      tags: ['Notebooks', 'Evaluation'],
      status: 'planned',
    },
  ],
  cta: {
    title: 'Building something in this space?',
    description:
      'If you are working on data or model problems and want another pair of hands, I would like to hear about it.',
    primary: 'Get in touch',
  },
}

export const financePage: RoadmapPage = {
  eyebrow: 'Financial analysis',
  title: 'Dashboards &',
  titleAccent: 'market notes.',
  description:
    'A growing shelf of finance builds — retail crypto flows, exchange-rate economics, and the models behind them. Pick a dashboard to read the case study, or see what is next on the roadmap.',
  statusLabel: '1 dashboard live',
  note: 'Ready before this is: the DeFi protocols on the projects page, which are the same markets in code form.',
  items: [
    {
      title: 'Fundamentals research',
      description:
        'Written analysis of the market fundamentals behind assets and sectors, starting with what the bootcamp covers.',
      tags: ['Market fundamentals', 'Research'],
      status: 'in-progress',
    },
    {
      title: 'Financial models',
      description:
        'Modelling work built from the ground up — statements, assumptions, and the sensitivity around them.',
      tags: ['Modelling', 'Valuation'],
      status: 'planned',
    },
    {
      title: 'Quant experiments',
      description:
        'Signal research and backtests at the intersection of the data work and the market work. The long game.',
      tags: ['Quant', 'Backtesting'],
      status: 'planned',
    },
  ],
  cta: {
    title: 'Have a market question worth digging into?',
    description:
      'I am looking for real problems to sharpen the analysis against — not just textbook exercises.',
    primary: 'Get in touch',
  },
}

export type FinanceMetric = {
  index: string
  value: string
  label: string
  note: string
}

export type FinanceObjective = {
  index: string
  title: string
  description: string
}

export type FinanceStage = {
  index: string
  label: string
  detail: string
}

export type FinanceFinding = {
  figure: string
  label: string
  description: string
}

export type FinanceBuildNote = {
  title: string
  points: string[]
}

export type PlatformRow = {
  platform: string
  fxRate: string
  exchangeRate: string
  spread: string
  fees: string
}

export type FinanceDashboard = {
  id: string
  title: string
  description: string
  image: string
  year: string
  format: string
  tags: string[]
  status: 'live' | 'in-build'
  href: string
}

export type FinanceCaseStudy = {
  id: string
  eyebrow: string
  headline: string
  headlineAccent: string
  title: string
  subtitle: string
  year: string
  statusLabel: string
  summary: string
  previewNote: string
  stack: string[]
  image: string
  imageAlt: string
  fileLabel: string
  linkedinUrl: string
  meta: { label: string; value: string }[]
  metrics: FinanceMetric[]
  brief: { description: string; objectives: FinanceObjective[] }
  pipeline: {
    description: string
    stages: FinanceStage[]
    formula: string
    formulaNote: string
  }
  findings: { description: string; items: FinanceFinding[] }
  platformTable: {
    description: string
    headings: string[]
    rows: PlatformRow[]
    total: PlatformRow
    note: string
  }
  buildNotes: { description: string; notes: FinanceBuildNote[] }
  lesson: { title: string; body: string }
}

export const financeDashboards: FinanceDashboard[] = [
  {
    id: 'CASE-001',
    title: 'Nigeria Crypto 2026',
    description:
      'Retail crypto flows, platform spreads, and state-level volume proxies across 293 transactions — pulled from the CoinGecko API, modelled in Excel, and wired with a currency toggle.',
    image: cryptoNigeriaImage,
    year: '2026',
    format: 'Excel · VBA',
    tags: ['Python', 'Power Query', 'VBA'],
    status: 'live',
    href: '/finance/nigeria-crypto-2026',
  },
]

export const financeCaseStudy: FinanceCaseStudy = {
  id: 'CASE-001',
  eyebrow: 'Financial analysis · Case study 01',
  headline: 'Nigeria Crypto 2026,',
  headlineAccent: 'a retail market in one workbook.',
  title: 'Nigeria Crypto 2026',
  subtitle: 'Interactive transaction dashboard',
  year: '2026',
  statusLabel: 'Complete',
  summary:
    'An end-to-end analytics build tracking retail crypto usage, exchange rates, platform spreads, and regional volume proxies in Nigeria across 293 transactions worth ₦95.6M.',
  previewNote:
    'This is a static preview of the Excel build. The LinkedIn post covers the build and the VBA currency toggle in more detail.',
  stack: ['Python', 'pandas', 'CoinGecko API', 'Power Query', 'Excel', 'VBA', 'PowerPoint'],
  image: cryptoNigeriaImage,
  imageAlt:
    'Nigeria Crypto 2026 dashboard in Excel showing ₦95,588,289.57 total amount, ₦773,922.97 total fees, 293 transactions, asset allocation, transaction types, state breakdown, and a platform summary table',
  fileLabel: 'nigeria_crypto_2026.xlsm',
  linkedinUrl: 'https://lnkd.in/p/eBGfVeGu',
  meta: [
    { label: 'Role', value: 'Data, model, UI — solo build' },
    { label: 'Tools', value: 'Python · Excel · Power Query · VBA' },
    { label: 'Data source', value: 'CoinGecko API + fiat rates' },
    { label: 'Scope', value: '5 platforms · 6 states · 4 txn types' },
  ],
  metrics: [
    {
      index: '01',
      value: '₦95.59M',
      label: 'Total transacted',
      note: '₦95,588,289.57 across five platforms and every transaction type in the model.',
    },
    {
      index: '02',
      value: '₦773,922.97',
      label: 'Platform fees',
      note: 'The naira cost of the gap between quoted FX and settled exchange rates.',
    },
    {
      index: '03',
      value: '293',
      label: 'Transactions modelled',
      note: 'P2P buys, P2P sells, direct deposits, and withdrawals.',
    },
    {
      index: '04',
      value: '11.03%',
      label: 'Blended spread',
      note: 'Weighted across Binance P2P, Busha, Bybit, Noones, and Yellow Card.',
    },
  ],
  brief: {
    description:
      'Nigeria does not trade crypto the way global charts imply. Volume moves through P2P desks, mobile money, and a naira that keeps repricing against the dollar. I wanted one view that held all three at once instead of a folder of disconnected screenshots.',
    objectives: [
      {
        index: '01',
        title: 'Pull and structure the market data',
        description:
          'Query CoinGecko for USDT, BTC, and ETH prices, market caps, and 24-hour volume, plus USD→NGN rates, then land it in clean, reusable CSVs.',
      },
      {
        index: '02',
        title: 'Make both currencies first-class',
        description:
          'Build a dashboard where naira and dollars are equally legible — one toggle flips every KPI, chart, and title, with no duplicated worksheets.',
      },
      {
        index: '03',
        title: 'Read the flow, not just the total',
        description:
          'Break volume down by platform, transaction type, and state so the dashboard answers who is moving money, through which rail, and where.',
      },
    ],
  },
  pipeline: {
    description:
      'Six stages separate the raw API response from the workbook an analyst actually clicks. Each hand-off narrows the data and adds a decision.',
    stages: [
      {
        index: '01',
        label: 'CoinGecko API',
        detail:
          'Asset prices, market caps, 24-hour volume, and USD→NGN rates pulled through the public endpoints.',
      },
      {
        index: '02',
        label: 'Python · pandas',
        detail:
          'Requests fetch, pandas reshapes, and the script writes raw CSVs before anything touches a spreadsheet.',
      },
      {
        index: '03',
        label: 'Power Query',
        detail:
          'Timestamp cleanup, type enforcement, and missing values handled once, at import, not by hand later.',
      },
      {
        index: '04',
        label: 'Excel model',
        detail:
          'Named ranges, SUMIFS, and XLOOKUP carry the aggregation behind each card and chart.',
      },
      {
        index: '05',
        label: 'PowerPoint UI',
        detail:
          'Card containers wireframed first, exported as a high-resolution canvas for the workbook background.',
      },
      {
        index: '06',
        label: 'VBA layer',
        detail:
          'Currency toggle, active-button state, and dynamic chart titles turn the model into something usable.',
      },
    ],
    formula: 'Amount_NGN = Amount_USD × Exchange_Rate_NGN',
    formulaNote:
      'Naira values are derived, never typed. Each USD amount is multiplied by the exchange rate held in the model, so a rate update reprices the whole dashboard at once.',
  },
  findings: {
    description:
      'The numbers that changed how I read the market. Stablecoins, not Bitcoin, are the working currency; two commercial centres carry most of the flow; and P2P is the rail, not the alternative.',
    items: [
      {
        figure: '52%',
        label: 'USDT share of volume',
        description:
          'Tether dominates at 52% versus BTC at 30% and ETH at 18%. The demand looks like dollar hedging against naira depreciation, not a directional crypto trade.',
      },
      {
        figure: '39.78%',
        label: 'Lagos share of volume',
        description:
          'Lagos carries nearly two-fifths of all activity, with Abuja (FCT) second at 19.40%. Oyo, Kano, Rivers, Delta, and Enugu trail in single digits.',
      },
      {
        figure: '58%',
        label: 'Volume routed through P2P',
        description:
          'P2P buys and sells outweigh direct deposits and withdrawals combined. The retail flow lives on the desks, which is where the spread economics are set.',
      },
    ],
  },
  platformTable: {
    description:
      'Spread is the distance between the FX rate a platform quotes and the exchange rate it settles at. Across 293 transactions it barely moves — the platforms compete on liquidity, not headline pricing.',
    headings: ['Platform', 'FX rate', 'Exchange rate', 'Spread', 'Fees'],
    rows: [
      {
        platform: 'Binance P2P',
        fxRate: '₦1,350.98',
        exchangeRate: '₦1,498.46',
        spread: '10.92%',
        fees: '₦174,101.25',
      },
      {
        platform: 'Busha',
        fxRate: '₦1,350.49',
        exchangeRate: '₦1,498.29',
        spread: '10.94%',
        fees: '₦150,658.15',
      },
      {
        platform: 'Bybit',
        fxRate: '₦1,351.83',
        exchangeRate: '₦1,499.26',
        spread: '10.91%',
        fees: '₦132,634.25',
      },
      {
        platform: 'Noones',
        fxRate: '₦1,351.10',
        exchangeRate: '₦1,505.80',
        spread: '11.45%',
        fees: '₦136,200.44',
      },
      {
        platform: 'Yellow Card',
        fxRate: '₦1,351.19',
        exchangeRate: '₦1,499.60',
        spread: '10.98%',
        fees: '₦180,328.88',
      },
    ],
    total: {
      platform: 'All platforms',
      fxRate: '₦1,351.09',
      exchangeRate: '₦1,500.16',
      spread: '11.03%',
      fees: '₦773,922.97',
    },
    note: 'Noones quotes the widest spread at 11.45% and Yellow Card collects the largest fee total, but every desk sits within half a point of the blended rate.',
  },
  buildNotes: {
    description:
      'Two decisions did most of the work: designing the layout before opening Excel, and treating the currency switch as a product feature rather than a formula.',
    notes: [
      {
        title: 'UI first, spreadsheet second',
        points: [
          'Card containers were wireframed in PowerPoint before a single chart was placed.',
          'The finished template was exported as a background canvas, so charts sat inside a designed grid instead of on raw cells.',
          'A state map lost to a ranked horizontal bar chart — six states read faster as bars than as shapes.',
        ],
      },
      {
        title: 'VBA as the interactive layer',
        points: [
          'One macro toggles every card and chart between naira and dollars.',
          'Event-driven fill changes give the active currency button a real pressed state.',
          'Chart titles rewrite themselves, so a screenshot never lies about its currency.',
        ],
      },
    ],
  },
  lesson: {
    title: 'A crash at 40%, and a cleaner second build.',
    body: 'A system crash wiped roughly 40% of the first dashboard. Rebuilding it became active recall: the second pass finished in a fraction of the time, with named ranges, tidier macro logic, and a layout I could defend. The lost file was annoying. The rebuilt one was better.',
  },
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
