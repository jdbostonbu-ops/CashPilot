import styles from "./Footer.module.css";

interface FooterLink {
  readonly label: string;
  readonly href: string;
}

const footerLinks: readonly FooterLink[] = [
  { label: "Support", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Contact", href: "#" },
];

const Footer = (): JSX.Element => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <span className={styles.copy}>© 2026 CashPilot Inc.</span>
      <nav className={styles.links} aria-label="Footer">
        {footerLinks.map((link) => (
          <a key={link.label} href={link.href} className={styles.link}>
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  </footer>
);

export default Footer;
