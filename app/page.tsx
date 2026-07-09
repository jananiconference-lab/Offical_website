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
        <section id="hero">
          <Hero />
        </section>
        
        <section id="countdown">
          <Countdown />
        </section>

        <section id="about">
          <AboutJanani />
        </section>

        <section id="pillars">
          <Pillars />
        </section>

        <section id="programme">
          <ProgrammeSchedule />
        </section>

        <section id="kalam">
          <Kalam /> 
        </section>

        <section id="join-movement">
          <JoinMovement />
        </section>

        <section id="awards">
          <AwardsSection />
        </section>
        
        <FAQ />
      </article>

      <Footer />
    </main>
  );
}