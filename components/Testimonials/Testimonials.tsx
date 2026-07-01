import styles from "./Testimonials.module.css";

interface Testimonial {
  readonly quote: string;
  readonly initials: string;
  readonly name: string;
  readonly role: string;
}

const testimonials: readonly Testimonial[] = [
  {
    quote:
      "Cut my Saturday route from 8 hours to 3. I don't stop at machines that don't need me anymore. Pays for itself in the first week.",
    initials: "MT",
    name: "Marcus T.",
    role: "12-machine route · Cleveland, OH",
  },
  {
    quote:
      "We manage 8 dispensary ATMs across the metro. Empty-outs used to cost us $500 in an afternoon. Since installing CashPilot, we haven't had one. Not one.",
    initials: "JR",
    name: "Jasmine R.",
    role: "Cannabis chain · Denver, CO",
  },
  {
    quote:
      "My machines are 90 minutes apart. I used to drive the whole loop every Tuesday. Half of them didn't need me. Now I go where I'm actually needed.",
    initials: "RM",
    name: "Ray M.",
    role: "Rural route · Central Vermont",
  },
];

const Testimonials = (): JSX.Element => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <div className={styles.header}>
        <p className={styles.tag}>What operators say</p>
        <h2 className={styles.h2}>
          Route by route,
          <br />
          they got their time back.
        </h2>
        <p className={styles.sub}>Real operators, real routes, real numbers.</p>
      </div>
      <div className={styles.grid}>
        {testimonials.map((t) => (
          <blockquote key={t.name} className={styles.card}>
            <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
            <footer className={styles.attribution}>
              <div className={styles.avatar}>{t.initials}</div>
              <div>
                <p className={styles.name}>{t.name}</p>
                <p className={styles.role}>{t.role}</p>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
