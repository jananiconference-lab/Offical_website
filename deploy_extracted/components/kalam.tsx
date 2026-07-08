import Image from "next/image";
import styles from "../styles/kalam.module.css";

export default function KalamSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* LEFT */}

        <div className={styles.left}>

          

          <h2 className={styles.title}>
            Inspired by
            <br />
            <span>Dr. A.P.J. Abdul Kalam</span>
          </h2>

          <div className={styles.line}></div>

          <p className={styles.description}>
            JANANI 2026 is guided by the timeless vision of
            Dr. Kalam — a dream of an empowered India where every woman
            has the opportunity to rise, lead and transform the world.
          </p>

          <button className={styles.button}>
            EXPLORE HIS LEGACY
            <span>→</span>
          </button>

        </div>

        {/* RIGHT */}

        <div className={styles.right}>

          <div className={styles.corner}></div>

          <div className={styles.card}>

            <div className={styles.imageWrapper}>
              <Image
                src="/images/kalam.jpg"
                alt="APJ Abdul Kalam"
                fill
                className={styles.image}
              />
            </div>

            <div className={styles.quoteSection}>

              <span className={styles.quoteIcon}>❝</span>

              <p className={styles.quote}>
                Dream, dream, dreams transform into thoughts
                and thoughts result in action.
              </p>

              <h4>- A.P.J. Abdul Kalam</h4>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}