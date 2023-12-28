import React from "react";
import Navbar from "../Navbars/Navbar";
import NavSupport from "../Navbars/NavSupport";
import Nav7 from "../Navbars/Navbar7/Nav7";
import NavbarTestmonials from "../Navbars/NavbarTestmonials";
import ContactNav from "../Navbars/ContactNav";
import ContactNav2 from "../Navbars/ContactNav2";
import Footer from "../Footer";
import farmhouse from "../assets/farmhouse.webp";
import NavSupport2 from "../Navbars/NavSupport2";
import "./Home.css";
import ProjectsOngoing from "../imageSlider/ProjectsOngoing";
import ProjectsPreLaunch from "../imageSlider/ProjectsPreLaunch";
import ProjectsGroupInvestments from "../imageSlider/ProjectGrpInves";
import GeoNav1 from "../Navbars/GeoNav/GeoNav1";
import GeoNav2 from "../Navbars/GeoNav/GeoNav2";
import GeoNav3 from "../Navbars/GeoNav/GeoNav3";
import GeoNav4 from "../Navbars/GeoNav/GeoNav4";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="image-container">
        <img src={farmhouse} alt="farm house " className="image" />
      </div>
      <ProjectsOngoing />
      <ProjectsPreLaunch />
      <ProjectsGroupInvestments />
      <GeoNav1 />
      <GeoNav2 />
      <GeoNav3 />
      <GeoNav4 />
      <NavSupport />
      <NavSupport2 />
      <Nav7 />
      <NavbarTestmonials />
      <ContactNav />
      <ContactNav2 />
      <Footer />
    </div>
  );
};

export default Home;
