import React, { useState, useEffect } from "react";
import { IoReader } from "react-icons/io5";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import clsx from "clsx";

const Education = () => {
  const theme = useSelector((state) => state.global.theme);
  // const gradients = ['bl', 'br', 'tl', 'tr'];
  // const [gradientIndex, setGradientIndex] = useState(0);
  // const [currentGradientSuffix, setCurrentGradientSuffix] = useState(gradients[0]);

  // useEffect(() => {
  // 	const intervalId = setInterval(() => {
  // 		setGradientIndex((prevIndex) => (prevIndex + 1) % gradients.length);
  // 	}, 1500); // Adjust the duration (in milliseconds) for the speed of rotation

  // 	return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  // }, [gradients.length]);

  // useEffect(() => {
  // 	setCurrentGradientSuffix(gradients[gradientIndex]);
  // }, [gradientIndex, gradients]);
  return (
    <div
      className={clsx(
        theme === "dark" ? "bg-[#111] text-white" : "bg-white text-black",
        "lg:px-20 px-8 py-10"
      )}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.4, x: 100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
        viewport={{ once: true }}
        className="text-5xl font-semibold hello"
      >
        My&nbsp;
        <span className="text-transparent bg-gradient-to-r from-[#b57e10] via-[#f9df7b] via-[#b57e10] to-[#c7992b] bg-clip-text hello">
          Education
        </span>
      </motion.h1>
      {/* <div className=""> */}
      <div className="flex flex-col lg:px-0 flex-wrap max-w-[1200px] pt-0 mx-auto my-0 timeline">
        <div className="z-0 border-0 containerr">
          <motion.div
            initial={{ opacity: 0, scale: 1, y: -50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            viewport={{ once: true }}
            className="p-2 text-xl text-white rounded-full img h-fit w-fit bg-rotate"
          >
            <IoReader className="" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 50,
              delay: 0.4,
            }}
            viewport={{ once: true }}
            className="flex gap-3 md:items-center"
          >
            <div className="items-center justify-between w-full md:flex">
              <h1 className="text-xl font-semibold">
                B.Tech- Computer Science and Engineering
              </h1>
              <h1 className="text-gray-400">Nov 2021 - Apr 2025</h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 50,
              delay: 0.4,
            }}
            viewport={{ once: true }}
            className="px-0 pt-4 pb-5"
          >
            <h1>CGPA : 8.25 / 10</h1>
            <h2>
              Andhra Loyola Institue of Engineering and Technology, Vijayawada,
              AP
            </h2>
          </motion.div>
        </div>
        <div className="z-0 border-0 containerr">
          <motion.div
            initial={{ opacity: 0, scale: 1, y: -50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.2,
              // duration: 0.1,
            }}
            viewport={{ once: true }}
            className="p-2 text-xl text-white rounded-full img h-fit w-fit bg-rotate"
          >
            <IoReader className="" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 50,
              delay: 0.7,
            }}
            viewport={{ once: true }}
            className="flex gap-3 md:items-center"
          >
            <div className="items-center justify-between w-full md:flex">
              <h1 className="text-xl font-semibold">
                Intermediate - Maths, Physics, chemistry (MPC)
              </h1>
              <h1 className="text-gray-400">Jun 2019 - Mar 2021</h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 50,
              delay: 0.7,
            }}
            viewport={{ once: true }}
            className="px-0 pt-4 pb-5"
          >
            <h1>Percentage : 91%</h1>
            <h2>Bhasyam Junior College, Guntur, AP</h2>
          </motion.div>
        </div>
        <div className="z-0 border-0 containerr">
          <motion.div
            initial={{ opacity: 0, scale: 1, y: -100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.6,
            }}
            viewport={{ once: true }}
            className="p-2 text-xl text-white rounded-full img h-fit w-fit bg-rotate"
          >
            <IoReader className="" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 50,
              delay: 1,
            }}
            viewport={{ once: true }}
            className="flex gap-3 md:items-center"
          >
            <div className="items-center justify-between w-full md:flex">
              <h1 className="text-xl font-semibold">10th Class</h1>
              <h1 className="text-gray-400">Jul 2018 - Mar 2019</h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 50,
              delay: 1,
            }}
            viewport={{ once: true }}
            className="px-0 pt-4 pb-5"
          >
            <h1>percentage : 85.5%</h1>
            <h2>Viswa Jyothi High School, Guntur, AP</h2>
          </motion.div>
        </div>
        {/* <motion.div
          initial={{ opacity: 0, scale: 1, y: -100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 50,
            delay: 0.3,
          }}
          viewport={{ once: false }}
          className="border-0 z-2"
        >
          <div className="flex gap-3 md:items-center">
            <div className="p-2 text-xl text-white rounded-full h-fit w-fit bg-rotate">
              <IoReader className="" />
            </div>
            <div className="items-center justify-between w-full md:flex">
              <h1 className="text-xl font-semibold">
                Intermediate - Maths, Physics, chemistry (MPC)
              </h1>
              <h1 className="text-gray-400">Jun 2019 - Mar 2021</h1>
            </div>
          </div>
          <div className="px-5 pl-7 pt-2 pb-5  ml-[18px]">
            <h1>Percentage : 91%</h1>
            <h2>Bhasyam Junior College, Guntur, AP</h2>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Education;
