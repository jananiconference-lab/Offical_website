"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* Decorative Background */}
      <div className={styles.bgGlowOne}></div>
      <div className={styles.bgGlowTwo}></div>
      <div className={styles.grid}></div>

      <div className={styles.container}>

        {/* LEFT CONTENT */}

        <div className={styles.heroContentColumn}>

          <span className={styles.tag}>
            APJ ABDUL KALAM INTERNATIONAL FOUNDATION
          </span>

          <div className={styles.heroTitle}>

            <span className={styles.smallHeading}>
              HONOURING
            </span>

            <h1 className={styles.bigHeading}>
              Mothers
            </h1>

            <div className={styles.divider}>
              <span>EMPOWERING</span>
            </div>

            <h1 className={styles.bigHeading}>
              Women
            </h1>

            <div className={styles.divider}>
              <span>BUILDING</span>
            </div>

            <h1 className={styles.bigHeading}>
              Nations
            </h1>

          </div>

          <p className={styles.description}>
            JANANI 2026 is a global platform celebrating women who lead,
            inspire and transform communities. Bringing together mothers,
            entrepreneurs, educators, healthcare professionals,
            innovators and changemakers to shape a better tomorrow.
          </p>

          <div className={styles.actions}>

            <Link
              href="/register"
              className={styles.primaryBtn}
            >
              Register Now
            </Link>

            <Link
              href="#programme"
              className={styles.secondaryBtn}
            >
              Explore Programme
            </Link>

          </div>

          <div className={styles.stats}>

            <div className={styles.card}>
              <h2>100+</h2>
              <p>Speakers</p>
            </div>

            <div className={styles.card}>
              <h2>40+</h2>
              <p>Countries</p>
            </div>

            <div className={styles.card}>
              <h2>5000+</h2>
              <p>Delegates</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className={styles.heroLogoColumn}>

          <div className={styles.floatingLogoContainer}>

            <div className={styles.ringOne}></div>
            <div className={styles.ringTwo}></div>
            <div className={styles.ringThree}></div>

            <div className={styles.logoCard}>
    <div className={styles.logoImage}>
        <Image
            src="/images/janani-logo.png"
            alt="Janani Logo"
            width={450}
            height={450}
            style={{ width: "100%", height: "auto" }}
            priority
        />
    </div>
</div>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <div className={styles.scrollDown}>

        <span></span>

      </div>

    </section>
  );
}