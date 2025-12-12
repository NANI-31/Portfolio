// src/store/globalSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Pagination {
  currentPage: number;
  totalPages: number;
}

interface GlobalState {
  projects: any[]; // Replace 'any' with Project interface when defined
  certifications: any[]; // Replace 'any' with Certification interface when defined
  searchTerm: string;
  pagination: Pagination;
  theme: "light" | "dark";
}

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");
const initialTheme =
  (savedTheme as "light" | "dark") || (prefersDark ? "dark" : "light");

const initialState: GlobalState = {
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
    setProjects: (state, action: PayloadAction<any[]>) => {
      state.projects = action.payload;
    },
    setCertifications: (state, action: PayloadAction<any[]>) => {
      state.certifications = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setPagination: (state, action: PayloadAction<Pagination>) => {
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
