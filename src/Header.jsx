import React from "react";
import NavBar from "./NavBar";
import HomeHeader from "./HomeHeader";
function Header() {
  return (
    <div className="header-bg">
      <div className="overlay w-full h-full">
        <NavBar />
        <HomeHeader />
      </div>
    </div>
  );
}

export default Header;
