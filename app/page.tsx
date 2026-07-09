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
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      
      <article>
        <div id="hero">
          <Hero />
        </div>
        
        <div id="countdown">
          <Countdown />
        </div>

        <div id="about">
          <AboutJanani />
        </div>

        <div id="pillars">
          <Pillars />
        </div>

        <div id="programme">
          <ProgrammeSchedule />
        </div>

        <div id="kalam">
          <Kalam /> 
        </div>

        <div id="join-movement">
          <JoinMovement />
        </div>

        <div id="awards">
          <AwardsSection />
        </div>
        
        <FAQ />
      </article>

      <Footer />
    </main>
  );
}