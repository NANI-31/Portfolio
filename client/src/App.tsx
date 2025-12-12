import React, { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./components/Home/Hero";
import Navbar from "./components/Navbar";
const About = React.lazy(() => import("./components/Home/About"));
const Education = React.lazy(() => import("./components/Home/Education"));
const Services = React.lazy(() => import("./components/Home/Services"));
const Skills = React.lazy(() => import("./components/Home/Skills"));
const Projects = React.lazy(() => import("./components/Home/Projects"));
const Experience = React.lazy(() => import("./components/Home/Experience"));
const Contact = React.lazy(() => import("./components/Home/Contact"));
const Landing1 = React.lazy(() => import("./Landing1"));

import { navRoutes } from "./data/navRoutes";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const route = navRoutes.find((r) => r.id === hash);
          const offset = route?.offset ?? 0;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 500);
    }
  }, [location]);
  return (
    <>
      <main className="bg-[#111]">
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        </div>
        <div id="education">
          <Suspense fallback={<div>Loading...</div>}>
            <Education />
          </Suspense>
        </div>
        <div id="services">
          <Suspense fallback={<div>Loading...</div>}>
            <Services />
          </Suspense>
        </div>
        <div id="skills">
          <Suspense fallback={<div>Loading...</div>}>
            <Skills />
          </Suspense>
        </div>
        <div id="project">
          <Suspense fallback={<div>Loading...</div>}>
            <Projects />
          </Suspense>
        </div>
        {/* <div id="experience" >
          <Suspense fallback={<div>Loading...</div>}>
            <Experience />
          </Suspense>
        </div> */}
        <div id="contact">
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default App;
