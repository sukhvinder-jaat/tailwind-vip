import "./App.css";
import { Featured } from "./components/Featured";
import { Hero } from "./components/Hero";
import "@splidejs/react-splide/css/sea-green";
import { Integer } from "./components/Integer";
import { Allvipe } from "./components/Allvipe";
import { LongTeam } from "./components/LongTeam";
import { Managment } from "./components/Managment";
import { TeamStars } from "./components/TeamStars";
import { Success } from "./components/Sucess";
import { Footer } from "./components/Footer";
import ImpulseFooter from "./components/ImpulseFooter";
import ImpulseAbout from "./components/ImpulseAbout";
function App() {
  return (
    <div className=" overflow-hidden">
      {/* <Hero />
        <Featured />
        <Integer />
        <Allvipe />
        <LongTeam />
        <Managment />
        <TeamStars />
        <Success />
        <Footer /> */}
      {/* <ImpulseFooter /> */}
      <ImpulseAbout />
    </div>
  );
}

export default App;
