export const projectsData = [
  {
    id: 1,
    title: "CryptoTenzie",
    shortDescription: "A fun React based dice game where players roll to match all dice while racing against time and roll limits, and earn virtual crypto tokens in the process.",
    fullDescription: [
      "This interactive dice game challenges players to achieve matching numbers across all dice within strict time and roll limits. The game features an intuitive hold mechanism that lets players lock desired dice values while continuing to roll the others, creating strategic depth as players must decide which dice to keep and when to risk additional rolls. Players earn crypto-themed token points for each successful completion, with a visual airdrop progress bar tracking their journey toward larger rewards. The streak system adds an extra layer of engagement by rewarding consistent performance and encouraging players to maintain their winning momentum.",
      "Built with React 18 and styled using Tailwind CSS, the application delivers a smooth, responsive gaming experience across all devices. The game leverages localStorage to persist player progress, ensuring that earned points, streaks, and airdrop progress carry over between sessions. The clean, modern interface emphasizes usability while incorporating subtle crypto-themed visual elements that enhance the reward system's appeal. This project demonstrates proficiency in state management, local data persistence, and creating engaging user interactions within a time-pressured gaming environment."
    ],
    images: ["https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop"], 
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
    images: ["https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop"],
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
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1612178991618-32de3709509a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    ],
    liveLink: "https://nezukoexchnage.netlify.app/",
    codeLink: "https://github.com/thegreatfeez/Nezuko",
    tools: ["HTML", "Tailwind CSS", "Vanilla JavaScript", "REST API", "GIT", "GitHub", "Netlify", "Figma"]
  },
  {
  id: 4,
  title: "LinguaLeap",
  shortDescription: "An intelligent flashcard application designed to help language learners master new vocabulary through custom decks, interactive study sessions, and spaced repetition techniques.",
  fullDescription: [
    "LinguaLeap is a comprehensive language learning platform that enables users to create custom flashcard decks, organize vocabulary by language or topic, and study efficiently through an interactive flip-card system. The application features robust deck management capabilities, allowing users to add, edit, and delete flashcards with ease. Each deck can be customized with names and descriptions, and includes visual tracking of card counts and study progress. The study mode provides an immersive learning experience with card flipping animations, progress tracking, and the ability to mark cards as known or unknown for effective review sessions.",
    "Built with React and leveraging Context API for state management, the application delivers seamless real-time updates across all components. Styled with Tailwind CSS, it offers a clean, modern interface that's fully responsive across devices. The app includes a simple authentication system, protected routes, and multiple view modes (list and grid) for optimal organization. Advanced features include search functionality, alphabetical sorting, and filtered views for studied cards. This project demonstrates expertise in React Router for navigation, component-based architecture, context-driven state management, and creating intuitive user experiences for educational applications with a focus on retention and learning efficiency."
  ],
  images: ["https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop"],
  liveLink: "https://linguale.netlify.app/",
  codeLink: "https://github.com/thegreatfeez/LinguaLeap",
  tools: ["React", "Tailwind CSS", "JavaScript", "React Router", "Context API", "Vite", "Lucide React", "GIT", "GitHub", "Vercel"]
},
{
  id: 5,
  title: "CoinKitty",
  shortDescription: "A modern cryptocurrency tracking and portfolio management application that provides real-time market data, portfolio analytics, and secure user authentication for crypto investors.",
  fullDescription: [
    "CoinKitty is a comprehensive cryptocurrency tracking platform designed to help investors monitor their digital asset portfolios in real-time. The application integrates live cryptocurrency price feeds and market data, allowing users to track multiple coins simultaneously. Users can manage their crypto investments through an intuitive portfolio dashboard that displays current holdings, performance metrics, and market trends. The platform features a powerful search functionality that enables instant exploration of thousands of cryptocurrencies, complete with detailed information and historical data. With secure authentication powered by Firebase, users can safely store and access their portfolio data across devices.",
    "Built with React and styled with Tailwind CSS, CoinKitty delivers a sleek, dark-themed interface optimized for both desktop and mobile devices. The application leverages Firebase Authentication to provide multiple sign-in options including email/password and Google OAuth for seamless user access. React Router ensures smooth navigation between portfolio views, coin details, and search results. The responsive design adapts fluidly to different screen sizes, maintaining functionality and aesthetics across all devices. This project showcases expertise in API integration, real-time data handling, Firebase services, modern authentication flows, and creating user-centric financial applications with emphasis on security and performance."
  ],
  images: ["https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop"],
  liveLink: "https://github.com/thegreatfeez/Coinkitty",
  codeLink: "https://coinkitty.netlify.app/",
  tools: ["React", "Tailwind CSS", "JavaScript", "React Router", "Firebase", "Firebase Auth", "Vite", "React Icons", "Lucide React", "GIT", "GitHub", "Vercel"]
}
];