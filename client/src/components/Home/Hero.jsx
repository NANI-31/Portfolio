import { useState, useRef, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { FaGithub, FaLinkedin, FaQuoteLeft } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { SiGmail } from "react-icons/si";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  useTexture,
  Text3D,
  MeshTransmissionMaterial,
  Center,
  Environment,
  Stats,
  Float,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { useSelector } from "react-redux";
import clsx from "clsx";

// import { FaGithub } from 'react-icons/fa';
// import { FaLinkedin } from 'react-icons/fa';
const HomeName = ({ w }) => {
  const gradientTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext("2d");
    const gradient = context.createLinearGradient(0, 256, 256, 0);
    gradient.addColorStop(1.0, "#b57e10"); // from
    gradient.addColorStop(0.5, "#f9df7b"); // via 1
    gradient.addColorStop(0.33, "#b57e10"); // via 2
    gradient.addColorStop(1.0, "#c7992b"); // to
    context.fillStyle = gradient;
    context.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(canvas);
  }, []);
  const dynamic = w < 1024 ? 1.5 : 1.8;
  const textConfig = {
    font: "/fonts/Roblox Black Round_Regular.json",
    scale: dynamic,
    letterSpacing: -0.03,
    height: 0.25,
    bevelEnabled: true,
    bevelSize: 0.02,
    bevelThickness: 0.01,
    bevelSegments: 10,
    curveSegments: 128,
  };
  const TransConfig = {
    backside: true,
    backsideThickness: 0.3,
    transmission: 1,
    thickness: 0.3,
    chromaticAberration: 5,
    ior: 1.5,
    color: "#fff",
    side: THREE.DoubleSide,
    roughness: 0.1,
    metalness: 1.5,
    emissive: "#ffaa00", // orange glow
    emissiveIntensity: 3,
    emissiveMap: gradientTexture,
    map: gradientTexture,

    reflectivity: 0.5,
    refractionRatio: 0.98,
  };
  const materialConfig = {
    // backside: true,
    // backsideThickness: 0.3,
    // transmission: 1,
    // thickness: 0.3,
    // chromaticAberration: 5,
    // ior: 1.5,
    color: "#fff",
    side: THREE.DoubleSide,
    roughness: 0,
    metalness: 0,
    // emissive: '#ffaa00',
    emissiveIntensity: 5,
    alphaMap: gradientTexture,
    // transparent: true,
    map: gradientTexture,
    // reflectivity: 0.5,
    // refractionRatio: 0.98,
  };
  return (
    <group position={[0, 0, 0]}>
      <Center>
        <Text3D {...textConfig}>
          Nani
          <meshStandardMaterial {...materialConfig} />
        </Text3D>
      </Center>
    </group>
  );
};
const Hero = () => {
  const theme = useSelector((state) => state.global.theme);
  const [canvasLoaded, setCanvasLoaded] = useState(false);
  const typedRef = useRef(null);
  const typedInstance = useRef(null);
  const [fov, setFov] = useState(50);
  const [w, setW] = useState(1024);
  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: [
          "Full stack developer",
          "Software Engineer",
          "Front end Developer",
          "Back end Developer",
        ],
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        // cursorChar: "✨",
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  useEffect(() => {}, []);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setW(width);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    const timer = setTimeout(() => {
      setCanvasLoaded(true);
    }, 1500);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    // <div className="lg:px-20 px-8 min-h-[85vh] flex flex-col justify-center bg-white text-black dark:bg-[#111] dark:text-white">
    <div
      className={clsx(
        "lg:px-20 px-8 min-h-[85vh] flex flex-col justify-center",
        theme === "dark" ? "text-white bg-[#111]" : "text-black bg-white"
      )}
    >
      <main className="relative grid lg:grid-cols-2">
        <section
          data-scroll
          data-scroll-speed="0"
          className="grid lg:grid-cols-5"
        >
          <div className="col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.4, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 50 }}
              viewport={{ once: true }}
              className=""
            >
              <img
                src="/bg1.jpg"
                alt=""
                height={600}
                width={600}
                className="w-full mx-auto md:max-w-[500px]"
              />
            </motion.div>
          </div>
        </section>

        <section
          className="relative z-10 flex flex-col justify-between"
          data-scroll
          data-scroll-speed="0"
        >
          <div className="lg:max-w-[500px] relative ">
            <motion.h1
              initial={{ opacity: 0, scale: 0.4, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 50 }}
              viewport={{ once: true }}
            >
              Hi There ,
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, scale: 0.4, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 50 }}
              viewport={{ once: true }}
              className="relative inline text-3xl font-semibold border-0 lg:text-4xl border-amber-600"
            >
              <span>I&apos;m</span>
              {!canvasLoaded && (
                <div className={`inline border-0 border-amber-50`}>
                  <span className="font-bold text-amber-500">{""} NANI</span>
                </div>
              )}
              {/* <span className=" text-4xl font-bold text-transparent bg-gradient-to-r from-[#b57e10] via-[#f9df7b] via-[#b57e10] to-[#c7992b] bg-clip-text">Nani</span> */}
              {canvasLoaded && (
                <div
                  className={clsx(
                    "absolute border-0",
                    w < 1024
                      ? "-left-[3rem] top-[-3.5rem]"
                      : "-left-[2rem] top-[-3.1rem]"
                  )}
                >
                  <Canvas>
                    <ambientLight />
                    <directionalLight
                      color="#ffffff"
                      position={[2.5, 8, 5]}
                      intensity={1}
                    />
                    <Float
                      speed={3}
                      rotationIntensity={1}
                      floatIntensity={18}
                      floatingRange={[0, 0]}
                    >
                      <HomeName w={w} />
                    </Float>
                    {/* <Environment preset="city" /> */}
                    {/* <EffectComposer>
                                <Bloom mipmapBlur luminanceThreshold={0} luminanceSmoothing={0} intensity={1} />
                            </EffectComposer> */}
                    {/* <OrbitControls enableZoom={false} enableDamping dampingFactor={0.1} rotateSpeed={0.5} /> */}
                  </Canvas>
                </div>
              )}
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, scale: 0.4, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 50 }}
              viewport={{ once: true }}
              className="pt-1 text-xl font-semibold text-gray-400"
            >
              Passionate&nbsp;
              <motion.span
                ref={typedRef}
                className={clsx(
                  theme === "dark"
                    ? "text-transparent bg-gradient-to-r from-[#b57e10] via-[#f9df7b] via-[#b57e10] to-[#c7992b] bg-clip-text"
                    : "text-black"
                )}
              ></motion.span>
            </motion.h3>

            <motion.h6
              data-scroll
              data-scroll-speed="0"
              initial={{ opacity: 0, scale: 0.4, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              viewport={{ once: true }}
              className="pt-2 text-justify"
            >
              From crafting intuitive user interfaces to architecting complex
              backend solutions, my full-stack skills cover the complete
              development cycle for modern web applications.
            </motion.h6>
          </div>
          <motion.div
            data-scroll
            data-scroll-speed="0"
            initial={{ opacity: 0, scale: 0.4, y: -100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            viewport={{ once: true }}
            className="relative items-center hidden h-full lg:flex"
          >
            <div className="relative flex items-center gap-5 p-5 text-xl">
              <a target="_blank" href={"mailto:chundu.siva2k034@gmail.com"}>
                <SiGmail />
              </a>
              <a target="_blank" href={"https://github.com/NANI-31"}>
                <FaGithub />
              </a>
              <a
                target="_blank"
                href={"https://www.linkedin.com/in/chundu-siva-nageswararo/"}
              >
                <FaLinkedin />
              </a>
              <div className="flex justify-center h-full min-h-[100px] rotate-90 absolute top-[0px] left-[49%]">
                <div
                  className={clsx(
                    theme === "dark" ? "bg-white" : "bg-black",
                    "w-1"
                  )}
                ></div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.4, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.5,
            }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-2 px-3 py-4 mt-5 border-2 border-yellow-200 shadow-inner rounded-3xl backdrop-blur-md w-fit shadow-amber-300"
          >
            <section className="">
              <a
                href={"/#contact"}
                className="px-5 animate-pulsee py-2 font-semibold text-white rounded-xl bg-gradient-to-br from-yellow-500 to-[#cd9118]  to--[#c7992b] "
              >
                Hire Me
              </a>
            </section>
            <section className="flex gap-5 px-2 text-transparent animate-pulse bg-gradient-to-br from-yellow-500 to-yellow-400 bg-clip-text">
              <a
                href={"/resume"}
                className="flex items-center gap-2 font-semibold "
              >
                <CgNotes className="text-amber-300" />

                <h1>Resume</h1>
              </a>
            </section>
          </motion.div>
          {/* <div className=""></div> */}
          <motion.div
            initial={{ opacity: 0.5, scale: 0.4, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            viewport={{ once: true }}
            className="flex gap-4 pt-10 text-2xl max-xs:flex-col xs:justify-center xs:gap-8 lg:hidden"
          >
            <a
              target="_blank"
              className="duration-200 hover:text-orange-400"
              href={"mailto:sebe2k04@gmail.com"}
            >
              <SiGmail />
            </a>
            <a
              target="_blank"
              className="duration-200 hover:text-orange-400"
              href={"https://github.com/Sebe2k04"}
            >
              <FaGithub />
            </a>
            <a
              target="_blank"
              className="duration-200 hover:text-orange-400"
              href={"https://www.linkedin.com/in/sebe2k04/"}
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
