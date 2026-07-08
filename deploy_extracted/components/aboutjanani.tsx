import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.content}>
    

          <h2 className={styles.title}>
            What is <br />
            Janani 2026?
          </h2>

          <div className={styles.line}></div>

          <p className={styles.description}>
            JANANI 2026 is a national movement and an immersive experience that
            celebrates the strength of motherhood, the potential of women, and
            their power to build stronger families, communities and a better
            nation.
          </p>

          <button className={styles.button}>
            <span>DISCOVER MORE</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Right Image */}
        <div className={styles.imageWrapper}>
          <Image
            src="/images/about.jpg"
            alt="Janani"
            fill
            className={styles.image}
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}