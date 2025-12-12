import { useState } from "react";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

import { useGlobalContext } from "../context/GlobalProvider";
import clsx from "clsx";

interface Route {
  label: string;
  id: string;
  offset: number;
}

const routes: Route[] = [
  { label: "Home", id: "home", offset: 120 },
  { label: "About", id: "about", offset: 100 },
  { label: "Skills", id: "skills", offset: 40 },
  { label: "Projects", id: "project", offset: 60 },
];

const AnimatedText = ({ text }: { text: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <h1
      className="inline-flex group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="relative inline-block"
          style={
            isHovered
              ? {
                  animationName: "slide-in",
                  animationDelay: `${index * 0.08}s`,
                  animationDuration: "0.1s",
                  animationFillMode: "forwards",
                  animationTimingFunction: "ease",
                }
              : {}
          }
        >
          {char}
        </span>
      ))}
    </h1>
  );
};

export default function Footer() {
  const { theme } = useGlobalContext();
  const date = new Date().getFullYear();
  const handleNavigation = (route: Route) => {
    const target = document.getElementById(route.id.toLowerCase());
    if (!target) return;
    const offset = route.offset ?? 80;

    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={clsx(
        theme === "dark" ? "bg-[#111]" : "bg-white",
        "w-full shadow-[0_30px_50px_1px_rgba(255,255,255,1)]"
      )}
    >
      <div className="w-full p-10 bg-black rounded-t-2xl ">
        <div className="space-y-10 text-white lg:grid lg:grid-cols-4 lg:gap-20">
          <div className="lg:col-span-2">
            <h1 className="text-3xl hello">Nani</h1>
            <h5 className="pt-3 text-sm text-justify">
              Hi, I'm Nani—a web developer and software engineer with a passion
              for transforming ideas into dynamic, user-friendly digital
              experiences. Dive into my work, and let’s connect to explore how
              we can collaborate and bring your vision to life!
            </h5>
          </div>
          {/* <div className="grid gap-10 md:grid-cols-2 md:gap-40"> */}
          <div className="flex flex-col justify-between col-span-2 gap-10 md:flex-row">
            <div className="">
              <h1 className="text-xl font-semibold">Navigation</h1>
              <div className="grid gap-1 pt-2 text-sm">
                {routes.map((route, index) => (
                  <button
                    key={index}
                    className="text-left duration-200 cursor-pointer hover:text-white/70"
                    onClick={() => handleNavigation(route)}
                  >
                    {route.label}
                  </button>
                ))}
                {/* <a className="duration-200 hover:text-white/70" href={"/"}>
                Home
              </a>
              <a
                className="duration-200 hover:text-white/70"
                href={"/#services"}
              >
                Services
              </a>
              <a
                className="duration-200 hover:text-white/70"
                href={"/#skills"}
              >
                Skills
              </a>
              <a
                className="duration-200 hover:text-white/70"
                href={"/#projects"}
              >
                Projects
              </a> */}
              </div>
            </div>
            <div className="">
              <h1 className="text-xl font-semibold">Contact</h1>
              <div className="grid gap-2 pt-2 text-sm">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 duration-200 hover:text-white/70"
                  href={"mailto:chundu.siva2k03@gmail.com"}
                >
                  <SiGmail />
                  <p className="break-all">chundu.siva2k03@gmail.com</p>
                  {/* <AnimatedText text="chundu.siva2k03@gmail.com" /> */}
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 duration-200 hover:text-white/70"
                  href={"https://github.com/NANI-31"}
                >
                  <FaGithub />
                  <p className="break-all">github/NANI-31</p>
                  {/* <AnimatedText text="github/NANI-31" /> */}
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 duration-200 hover:text-white/70"
                  href={"https://www.linkedin.com/in/sebe2k04/"}
                >
                  <FaLinkedin />
                  {/* <h1> linkedin/</h1> */}
                  <AnimatedText text="LinkedIn" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 duration-200 hover:text-white/70"
                  href={"tel:+919701330350"}
                >
                  <IoCall />
                  <AnimatedText text="Locationn" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="pt-10 text-sm text-center text-white">
          Copyright &copy;{date} Nani, All Rights Reserved
          {/* <AnimatedText text="Locationn" /> */}
        </p>
      </div>
    </div>
  );
}
