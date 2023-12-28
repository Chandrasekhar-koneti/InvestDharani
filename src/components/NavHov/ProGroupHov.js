import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./progrouphov.css";

const ProGroupHov = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  return (
    <div className="navbar-group">
      <div
        className="nav-item-group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        PROJECTS GROUP
        {showOptions && (
          <div className="additional-options-group">
            <Link to="/groupopenplots" className="additional-link-items-group">
              OPEN PLOTS
            </Link>
            <Link
              to="/groupappartments"
              className="additional-link-items-group"
            >
              APPARTMENTS
            </Link>
            <Link to="/groupvillas" className="additional-link-items-group">
              VILLAS
            </Link>
            <Link to="/groupfarmhouses" className="additional-link-items-group">
              FARM HOUSES
            </Link>
            <Link to="/groupagrilands" className="additional-link-items-group">
              AGRI LANDS
            </Link>
            <Link to="/groupcommercial" className="additional-link-items-group">
              COMMERCIAL PROPERTIES
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProGroupHov;
