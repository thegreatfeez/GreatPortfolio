const projectsData = [
  {
    id: 1,
    title: "CryptoTenzie",
    shortDescription: "A fun React based dice game where players roll to match all dice while racing against time and roll limits, and earn virtual crypto tokens in the process.",
    fullDescription: [
      "This interactive dice game challenges players to achieve matching numbers across all dice within strict time and roll limits. The game features an intuitive hold mechanism that lets players lock desired dice values while continuing to roll the others, creating strategic depth as players must decide which dice to keep and when to risk additional rolls. Players earn crypto-themed token points for each successful completion, with a visual airdrop progress bar tracking their journey toward larger rewards. The streak system adds an extra layer of engagement by rewarding consistent performance and encouraging players to maintain their winning momentum.",
      "Built with React 18 and styled using Tailwind CSS, the application delivers a smooth, responsive gaming experience across all devices. The game leverages localStorage to persist player progress, ensuring that earned points, streaks, and airdrop progress carry over between sessions. The clean, modern interface emphasizes usability while incorporating subtle crypto-themed visual elements that enhance the reward system's appeal. This project demonstrates proficiency in state management, local data persistence, and creating engaging user interactions within a time-pressured gaming environment."
    ],
    images: ["./assets/img/cryptotenzie.png"], 
    liveLink: "https://cryptotenzie.netlify.app/",
    codeLink: "https://github.com/thegreatfeez/cryptoTenzie?tab=readme-ov-file",
    tools: ["HTML", "Tailwind CSS", "JavaScript", "React", "GIT", "GitHub", "Netlify", "Figma"]
  },
  {
    id: 2,
    title: "MoonTask",
    shortDescription: "A sleek and intuitive task management application designed specifically for traders to track their trading activities, alerts, and research tasks.",
    fullDescription: [
      "This specialized task management application addresses the unique needs of traders who require organized tracking of their trading activities. The app features a comprehensive category system that allows users to organize tasks by type, including Buy Alerts, Sell Alerts, and Research tasks. Each task can be easily added, marked as complete with visual feedback, or deleted as needed. The intuitive interface ensures traders can quickly manage their workflow without disrupting their focus on market activities.",
      "Built with React for seamless real-time updates and styled with Tailwind CSS for a modern, responsive design, the application delivers a clean and professional user experience across all devices. The real-time task state management ensures instant updates when tasks are modified, providing immediate visual feedback to users. This project demonstrates proficiency in component-based architecture, state management, and creating specialized solutions for specific user groups while maintaining a focus on usability and performance."
    ],
    images: ["./assets/img/moontask.png"],
    liveLink: "https://moon-task.vercel.app/",
    codeLink: "https://github.com/thegreatfeez/MoonTask",
    tools: ["HTML", "Tailwind CSS", "JavaScript", "React", "GIT", "GitHub", "Netlify", "Figma"]
  },
  {
    id: 3,
    title: "Nezuko",
    shortDescription: "An interactive onboarding and trading dashboard built with HTML, TailwindCSS, and Vanilla JavaScript. This project simulates a real-world trading platform with step-by-step onboarding, user validation, and a dynamic dashboard experience.",
    fullDescription: [
      "This comprehensive trading platform simulation provides users with a complete onboarding experience that mirrors real-world financial applications. The multi-step registration process includes personal information collection, trading experience assessment, security setup with optional add-ons like 2FA and cold wallet integration, and a detailed summary review. The platform features dynamic country selection populated via API, form validation at each step, and security toggles that allow users to customize their trading experience based on their needs and preferences.",
      "Built entirely with vanilla JavaScript, HTML, and TailwindCSS, the application demonstrates proficiency in DOM manipulation, API integration, and creating complex user flows without relying on frameworks. The dashboard dynamically updates to reflect user selections, calculating monthly costs based on chosen plans and add-ons. A smooth loading screen provides transition feedback before users enter their personalized dashboard. This project showcases the ability to create sophisticated web applications using fundamental web technologies while maintaining clean code architecture and responsive design principles."
    ],
    images: [ 
      "./assets/img/nezuko1.png",
      "./assets/img/nezuko2.png",
      "./assets/img/nezuko3.png",
      "./assets/img/nezuko4.png",
      "./assets/img/nezuko5.png"
    ],
    liveLink: "https://nezukoexchnage.netlify.app/",
    codeLink: "https://github.com/thegreatfeez/Nezuko",
    tools: ["HTML", "Tailwind CSS", "Vanilla JavaScript", "REST API", "GIT", "GitHub", "Netlify", "Figma"]
  }
];


if (typeof module !== 'undefined' && module.exports) {
  module.exports = { projectsData };
}


window.projectsData = projectsData;