import React, { useState } from "react";
import { Link } from "react-router-dom";

const OngoingHov = () => {
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
        className="nav-item"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        PROJECTS ONGOING
        {showOptions && (
          <div className="additional-options">
            <Link to="/ongoingopenplots" className="additional-link-items">
              OPEN PLOTS
            </Link>
            <Link to="/ongoingappartments" className="additional-link-items">
              APPARTMENTS
            </Link>
            <Link to="/ongoingvillas" className="additional-link-items">
              VILLAS
            </Link>
            <Link to="/ongoingfarmhouses" className="additional-link-items">
              FARM HOUSES
            </Link>
            <Link to="/ongoingagrilands" className="additional-link-items">
              AGRI LANDS
            </Link>
            <Link to="/ongoingcommercial" className="additional-link-items">
              COMMERCIAL PROPERTIES
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default OngoingHov;
