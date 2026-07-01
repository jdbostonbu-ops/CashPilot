import { bookingUrl } from "@/lib/stripe";
import styles from "./Hero.module.css";

const Hero = (): JSX.Element => (
  <section className={styles.hero}>
    <div className={styles.inner}>
      <span className={styles.tag}>
        <span aria-hidden="true">✦</span> Automation for independent ATM operators
      </span>
      <h1 className={styles.h1}>
        Stop driving to
        <br />
        <em>empty ATMs.</em>
      </h1>
      <p className={styles.sub}>
        Know which machines need cash before you leave the house.
        <br />
        Skip wasted trips. Never lose a Friday night to an empty machine.
      </p>
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.cta}
      >
        Book a 15-min call
        <span aria-hidden="true">→</span>
      </a>
      <p className={styles.ctaNote}>
        See if CashPilot fits your route · free · no commitment
      </p>
      <p className={styles.trust}>
        400+ INDEPENDENT OPERATORS · 32 STATES · 8,200 MACHINES MONITORED
      </p>
    </div>
  </section>
);

export default Hero;
