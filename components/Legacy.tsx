import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Legacy.module.css";


export default function Legacy() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>
            INSPIRED
            <br />
            BY A VISION
          </h2>

          <p>
            The timeless vision guiding JANANI 2026 and a generation
            determined to rise.
          </p>
        </header>

        <div className={styles.grid}>
          {/* IMAGE */}

          <article className={styles.imageCard}>
            <Image
              src="/images/kalam.png"
              alt="Dr. A.P.J. Abdul Kalam"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.image}
            />

            <span className={styles.imageLabel}>
              DR. A.P.J. ABDUL KALAM
            </span>
          </article>

          {/* CONTENT */}

          <article className={styles.contentCard}>
            

            <h3>
              DREAM.
              <br />
              RISE.
              <br />
              <span className={styles.transform}>TRANSFORM.</span>
            </h3>

            <p>
              JANANI 2026 is guided by Dr. Kalam&apos;s timeless vision
              of an empowered India — where every woman has the
              opportunity to rise, lead and transform the world.
            </p>

            
 <Link href="/legacy" className={styles.legacyButton}>
  <span className={styles.legacyButtonText}>
    Explore His Legacy
  </span>

  <span className={styles.legacyButtonIcon}>
    <svg
      className={styles.legacyArrow}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 19L19 5M19 5H8M19 5V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  </span>
</Link>
          </article>

          {/* QUOTE */}

          <article className={styles.quoteCard}>
            <span className={styles.quoteMark}>“</span>

            <blockquote>
              Dream, <span className={styles.dream}>dream</span>, 
              dreams transform into thoughts and thoughts and thoughts
              result in action.
            </blockquote>

            <span className={styles.author}>
              — DR. A.P.J. ABDUL KALAM
            </span>
          </article>
        </div>
      </div>
    </section>
  );
}