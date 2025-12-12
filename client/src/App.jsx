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

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.replace("#", "");
    if (hash) {
      // Retry finding the element for up to 2 seconds
      let attempts = 0;
      const interval = setInterval(() => {
        const element = document.getElementById(hash);
        if (element) {
          console.log("Scrolling to:", hash);
          element.scrollIntoView({ behavior: "smooth" });
          clearInterval(interval);
        } else {
          console.log("Waiting for element:", hash);
        }

        attempts++;
        if (attempts > 20) {
          // 2 seconds (100ms * 20)
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [location]);
  return (
    <>
      <main className="bg-[#111]">
        <div id="home">
          <Hero />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <div id="about">
            <About />
          </div>
          <div id="education">
            <Education />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="project">
            <Projects />
          </div>
          {/* <div id="experience" >
          <Experience />
        </div> */}
          <div id="contact">
            <Contact />
          </div>
        </Suspense>
      </main>
    </>
  );
};

export default App;
