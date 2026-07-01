import styles from "./PainSection.module.css";

interface PainCard {
  readonly value: string;
  readonly label: string;
  readonly description: string;
}

const painCards: readonly PainCard[] = [
  {
    value: "$50",
    label: "Per wasted trip",
    description: "Fuel, wear, time you'll never get back",
  },
  {
    value: "$150",
    label: "Per empty machine",
    description: "Lost surcharges on a busy Friday night",
  },
  {
    value: "15h",
    label: "Wasted every week",
    description: "Checking dashboards, building routes",
  },
  {
    value: "45%",
    label: "Of trips skippable",
    description: "Most machines don't need what you thought",
  },
];

const PainSection = (): JSX.Element => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <div className={styles.header}>
        <p className={styles.tag}>The hidden cost of blind routes</p>
        <h2 className={styles.h2}>
          You're bleeding money in ways you can't even see.
        </h2>
        <p className={styles.sub}>
          Every unnecessary trip, every empty machine on a Friday night, every
          hour spent staring at a dashboard — it adds up faster than most
          operators realize.
        </p>
      </div>
      <div className={styles.grid}>
        {painCards.map((card) => (
          <div key={card.label} className={styles.card}>
            <p className={styles.value}>{card.value}</p>
            <p className={styles.label}>{card.label}</p>
            <p className={styles.desc}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PainSection;
