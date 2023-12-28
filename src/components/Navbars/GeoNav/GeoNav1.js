import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./geonav.css";

const GeoNav1 = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <div>
        <p className="title">PROJECTS - NORTH HYDERABAD</p>
      </div>
      <div className="geo-nav-container">
        <ul className={click ? "geo-nav-menu active" : "geo-nav-menu"}>
          <li>
            <Link to="/about" className="geo-nav-link">
              <div className="geo-title-image">
                <span> EXIT - 4 BACHUPALLY</span>
                {/* <img src="" alt="open flats" /> */}
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projectsgeo" className="geo-nav-link">
              <div className="geo-title-image">
                <span> EXIT - 5 DUNDIGAL</span>
                {/* <img src="" alt="open flats" /> */}
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projectsgeo" className="geo-nav-link">
              <div className="geo-title-image">
                <span> EXIT - 6 MEDCHAL</span>
                {/* <img src="" alt="open flats" /> */}
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projectsGroup" className="geo-nav-link">
              <div className="geo-title-image">
                <span> EXIT -7 SHAMIRPET</span>
                {/* <img src="" alt="open flats" /> */}
              </div>
            </Link>
          </li>
          <li>
            <Link to="/socialMedia" className="geo-nav-link">
              <div className="geo-title-image">
                <span> NORTH OTHERS</span>
                {/* <img src="" alt="open flats" /> */}
              </div>
            </Link>
          </li>
          <li>
            <Link to="/socialMedia" className="geo-nav-link">
              <div className="geo-title-image">
                <span> NORTH OTHERS</span>
                {/* <img src="" alt="open flats" /> */}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default GeoNav1;
