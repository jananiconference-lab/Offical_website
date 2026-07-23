"use client";

import Link from "next/link";
import styles from "./explore.module.css";

const mission = [
  {
    number: "01",
    title: "RECOGNIZE AND CELEBRATE",
    text: "The invaluable contributions of mothers and women.",
    symbol: "recognize",
  },
  {
    number: "02",
    title: "FOSTER LEADERSHIP",
    text: "Grounded in courage, compassion, and integrity.",
    symbol: "leadership",
  },
  {
    number: "03",
    title: "ADVANCE",
    text: "Health, education, innovation, and lifelong learning.",
    symbol: "advance",
  },
  {
    number: "04",
    title: "ACKNOWLEDGE AND SUPPORT",
    text: "Initiatives that uplift women and communities.",
    symbol: "support",
  },
  {
    number: "05",
    title: "CULTIVATE STRATEGIC PARTNERSHIPS",
    text: "To drive sustainable social impact.",
    symbol: "partnership",
  },
  {
    number: "06",
    title: "FACILITATE MENTORSHIP & COLLABORATION",
    text: "Creating opportunities for professional growth.",
    symbol: "mentorship",
  },
  {
    number: "07",
    title: "STRENGTHEN FAMILIES",
    text: "And community networks.",
    symbol: "family",
  },
  {
    number: "08",
    title: "PROMOTE RESPONSIBLE & INCLUSIVE NATION-BUILDING",
    text: "Building an equitable, resilient and developed nation.",
    symbol: "nation",
  },
];

const values = [
  {
    number: "01",
    title: "DIGNITY",
    text: "Honouring the inherent worth and contributions of every woman and mother.",
  },
  {
    number: "02",
    title: "COMPASSION",
    text: "Leading with empathy, kindness, and a commitment to uplifting others.",
  },
  {
    number: "03",
    title: "LEADERSHIP",
    text: "Inspiring women to lead with courage, vision, and integrity across every sphere of society.",
  },
  {
    number: "04",
    title: "EMPOWERMENT",
    text: "Creating opportunities that enable women to realize their full potential.",
  },
  {
    number: "05",
    title: "SERVICE",
    text: "Encouraging selfless action that transforms lives and strengthens communities.",
  },
  {
    number: "06",
    title: "EXCELLENCE",
    text: "Celebrating achievement while pursuing the highest standards in every endeavor.",
  },
  {
    number: "07",
    title: "INNOVATION",
    text: "Embracing creativity, entrepreneurship, and forward-thinking solutions for societal progress.",
  },
  {
    number: "08",
    title: "INCLUSIVITY",
    text: "Fostering a platform where every voice matters, regardless of background or profession.",
  },
  {
    number: "09",
    title: "COLLABORATION",
    text: "Building meaningful partnerships to create lasting social impact.",
  },
  {
    number: "10",
    title: "NATION BUILDING",
    text: "Empowering women as catalysts for stronger families, resilient communities, and a developed India.",
  },
];

function MissionVector({ type }: { type: string }) {
  return (
    <div className={`${styles.vector} ${styles[type]}`} aria-hidden="true">
      <div className={styles.vectorCircle}>
        <div className={styles.vectorCore} />
      </div>

      <span className={styles.vectorLineA} />
      <span className={styles.vectorLineB} />
    </div>
  );
}

