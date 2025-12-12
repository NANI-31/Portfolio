import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaNodeJs, FaJava, FaGithub, FaGitAlt } from "react-icons/fa6";
import { IoLogoCss3, IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import {
  SiReact,
  SiTailwindcss,
  SiMui,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiCloudinary,
  SiSocketdotio,
  SiMysql,
} from "react-icons/si";
import { PiFramerLogoFill } from "react-icons/pi";
import { TbApi } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import clsx from "clsx";
// import { useTheme } from "../../context/ThemeContext";
import { useSelector } from "react-redux";
const style = { fontSize: "clamp(2rem,4vw,2.5rem)" };

const skillsData = {
  Frontend: [
    { name: "HTML", icon: <FaHtml5 style={style} />, color: "text-red-500" },
    {
      name: "CSS",
      icon: <IoLogoCss3 style={style} />,
      color: "text-purple-400",
    },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript style={style} />,
      color: "text-yellow-400",
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss style={style} />,
      color: "text-blue-400",
    },
    {
      name: "Framer",
      icon: <PiFramerLogoFill style={style} />,
      color: "text-yellow-600",
    },
    {
      name: "Material-UI",
      icon: <SiMui style={style} />,
      color: "text-blue-600",
    },
  ],
  Backend: [
    {
      name: "Node JS",
      icon: <FaNodeJs style={style} />,
      color: "text-emerald-500",
    },
    {
      name: "Express",
      icon: <SiExpress style={style} />,
      color: "text-gray-600",
    },
    {
      name: "Socket.IO",
      icon: <SiSocketdotio style={style} />,
      color: "text-white-600",
    },
  ],
  Database: [
    {
      name: "MongoDB",
      icon: <SiMongodb style={style} />,
      color: "text-green-600",
    },
    {
      name: "Firebase",
      icon: <IoLogoFirebase style={style} />,
      color: "text-yellow-500",
    },
    {
      name: "MySQL",
      icon: <SiMysql style={style} />,
      color: "text-blue-500",
    },
  ],
};

const SkillCategory = ({ title, skills }) => (
  <div className="flex flex-wrap items-center gap-3 pb-8 m-auto border-0 lg:w-full lg:justify-center">
    <div className="flex-1 text-2xl font-bold lg:pb-0">{title}</div>
    <div className="grid max-xs:gap-y-0 max-md:gap-y-5 lg:flex-3 border-0 grid-cols-[repeat(auto-fill,_minmax(90px,_1fr))] w-full justify-around">
      {skills.map((skill, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.4, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 50,
            delay: i / 10,
          }}
          viewport={{ once: true }}
          className={skill.color}
        >
          <div className="flex justify-center max-xs:hidden">
            <div className="p-5 border border-b-4 rounded-full w-fit h-fit">
              {skill.icon}
            </div>
          </div>
          <div className="flex xs:justify-center">
            <h1 className="pt-2 text-sm text-center">{skill.name}</h1>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const [w, setW] = useState(1024);
  const theme = useSelector((state) => state.global.theme);

  useEffect(() => {
    const handleResize = () => setW(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={clsx(
        theme === "dark" ? "bg-[#111] text-white" : "bg-white text-black",
        "px-8 py-10 lg:px-20"
      )}
    >
      <div className="mt-10">
        <motion.h1
          initial={{ opacity: 0, scale: 0.4, x: 100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 50 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold"
        >
          <span className="text-4xl font-normal text-transparent bg-gradient-to-r from-[#b57e10] via-[#f9df7b] via-[#b57e10] to-[#c7992b] bg-clip-text hello">
            Skills
          </span>{" "}
          that I know
        </motion.h1>
        <div className="flex justify-center md:px-10">
          <motion.h5
            initial={{ opacity: 0, scale: 0.4, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            viewport={{ once: true }}
            className="py-5 text-justify md:text-center"
          >
            I am an enthusiastic, self-motivated, reliable and hardworking
            individual. I thrive in both team environments and when working
            independently under pressure and tight deadlines.
          </motion.h5>
        </div>
      </div>
      <hr className="pb-4" />
      <div className="space-y-8">
        {Object.entries(skillsData).map(([category, skills]) => (
          <SkillCategory key={category} title={category} skills={skills} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
