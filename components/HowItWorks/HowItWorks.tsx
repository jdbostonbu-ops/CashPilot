import styles from "./HowItWorks.module.css";

interface Step {
  readonly number: string;
  readonly heading: string;
  readonly description: string;
}

const steps: readonly Step[] = [
  {
    number: "1",
    heading: "Install the sensor",
    description:
      "Peel-and-stick device on your cash cassette. Two-minute install, no wiring, no PCI headaches.",
  },
  {
    number: "2",
    heading: "Set your rules",
    description:
      "Tell the app how far you are from each machine. Custom thresholds adjust to your real logistics.",
  },
  {
    number: "3",
    heading: "Get pinged only when it matters",
    description:
      "Push notifications when a machine actually needs you. Otherwise, silence. Get your Saturdays back.",
  },
];

const HowItWorks = (): JSX.Element => (
  <section id="how" className={styles.section}>
    <div className={styles.inner}>
      <div className={styles.header}>
        <p className={styles.tag}>How it works</p>
        <h2 className={styles.h2}>Three steps to a smarter route.</h2>
        <p className={styles.sub}>
          Install once. Set your rules. Get pinged only when it matters.
          <br />
          No new tools to learn, no dashboards to babysit.
        </p>
      </div>
      <div className={styles.grid}>
        {steps.map((step) => (
          <div key={step.number} className={styles.step}>
            <div className={styles.number}>{step.number}</div>
            <h3 className={styles.stepHead}>{step.heading}</h3>
            <p className={styles.stepDesc}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
