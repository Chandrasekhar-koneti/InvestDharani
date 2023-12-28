import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./geonav.css";

const GeoNav3 = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <div>
        <p className="title">PROJECTS - WEST HYDERABAD</p>
      </div>
      <div className="geo-nav-container">
        <ul className={click ? "geo-nav-menu active" : "geo-nav-menu"}>
          <li>
            <Link to="/about" className="geo-nav-link">
              <div className="geo-title-image">
                <span> EXIT - 1 FINANCIAL DISTRICT</span>
                {/* <img src="" alt="open flats" /> */}
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projectsgeo" className="geo-nav-link">
              <div className="geo-title-image">
                <span> EXIT - 2 KOLLUR</span>
                {/* <img src="" alt="open flats" /> */}
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projectsgeo" className="geo-nav-link">
              <div className="geo-title-image">
                <span> EXIT - 3 MOOTHANGI</span>
                {/* <img src="" alt="open flats" /> */}
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projectsGroup" className="geo-nav-link">
              <div className="geo-title-image">
                <span> EXIT - 18 TSPA</span>
                {/* <img src="" alt="open flats" /> */}
              </div>
            </Link>
          </li>
          <li>
            <Link to="/socialMedia" className="geo-nav-link">
              <div className="geo-title-image">
                <span> WEST OTHERS</span>
                {/* <img src="" alt="open flats" /> */}
              </div>
            </Link>
          </li>
          <li>
            <Link to="/socialMedia" className="geo-nav-link">
              <div className="geo-title-image">
                <span> WEST OTHERS</span>
                {/* <img src="" alt="open flats" /> */}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default GeoNav3;
