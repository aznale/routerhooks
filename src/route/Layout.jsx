import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/people">People</Link>{"    "}
        <Link to="/contact">Contact</Link>
        <Link to="/personProfile">Profile</Link>
        <Link to="/clock">Clock</Link>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
}
