import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contactnav.css";

const ContactNav = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <div>
        <p className="title">CONTACT US FOR</p>
      </div>
      <div className="contact-nav-container">
        <ul className={click ? "contact-nav-menu active" : "contact-nav-menu"}>
          <li>
            <Link to="/about" className="contact-nav-link">
              <div className="contact-contact-title-image">
                <span> LEAD GENERATIONS</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projectscontact" className="contact-nav-link">
              <div className="contact-title-image">
                <span> DIGITAL MARKETING</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projectscontact" className="contact-nav-link">
              <div className="contact-title-image">
                <span> DRONE PHOTOGRAPHY</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projectsGroup" className="contact-nav-link">
              <div className="contact-title-image">
                <span> PROJECT LAUNCHING</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/socialMedia" className="contact-nav-link">
              <div className="contact-title-image">
                <span> PROJECT PERMISSIONS</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactNav;
