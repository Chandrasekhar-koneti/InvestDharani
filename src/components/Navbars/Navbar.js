import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import AboutHov from "../NavHov/AboutHov";
import OngoingHov from "../NavHov/OnoingHov";
import PrelaunchHov from "../NavHov/PrelaunchHov";
import ProGroupHov from "../NavHov/ProGroupHov";
import SocialmediaHov from "../NavHov/SocialmediaHov";
import ContactusHov from "../NavHov/ContactHov";
import ProfileCard from "./ProfileCard";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [clickedLink, setClickedLink] = useState(null);

  const profileIconRef = useRef(null);

  const handleClick = () => {
    setClick(!click);
  };

  const handleLinkClick = (clickedLink) => {
    setClickedLink(clickedLink);
  };

  return (
    <>
      <div>
        <p className="title">INVEST DHARANI</p>
      </div>
      <div className="nav-container">
        <Link to="/" className="logo-link">
          Logo
          {/* <img src="#" alt="logo" /> */}
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/about" className="nav-link">
              <AboutHov onLinkClick={handleLinkClick} />
              {clickedLink && <div>You clicked: {clickedLink}</div>}
            </Link>
          </li>
          <li>
            <Link to="/projectssupport" className="nav-link">
              <OngoingHov />
            </Link>
          </li>
          <li>
            <Link to="/projectssupport" className="nav-link">
              <PrelaunchHov />
            </Link>
          </li>
          <li>
            <Link to="/projectsGroup" className="nav-link">
              <ProGroupHov />
            </Link>
          </li>
          <li>
            <Link to="/socialMedia" className="nav-link">
              <SocialmediaHov />
            </Link>
          </li>
          <li>
            <Link to="/socialMedia" className="nav-link">
              <ContactusHov />
            </Link>
          </li>
          <li>
            <div className="profile-icon" ref={profileIconRef}>
              <MdAccountCircle size={30} />
            </div>
            <ProfileCard profileIconRef={profileIconRef} />
          </li>
        </ul>
        <div className="ham" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} className="close" />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
