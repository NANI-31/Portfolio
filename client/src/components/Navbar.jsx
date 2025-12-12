import { useState } from "react";
import { Drawer } from "@mui/material";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FaSun, FaMoon } from "react-icons/fa";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/globalSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
// import { div } from 'three/tsl';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.global.theme);
  const [open, setOpen] = useState(false);
  const toggleDrawer = (fn) => {
    setOpen(fn);
  };
  const routes = [
    { label: "Home", id: "home", offset: 120 },
    { label: "About", id: "about", offset: 100 },
    { label: "Skills", id: "skills", offset: 40 },
    { label: "Projects", id: "project", offset: 60 },
    // { label: "Experience", id: "experience", offset: 60 },
    { label: "Contact", id: "contact", offset: -10 },
  ];
  const handleNavigation = (route) => {
    toggleDrawer(false);
    const sectionId = route.id.toLowerCase();

    if (location.pathname === "/" && document.getElementById(sectionId)) {
      const target = document.getElementById(sectionId);
      const offset = route.offset ?? 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <div
      className={clsx(
        theme === "dark" ? "bg-[#111]" : "bg-white",
        "top-0 left-0 z-[100]"
      )}
    >
      <div className="fixed lg:p-5 w-full lg:px-20 p-3 z-[100] ">
        <div className="p-[2px] rounded-2xl">
          <main
            className="flex items-center justify-between p-5 bg-white/10 rounded-2xl backdrop-blur-xl"
            style={{
              border: "1px solid black", // Make the actual border transparent
            }}
          >
            <section className="lg:pl-5">
              <div className="relative flex items-center border">
                <h1
                  className={clsx(
                    theme === "dark" ? "text-white" : "text-black",
                    "text-4xl hello absolute top-[-15px]"
                  )}
                >
                  SiVa✨
                </h1>
              </div>
            </section>
            <section className="relative hidden gap-8 font-semibold border-0 border-amber-500 lg:flex rounded-2xl">
              {routes.map((route, index) => (
                <button
                  // to={route.id.toLowerCase()}
                  // spy={true}
                  // smooth={true}
                  key={index}
                  className={clsx(
                    theme === "dark" ? "text-white" : "text-black",
                    "duration-200 hover:opacity-75 hover:tracking-wide cursor-pointer"
                  )}
                  onClick={() => handleNavigation(route)}
                >
                  {route.label}
                </button>
              ))}
              <span
                onClick={() => dispatch(toggleTheme())}
                className="absolute text-xl transition rounded cursor-pointer -right-20 hover:scale-110"
              >
                {theme === "light" ? "☀️" : "🌙"}
              </span>
            </section>
            <section className="hidden lg:block">
              <span
                onClick={() => handleNavigation({ id: "contact", offset: -10 })}
                className="px-5 cursor-pointer py-2 font-semibold text-black bg-gradient-to-r from-[#b57e10] via-[#f9df7b] via-[#b57e10] to-[#c7992b] rounded-xl"
              >
                Hire Me
              </span>
            </section>

            <section className="text-2xl lg:hidden">
              <HiOutlineMenuAlt4 onClick={() => toggleDrawer(true)} />
            </section>
          </main>
        </div>
      </div>
      <div className="pt-[120px]" />
      <div className="">
        <Drawer
          open={open}
          onClose={() => toggleDrawer(false)}
          PaperProps={{
            sx: {
              backgroundColor: "var(--bg-color)",
              color: "var(--text-color)",
            },
          }}
        >
          <section className="flex flex-col justify-between w-full min-w-[250px] max-h-[100vh] px-10">
            <div>
              <div className="flex justify-end pt-10">
                <IoMdClose
                  className="text-4xl"
                  onClick={() => toggleDrawer(false)}
                />
              </div>
              <div className="flex justify-center pt-10 font-bold text-2xl tracking-[5px]">
                <h1>Menu</h1>
              </div>
              <div className="relative grid gap-5 pt-10 text-center ">
                {routes.map((route, index) => (
                  <div key={index}>
                    <button
                      onClick={() => handleNavigation(route)}
                      className="text-xl cursor-pointer"
                    >
                      {route.label}
                    </button>
                  </div>
                ))}
                <span
                  onClick={() => {
                    toggleDrawer(false), dispatch(toggleTheme());
                  }}
                  className="text-xl transition rounded cursor-pointer absolutee -right-20 hover:scale-110"
                >
                  {theme === "light" ? "☀️" : "🌙"}
                </span>
                <div className="pt-5">
                  <span
                    onClick={() => {
                      toggleDrawer(false),
                        handleNavigation({ id: "contact", offset: 90 });
                    }}
                    className={clsx(
                      theme === "dark"
                        ? "text-black bg-white"
                        : "text-white bg-[#111]",
                      "px-5 py-2 font-semibold cursor-pointer rounded-xl"
                    )}
                  >
                    Hire Me
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-10 pb-10">
              <div className="flex items-center gap-5">
                <h1 className="text-3xl text-transparent bg-gradient-to-r from-[#b57e10] via-[#f9df7b] via-[#b57e10] to-[#c7992b] bg-clip-text text-center hello">
                  Nani
                </h1>
              </div>
            </div>
          </section>
        </Drawer>
      </div>
    </div>
  );
};
// ${activeSection === route.label.toLowerCase() ? 'text-white font-bold' : ''}
export default Navbar;
