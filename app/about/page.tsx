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
  const icons: Record<string, React.ReactNode> = {
    recognize: (
      <>
        {/* Mother + child */}
        <circle cx="45" cy="34" r="11" />
        <circle cx="67" cy="51" r="7" />

        <path d="M28 91C29 65 35 49 45 46C56 43 63 54 64 70" />
        <path d="M45 48C47 64 56 75 75 78" />
        <path d="M37 68C46 81 57 88 74 86" />

        <path d="M76 40V54" />
        <path d="M69 47H83" />
      </>
    ),

    leadership: (
      <>
        {/* Mountain / woman rising */}
        <path d="M19 96L48 62L62 76L84 45L105 96" />

        <circle cx="84" cy="30" r="8" />

        <path d="M84 38V65" />
        <path d="M84 47L69 58" />
        <path d="M84 47L99 56" />
        <path d="M84 65L73 82" />
        <path d="M84 65L96 82" />

        <path d="M97 21L104 14" />
        <path d="M105 29H115" />
      </>
    ),

    advance: (
      <>
        {/* Book */}
        <path d="M17 54C34 48 48 51 60 61V98C47 88 33 85 17 90Z" />
        <path d="M103 54C86 48 72 51 60 61V98C73 88 87 85 103 90Z" />

        {/* Knowledge */}
        <circle cx="60" cy="30" r="13" />

        <path d="M54 43V49" />
        <path d="M66 43V49" />

        <path d="M60 8V14" />
        <path d="M39 17L44 22" />
        <path d="M81 17L76 22" />

        <path d="M60 61V98" />
      </>
    ),

    support: (
      <>
        {/* People */}
        <circle cx="60" cy="37" r="9" />
        <circle cx="37" cy="45" r="7" />
        <circle cx="83" cy="45" r="7" />

        <path d="M45 70C46 57 51 51 60 51C69 51 74 57 75 70" />
        <path d="M25 72C26 59 31 54 38 54C43 54 47 57 49 62" />
        <path d="M95 72C94 59 89 54 82 54C77 54 73 57 71 62" />

        {/* Supporting hands */}
        <path d="M13 79C25 78 32 83 42 95" />
        <path d="M107 79C95 78 88 83 78 95" />
        <path d="M42 95C51 104 69 104 78 95" />
      </>
    ),

    partnership: (
      <>
        {/* Handshake */}
        <path d="M15 55L35 40L51 49" />
        <path d="M105 55L85 40L69 49" />

        <path d="M35 40L48 32C54 29 58 31 63 35L72 43" />

        <path d="M15 55L33 78L44 69" />
        <path d="M105 55L87 78L76 69" />

        <path d="M44 69L58 81C62 84 66 84 69 80" />
        <path d="M51 61L70 78" />
        <path d="M58 56L77 72" />

        <path d="M63 35L54 44C50 48 53 54 58 53L69 49" />
      </>
    ),

    mentorship: (
      <>
        {/* Steps */}
        <path d="M18 99H43V81H65V62H88V42H106" />

        {/* Mentee */}
        <circle cx="38" cy="54" r="7" />
        <path d="M38 61V79" />
        <path d="M38 66L28 74" />
        <path d="M38 66L48 71" />

        {/* Mentor */}
        <circle cx="82" cy="23" r="8" />
        <path d="M82 31V54" />
        <path d="M82 38L69 48" />
        <path d="M82 38L94 47" />

        {/* connection */}
        <path d="M49 54C59 43 65 39 73 36" />
        <path d="M69 34L74 36L72 42" />
      </>
    ),

    family: (
      <>
        {/* Home */}
        <path d="M17 55L60 20L103 55" />
        <path d="M27 48V101H93V48" />

        {/* Parents */}
        <circle cx="45" cy="62" r="7" />
        <circle cx="75" cy="62" r="7" />
        <circle cx="60" cy="72" r="5" />

        <path d="M45 69V89" />
        <path d="M75 69V89" />
        <path d="M60 77V92" />

        <path d="M45 74L60 82L75 74" />

        {/* Heart */}
        <path d="M55 42C55 35 64 34 66 40C69 34 78 35 78 42C78 48 66 55 66 55C66 55 55 48 55 42Z" />
      </>
    ),

    nation: (
      <>
        {/* Flag */}
        <path d="M34 98V23" />
        <path d="M34 26C51 17 65 35 83 25V51C65 61 51 43 34 52" />

        {/* Community */}
        <circle cx="57" cy="72" r="6" />
        <circle cx="78" cy="72" r="6" />
        <circle cx="99" cy="72" r="6" />

        <path d="M48 96C49 84 52 79 57 79C62 79 65 84 66 96" />
        <path d="M69 96C70 84 73 79 78 79C83 79 86 84 87 96" />
        <path d="M90 96C91 84 94 79 99 79C104 79 107 84 108 96" />

        <path d="M43 107H112" />
      </>
    ),
  };

  return (
    <div className={styles.missionVector} aria-hidden="true">
      <svg
        viewBox="0 0 120 120"
        className={styles.missionSvg}
      >
        {icons[type]}
      </svg>

      <span className={styles.vectorOrbit} />
      <span className={styles.vectorDot} />
    </div>
  );
}
export default function ExplorePage() {
  return (
    
    <main className={styles.page}>
        <Link href="/" className={styles.backButton} aria-label="Back to home">
  <svg
    viewBox="0 0 40 20"
    fill="none"
    aria-hidden="true"
  >
    <path d="M39 10H2" />
    <path d="M10 2L2 10L10 18" />
  </svg>
</Link>

      {/* ======================================================
          VISION
      ====================================================== */}

      <section className={styles.vision}>

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
            <span className={styles.visionIndex}></span>

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
          <span className={styles.statementNumber}></span>

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