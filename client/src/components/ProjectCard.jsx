import { BsGlobe2 } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";
import clsx from "clsx";

const ProjectCard = ({ project }) => {
  const theme = useSelector((state) => state.global.theme);
  return (
    <div
      viewport={{ once: true }}
      className="rounded-xl border-2 border-gray-500/80 backdrop-blur-md max-w-[400px] pt-5 px-5"
    >
      <img
        src="bg1.jpg"
        alt={project.title}
        className="w-100 h-50 rounded-2xl"
      />
      <div className="flex items-center justify-between pt-5 pb-2">
        <div className="">
          <h1>{project.title}</h1>
          <h1 className="text-sm text-gray-400">{project.subtitle}</h1>
        </div>
        <div className="flex gap-2 text-xl">
          {project.liveUrl === "NA" ? (
            <div className="p-1 bg-gray-300 rounded-full opacity-20">
              <BsGlobe2 />
            </div>
          ) : (
            <a
              target="_blank"
              href={project.liveUrl}
              className={clsx(
                theme === "dark" && "text-black",
                "p-1 bg-gray-300 rounded-full"
              )}
            >
              <BsGlobe2 />
            </a>
          )}
          {project.githubUrl === "NA" ? (
            <div className="p-1 bg-gray-300 rounded-full opacity-20">
              <FaGithub />
            </div>
          ) : (
            <a
              target="_blank"
              href={project.githubUrl}
              className={clsx(
                theme === "dark" && "text-black",
                "p-1 bg-gray-300 rounded-full"
              )}
            >
              <FaGithub />
            </a>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <a
          href={`projects/${project.id}`}
          className="p-2 px-5 bg-gray-200 shadow-inner rounded-t-3xl shadow-gray-400"
        >
          <h1
            className={clsx(
              theme === "dark" && "text-black",
              "text-sm text-center"
            )}
          >
            Explore
          </h1>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
