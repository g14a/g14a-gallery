import React, { useState } from "react";
import "./navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>G</span>owtham
            <span> M</span>unukutla
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/landscape">landscape</NavLink>
            </li>
            <li>
              <NavLink to="/street">street</NavLink>
            </li>
            <li>
              <NavLink to="/product">product</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
          </ul>
        </div>

      </nav>
    </>
  );
};

export default Navbar;
