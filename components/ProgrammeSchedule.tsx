import { time } from "node:console";
import styles from "../styles/ProgrammeSchedule.module.css";

const schedule = [
  {
    time: "10:45 AM - 11:00 AM",
    title: "Inaugural Ceremony",
  },
  {
    time: "11:00 AM - 11:45 AM",
    title: "Session 1 — Matrutvam: The Power of Motherhood",
  },
  {
    time: "12:05 PM - 12:50 PM",
    title: "Session 2 — Nayika: Women in Leadership",
  },
  {
    time: "01:10 PM - 01:55 PM",
    title: "Session 3 —  Seva: Women in Nation Building",
  },
    {
    time: "02:15 PM - 03:00 PM",
    title: "Session 4 — Shakti: Innovation and Entrepreneurship",
  },
  {
    time: "03:20 PM - 04:05 PM",
    title: "Session 5 — Vishwadeepthi: Global Voices  and Local Roots",
  },
  {
    time: "4:05 PM - 04:25 PM",
    title: "Special  Music Performance",
  },
  {
    time: "4:30 PM - 05:00 PM",
    title: "Grand Inaugural Ceremony of Janani 2026",
  },
  {
    time: "05:00 PM - 05:45 PM",
    title: "Chief Guest Address",
  },
  {
    time: "05:45 PM - 06:25 PM",
    title: "JANANI Awards",
  },
  {
    time: "06:30 PM - 07:10 PM",
    title: "JANANI Fashion Show — Celebrating Women",
    },
    {
        time: "07:10 PM - 07:30 PM",
        title: "Grand Musical Finale",
  },
  {
    time: "07:30 PM - 07:40 PM",
    title: "Vote of Thanks",
  },
];
  


export default function ProgrammeSchedule() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

     

        <h2 className={styles.heading}>
          Programme Schedule
        </h2>

        <div className={styles.timeline}>

          {schedule.map((item, index) => (
            <div
              className={styles.row}
              key={index}
            >
              <div className={styles.timeWrapper}>

                <span className={styles.dot}></span>

                <span className={styles.time}>
                  {item.time}
                </span>

              </div>

              <div className={styles.event}>
                {item.title}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}