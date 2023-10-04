import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="left-container"></div>
      <div className="nav-title">Home Organizer</div>
      <div className="right-container">
        {/* adding hamburger menu here with state */}
        <button className="hamburger" onClick={() => setShowMenu(!showMenu)}>
          &#9776;
        </button>
        {/* statment to handle the state and show hamburger menu */}
        <ul className={`nav-links ${showMenu ? "active" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
