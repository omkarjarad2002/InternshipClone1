import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="items_first_box">
        <h3>moonrepo</h3>
        <ul>
          <li>Products</li>
          <li>Docs</li>
          <li>Guides</li>
          <li>Blog</li>
          <li>GitHub</li>
        </ul>
      </div>
      <div className="items_second_box">
        <ul>
          <li>Sign in</li>
          <li>
            {" "}
            <img src="../Images/sun.png" />
          </li>
          <li>
            <div className="search_box">
              <img src="../Images/search.png" />
              <p>Search</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
