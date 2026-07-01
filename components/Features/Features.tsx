import styles from "./Features.module.css";

interface Feature {
  readonly icon: string;
  readonly heading: string;
  readonly description: string;
}

const features: readonly Feature[] = [
  {
    icon: "target",
    heading: "Distance-based thresholds",
    description:
      "Set higher thresholds for far-away machines so you never get caught two hours out.",
  },
  {
    icon: "route",
    heading: "Route optimization",
    description:
      "When multiple machines need service, the app sequences them into the fastest route.",
  },
  {
    icon: "brain",
    heading: "Predictive refills",
    description:
      "Machine learning forecasts each machine's next refill 2-3 days out, so you plan ahead.",
  },
  {
    icon: "shield",
    heading: "Cash reconciliation",
    description:
      "Auto-reconciles loaded cash against dispensed cash. Catches discrepancies instantly.",
  },
];

const FeatureIcon = ({ name }: { readonly name: string }): JSX.Element => {
  const iconMap: Record<string, JSX.Element> = {
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      </>
    ),
    route: (
      <>
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <path d="M6 9 Q6 15 12 15 Q18 15 18 15" strokeDasharray="2 2" fill="none" />
      </>
    ),
    brain: (
      <>
        <path d="M9 6 Q6 6 6 9 Q4 10 4 12 Q4 15 7 15 Q7 18 10 18 L10 6 Z" />
        <path d="M14 6 Q17 6 17 9 Q19 10 19 12 Q19 15 16 15 Q16 18 13 18 L13 6 Q14 6 14 6 Z" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 L20 6 L20 12 Q20 18 12 21 Q4 18 4 12 L4 6 Z" />
        <path d="M9 12 L11 14 L15 10" fill="none" strokeWidth="2" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
      {iconMap[name]}
    </svg>
  );
};

const Features = (): JSX.Element => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <div className={styles.header}>
        <p className={styles.tag}>Features</p>
        <h2 className={styles.h2}>Automation that respects your time.</h2>
        <p className={styles.sub}>
          Every feature is built around a single question:
          <br />
          does this actually save the operator a trip?
        </p>
      </div>
      <div className={styles.grid}>
        {features.map((feature) => (
          <div key={feature.heading} className={styles.card}>
            <div className={styles.iconWrap}>
              <FeatureIcon name={feature.icon} />
            </div>
            <div>
              <h3 className={styles.cardHead}>{feature.heading}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
