import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactusHov = () => {
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
        CONTACT US
        {/* {showOptions && (
          <div className="additional-options">
            <Link to="/contactopenplots" className="additional-link-items">
              OPEN PLOTS
            </Link>
            <Link to="/contactappartments" className="additional-link-items">
              Appartments
            </Link>
            <Link to="/contactvillas" className="additional-link-items">
              VILLAS
            </Link>
            <Link to="/contactfarmhouses" className="additional-link-items">
              FARM HOUSES
            </Link>
            <Link to="/contactagrilands" className="additional-link-items">
              AGRI LANDS
            </Link>
            <Link to="/contactcommercial" className="additional-link-items">
              COMMERCIAL PROPERTIES
            </Link>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ContactusHov;
