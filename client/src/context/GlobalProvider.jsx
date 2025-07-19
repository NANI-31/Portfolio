import { createContext, useContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [certifications, setCertifications] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    // Check local storage or system preference on initial load
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);

    if (theme === "dark") {
      // console.log(theme);
      document.documentElement.classList.add("dark");
    } else {
      // console.log(theme);
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme;
  };
  return (
    <GlobalContext.Provider
      value={{
        projects,
        setProjects,
        certifications,
        setCertifications,
        searchTerm,
        setSearchTerm,
        pagination,
        setPagination,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
