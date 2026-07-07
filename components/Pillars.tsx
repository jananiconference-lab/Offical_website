"use client";

import styles from "../styles/Pillars.module.css";

import {
  Baby,
  Crown,
  HeartPulse,
  Lightbulb,
  Globe2,
  ArrowUpRight,
} from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Motherhood",
    desc: "Celebrating the essence of motherhood and its impact on future generations.",
    icon: <Baby size={34} />,
  },
  {
    number: "02",
    title: "Leadership",
    desc: "Empowering women leaders to drive change and inspire communities.",
    icon: <Crown size={34} />,
  },
  {
    number: "03",
    title: "Health",
    desc: "Promoting women's health, well-being and access to quality healthcare.",
    icon: <HeartPulse size={34} />,
  },
  {
    number: "04",
    title: "Innovation",
    desc: "Encouraging innovation, entrepreneurship and creating opportunities for women.",
    icon: <Lightbulb size={34} />,
  },
  {
    number: "05",
    title: "Nation Building",
    desc: "Uniting women to contribute towards a stronger, inclusive and developed India.",
    icon: <Globe2 size={34} />,
  },
];

export default function Pillars() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2>
              The Five <br />
              Pillars
            </h2>

            <p>of Change & Progress</p>
          </div>

          <button className={styles.viewBtn}>
            VIEW ALL PILLARS
            <ArrowUpRight size={18} />
          </button>
        </div>

        <div className={styles.grid}>
          {pillars.map((pillar) => (
            <div key={pillar.number} className={styles.card}>
              <div className={styles.line}></div>

              <span className={styles.number}>{pillar.number}</span>

              <div className={styles.icon}>
                {pillar.icon}
              </div>

              <h3>{pillar.title}</h3>

              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}