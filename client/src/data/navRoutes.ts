export interface NavRoute {
  label?: string;
  id: string;
  offset: number;
}

export const navRoutes: NavRoute[] = [
  { label: "Home", id: "home", offset: 120 },
  { label: "About", id: "about", offset: 100 },
  { label: "Skills", id: "skills", offset: 40 },
  { label: "Projects", id: "project", offset: 60 },
  // { label: "Experience", id: "experience", offset: 60 },
  { label: "Contact", id: "contact", offset: -10 },
];
