import React, { useState } from "react";

const MainNavbar = () => {
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
        Hover me
        {showOptions && (
          <div className="options">
            <p>Option 1</p>
            <p>Option 2</p>
            <p>Option 3</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainNavbar;
