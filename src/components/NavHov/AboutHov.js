import React, { useState } from "react";
import { Link } from "react-router-dom";

const AboutHov = () => {
  // const [showOptions, setShowOptions] = useState(false);

  // const handleMouseEnter = () => {
  //   setShowOptions(true);
  // };

  // const handleMouseLeave = () => {
  //   setShowOptions(false);
  // };

  return (
    <div className="navbar">
      <div
        className="nav-item"
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        ABOUT
        {/* {showOptions && (
          <div className="additional-options">
            <Link to="/aboutopenplots" className="additional-link-items">
              OPEN PLOTS
            </Link>
            <Link to="/aboutappartments" className="additional-link-items">
              Appartments
            </Link>
            <Link to="/aboutvillas" className="additional-link-items">
              VILLAS
            </Link>
            <Link to="/aboutfarmhouses" className="additional-link-items">
              FARM HOUSES
            </Link>
            <Link to="/aboutagrilands" className="additional-link-items">
              AGRI LANDS
            </Link>
            <Link to="/aboutcommercial" className="additional-link-items">
              COMMERCIAL PROPERTIES
            </Link>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default AboutHov;
