import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav1.css";

const Nav1 = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <div className="main-nav-container">
        <ul className={click ? "main-nav-menu active" : "main-nav-menu"}>
          <li>
            <Link to="/about" className="main-nav-link">
              EXPERTS
            </Link>
          </li>
          <li>
            <Link to="/projectsOnGoing" className="main-nav-link">
              ADVISES
            </Link>
          </li>
          <li>
            <Link to="/projectsPreLaunch" className="main-nav-link">
              SCENIORIO
            </Link>
          </li>
          <li>
            <Link to="/projectsGroup" className="main-nav-link">
              TRENDS
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav1;
