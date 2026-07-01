"use client";

import { useState, useCallback } from "react";
import Logo from "@/components/Logo/Logo";
import { bookingUrl } from "@/lib/stripe";
import styles from "./Nav.module.css";

interface NavLink {
  readonly label: string;
  readonly href: string;
}

const navLinks: readonly NavLink[] = [
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const Nav = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = useCallback((): void => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback((): void => {
    setMenuOpen(false);
  }, []);

  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <a href="/" className={styles.brand} aria-label="CashPilot home">
          <Logo />
        </a>

        <button
          type="button"
          className={styles.menuBtn}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
        </button>

        <nav className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.link}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Book a 15-min call
            <span aria-hidden="true">→</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
