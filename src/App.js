import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";

import OpenplotsAbout from "./components/ABOUT/Openplots";
import AppartmentsAbout from "./components/ABOUT/Appartments";
import VillasAbout from "./components/ABOUT/Villas";
import FarmhousesAbout from "./components/ABOUT/Farmhouses";
import AgrilandsAbout from "./components/ABOUT/Agrilands";
import CommercialAbout from "./components/ABOUT/Commercial";
import Commercialongoing from "./components/ONGOING/Commercial";
import Agrilandsongoing from "./components/ONGOING/Agrilands";
import Farmhousesongoing from "./components/ONGOING/Farmhouses";
import Villasongoing from "./components/ONGOING/Villas";
import Appartmentsongoing from "./components/ONGOING/Appartments";
import Openplotsongoing from "./components/ONGOING/Openplots";
import Appartmentsprelaunch from "./components/PRELAUNCH/Appartments";
import Villasprelaunch from "./components/PRELAUNCH/Villas";
import Farmhousesprelaunch from "./components/PRELAUNCH/Farmhouses";
import Agrilandsprelaunch from "./components/PRELAUNCH/Agrilands";
import Commercialprelaunch from "./components/PRELAUNCH/Commercial";
import Openplotsprelaunch from "./components/PRELAUNCH/Openplots";
import Openplotsgroup from "./components/GROUP/Openplots";
import Appartmentsgroup from "./components/GROUP/Appartments";
import Villasgroup from "./components/GROUP/Villas";
import Farmhousesgroup from "./components/GROUP/Farmhouses";
import Commercialgroup from "./components/GROUP/Commercial";
import Agrilandsgroup from "./components/GROUP/Agrilands";
import Openplotscontact from "./components/CONTACT/Openplots";
import Appartmentscontact from "./components/CONTACT/Appartments";
import Villascontact from "./components/CONTACT/Villas";
import Farmhousescontact from "./components/CONTACT/Farmhouses";
import Agrilandscontact from "./components/CONTACT/Agrilands";
import Commercialcontact from "./components/CONTACT/Commercial";
import Commercialsocialmedia from "./components/SOCIALMEDIA/Commercial";
import Agrilandssocialmedia from "./components/SOCIALMEDIA/Agrilands";
import Farmhousessocialmedia from "./components/SOCIALMEDIA/Farmhouses";
import Villassocialmedia from "./components/SOCIALMEDIA/Villas";
import Appartmentssocialmedia from "./components/SOCIALMEDIA/Appartments";
import Openplotssocialmedia from "./components/SOCIALMEDIA/Openplots";
import Phonesignin from "./components/Phonesignin";
import ProfileCard from "./components/Navbars/ProfileCard";

function App(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* .....about routes...... */}
      <Route path="/aboutopenplots" element={<OpenplotsAbout />} />
      <Route path="/aboutappartments" element={<AppartmentsAbout />} />
      <Route path="/aboutvillas" element={<VillasAbout />} />
      <Route path="/aboutfarmhouses" element={<FarmhousesAbout />} />
      <Route path="/aboutagrilands" element={<AgrilandsAbout />} />
      <Route path="/aboutcommercial" element={<CommercialAbout />} />
      {/*...... projects ongoing routes */}
      <Route path="/ongoingopenplots" element={<Openplotsongoing />} />
      <Route path="/ongoingappartments" element={<Appartmentsongoing />} />
      <Route path="/ongoingvillas" element={<Villasongoing />} />
      <Route path="/ongoingfarmhouses" element={<Farmhousesongoing />} />
      <Route path="/ongoingagrilands" element={<Agrilandsongoing />} />
      <Route path="/ongoingcommercial" element={<Commercialongoing />} />
      {/*...... projects prelaunch routes */}
      <Route path="/prelaunchopenplots" element={<Openplotsprelaunch />} />
      <Route path="/prelaunchappartments" element={<Appartmentsprelaunch />} />
      <Route path="/prelaunchvillas" element={<Villasprelaunch />} />
      <Route path="/prelaunchfarmhouses" element={<Farmhousesprelaunch />} />
      <Route path="/prelaunchagrilands" element={<Agrilandsprelaunch />} />
      <Route path="/prelaunchcommercial" element={<Commercialprelaunch />} />
      {/*...... projects group routes */}
      <Route path="/groupopenplots" element={<Openplotsgroup />} />
      <Route path="/groupappartments" element={<Appartmentsgroup />} />
      <Route path="/groupvillas" element={<Villasgroup />} />
      <Route path="/groupfarmhouses" element={<Farmhousesgroup />} />
      <Route path="/groupagrilands" element={<Agrilandsgroup />} />
      <Route path="/groupcommercial" element={<Commercialgroup />} />
      {/*...... projects socialmedia routes */}
      <Route path="/socialmediaopenplots" element={<Openplotssocialmedia />} />
      <Route
        path="/socialmediaappartments"
        element={<Appartmentssocialmedia />}
      />
      <Route path="/socialmediavillas" element={<Villassocialmedia />} />
      <Route
        path="/socialmediafarmhouses"
        element={<Farmhousessocialmedia />}
      />
      <Route path="/socialmediaagrilands" element={<Agrilandssocialmedia />} />
      <Route
        path="/socialmediacommercial"
        element={<Commercialsocialmedia />}
      />
      {/*...... projects contact routes */}
      <Route path="/contactopenplots" element={<Openplotscontact />} />
      <Route path="/contactappartments" element={<Appartmentscontact />} />
      <Route path="/contactvillas" element={<Villascontact />} />
      <Route path="/contactfarmhouses" element={<Farmhousescontact />} />
      <Route path="/contactagrilands" element={<Agrilandscontact />} />
      <Route path="/contactcommercial" element={<Commercialcontact />} />

      <Route path="/login" element={<Phonesignin />} />
    </Routes>
  );
}

export default App;
