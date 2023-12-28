import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navsupport.css";
import audit from "../assets/audit.jpg";

const NavSupport = () => {
  const [click, setClick] = useState(false);
  // const handleClick = () => {
  //   setClick(!click);
  // };
  return (
    <>
      <div className="support-nav-container">
        <ul className={click ? "support-nav-menu active" : "support-nav-menu"}>
          <li>
            <Link to="/contact" className="support-nav-link">
              <div className="support-title-image">
                <span> AUDITORS & CONSULTANTS </span>
                <img src={audit} alt="open flats" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="support-nav-link">
              <div className="support-title-image">
                <span> ADDVERTISEMENT AGENCIES </span>
                <img src={audit} alt="open flats" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="support-nav-link">
              <div className="support-title-image">
                <span> INFRASTRUCTURE AGENCIES </span>
                <img src={audit} alt="open flats" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="support-nav-link">
              <div className="support-title-image">
                <span> DIGITAL MARKETING COMPANIES</span>
                <img src={audit} alt="open flats" />
              </div>
            </Link>
          </li>
        </ul>
        {/* <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "black" }} />
          ) : (
            <FaBars size={20} style={{ color: "black" }} />
          )}
        </div> */}
      </div>
    </>
  );
};

export default NavSupport;
