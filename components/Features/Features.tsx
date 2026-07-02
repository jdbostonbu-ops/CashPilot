import styles from "./Features.module.css";

interface Feature {
  readonly icon: string;
  readonly heading: string;
  readonly description: string;
}

const features: readonly Feature[] = [
  {
    icon: "cash",
    heading: "Real-time cash monitoring",
    description:
      "See live cash levels across every machine in your route before you leave.",
  },
  {
    icon: "route",
    heading: "Smart route sequencing",
    description:
      "When multiple machines need service, the app sequences them into the fastest route.",
  },
  {
    icon: "target",
    heading: "Distance-based alert thresholds",
    description:
      "Set higher thresholds for far-away machines so you never get caught two hours out.",
  },
];

const FeatureIcon = ({ name }: { readonly name: string }): JSX.Element => {
  const iconMap: Record<string, JSX.Element> = {
    cash: (
      <>
        <rect x="4" y="7" width="16" height="10" rx="2" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M7 10 L7 14" />
        <path d="M17 10 L17 14" />
      </>
    ),
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
