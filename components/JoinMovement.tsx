import Image from "next/image";
import styles from "../styles/JoinMovements.module.css";

export default function JoinMovement() {
  return (
    <section className={styles.joinSection}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/join-movement.png"
          alt="Women Leaders"
          fill
          priority
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        

        <h2 className={styles.title}>
          Be Part of a <br />
          Transformative <br />
          Movement
        </h2>

        <p className={styles.description}>
          Join thousands of changemakers, leaders, professionals and
          visionaries shaping the future of India.
        </p>

        <button className={styles.button}>
          REGISTER NOW
          <span className={styles.arrow}>→</span>
        </button>

        <div className={styles.lotus}>
          <img src="/images/lotus-outline.png" alt="" />
        </div>
      </div>
    </section>
  );
}