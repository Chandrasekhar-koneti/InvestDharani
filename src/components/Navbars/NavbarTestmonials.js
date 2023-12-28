import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbartestmonials.css";
import numbers from "../assets/numbers.png";

const NavbarTestmonials = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <div>
        <p className="title">TESTOMONIALS</p>
      </div>
      <div className="testmonials-nav-container">
        <ul
          className={
            click ? "testmonials-nav-menu active" : "testmonials-nav-menu"
          }
        >
          <li>
            <Link to="/about" className="testmonials-nav-link">
              <div className="testmonials-title-image">
                <span> 1</span>
                <img src={numbers} alt="open flats" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projectstestmonials" className="testmonials-nav-link">
              <div className="testmonials-title-image">
                <span> 2</span>
                <img src={numbers} alt="open flats" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projectstestmonials" className="testmonials-nav-link">
              <div className="testmonials-title-image">
                <span> 3</span>
                <img src={numbers} alt="open flats" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projectsGroup" className="testmonials-nav-link">
              <div className="testmonials-title-image">
                <span> 4</span>
                <img src={numbers} alt="open flats" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/socialMedia" className="testmonials-nav-link">
              <div className="testmonials-title-image">
                <span> 5</span>
                <img src={numbers} alt="open flats" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="testmonials-nav-link">
              <div className="testmonials-title-image">
                <span> 6</span>
                <img src={numbers} alt="open flats" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="testmonials-nav-link">
              <div className="testmonials-title-image">
                <span> 7</span>
                <img src={numbers} alt="open flats" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="testmonials-nav-link">
              <div className="testmonials-title-image">
                <span> 8</span>
                <img src={numbers} alt="open flats" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="testmonials-nav-link">
              <div className="testmonials-title-image">
                <span> 9</span>
                <img src={numbers} alt="open flats" />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarTestmonials;
