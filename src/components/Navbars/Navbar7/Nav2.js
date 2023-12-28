import React, { useState } from "react";
import "./Nav2.css";
import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";

const Nav2 = () => {
  const [click, setClick] = useState(false);
  // const handleClick = () => {
  //   setClick(!click);
  // };
  return (
    <div>
      <div className="vlog-nav-container">
        <ul className={click ? "vlog-nav-menu active" : "vlog-nav-menu"}>
          <li>
            <Link to="/about" className="vlog-nav-link">
              <div className="vlog-title-image">
                <span> VLOG 1</span>
                <img src="vlog.jpg" alt="open flats" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projectsvlog" className="vlog-nav-link">
              <div className="vlog-title-image">
                <span>VLOG 2</span>
                <img src="vlog.jpg" alt="open flats" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projectsvlog" className="vlog-nav-link">
              <div className="vlog-title-image">
                <span>VLOG 3</span>
                <img src="vlog.jpg" alt="open flats" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/projectsGroup" className="vlog-nav-link">
              <div className="vlog-title-image">
                <span>VLOG 4</span>
                <img src="vlog.jpg" alt="open flats" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/socialMedia" className="vlog-nav-link">
              <div className="vlog-title-image">
                <span>VLOG 5</span>
                <img src="vlog.jpg" alt="open flats" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="vlog-nav-link">
              <div className="vlog-title-image">
                <span>VLOG 6</span>
                <img src="vlog.jpg" alt="open flats" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="vlog-nav-link">
              <div className="vlog-title-image">
                <span>VLOG 7</span>
                <img src="vlog.jpg" alt="open flats" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="vlog-nav-link">
              <div className="vlog-title-image">
                <span>VLOG 8</span>
                <img src="vlog.jpg" alt="open flats" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="vlog-nav-link">
              <div className="vlog-title-image">
                <span>VLOG 9</span>
                <img src="vlog.jpg" alt="open flats" />
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
    </div>
  );
};

export default Nav2;
