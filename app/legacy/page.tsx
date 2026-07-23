import Image from "next/image";
import Link from "next/link";
import styles from "./legacy.module.css";

const legacyItems = [
  {
    number: "01",
    year: "AEROSPACE",
    title: "ISRO",
    label: "THE SCIENTIST",
    description:
      "A defining force in India's space programme and the development of the Satellite Launch Vehicle.",
    vector: "orbit",
  },
  {
    number: "02",
    year: "DEFENCE",
    title: "MISSILE MAN",
    label: "THE VISIONARY",
    description:
      "His work in strategic missile development helped reshape India's technological confidence.",
    vector: "trajectory",
  },
  {
    number: "03",
    year: "2002 — 2007",
    title: "PRESIDENT",
    label: "THE PEOPLE'S PRESIDENT",
    description:
      "As the 11th President of India, he carried science, humility and a vision for a developed nation into public life.",
    vector: "nation",
  },
  {
    number: "04",
    year: "FOREVER",
    title: "TEACHER",
    label: "THE MENTOR",
    description:
      "He dedicated his life to inspiring young minds to dream, question and participate in nation building.",
    vector: "signal",
  },
];

function LegacyVector({ type }: { type: string }) {
  if (type === "orbit") {
    return (
      <div className={`${styles.cardVector} ${styles.orbitVector}`}>
        <span className={styles.orbitRingOne} />
        <span className={styles.orbitRingTwo} />
        <span className={styles.orbitRingThree} />
        <i />
      </div>
    );
  }

  if (type === "trajectory") {
    return (
      <div className={`${styles.cardVector} ${styles.trajectoryVector}`}>
        <span />
        <span />
        <span />
        <i />
      </div>
    );
  }

  if (type === "nation") {
    return (
      <div className={`${styles.cardVector} ${styles.nationVector}`}>
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className={`${styles.cardVector} ${styles.signalVector}`}>
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

export default function LegacyPage() {
  return (
    <main className={styles.legacyPage}>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.hero}>
        <Image
          src="/images/kalam.png"
          alt="Portrait of Dr. A. P. J. Abdul Kalam"
          fill
          className={styles.heroImage}
          sizes="100vw"
        />

        <div className={styles.heroOverlay} />

        <div className={styles.heroMeta}>
          <span>01 / LEGACY</span>
          <span>1931 — 2015</span>
        </div>

        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>INSPIRED BY</span>

          <h1>
            DR. A.P.J.
            <br />
            <span>ABDUL KALAM</span>
          </h1>

          <p>
            Scientist. Teacher. Visionary. A life devoted to the idea that
            dreams, when combined with action, can transform a nation.
          </p>
        </div>

        <div className={styles.scrollMark}>
          <span>SCROLL TO EXPLORE</span>

          <div className={styles.scrollLine}>
            <i />
          </div>
        </div>
      </section>

      {/* =====================================================
          QUOTE
      ===================================================== */}

      <section className={styles.quoteSection}>
        <div className={styles.quoteMeta}>
          <span>02 / A VISION</span>
          <span>WORDS THAT CONTINUE TO MOVE GENERATIONS</span>
        </div>

        <blockquote>
          “Dream is not that which you see while sleeping. It is something
          that does not let you sleep.”
        </blockquote>

        <div className={styles.quoteFooter}>
          <span>DR. A.P.J. ABDUL KALAM</span>

          <div className={styles.quoteOrbit}>
            <span />
            <span />
            <i />
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className={styles.introSection}>
        <div className={styles.introLabel}>
          <span>03</span>
          <span>/</span>
          <span>HIS LEGACY</span>
        </div>

        <div className={styles.introGrid}>
          <h2>
            A LIFE
            <br />
            BUILT AROUND
            <br />
            POSSIBILITY.
          </h2>

          <div className={styles.introCopy}>
            <p>
              Born in Rameswaram in 1931, Dr. A.P.J. Abdul Kalam rose from
              humble beginnings to become one of India's most influential
              scientists and its 11th President.
            </p>

            <p>
              His work across aerospace, strategic technology, education and
              youth empowerment inspired generations to imagine a stronger and
              more developed India.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          LEGACY CARDS
      ===================================================== */}

      <section className={styles.workSection}>
        <div className={styles.workHeader}>
          <span>04 / THE WORK</span>

          <h2>
            SCIENCE.
            <br />
            SERVICE.
            <br />
            NATION.
          </h2>
        </div>

        <div className={styles.legacyGrid}>
          {legacyItems.map((item) => (
            <article className={styles.legacyCard} key={item.number}>
              <div className={styles.cardTop}>
                <span>{item.number}</span>
                <span>{item.year}</span>
              </div>

              <LegacyVector type={item.vector} />

              <div className={styles.cardContent}>
                <span className={styles.cardLabel}>{item.label}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          KALAM × JANANI
      ===================================================== */}

      <section className={styles.jananiSection}>
        <div className={styles.jananiMeta}>
          <span>05 / THE CONTINUING VISION</span>
          <span>JANANI 2026</span>
        </div>

        <div className={styles.jananiContent}>
          <span className={styles.jananiDot} />

          <h2>
            DREAM.
            <br />
            BELIEVE.
            <br />
            BUILD.
            <br />
            <span>TRANSFORM INDIA.</span>
          </h2>
        </div>

        <p className={styles.jananiText}>
          JANANI 2026 carries forward a vision of an empowered India — where
          every woman has the opportunity to rise, lead and transform the
          world.
        </p>
      </section>

      {/* =====================================================
          END
      ===================================================== */}

      <section className={styles.endSection}>
        <span>THE DREAM CONTINUES.</span>

        <h2>
          IGNITE
          <br />
          THE MIND.
        </h2>

       { /*<Link href="/" className={styles.backButton}>
          <span>Back to JANANI</span>
          <span>↖</span>
        </Link>*/}
        
      </section>
    </main>
  );
}