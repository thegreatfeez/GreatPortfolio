const projectsData = [
  {
    id: 1,
    title: "CryptoTenzie",
    shortDesc: "A fun React based dice game where players roll to match all dice while racing against time and roll limits, and earn virtual crypto tokens in the process.",
    thumbnail: "./assets/img/cryptotenzie.png",
    images: ["./assets/img/cryptotenzie.png"],
    hasSlider: false,
    overview: [
      "This interactive dice game challenges players to achieve matching numbers across all dice within strict time and roll limits. The game features an intuitive hold mechanism that lets players lock desired dice values while continuing to roll the others, creating strategic depth as players must decide which dice to keep and when to risk additional rolls. Players earn crypto-themed token points for each successful completion, with a visual airdrop progress bar tracking their journey toward larger rewards. The streak system adds an extra layer of engagement by rewarding consistent performance and encouraging players to maintain their winning momentum.",
      "Built with React 18 and styled using Tailwind CSS, the application delivers a smooth, responsive gaming experience across all devices. The game leverages localStorage to persist player progress, ensuring that earned points, streaks, and airdrop progress carry over between sessions. The clean, modern interface emphasizes usability while incorporating subtle crypto-themed visual elements that enhance the reward system's appeal. This project demonstrates proficiency in state management, local data persistence, and creating engaging user interactions within a time-pressured gaming environment."
    ],
    tools: ["HTML", "Tailwind CSS", "JavaScript", "React", "GIT", "GitHub", "Netlify", "Figma"],
    liveLink: "https://cryptotenzie.netlify.app/",
    codeLink: "https://github.com/thegreatfeez/cryptoTenzie?tab=readme-ov-file"
  },
  {
    id: 2,
    title: "MoonTask",
    shortDesc: "A sleek and intuitive task management application designed specifically for traders to track their trading activities, alerts, and research tasks.",
    thumbnail: "./assets/img/moontask.png",
    images: ["./assets/img/moontask.png"],
    hasSlider: false,
    overview: [
      "This specialized task management application addresses the unique needs of traders who require organized tracking of their trading activities. The app features a comprehensive category system that allows users to organize tasks by type, including Buy Alerts, Sell Alerts, and Research tasks. Each task can be easily added, marked as complete with visual feedback, or deleted as needed. The intuitive interface ensures traders can quickly manage their workflow without disrupting their focus on market activities.",
      "Built with React for seamless real-time updates and styled with Tailwind CSS for a modern, responsive design, the application delivers a clean and professional user experience across all devices. The real-time task state management ensures instant updates when tasks are modified, providing immediate visual feedback to users. This project demonstrates proficiency in component-based architecture, state management, and creating specialized solutions for specific user groups while maintaining a focus on usability and performance."
    ],
    tools: ["HTML", "Tailwind CSS", "JavaScript", "React", "GIT", "GitHub", "Netlify", "Figma"],
    liveLink: "https://moon-task.vercel.app/",
    codeLink: "https://github.com/thegreatfeez/MoonTask"
  },
 {
  id: 3,
  title: "LumeLink",
  shortDesc: "A decentralized creator subscription platform powered by Base blockchain and Chainlink VRF. Features weekly spotlight system, IPFS-stored profiles, and transparent subscription management with 90% creator revenue share.",
  thumbnail: ["./assets/img/lumlinkthumb.png"],
  images: ["./assets/img/lumlink.png"],
  hasSlider: false,
  overview: [
    "LumeLink is a next-generation Web3 subscription platform that revolutionizes how creators connect with their audiences through blockchain technology. Built on Base Layer 2 network, the platform implements a unique weekly spotlight system powered by Chainlink VRF for provably fair and transparent creator discovery. Creators can set their own monthly subscription prices (minimum 0.01 ETH) and retain 90% of subscription fees, with only 10% going to platform operations. The platform features IPFS-stored creator profiles with integrated social media links, automated payment settlement directly to creator wallets, and a weighted selection algorithm that gives creators who haven't been featured recently higher chances of spotlight placement.",
    "The technical architecture leverages four core smart contracts deployed on Base Sepolia: CreatorRegistry for profile management, SubscriptionManager for payment handling, SpotlightSelector implementing Chainlink VRF v2.5 for random selection, and Treasury for automated fee collection. The frontend is built with React 18, TypeScript, and Tailwind CSS, featuring seamless Web3 integration through wagmi, viem, and RainbowKit for wallet connectivity. The platform provides separate dashboard experiences for users, creators, and platform owners, with comprehensive security features including ReentrancyGuard protection, access control mechanisms, and input validation. Gas-optimized contracts ensure efficient transactions, while the multi-step user flows guide creators through registration, profile setup, and subscription management with intuitive interfaces."
  ],
  tools: [
    "Solidity 0.8.30",
    "Foundry",
    "Base L2",
    "Chainlink VRF",
    "React 18",
    "TypeScript",
    "Tailwind CSS",
    "wagmi",
    "viem",
    "RainbowKit",
    "IPFS",
    "Pinata",
    "TanStack Query",
    "React Router v6",
    "Netlify",
    "OpenZeppelin",
    "GIT",
    "GitHub"
  ],
  liveLink: "https://lumlnk.netlify.app/",
  codeLink: "https://github.com/thegreatfeez/LumeLink"
},
 
  {
    id: 4,
    title: "CoinKitty",
    shortDesc: "A modern cryptocurrency tracking and portfolio management application that provides real-time market data, portfolio analytics, and secure user authentication for crypto investors.",
    thumbnail: "./assets/img/coinkity.png",
    images: [
      "./assets/img/coinkity.png",
      "./assets/img/coinkitty1.png",
      "./assets/img/coinkitty2.png"
    ],
    hasSlider: true,
    overview: [
      "CoinKitty is a comprehensive cryptocurrency tracking platform designed to help investors monitor their digital asset portfolios in real-time. The application integrates live cryptocurrency price feeds and market data, allowing users to track multiple coins simultaneously. Users can manage their crypto investments through an intuitive portfolio dashboard that displays current holdings, performance metrics, and market trends.",
      "Built with React and styled with Tailwind CSS, CoinKitty delivers a sleek, dark-themed interface optimized for both desktop and mobile devices. The application leverages Firebase Authentication to provide multiple sign-in options including email/password and Google OAuth for seamless user access. React Router ensures smooth navigation between portfolio views, coin details, and search results."
    ],
    tools: ["React", "Tailwind CSS", "JavaScript", "React Router", "Firebase", "Firebase Auth", "Vite", "React Icons", "Lucide React", "GIT", "GitHub", "Netlify"],
    liveLink: "https://coinkitty.netlify.app/",
    codeLink: "https://github.com/thegreatfeez/Coinkitty"
  },

  {
    id: 5,
    title: "HoldVault",
    shortDesc: "A decentralized Ethereum savings vault application on Base Sepolia that enables users to create time-locked savings goals, securely deposit ETH, and track progress towards financial milestones.",
    thumbnail: "./assets/img/holdvaultthumb.png",
    images: ["./assets/img/holdvault.png"],
    hasSlider: false,
    overview: [
      "HoldVault is a Web3 savings platform that combines smart contract security with an intuitive user interface. Users can create multiple savings vaults with custom ETH goals and lock durations, ensuring disciplined savings through blockchain-enforced time locks. The application features real-time progress tracking, transaction history, and the unique ability to reactivate completed vaults for new savings cycles.",
      "Built with React and TypeScript, the application leverages Wagmi and Viem for seamless Web3 integration, providing users with a modern dApp experience. The smart contract, deployed on Base Sepolia, implements secure deposit and withdrawal logic with custom error handling and event emissions. Styled with Tailwind CSS, the interface features responsive layouts, interactive progress visualizations, and a tabbed dashboard for managing active and completed vaults."
    ],
    tools: ["React", "TypeScript", "Solidity", "Wagmi", "Viem", "Tailwind CSS", "React Router", "Base Sepolia", "Ethers.js", "Vite", "GIT", "GitHub"],
    liveLink: "https://holdvault.netlify.app/",
    codeLink: "https://github.com/thegreatfeez/HodlVault"
  }
];