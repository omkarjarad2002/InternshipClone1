import React, { useState } from "react";
import "./navbar.css";
import { BsSun } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <div className={showMediaIcons ? "mobile-menu-link" : "navbar"}>
        <div className="items_first_box">
          <h3>moonrepo</h3>
          <ul>
            <li className="navLink">Products</li>
            <li className="navLink">Docs</li>
            <li className="navLink">Guides</li>
            <li className="navLink">Blog</li>
            <li className="navLink">GitHub</li>
          </ul>
        </div>
        <div className="items_second_box">
          <ul>
            <li>Sign in</li>
            <li>
              <BsSun />
            </li>
            <li>
              <div className="search_box">
                <input></input>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="hamburger-menu">
        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
          <GiHamburgerMenu />
        </a>
      </div>
    </>
  );
}

export default Navbar;
