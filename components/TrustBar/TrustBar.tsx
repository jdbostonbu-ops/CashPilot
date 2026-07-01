import styles from "./TrustBar.module.css";

interface TrustPill {
  readonly count: string;
  readonly label: string;
}

const pills: readonly TrustPill[] = [
  { count: "12+", label: "Dispensaries" },
  { count: "40+", label: "Bars & nightlife" },
  { count: "90+", label: "Laundromats" },
  { count: "15+", label: "Rural fuel stations" },
  { count: "200+", label: "Bodegas" },
  { count: "8+", label: "Fair operators" },
];

const TrustBar = (): JSX.Element => (
  <section className={styles.bar}>
    <div className={styles.inner}>
      <p className={styles.label}>IN USE ACROSS</p>
      <div className={styles.pills}>
        {pills.map((pill) => (
          <span key={pill.label} className={styles.pill}>
            {pill.count} <span className={styles.pillLabel}>{pill.label}</span>
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
