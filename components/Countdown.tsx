"use client";

import { useEffect, useState } from "react";
import styles from "../styles/Countdown.module.css";

const EVENT_DATE = new Date("2026-07-23T00:00:00");

export default function Countdown() {
  const calculateTime = () => {
    const diff = EVENT_DATE.getTime() - new Date().getTime();

    if (diff <= 0) {
      return {
        days: "0",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(diff / (1000 * 60 * 60 * 24))),
      hours: String(
        Math.floor((diff / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0"),
      minutes: String(
        Math.floor((diff / (1000 * 60)) % 60)
      ).padStart(2, "0"),
      seconds: String(
        Math.floor((diff / 1000) % 60)
      ).padStart(2, "0"),
    };
  };

  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState({
    days: "0",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    setMounted(true);
    setTime(calculateTime());
    const interval = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    { value: mounted ? time.days : "0", label: "DAYS" },
    { value: mounted ? time.hours : "00", label: "HOURS" },
    { value: mounted ? time.minutes : "00", label: "MINUTES" },
    { value: mounted ? time.seconds : "00", label: "SECONDS" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.blur1}></div>
      <div className={styles.blur2}></div>

      <div className={styles.container}>
        <span className={styles.topLine}></span>

        <p className={styles.subtitle}>THE JOURNEY BEGINS IN</p>

        <h2 className={styles.title}>Countdown to JANANI 2026</h2>

        <div className={styles.countdown}>
          {items.map((item, index) => (
            <div className={styles.card} key={index}>
              <h1>{item.value}</h1>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <span className={styles.bottomLine}></span>
      </div>
    </section>
  );
}