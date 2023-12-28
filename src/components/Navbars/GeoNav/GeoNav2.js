import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./geonav.css";

const GeoNav2 = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <div>
        <p className="title">PROJECTS - EAST HYDERABAD</p>
      </div>
      <div className="geo-nav-container">
        <ul className={click ? "geo-nav-menu active" : "geo-nav-menu"}>
          <li>
            <Link to="/about" className="geo-nav-link">
              <div className="geo-title-image">
                <span> EXIT - 8 KEESARA</span>
                {/* <img src="" alt="open flats" /> */}
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projectssupport" className="geo-nav-link">
              <div className="geo-title-image">
                <span> EXIT - 9 GHATKESAR</span>
                {/* <img src="" alt="open flats" /> */}
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projectssupport" className="geo-nav-link">
              <div className="geo-title-image">
                <span> EXIT - 10 TARAMATIPET</span>
                {/* <img src="" alt="open flats" /> */}
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projectsGroup" className="geo-nav-link">
              <div className="geo-title-image">
                <span> EXIT - 11 HAYATH NAGAR</span>
                {/* <img src="" alt="open flats" /> */}
              </div>
            </Link>
          </li>
          <li>
            <Link to="/socialMedia" className="geo-nav-link">
              <div className="geo-title-image">
                <span> EIXT - 12 BANGLORE</span>
                {/* <img src="" alt="open flats" /> */}
              </div>
            </Link>
          </li>
          <li>
            <Link to="/socialMedia" className="geo-nav-link">
              <div className="geo-title-image">
                <span> EAST OTHERS</span>
                {/* <img src="" alt="open flats" /> */}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default GeoNav2;
