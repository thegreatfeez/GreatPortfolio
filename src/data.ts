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

export type Capability = {
  label: string
  value: string
}

export type Project = {
  title: string
  description: string
  tags: string[]
  image: string
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
  role: 'Smart Contract Security Researcher • Full-Stack Developer',
  headline: "Hey, I'm Adams Afeez",
  headlineAccent: 'I build and secure across Web3, Web2, and AI.',
  summary:
    "Smart contract security researcher focused on identifying vulnerabilities in DeFi protocols and EVM-based applications. I bring a builder's intuition to audits, having shipped production-ready smart contracts, full-stack Web2 and Web3 products, and AI-native tools and workflows.",
  ctaPrimary: 'View Projects',
  ctaSecondary: 'Contact Me',
  copyrightSuffix: 'Adams Afeez. Crafted with care.',
  profileImage: avatarImage,
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/audits', label: 'Audits' },
]

export const tickerItems: string[] = [
  'Smart Contract Security',
  'Solidity Development',
  'DeFi Protocols',
  'Web3',
  'Web2',
  'AI-Native Development',
]

export const capabilities: Capability[] = [
  { label: 'Smart Contract Security', value: 'Active' },
  { label: 'Solidity Development', value: 'Builder' },
  { label: 'DeFi Protocols', value: 'Focused' },
]

export const metrics = {
  assetsSecured: 'EVM',
  assetsSecuredLabel: 'Security Focus',
}

export const audits = {
  statusLabel: 'Security Research',
  title: 'Audit-ready mindset',
  description:
    'I’m building audit reps through CodeHawks First Flights and contests, aiming for clear, actionable reports and attacker-minded reasoning. My process is to understand the protocol deeply, map attack surfaces, and communicate fixes with clarity.',
  image: null,
  crossChain: {
    title: 'What I Do',
    description:
      'Manual code review, vulnerability identification, and smart contract development with a security-first approach.',
  },
  aiWorkflow: {
    title: 'AI-Native Workflow',
    items: [
      'Claude Code',
      'ChatGPT',
      'Local LLMs',
      'Prompt & Context Engineering',
      'Workflow Automation',
    ],
  },
}

export const spotlight = {
  title: 'Featured Projects',
  description:
    'A curated selection of my recent work across frontend engineering and Web3.',
}

export const projects: Project[] = [
  {
    title: 'NairaStable (nNGN)',
    description:
      'An over-collateralized stablecoin pegged 1:1 to the Nigerian Naira, built on Arbitrum with ETH-backed vaults and automatic liquidations.',
    tags: ['#Solidity', '#Arbitrum', '#DeFi'],
    image: nairaStableImage,
  },
  {
    title: 'Crypto Quiz Quest',
    description:
      'A crypto trivia game that mints real $IQX ERC-20 tokens and on-chain generated SVG NFT badges as rewards.',
    tags: ['#Solidity', '#React', '#NFT'],
    image: cryptoQuizImage,
  },
  {
    title: 'LumeLink',
    description:
      'A decentralized creator subscription platform powered by Base and Chainlink VRF.',
    tags: ['#Web3', '#Solidity', '#Base'],
    image: lumeLinkImage,
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

export const auditsPage = {
  title: 'Security Audits &',
  titleAccent: 'Vulnerability Assessments.',
  description:
    'Exposing logic flaws and cryptographic weaknesses through rigorous, human-led verification of decentralized systems.',
  networkStatus: 'Network: Mainnet Secure',
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
      title: 'Meticulous Coverage',
      description:
        'Every audit includes a line-by-line manual code review supplemented by formal verification and static analysis tools.',
      icon: 'verified',
    },
    {
      title: 'In-Depth Reporting',
      description:
        "Our reports don't just find bugs; they provide actionable architectural improvements to harden your system against future threats.",
      icon: 'terminal',
    },
    {
      title: 'Long-Term Partnership',
      description:
        'Post-audit support ensures that all remediation steps are correctly implemented through detailed re-testing and certification.',
      icon: 'shield',
    },
  ] as AuditHighlight[],
}

export const projectsPage = {
  versionLabel: 'Portfolio v2.0.4',
  title: 'Featured Web &',
  titleAccent: 'Blockchain Projects.',
  description:
    'A curated selection of products and experiments across frontend engineering, Web3, and crypto tooling.',
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
    title: "Let's build something impactful.",
    description:
      'Open to frontend, Web3, and product collaborations. Reach out and let’s talk about what you’re building.',
    primary: 'Start a Project',
    secondary: 'See Live Demos',
  },
}
