import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./prelaunchhov.css";

const PrelaunchHov = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  return (
    <div className="navbar">
      <div
        className="nav--hov-item"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        PROJECTS PRE-LAUNCH
        {showOptions && (
          <div className="additional-options">
            <Link to="/prelaunchopenplots" className="additional-link-items">
              OPEN PLOTS
            </Link>
            <Link to="/prelaunchappartments" className="additional-link-items">
              APPARTMENTS
            </Link>
            <Link to="/prelaunchvillas" className="additional-link-items">
              VILLAS
            </Link>
            <Link to="/prelaunchfarmhouses" className="additional-link-items">
              FARM HOUSES
            </Link>
            <Link to="/prelaunchagrilands" className="additional-link-items">
              AGRI LANDS
            </Link>
            <Link to="/prelaunchcommercial" className="additional-link-items">
              COMMERCIAL PROPERTIES
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrelaunchHov;
