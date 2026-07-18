import styles from "../styles/stakeholders.module.css";

const stakeholders = [
  {
    title: "A VISION FOR CHANGE",
    message:
      "JANANI is more than an event. It is a collective space where women come together to lead, inspire and shape a stronger future.",
    name: "Stakeholder Name",
    role: "Founder, JANANI",
    initials: "SN",
    theme: "dark",
  },
  {
    title: "THE POWER OF WOMEN",
    message:
      "When women connect, share their stories and support one another, powerful movements and meaningful change begin.",
    name: "Stakeholder Name",
    role: "JANANI 2026",
    initials: "SN",
    theme: "blue",
  },
  {
    title: "A COLLECTIVE FUTURE",
    message:
      "JANANI represents a shared vision of leadership, resilience and opportunities that empower generations of women.",
    name: "Stakeholder Name",
    role: "Community Leader",
    initials: "SN",
    theme: "light",
  },
];

export default function Stakeholders() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>
            STAKEHOLDERS
          </h2>
        </header>

        <div className={styles.cards}>
          {stakeholders.map((stakeholder) => (
            <article
              key={stakeholder.title}
              className={`${styles.card} ${styles[stakeholder.theme]}`}
            >
              <h3>{stakeholder.title}</h3>

              <p className={styles.message}>
                “{stakeholder.message}”
              </p>

              <div className={styles.person}>
                <div className={styles.avatar}>
                  {stakeholder.initials}
                </div>

                <div className={styles.personInfo}>
                  <span className={styles.name}>
                    {stakeholder.name}
                  </span>

                  <span className={styles.role}>
                    {stakeholder.role}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}