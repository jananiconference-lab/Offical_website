"use client";

import Image from "next/image";
import styles from "../styles/FoundationMessage.module.css";

export default function FoundationMessage() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* SECTION META */}
        <div className={styles.sectionMeta}>
          <span>Foundation Message</span>
           
        </div>

        {/* SECTION TITLE */}
        <header className={styles.header}>
          <h2>
            A <span className={styles.message}>MESSAGE</span><br />FROM
            THE FOUNDATION
          </h2>

          <p>
            A message of support, purpose and shared vision from the
            Dr. APJ Abdul Kalam International Foundation.
          </p>
        </header>

        {/* EDITORIAL GRID */}
        <div className={styles.grid}>
          {/* PORTRAIT CARD */}
          <article className={styles.portraitCard}>
            <div className={styles.portraitMedia}>
              <Image
                src="/images/nazema-maraikayar.jpg"
                alt="Dr. A.P.J.M. Nazema Maraikayar"
                fill
                sizes="(max-width: 768px) 100vw, 34vw"
                className={styles.portraitImage}
              />

              
            </div>

            <div className={styles.personInfo}>
              <span className={styles.personLabel}>
                Foundation Leadership
              </span>

              <h3 className={styles.personName}>
                DR. A.P.J.M.
                <br />
                NAZEMA
                <br />
                MARAIKAYAR
              </h3>

              <div className={styles.personFooter}>
                <p>
                  Niece of Dr. APJ Abdul Kalam
                  <br />
                  &amp; Chairman
                </p>

                
              </div>
            </div>
          </article>

          {/* LETTER CARD */}
          <article className={styles.letterCard}>
            <div className={styles.letterMeta}>
              <span>Official Message</span>
               
            </div>

            <button
              type="button"
              className={styles.documentButton}
              aria-label="View official foundation message"
            >
              <div className={styles.document}>
                <Image
                  src="/images/foundation-letter.jpg"
                  alt="Official message from the Dr. APJ Abdul Kalam International Foundation"
                  width={1054}
                  height={1338}
                  sizes="(max-width: 768px) 82vw, 48vw"
                  className={styles.documentImage}
                />
              </div>
            </button>

            <div className={styles.letterFooter}>
              <span>Official Foundation Communication</span>

            
            </div>
          </article>

          {/* QUOTE CARD */}
          <article className={styles.quoteCard}>
            <div className={styles.quoteMeta}>
             
            </div>

            <blockquote className={styles.quote}>
              “A VISIONARY INITIATIVE THAT
              <br />
              EMBODIES 
              <br />
              THE VALUES
                <br />
              CHERISHED BY BHARAT RATNA
              <br />
              DR. A.P.J. ABDUL KALAM.”
            </blockquote>

            <span className={styles.quoteArrow} aria-hidden="true">
               
            </span>
          </article>
        </div>
      </div>
    </section>
  );
}