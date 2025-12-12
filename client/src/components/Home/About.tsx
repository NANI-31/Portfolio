import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { RiShining2Fill } from "react-icons/ri";
import Marquee from "react-fast-marquee";
import { RootState } from "../../redux/store";

const marq = [
  "Software Development Engineer (SDE) ",
  "Full Stack Developer",
  "Mern Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Software Associate Developer",
];

const About = () => {
  const [w, setW] = useState(1024);
  const theme = useSelector((state: RootState) => state.global.theme);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setW(width);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={clsx(
        theme === "dark" ? "bg-[#111] text-white" : "bg-white text-black",
        "pb-10"
      )}
    >
      <div className="px-8 py-10 lg:px-20 ">
        <motion.h1
          initial={{ opacity: 0.5, scale: 0.4, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 50 }}
          viewport={{ once: true }}
          className="text-5xl hello"
        >
          About{" "}
          <span className="text-transparent bg-gradient-to-r from-[#b57e10] via-[#f9df7b] via-[#b57e10] to-[#c7992b] bg-clip-text">
            Myself
          </span>
        </motion.h1>
        <div className="grid gap-5 pb-0 pt-15 lg:grid-cols-2">
          <div className="order-2 my-auto lg:order-1 ">
            <motion.h3
              initial={{ opacity: 0.2 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 100,
                delay: 0.1,
              }}
              className={`${
                w <= 640
                  ? "leading-7 text-justify tracking-wid"
                  : "leading-9 text-justify"
              }`}
            >
              I am a Computer Science Engineering graduate who expertise in
              fullstack web development, specializing in the MERN stack
              (MongoDB, Express, React, Node.js). My skills include building
              dynamic, responsive web applications, integrating both frontend
              and backend seamlessly. I have hands-on experience with Next.js
              for server-side rendering, enhancing performance, and scalability.
              Additionally, I am proficient in creating user-friendly
              interfaces, managing databases, and developing RESTful APIs. My
              education in computer science has provided me with a strong
              foundation in programming, algorithms, and software development
              practices, enabling me to build efficient, scalable, and
              user-focused web applications.
            </motion.h3>
          </div>
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.4, y: -100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 50 }}
              viewport={{ once: true }}
              className="relative flex justify-center items-center border-0"
            >
              <img
                src="/imgs/bg1411.png"
                width="1000"
                height="1000"
                alt=""
                className="max-w-[200px] md:max-w-[250px] -top-20 lg:absolute rounded-2xl mx-auto border-r-0 border-b-0 filter grayscale-100"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          theme === "dark" ? "bg-white text-black" : "bg-black text-white",
          "py-4"
        )}
      >
        <div className="">
          <Marquee className="flex overflow-hidden text-2xl ">
            {marq.map((mq, i) => {
              return (
                <div key={i} className="flex items-center">
                  <h1 className="ml-2 mr-2 text-sm font-bold tracking-widest uppercase md:mr-2">
                    {mq}
                  </h1>
                  <div className="mt-auto mb-auto font-bold tracking-wider">
                    <RiShining2Fill className="m-auto text-xl text-orange-400 " />
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default About;
