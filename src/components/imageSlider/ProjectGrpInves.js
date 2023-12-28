import React from "react";
import slider1 from "../assets/slider1.jpg";
import "./ImageSlider.css";

const ProjectsGroupInvestments = () => {
  return (
    <>
      <div className="projects-ongoing-container">
        <h2>PROJECTS- GROUP INVESTMENTS</h2>
        <div className="image-slider-container">
          <div className="slider-item">
            <img src={slider1} alt="slide1" />
          </div>
          <div className="slider-item">
            <img src={slider1} alt="slide1" />
          </div>
          <div className="slider-item">
            <img src={slider1} alt="slide1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsGroupInvestments;
