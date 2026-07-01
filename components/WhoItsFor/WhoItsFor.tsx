import styles from "./WhoItsFor.module.css";

interface Segment {
  readonly icon: string;
  readonly tone: "green" | "amber" | "blue";
  readonly heading: string;
  readonly description: string;
}

const segments: readonly Segment[] = [
  {
    icon: "leaf",
    tone: "green",
    heading: "Cannabis dispensaries",
    description:
      "Federal cash-only. Highest-volume ATMs in the country. Empty-outs cost thousands.",
  },
  {
    icon: "beer",
    tone: "amber",
    heading: "Bars & nightlife",
    description:
      "Cash tips, no cards. Friday-Saturday-Sunday is when it matters most.",
  },
  {
    icon: "droplet",
    tone: "blue",
    heading: "Laundromats",
    description:
      "Coin-heavy customer base. Consistent daily volume. Predictable refills.",
  },
  {
    icon: "fuel",
    tone: "green",
    heading: "Rural gas stations",
    description:
      "Bank deserts. Long drives. Every avoided round-trip pays for a month of service.",
  },
  {
    icon: "store",
    tone: "amber",
    heading: "Bodegas & corner stores",
    description:
      "Serving underbanked communities. Constant demand. Trust matters.",
  },
  {
    icon: "tent",
    tone: "blue",
    heading: "Fairs & events",
    description:
      "Portable machines, event-driven cash spikes. Premium surcharge windows.",
  },
];

const SegmentIcon = ({ name }: { readonly name: string }): JSX.Element => {
  const iconMap: Record<string, JSX.Element> = {
    leaf: (
      <path d="M8 20 Q8 10 20 8 Q18 20 8 20 Z M8 20 L20 8" strokeLinecap="round" />
    ),
    beer: (
      <>
        <path d="M9 8 L9 22 L19 22 L19 8 Z" />
        <path d="M19 11 L22 11 L22 18 L19 18" />
        <path d="M9 8 L19 8" strokeWidth="1.5" />
        <path d="M10 6 Q11 4 12 6 M13 6 Q14 4 15 6 M16 6 Q17 4 18 6" />
      </>
    ),
    droplet: <path d="M14 6 Q14 6 8 15 Q8 21 14 21 Q20 21 20 15 Q20 6 14 6 Z" />,
    fuel: (
      <>
        <path d="M8 6 L18 6 L18 22 L8 22 Z" />
        <path d="M8 10 L18 10" />
        <path d="M18 12 L21 12 L21 18 L18 18 M21 15 L23 15" />
      </>
    ),
    store: (
      <>
        <path d="M6 10 L22 10 L21 22 L7 22 Z" />
        <path d="M9 10 L9 7 L19 7 L19 10" />
      </>
    ),
    tent: (
      <>
        <path d="M14 5 L22 22 L6 22 Z" />
        <path d="M14 5 L14 22" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 28 28" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
      {iconMap[name]}
    </svg>
  );
};

const WhoItsFor = (): JSX.Element => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <div className={styles.header}>
        <p className={styles.tag}>Built for your route</p>
        <h2 className={styles.h2}>Whether you run 5 machines or 500.</h2>
        <p className={styles.sub}>
          We tailor implementation to your route size — solo operators, growing
          routes, and established fleets all get the setup that fits.
        </p>
      </div>
      <div className={styles.grid}>
        {segments.map((seg) => (
          <div key={seg.heading} className={styles.card}>
            <div className={`${styles.iconWrap} ${styles[seg.tone]}`}>
              <SegmentIcon name={seg.icon} />
            </div>
            <h3 className={styles.cardHead}>{seg.heading}</h3>
            <p className={styles.cardDesc}>{seg.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoItsFor;
