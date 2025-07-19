import React, { Suspense } from "react";
import Hero from "./components/Home/Hero";
const About = React.lazy(() => import("./components/Home/About"));
const Education = React.lazy(() => import("./components/Home/Education"));
const Services = React.lazy(() => import("./components/Home/Services"));
const Skills = React.lazy(() => import("./components/Home/Skills"));
const Projects = React.lazy(() => import("./components/Home/Projects"));
const Experience = React.lazy(() => import("./components/Home/Experience"));
const Contact = React.lazy(() => import("./components/Home/Contact"));
const Landing1 = React.lazy(() => import("./Landing1"));

const App = () => {
  return (
    <>
      <main className="bg-[#111]">
        <div>{/* <Landing1 /> */}</div>
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
  // const [landing, setLanding] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLanding(false);
  //   }, 3200);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // });
  // return <div>{landing ? <Landing1 /> : <All />}</div>;
  // return <Landing1 />;

  // return (
  // 	<div className="h-screen">
  // 		<Canvas>
  // 			<LiquidImage url="/bg1.jpg" />
  // 		</Canvas>
  // 	</div>
  // );
  // return (
  // 	<div className="border" style={{ borderImage: 'linear-gradient(to right, #b57e10, #f9df7b, #b57e10, #c7992b) 1' }}>
  // 		hello
  // 	</div>
  // );
};

export default App;
