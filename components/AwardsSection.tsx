import Image from "next/image";
import styles from "../styles/AwardsSection.module.css";

export default function AwardsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Left Content */}
        <div className={styles.content}>

          <span className={styles.number}>09</span>

          <h2 className={styles.title}>
            Janani Awards
            <br />
            <span>Honouring</span>
            <br />
            <span>Excellence</span>
          </h2>

          <p className={styles.description}>
            Recognising outstanding women and organisations making a
            difference in society.
          </p>

          <button className={styles.button}>
            <span>EXPLORE AWARDS</span>

            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M13 6L19 12L13 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

        </div>

        {/* Right Image */}

        <div className={styles.imageWrapper}>
          <Image
            src="/images/award.png"
            alt="Award"
            fill
            priority
            className={styles.image}
          />
        </div>

      </div>
    </section>
  );
}