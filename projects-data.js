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
    title: "Nezuko",
    shortDesc: "An interactive onboarding and trading dashboard built with HTML, TailwindCSS, and Vanilla JavaScript. This project simulates a real-world trading platform with step-by-step onboarding, user validation, and a dynamic dashboard experience.",
    thumbnail: "./assets/img/nezuko.png",
    images: [
      "./assets/img/nezuko1.png",
      "./assets/img/nezuko2.png",
      "./assets/img/nezuko3.png",
      "./assets/img/nezuko4.png",
      "./assets/img/nezuko5.png"
    ],
    hasSlider: true,
    overview: [
      "This comprehensive trading platform simulation provides users with a complete onboarding experience that mirrors real-world financial applications. The multi-step registration process includes personal information collection, trading experience assessment, security setup with optional add-ons like 2FA and cold wallet integration, and a detailed summary review. The platform features dynamic country selection populated via API, form validation at each step, and security toggles that allow users to customize their trading experience based on their needs and preferences.",
      "Built entirely with vanilla JavaScript, HTML, and TailwindCSS, the application demonstrates proficiency in DOM manipulation, API integration, and creating complex user flows without relying on frameworks. The dashboard dynamically updates to reflect user selections, calculating monthly costs based on chosen plans and add-ons. A smooth loading screen provides transition feedback before users enter their personalized dashboard. This project showcases the ability to create sophisticated web applications using fundamental web technologies while maintaining clean code architecture and responsive design principles."
    ],
    tools: ["HTML", "Tailwind CSS", "Vanilla JavaScript", "REST API", "GIT", "GitHub", "Netlify", "Figma"],
    liveLink: "https://nezukoexchnage.netlify.app/",
    codeLink: "https://github.com/thegreatfeez/Nezuko"
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
export default projectsData;