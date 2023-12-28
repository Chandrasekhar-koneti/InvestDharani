import React, { useState } from "react";
import { Link } from "react-router-dom";

const SocialmediaHov = () => {
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
        SOCIAL MEDIA
        {/* {showOptions && (
          <div className="additional-options">
            <Link to="/socialmediaopenplots" className="additional-link-items">
              OPEN PLOTS
            </Link>
            <Link
              to="/socialmediaappartments"
              className="additional-link-items"
            >
              Appartments
            </Link>
            <Link to="/socialmediavillas" className="additional-link-items">
              VILLAS
            </Link>
            <Link to="/socialmediafarmhouses" className="additional-link-items">
              FARM HOUSES
            </Link>
            <Link to="/socialmediaagrilands" className="additional-link-items">
              AGRI LANDS
            </Link>
            <Link to="/socialmediacommercial" className="additional-link-items">
              COMMERCIAL PROPERTIES
            </Link>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default SocialmediaHov;
