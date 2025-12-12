import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import ProjectCard from "../../components/ProjectCard";
import Search from "../../components/Search";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
export default function ProductsPage() {
  // const projects = useProjectDetails();
  console.log(projects.length);
  return (
    <div className="px-8 py-8 pt-5 lg:px-20 lg:pt-8">
      <div className="items-center justify-between pb-5 lg:flex ">
        <div className="flex items-center gap-2">
          <Link to="/">
            <IoIosArrowBack className="text-3xl" />
          </Link>

          <h1 className="text-4xl font-semibold">
            All{" "}
            <span className="text-4xl font-normal text-transparent bg-gradient-to-r from-[#b57e10] via-[#f9df7b] via-[#b57e10] to-[#c7992b] bg-clip-text hello">
              Projects
            </span>
          </h1>
        </div>
        <div className="flex justify-center pt-5 lg:block lg:pt-0">
          <Search />
        </div>
      </div>
      <div className="py-10">
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 50,
                  delay: index / 10,
                }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
