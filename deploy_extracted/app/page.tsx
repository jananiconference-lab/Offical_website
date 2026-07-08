import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Countdown from "../components/Countdown";
import AboutJanani from "../components/AboutJanani";
import ProgrammeSchedule from "../components/ProgrammeSchedule";
import Kalam from "../components/kalam";
import Footer from "../components/Footer";
import AwardsSection from "../components/AwardsSection";
import Speakers from "../components/Speakers";
import JoinMovement from "../components/JoinMovement";
import Pillars from "../components/Pillars";

export default function Home() {
  return (
    <main>
        <Navbar />
        <Hero />
        <Countdown />
        <AboutJanani />
        <Pillars />
        <ProgrammeSchedule />
        <Kalam /> 
        <JoinMovement />
        <AwardsSection />
        <Footer />
    </main>
  );
}