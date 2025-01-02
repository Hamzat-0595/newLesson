import Navbar from "./Navbar/Navbar";
import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__name">
        <div className="header__vertical">The</div>
        <div className="header__horizontal">Unicode</div>
      </div>
      <Navbar />
      <div className="header__border"></div>
    </div>
  );
};

export default Header;
