import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./geonav4.css";

const GeoNav4 = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <div>
        <p className="title">PROJECTS - SOUTH HYDERABAD</p>
      </div>
      <div className="geo4-nav-container">
        <ul className={click ? "geo4-nav-menu active" : "geo4-nav-menu"}>
          <li>
            <Link to="/about" className="geo4-nav-link">
              <div className="geo4-title-image">
                <span> EXIT - 13 RAVIRYALA</span>
                {/* <img src="" alt="open flats" /> */}
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projectsgeo4" className="geo4-nav-link">
              <div className="geo4-title-image">
                <span> EXIT - 14 THUKKUGUDA</span>
                {/* <img src="" alt="open flats" /> */}
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projectsgeo4" className="geo4-nav-link">
              <div className="geo4-title-image">
                <span> EXIT - 15 PEDDA GOLCONDA</span>
                {/* <img src="" alt="open flats" /> */}
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projectsGroup" className="geo4-nav-link">
              <div className="geo4-title-image">
                <span> EXIT - 16 SHAMSHABAD</span>
                {/* <img src="" alt="open flats" /> */}
              </div>
            </Link>
          </li>
          <li>
            <Link to="/socialMedia" className="geo4-nav-link">
              <div className="geo4-title-image">
                <span> EXIT - 17 RAJENDRA NAGAR</span>
                {/* <img src="" alt="open flats" /> */}
              </div>
            </Link>
          </li>
          <li>
            <Link to="/socialMedia" className="geo4-nav-link">
              <div className="geo4-title-image">
                <span> SOUTH OTHERS</span>
                {/* <img src="" alt="open flats" /> */}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default GeoNav4;
