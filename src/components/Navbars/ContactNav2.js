import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Contactnav.css";

const ContactNav2 = () => {
  const [click, setClick] = useState(false);
  // const handleClick = () => {
  //   setClick(!click);
  // };
  return (
    <>
      <div className="contact-nav-container">
        <ul className={click ? "contact-nav-menu active" : "contact-nav-menu"}>
          <li>
            <Link to="/contact" className="contact-nav-link">
              <div className="contact-title-image">
                <span>LEGAL OPINIONS </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="contact-nav-link">
              <div className="contact-title-image">
                <span> BANKING SERVICES </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="contact-nav-link">
              <div className="contact-title-image">
                <span> DOOH ADDVERTISEMENS </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="contact-nav-link">
              <div className="contact-title-image">
                <span> DESIHNING & PRINTING</span>
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
      <div style={{ marginBottom: "20px" }}></div>
    </>
  );
};

export default ContactNav2;
