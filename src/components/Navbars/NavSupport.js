import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navsupport.css";
import bank from "../assets/bank.jpg";

const NavSupport = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <div>
        <p className="title">SUPPORT & SURVICES</p>
      </div>
      <div className="support-nav-container">
        <ul className={click ? "support-nav-menu active" : "support-nav-menu"}>
          <li>
            <Link to="/about" className="support-nav-link">
              <div className="support-title-image">
                <span> BANKS PRIVATE & PUBLIC</span>
                <img src={bank} alt="open flats" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projectssupport" className="support-nav-link">
              <div className="support-title-image">
                <span> ARCHITECTS & SURVEYORS</span>
                <img src={bank} alt="open flats" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projectssupport" className="support-nav-link">
              <div className="support-title-image">
                <span> INTERIOR DESIGNERS</span>
                <img src={bank} alt="open flats" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projectsGroup" className="support-nav-link">
              <div className="support-title-image">
                <span> LEGAL ADVISORS</span>
                <img src={bank} alt="open flats" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/socialMedia" className="support-nav-link">
              <div className="support-title-image">
                <span> NBFC COMPANIES</span>
                <img src={bank} alt="open flats" />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavSupport;
