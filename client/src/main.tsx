import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import GlobalProvider from "./context/GlobalProvider";
import ProjectsPage from "./apps/projects/ProjectPage";
import ProjectsPage1 from "./apps/projects/ProjectPage1";
import ResumePage from "./apps/resume/ResumePage";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import store from "./redux/store";
import NotFoundPage from "./components/NotFoundPage";

import ScrollToTop from "./components/ScrollToTop";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalProvider>
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<App />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="projects/:id" element={<ProjectsPage1 />} />
              <Route path="resume" element={<ResumePage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </GlobalProvider>
  </StrictMode>
);
