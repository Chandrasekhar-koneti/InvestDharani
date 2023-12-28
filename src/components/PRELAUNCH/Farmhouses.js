import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbars/Navbar";

const Farmhousesprelaunch = () => {
  const videoUrl = "https://youtu.be/NJcw8voO-M4?si=pz0u51XUNBgryyVG";
  return (
    <>
      <Navbar />
      <div className="display-container">
        <div className="display-image">
          <img src="vlog.jpg" alt="testing" className="display-image" />
        </div>
        <div className="display-video">
          <video controls width="100%">
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
        <div className="display-description">
          <h1>description</h1>
          <p> description text.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Farmhousesprelaunch;
