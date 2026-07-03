"use client";

import { useMemo } from "react";
import {
  bookingUrl,
  createTierClickHandler,
  hasConfiguredStripeLink,
  type PricingTierId,
} from "@/lib/stripe";
import styles from "./Pricing.module.css";

interface PricingTier {
  readonly id: PricingTierId;
  readonly name: string;
  readonly description: string;
  readonly price: string;
  readonly range: string;
  readonly featured: boolean;
  readonly features: readonly string[];
}

const tiers: readonly PricingTier[] = [
  {
    id: "solo",
    name: "Solo",
    description: "Getting started",
    price: "$39",
    range: "per machine · up to 4",
    featured: false,
    features: [
      "Real-time cash monitoring",
      "Distance-based alert thresholds",
      "Mobile app + web dashboard",
      "Email support",
    ],
  },
  {
    id: "route",
    name: "Route",
    description: "Growing operators",
    price: "$29",
    range: "per machine · 5 to 24",
    featured: true,
    features: [
      "Everything in Solo",
      "Smart route sequencing",
      "Distance-based alert thresholds",
      "Priority support",
    ],
  },
  {
    id: "fleet",
    name: "Fleet",
    description: "Established routes",
    price: "$19",
    range: "per machine · up to 35 in one state",
    featured: false,
    features: [
      "Everything in Route",
      "Multi-user permissions",
      "Custom integrations",
      "Analytics API access",
      "Dedicated success manager",
    ],
  },
];

const Pricing = (): JSX.Element => {
  const tierHandlers = useMemo(
    () =>
      tiers.map((tier) => ({
        ...tier,
        onStripeClick: createTierClickHandler(tier.id),
        hasStripeLink: hasConfiguredStripeLink(tier.id),
      })),
    []
  );

  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.tag}>Pricing</p>
          <h2 className={styles.h2}>Pay less than you'll save.</h2>
          <p className={styles.sub}>
            Volume discounts scale with your route. Every plan starts with a
            conversation, so we set you up with the tier that actually fits.
          </p>
        </div>
        <p className={styles.note}>
          All plans include mobile app, backend dashboard, and unlimited alerts.
        </p>
        <div className={styles.grid}>
          {tierHandlers.map((tier) => (
            <div
              key={tier.id}
              className={`${styles.card} ${tier.featured ? styles.featured : ""}`}
            >
              {tier.featured && <span className={styles.badge}>MOST POPULAR</span>}
              <p className={styles.name}>{tier.name}</p>
              <p className={styles.desc}>{tier.description}</p>
              <p className={styles.price}>
                {tier.price}
                <span className={styles.per}>/mo</span>
              </p>
              <p className={styles.range}>{tier.range}</p>
              <ul className={styles.features}>
                {tier.features.map((feat) => (
                  <li key={feat} className={styles.feature}>
                    <span className={styles.check} aria-hidden="true">
                      ✓
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btn}
              >
                Book a call
                <span aria-hidden="true">→</span>
              </a>
              {tier.hasStripeLink && (
                <button
                  type="button"
                  onClick={tier.onStripeClick}
                  className={styles.stripeBtn}
                >
                  Or start checkout →
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
