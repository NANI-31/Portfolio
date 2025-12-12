import { Outlet } from "react-router-dom";
import React, { Suspense } from "react";
import Navbar from "./Navbar";
const Footer = React.lazy(() => import("./Footer"));

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Outlet />
        {/* </Suspense> */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
