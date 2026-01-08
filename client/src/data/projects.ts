export interface Project {
  id: number;
  title: string;
  subtitle: string;
  skills: string[];
  description: string;
  image: string;
  additionalImages: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  // {
  //   id: 1,
  //   title: "Portfolio Website",
  //   subtitle: "A personal portfolio built with React and Three.js",
  //   skills: ["React", "Three.js", "TailwindCSS", "Framer Motion"],
  //   description:
  //     "An interactive portfolio website to showcase projects and skills with smooth animations and 3D effects.",
  //   image: "/portfolio//portfolio/bg1.jpg",
  //   additionalImages: ["/portfolio/bg1.jpg", "/portfolio/bg1.jpg"],
  //   githubUrl: "https://github.com/yourusername/portfolio",
  //   liveUrl: "https://yourportfolio.com",
  // },
  {
    id: 1,
    title: "Weather App",
    subtitle: "Get weather updates in real time",
    skills: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Redux",
      "Three.js",
      "API Integration",
      "Recharts",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT (JSON Web Tokens)",
      "Google OAuth2",
      "Nodemailer",
      "Cloudinary",
    ],
    description:
      "Displays current weather, 7-day forecast, and location search powered by OpenWeatherMap API.",
    image: "/projects/weather/bg.png",
    additionalImages: [
      "/projects/weather/img1.png",
      "/projects/weather/img2.png",
      "/projects/weather/img3.png",
      "/projects/weather/img4.png",
      "/projects/weather/img5.png",
      "/projects/weather/img6.png",
      "/projects/weather/img7.png",
    ],
    githubUrl: "https://github.com/NANI-31/weather-app",
    liveUrl: "https://weather-app-nine-lilac-90.vercel.app/",
  },
  {
    id: 2,
    title: "Tasklist App",
    subtitle: "A Full-stack todo app",
    // "A full-stack todo app with user authentication and cloud features",
    skills: [
      "React",
      "Tailwindcss",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "framer motion",
    ],
    description:
      "A productivity-focused task manager where users can create, update, and manage todos with secure login, image uploads, and token-based authentication. Features responsive UI and MongoDB integration for persistent storage.",
    image: "/projects/tasklist/bg.png",
    additionalImages: [
      "/projects/tasklist/img1.png",
      "/projects/tasklist/img2.png",
      "/projects/tasklist/img3.png",
      "/projects/tasklist/img4.png",
    ],
    githubUrl: "https://github.com/NANI-31/todo",
    liveUrl: "https://ticklist.onrender.com",
  },
  {
    id: 3,
    title: "Engineering Study Vault",
    subtitle: "Study smarter, even after semesters pass",
    skills: ["React", "Tailwindcss", "Node.js", "Express", "MongoDB", "JWT"],
    description:
      "A centralized learning platform designed to help engineering students—especially backlog students—access subject materials even after long periods. Current semester materials are uploaded for future reference, along with features to track mid, semester, assignment, lab marks, and built-in chat support for student communication and guidance.",
    image: "/projects/studyApp/bg.png",
    additionalImages: [
      "/projects/studyApp/img1.png",
      "/projects/studyApp/img2.png",
      "/projects/studyApp/img3.png",
      "/projects/studyApp/img4.png",
    ],
    githubUrl: "https://github.com/NANI-31/study-app",
    liveUrl: "",
  },
  {
    id: 4,
    title: "CreateStack – Smart Resource Finder",
    subtitle: "Discover the best tools in one place",
    skills: ["React", "Tailwindcss", "Node.js", "Express", "MongoDB", "JWT"],
    description:
      "A curated resource platform that organizes useful websites and tools for developers, video editors, designers, React developers, and software users. Helps creators quickly find high-quality resources through a clean, categorized, and user-friendly interface.",
    image: "/projects/creatorStack/bg.png",
    additionalImages: [
      "/projects/creatorStack/img1.png",
      "/projects/creatorStack/img2.png",
      "/projects/creatorStack/img3.png",
      "/projects/creatorStack/img4.png",
      "/projects/creatorStack/img5.png",
      "/projects/creatorStack/img6.png",
      "/projects/creatorStack/img7.png",
      "/projects/creatorStack/img8.png",
      "/projects/creatorStack/img9.png",
      "/projects/creatorStack/img10.png",
      "/projects/creatorStack/img11.png",
      "/projects/creatorStack/img12.png",
      "/projects/creatorStack/img13.png",
    ],
    githubUrl: "https://github.com/NANI-31/creator-stack",
    liveUrl: "",
  },
  // {
  //   id: 1,
  //   title: "Blog CMS",
  //   subtitle: "Content management system for blogging",
  //   skills: ["Next.js", "MongoDB", "TailwindCSS", "Prisma"],
  //   description:
  //     "Custom CMS allowing authors to write, edit, and publish blog posts with a Markdown editor.",
  //   image: "/portfolio/bg1.jpg",
  //   additionalImages: ["/portfolio/bg1.jpg", "/portfolio/bg1.jpg"],
  //   githubUrl: "https://github.com/yourusername/blog-cms",
  //   liveUrl: "https://techblog.dev",
  // },
  // {
  //   id: 5,
  //   title: "Weather App",
  //   subtitle: "Get weather updates in real time",
  //   skills: ["React", "API Integration", "Styled Components"],
  //   description:
  //     "Displays current weather, 7-day forecast, and location search powered by OpenWeatherMap API.",
  //   image: "/portfolio/bg1.jpg",
  //   additionalImages: ["/portfolio/bg1.jpg", "/portfolio/bg1.jpg"],
  //   githubUrl: "https://github.com/yourusername/weather-app",
  //   liveUrl: "https://weathercast.live",
  // },
  // {
  //   id: 6,
  //   title: "Blog CMS",
  //   subtitle: "Content management system for blogging",
  //   skills: ["Next.js", "MongoDB", "TailwindCSS", "Prisma"],
  //   description:
  //     "Custom CMS allowing authors to write, edit, and publish blog posts with a Markdown editor.",
  //   image: "/portfolio/bg1.jpg",
  //   additionalImages: ["/portfolio/bg1.jpg", "/portfolio/bg1.jpg"],
  //   githubUrl: "https://github.com/yourusername/blog-cms",
  //   liveUrl: "https://techblog.dev",
  // },
  // {
  //   id: 7,
  //   title: "Weather App",
  //   subtitle: "Get weather updates in real time",
  //   skills: ["React", "API Integration", "Styled Components"],
  //   description:
  //     "Displays current weather, 7-day forecast, and location search powered by OpenWeatherMap API.",
  //   image: "/portfolio/bg1.jpg",
  //   additionalImages: ["/portfolio/bg1.jpg", "/portfolio/bg1.jpg"],
  //   githubUrl: "https://github.com/yourusername/weather-app",
  //   liveUrl: "https://weathercast.live",
  // },
];
