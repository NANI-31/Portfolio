// src/store/globalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");
const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

const initialState = {
  projects: [],
  certifications: [],
  searchTerm: "",
  pagination: {
    currentPage: 1,
    totalPages: 1,
  },
  theme: initialTheme,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    setCertifications: (state, action) => {
      state.certifications = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
      if (state.theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});

export const {
  setProjects,
  setCertifications,
  setSearchTerm,
  setPagination,
  toggleTheme,
} = globalSlice.actions;

export default globalSlice.reducer;
