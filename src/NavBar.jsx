import React from "react";
import logo from "./images/logo.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex w-full justify-between px-12 py-8 sticky top-0">
      <img src={logo} alt="" />
      <ul className="flex list-none w-[60%] justify-between">
        <Link className="text-xs font-medium text-white" to="/">
          HOME
        </Link>
        <Link className="text-xs font-medium text-white" to="/features">
          FEATURES
        </Link>
        <Link className="text-xs font-medium text-white" to="/portfolio">
          PORTFOLIO
        </Link>
        <Link className="text-xs font-medium text-white" to="/elements">
          ELEMENTS
        </Link>
        <Link className="text-xs font-medium text-white" to="/about">
          ABOUT
        </Link>
        <Link className="text-xs font-medium text-white" to="/team">
          TEAM
        </Link>
        <Link className="text-xs font-medium text-white" to="/blog">
          BLOG
        </Link>
        <Link className="text-xs font-medium text-white" to="/contact">
          CONTACT
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
