import ProjectCard from "../ProjectCard";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setProjects } from "../../redux/globalSlice";
import { projects } from "../../data/projects";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../redux/store";

const Projects = () => {
  // const projects = useProjectDetails();
  const theme = useSelector((state: RootState) => state.global.theme);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProjects(projects));
    // console.log(projects.length);
  }, []);
  return (
    <div
      className={clsx(
        theme === "dark" ? "bg-[#111] text-white" : "bg-white text-black",
        "px-8 py-10 lg:px-20"
      )}
    >
      <div className="max-w-[300px]">
        <motion.h1
          initial={{ opacity: 0, scale: 0.4, x: 100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 50 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold"
        >
          Let&apos;s have a look at my{" "}
          <span className="text-4xl font-normal text-transparent bg-gradient-to-r from-[#b57e10] via-[#f9df7b] via-[#b57e10] to-[#c7992b] bg-clip-text hello">
            Projects
          </span>
        </motion.h1>
      </div>
      <div className="flex justify-center pt-5 md:px-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.4, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 50 }}
          viewport={{ once: true }}
          className="text-justify md:text-center"
        >
          In this section, Each project showcases my ability to build responsive
          and user-friendly applications, utilizing technologies like the MERN
          stack and Next.js Through these project experiences, I aim to create
          innovative solutions that address real-world challenges and enhance
          user experiences.
        </motion.h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8 py-10">
        {projects.slice(0, 2).map((project, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
                delay: index / 10,
              }}
              viewport={{ once: true }}
              key={index}
            >
              <ProjectCard project={project} />
            </motion.div>
          );
        })}
      </div>
      <div className="flex justify-center animate-pulse">
        <a
          href={"projects"}
          className="px-5 py-1 text-sm duration-200 border-2 shadow-sm rounded-2xl hover:bg-gray-600 hover:text-white"
        >
          Show More
        </a>
      </div>
    </div>
  );
};

export default Projects;
