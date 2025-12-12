import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { toast } from "react-toastify";
// import { useGlobalContext } from "../../context/GlobalProvider";
import { projects, Project } from "../../data/projects";

export default function ProductsPage1() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  // const projects = useProjectDetails();
  // const pro = useSelector((state) => state.global.projects);
  const [currentImage, setCurrentImage] = useState("bg1.jpg");
  // const { projects } = useGlobalContext();
  // console.log(pro);
  useEffect(() => {
    const fetchProject = () => {
      try {
        if (!id) return;
        const res = projects.find((p) => p.id === Number(id));
        if (res) {
          setProject(res);
          // console.log(res.image);
          setCurrentImage(res.image);
        }
      } catch (error) {
        // console.log(error);
        toast.error("Error fetching Project");
      }
    };
    fetchProject();
  }, [id, projects]);
  return (
    <div className="px-8 py-10 lg:px-20">
      <div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="">
            <img
              src={currentImage}
              width="1000"
              height="1000"
              alt={project?.title}
              className="m-auto rounded-2xl w-full max-h-[400px]"
            />
          </div>
          <div className="py-5">
            <h1 className="text-2xl font-semibold">{project?.title}</h1>
            <h2 className="text-gray-400 ">{project?.subtitle}</h2>
            <div className="flex flex-wrap gap-3 py-5">
              {project?.skills?.map((skill, i) => {
                return (
                  <div key={i}>
                    <div className="px-3 py-1 text-3xl border border-b-4 w-fit h-fit md:text-5xl rounded-2xl ">
                      <h1 className="text-sm text-center ">{skill}</h1>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between gap-5 py-5 md:justify-normal">
              {project?.liveUrl === "NA" ? (
                <div className="flex items-center gap-2 px-5 bg-gray-200 opacity-20 rounded-xl py-2l">
                  <BsGlobe2 />
                  <h1>Live Url</h1>
                </div>
              ) : (
                <a
                  target="_blank"
                  href={project?.liveUrl}
                  className="flex items-center gap-2 px-5 py-2 bg-gray-200 dark:bg-gray-500/50 dark:text-white rounded-xl"
                >
                  <BsGlobe2 />
                  <h1>Live Url</h1>
                </a>
              )}
              {project?.githubUrl === "NA" ? (
                <div className="flex items-center gap-2 px-5 bg-gray-200 opacity-20 rounded-xl py-2l">
                  <FaGithub />
                  <h1>Github</h1>
                </div>
              ) : (
                <a
                  target="_blank"
                  href={project?.githubUrl}
                  className="flex items-center gap-2 px-5 py-2 bg-gray-200 dark:bg-gray-500/50 dark:text-white rounded-xl"
                >
                  <FaGithub />
                  <h1>Github</h1>
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 py-5">
          {project?.additionalImages?.map((image, index) => (
            <div
              onClick={() => setCurrentImage(image)}
              key={index}
              className="  max-h-[100px] relative"
            >
              <img
                src={image}
                width="500"
                height="500"
                alt="project image"
                // priority={false}
                // blurDataURL={image}
                className="rounded-md w-fit  max-h-[200px] aspect-square object-contain "
              />
            </div>
          ))}
          <img
            src={project?.image}
            // src="/assets/bg1.jpg"
            width="500"
            height="500"
            // onClick={() => setCurrentImage(project?.image)}
            alt="product image"
            // priority={false}
            // blurDataURL={project?.image}
            className="rounded-md  object-contain w-fit max-h-[200px]  aspect-square"
          />
        </div>
        <div className="py-5">
          <h1 className="text-xl font-semibold ">Description</h1>
          <p className="pt-2 text-sm text-justify">{project?.description}</p>
        </div>
      </div>
    </div>
  );
}
