"use client";
import Link from "next/link";
import type { CSSProperties } from "react";
import styles from "../styles/AboutJanani.module.css";

const petals = Array.from({ length: 12 });

export default function AboutJanani() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutGrid}>
        {/* LEFT CONTENT PANEL */}
        <article className={styles.contentPanel}>
          <div className={styles.sectionLabel}>
            
            
          </div>

          <div className={styles.contentBody}>
            <h2 className={styles.title}>
             <span className={styles.What}>What</span>
              IS <span className={styles.Janani}>JANANI</span>?
              <br />
            
            </h2>

            <div className={styles.contentBottom}>
              <p className={styles.description}>
               <span className={styles.janani}>Janani</span> is a national movement and an immersive experience
                celebrating the strength of motherhood, the potential of women,
                and their power to build stronger families, communities and a
                better nation.
              </p>

              <Link href="/about" className={styles.discoverButton}>
                <span className={styles.buttonText}>Discover More</span>

                <span className={styles.buttonArrow} aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
            </div>
          </div>
        </article>

        {/* RIGHT VISUAL PANEL */}
        <article className={styles.visualPanel}>
          <div className={styles.outerOrbit} />
          <div className={styles.innerOrbit} />

          <span className={`${styles.orbitWord} ${styles.rise}`}>
            RISE
          </span>

          <span className={`${styles.orbitWord} ${styles.transform}`}>
            TRANSFORM
          </span>

          <span className={`${styles.orbitWord} ${styles.lead}`}>
            LEAD
          </span>

          <span className={`${styles.orbitWord} ${styles.create}`}>
            CREATE
          </span>

          <div className={styles.flower}>
            <div className={styles.petals}>
              {petals.map((_, index) => (
                <span
                  key={index}
                  className={styles.petal}
                  style={
                    {
                      "--petal-rotation": `${index * 30}deg`,
                    } as CSSProperties
                  }
                />
              ))}
            </div>

            <div className={styles.flowerCore}>
    
              <strong>Janani</strong>
            </div>
          </div>

          <span className={styles.collective}>COLLECTIVE / 01</span>
        </article>
      </div>
    </section>
  );
}