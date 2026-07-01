"use client";

import { useState, useCallback, useMemo } from "react";
import styles from "./FAQ.module.css";

interface FAQItem {
  readonly question: string;
  readonly answer: string;
}

const faqItems: readonly FAQItem[] = [
  {
    question: "I've been running my route for 20 years — why do I need this?",
    answer:
      "Because you're leaving money on the table you can't see. Even seasoned operators average 45% of trips they could have skipped. This isn't about experience — it's about not being in two places at once.",
  },
  {
    question: "Will your sensor mess with my machine's compliance?",
    answer:
      "No. Our sensor sits outside the cash-handling data path — it reads physical cassette levels only, never touches card, transaction, or PIN data. That means it stays outside PCI DSS scope entirely and works with your existing sponsor bank.",
  },
  {
    question: "What if my machines don't have cellular where they're installed?",
    answer:
      "The sensor uses low-power cellular that works nearly anywhere your ATM already accepts card transactions. If your machine can process a card, our sensor can report. We test connectivity during install.",
  },
  {
    question: "How much will this actually save me — prove it.",
    answer:
      "Our current customers average 24 saved trips and $3,470 in preserved revenue per month. At $19-39 per machine per month, most operators break even in the first 10 days. Book a call and we'll estimate your specific ROI before you commit to anything.",
  },
  {
    question: "I only run 3 machines — is this overkill?",
    answer:
      "Solo operators are actually where CashPilot delivers the highest per-machine value. When you're the only driver, every wasted trip is your Saturday morning. The Solo plan is built specifically for routes of 4 or fewer machines.",
  },
  {
    question: "What if I want to cancel?",
    answer:
      "Month-to-month, no long-term contract. Cancel anytime with 30 days' notice. The sensors are yours to keep — we don't hold your hardware hostage.",
  },
];

const FAQ = (): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Closure-based factory: returns a click handler bound to a specific index
  const createToggleHandler = useCallback(
    (index: number): (() => void) => {
      return (): void => {
        setOpenIndex((prev) => (prev === index ? null : index));
      };
    },
    []
  );

  const items = useMemo(
    () =>
      faqItems.map((item, index) => ({
        ...item,
        index,
        isOpen: openIndex === index,
        onToggle: createToggleHandler(index),
      })),
    [openIndex, createToggleHandler]
  );

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.tag}>Questions we hear</p>
          <h2 className={styles.h2}>
            The honest answers
            <br />
            to the common objections.
          </h2>
          <p className={styles.sub}>
            Everything operators ask before they sign up. Nothing hidden, nothing
            dodged.
          </p>
        </div>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.question} className={styles.item}>
              <button
                type="button"
                className={styles.trigger}
                onClick={item.onToggle}
                aria-expanded={item.isOpen}
              >
                <span className={styles.q}>{item.question}</span>
                <span
                  className={`${styles.chevron} ${
                    item.isOpen ? styles.chevronOpen : ""
                  }`}
                  aria-hidden="true"
                >
                  ▾
                </span>
              </button>
              {item.isOpen && <p className={styles.answer}>{item.answer}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
