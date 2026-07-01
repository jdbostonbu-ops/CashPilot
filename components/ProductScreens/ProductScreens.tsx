import { bookingUrl } from "@/lib/stripe";
import styles from "./ProductScreens.module.css";

interface Callout {
  readonly title: string;
  readonly description: string;
}

const callouts: readonly Callout[] = [
  { title: "Live status", description: "Every machine, every minute" },
  { title: "Custom thresholds", description: "Set by distance, not defaults" },
  { title: "Automated alerts", description: "Only when it matters" },
  { title: "Route directions", description: "One tap to navigation" },
];

const ProductScreens = (): JSX.Element => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <div className={styles.header}>
        <p className={styles.tag}>See it in action</p>
        <h2 className={styles.h2}>Your entire route, in your pocket.</h2>
        <p className={styles.sub}>
          Two screens. That's the whole product. The dashboard shows every
          machine at a glance. The detail view is where the automation lives.
        </p>
      </div>

      <div className={styles.phones}>
        <figure className={styles.phoneFig}>
          <span className={styles.phoneLabel}>Dashboard</span>
          <img
            src="/dashboard.svg"
            alt="CashPilot mobile dashboard showing five ATM machines with live cash levels and status indicators"
            className={styles.phoneImg}
            width={280}
            height={540}
          />
        </figure>
        <figure className={styles.phoneFig}>
          <span className={styles.phoneLabel}>Machine detail</span>
          <img
            src="/detail.svg"
            alt="CashPilot machine detail screen showing an automation alert firing on a dispensary ATM at eighteen percent"
            className={styles.phoneImg}
            width={280}
            height={540}
          />
        </figure>
      </div>

      <div className={styles.callouts}>
        {callouts.map((c) => (
          <div key={c.title} className={styles.callout}>
            <p className={styles.calloutTitle}>{c.title}</p>
            <p className={styles.calloutDesc}>{c.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.linkWrap}>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Book a call to try the live interactive demo
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </section>
);

export default ProductScreens;