export default function ExplorePage() {
  return (
    <main className={styles.page}>
      {/* ======================================================
          VISION
      ====================================================== */}

      <section className={styles.vision}>
        <div className={styles.ambientGrid} aria-hidden="true" />

        <div className={styles.orbit} aria-hidden="true">
          <span className={styles.orbitOne} />
          <span className={styles.orbitTwo} />
          <span className={styles.orbitDot} />
        </div>

        <header className={styles.topBar}>
          
          <span>OUR VISION</span>
           
        </header>

        <div className={styles.visionContent}>
          <div className={styles.visionLabel}>
            <span className={styles.blueDot} />
            <span>VISION STATEMENT</span>
          </div>

          <h1 className={styles.visionTitle}>
            TO IGNITE
            <br />
            A GLOBAL
            <br />
            <span>MOVEMENT.</span>
          </h1>

          <div className={styles.visionBottom}>
            <span className={styles.visionIndex}>01</span>

            <p>
              Where every mother is honoured, every woman is empowered
              to lead, and every generation is inspired to build a
              compassionate, equitable, and developed nation.
            </p>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <span>EXPLORE</span>
          <span>↓</span>
        </div>
      </section>

      {/* ======================================================
          VISION STATEMENT — LARGE EDITORIAL BREAK
      ====================================================== */}

      <section className={styles.statement}>
        <div className={styles.statementHeader}>
          
        </div>

        <div className={styles.statementContent}>
          <span className={styles.statementNumber}>001</span>

          <p>
            EVERY <strong>MOTHER</strong> IS HONOURED.
            <br />
            EVERY <strong>WOMAN</strong> IS EMPOWERED.
            <br />
            EVERY <strong>GENERATION</strong> IS INSPIRED.
          </p>
        </div>

        <div className={styles.statementFooter}>
          <span>COMPASSION</span>
          <span>×</span>
          <span>EQUITY</span>
          <span>×</span>
          <span>PROGRESS</span>
        </div>
      </section>

      {/* ======================================================
          MISSION
      ====================================================== */}

      <section className={styles.mission}>
        <div className={styles.sectionTop}>
         
          <span>OUR MISSION</span>
          
        </div>

        <div className={styles.missionIntro}>
          <div>
            <span className={styles.microLabel}>[ THE MISSION ]</span>
          </div>

          <h2>
            BUILD THE
            <br />
            CONDITIONS
            <br />
            FOR <span>CHANGE.</span>
          </h2>

          <p>
            We are committed to creating a transformative platform
            that empowers women, strengthens families and builds nations.
          </p>
        </div>

        <div className={styles.missionGrid}>
          {mission.map((item) => (
            <article className={styles.missionCard} key={item.number}>
              <div className={styles.missionCardTop}>
                <span>{item.number}</span>
                <span>JANANI®</span>
              </div>

              <MissionVector type={item.symbol} />

              <div className={styles.missionCardContent}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>

              <span className={styles.cornerArrow}>↗</span>
            </article>
          ))}
        </div>
      </section>

      {/* ======================================================
          MOVING TYPOGRAPHY
      ====================================================== */}

      <section className={styles.marqueeSection} aria-hidden="true">
        <div className={styles.marquee}>
          <div className={styles.marqueeTrack}>
            <span>WOMEN BUILD NATIONS</span>
            <i>✦</i>
            <span>WOMEN BUILD NATIONS</span>
            <i>✦</i>
            <span>WOMEN BUILD NATIONS</span>
            <i>✦</i>
            <span>WOMEN BUILD NATIONS</span>
            <i>✦</i>
          </div>
        </div>
      </section>

      {/* ======================================================
          CORE VALUES
      ====================================================== */}

      <section className={styles.values}>
        <div className={styles.valuesTop}>
         
          <span>CORE VALUES</span>
          <span>10 PRINCIPLES</span>
        </div>

        <div className={styles.valuesHeading}>
          <h2>
            WHAT
            <br />
            WE <span>STAND</span>
            <br />
            FOR.
          </h2>

          <div className={styles.valuesIntro}>
            <span>JANANI / PRINCIPLES</span>

            <p>
              Ten principles shaping how we create opportunity,
              strengthen communities and build lasting social impact.
            </p>
          </div>
        </div>

        <div className={styles.valuesList}>
          {values.map((value) => (
            <article className={styles.valueRow} key={value.number}>
              <span className={styles.valueNumber}>
                {value.number}
              </span>

              <h3>{value.title}</h3>

              <p>{value.text}</p>

              <span className={styles.valueArrow}>↗</span>
            </article>
          ))}
        </div>
      </section>

      {/* ======================================================
          FEATURED VALUES / BENTO
      ====================================================== */}

      <section className={styles.bento}>
        <div className={styles.bentoLarge}>
          <div className={styles.bentoMeta}>
             
            <span>JANANI®</span>
          </div>

          <div className={styles.bigSymbol}>
            <div className={styles.symbolOrbit} />
          
          </div>

          <div className={styles.bentoText}>
            <h3>DIGNITY.</h3>

            <p>
              Every woman. Every mother.
              <br />
              Inherently worthy.
            </p>
          </div>
        </div>

        <div className={styles.bentoBlue}>
          <span className={styles.bentoNumber}>10</span>

          <div>
            <span>PRINCIPLES</span>
            <h3>ONE<br />PURPOSE.</h3>
          </div>
        </div>

        <div className={styles.bentoLight}>
          <div className={styles.bentoMetaDark}>
            
            <span>INDIA</span>
          </div>

          <div className={styles.indiaVector}>
            <span>IND</span>
          </div>

          <div>
            <h3>
              NATION
              <br />
              BUILDING.
            </h3>

            <p>
              Stronger women.
              <br />
              Stronger families.
              <br />
              Stronger nation.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          FINAL
      ====================================================== */}

      <section className={styles.finalSection}>
        <div className={styles.finalTop}>
         
        </div>

        <div className={styles.finalGraphic} aria-hidden="true">
          <span className={styles.finalCircleOne} />
          <span className={styles.finalCircleTwo} />
          <span className={styles.finalCircleThree} />
        </div>

        <div className={styles.finalContent}>
          <p>
            THIS IS MORE THAN
            <br />
            A CONVERSATION.
          </p>

          <h2>
            SHE
            <br />
            BUILDS
            <br />
            <span>NATIONS.</span>
          </h2>

         
        </div>
      </section>
    </main>
  );
}