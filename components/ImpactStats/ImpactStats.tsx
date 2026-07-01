import styles from "./ImpactStats.module.css";

interface Stat {
  readonly value: string;
  readonly label: string;
}

const stats: readonly Stat[] = [
  { value: "24", label: "Avg trips saved per month" },
  { value: "$3.4k", label: "Revenue preserved per month" },
  { value: "99%", label: "Fleet uptime across customers" },
  { value: "6.2", label: "Empty-outs prevented per month" },
];

const ImpactStats = (): JSX.Element => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <p className={styles.tag}>Real numbers from real operators</p>
      <h2 className={styles.h2}>
        CashPilot pays for itself
        <br />
        in the first month.
      </h2>
      <div className={styles.grid}>
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className={styles.value}>{stat.value}</p>
            <p className={styles.label}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactStats;
