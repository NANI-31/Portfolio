export default function ProjectDetails() {
  const details = [
    {
      id: 1,
      title: "Portfolio Website",
      subtitle: "A personal portfolio built with React and Three.js",
      skills: ["React", "Three.js", "TailwindCSS", "Framer Motion"],
      description:
        "An interactive portfolio website to showcase projects and skills with smooth animations and 3D effects.",
      image: "/portfolio//portfolio/bg1.jpg",
      additionalImages: ["/portfolio/bg1.jpg", "/portfolio/bg1.jpg"],
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: "https://yourportfolio.com",
    },
    {
      id: 22,
      title: "Tasklist App",
      subtitle:
        "A full-stack todo app with user authentication and cloud features",
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
      id: 2,
      title: "E-commerce Platform",
      subtitle: "A full-stack shopping site with admin dashboard",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      description:
        "Built a scalable e-commerce platform with cart, product filters, payments, and admin control.",
      image: "/portfolio/bg1.jpg",
      additionalImages: ["/portfolio/bg1.jpg", "/portfolio/bg1.jpg"],
      githubUrl: "https://github.com/yourusername/ecommerce-site",
      liveUrl: "https://shopwithme.com",
    },
    {
      id: 3,
      title: "Chat App",
      subtitle: "Real-time messaging with WebSocket",
      skills: ["React", "Socket.IO", "Node.js", "MongoDB"],
      description:
        "A real-time chat application with room support and live typing indicators.",
      image: "/portfolio/bg1.jpg",
      additionalImages: ["/portfolio/bg1.jpg", "/portfolio/bg1.jpg"],
      githubUrl: "https://github.com/yourusername/chat-app",
      liveUrl: "https://livechatapp.com",
    },
    {
      id: 1,
      title: "Blog CMS",
      subtitle: "Content management system for blogging",
      skills: ["Next.js", "MongoDB", "TailwindCSS", "Prisma"],
      description:
        "Custom CMS allowing authors to write, edit, and publish blog posts with a Markdown editor.",
      image: "/portfolio/bg1.jpg",
      additionalImages: ["/portfolio/bg1.jpg", "/portfolio/bg1.jpg"],
      githubUrl: "https://github.com/yourusername/blog-cms",
      liveUrl: "https://techblog.dev",
    },
    {
      id: 5,
      title: "Weather App",
      subtitle: "Get weather updates in real time",
      skills: ["React", "API Integration", "Styled Components"],
      description:
        "Displays current weather, 7-day forecast, and location search powered by OpenWeatherMap API.",
      image: "/portfolio/bg1.jpg",
      additionalImages: ["/portfolio/bg1.jpg", "/portfolio/bg1.jpg"],
      githubUrl: "https://github.com/yourusername/weather-app",
      liveUrl: "https://weathercast.live",
    },
    {
      id: 6,
      title: "Blog CMS",
      subtitle: "Content management system for blogging",
      skills: ["Next.js", "MongoDB", "TailwindCSS", "Prisma"],
      description:
        "Custom CMS allowing authors to write, edit, and publish blog posts with a Markdown editor.",
      image: "/portfolio/bg1.jpg",
      additionalImages: ["/portfolio/bg1.jpg", "/portfolio/bg1.jpg"],
      githubUrl: "https://github.com/yourusername/blog-cms",
      liveUrl: "https://techblog.dev",
    },
    {
      id: 7,
      title: "Weather App",
      subtitle: "Get weather updates in real time",
      skills: ["React", "API Integration", "Styled Components"],
      description:
        "Displays current weather, 7-day forecast, and location search powered by OpenWeatherMap API.",
      image: "/portfolio/bg1.jpg",
      additionalImages: ["/portfolio/bg1.jpg", "/portfolio/bg1.jpg"],
      githubUrl: "https://github.com/yourusername/weather-app",
      liveUrl: "https://weathercast.live",
    },
  ];

  return details;
}
