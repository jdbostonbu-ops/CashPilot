/**
 * Stripe Payment Links (test mode), Cal.com booking URL, and Formspree endpoint.
 *
 * IMPORTANT: process.env.NEXT_PUBLIC_* must be referenced LITERALLY, not through
 * a helper function. Next.js inlines these references at build time — server
 * and client end up with identical string constants baked into the bundle,
 * which is what prevents hydration mismatches on <a href> attributes.
 */

export type PricingTierId = "solo" | "route" | "fleet";

export interface PricingTierConfig {
  readonly id: PricingTierId;
  readonly name: string;
  readonly paymentLink: string;
}

const FALLBACK_URL = "https://example.com";

export const stripeLinks: Readonly<Record<PricingTierId, string>> = {
  solo: process.env.NEXT_PUBLIC_STRIPE_LINK_SOLO || FALLBACK_URL,
  route: process.env.NEXT_PUBLIC_STRIPE_LINK_ROUTE || FALLBACK_URL,
  fleet: process.env.NEXT_PUBLIC_STRIPE_LINK_FLEET || FALLBACK_URL,
};

export const bookingUrl: string =
  process.env.NEXT_PUBLIC_BOOKING_URL || FALLBACK_URL;

export const formspreeEndpoint: string =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || FALLBACK_URL;

/**
 * Closure-based factory that returns a click handler for a given pricing tier.
 * The returned handler captures the tier id in its closure and opens the correct
 * Stripe payment link in a new tab when invoked.
 */
export const createTierClickHandler = (tier: PricingTierId): (() => void) => {
  return (): void => {
    const link = stripeLinks[tier];
    if (typeof window !== "undefined" && link !== FALLBACK_URL) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };
};

/**
 * Predicate used by pricing UI to decide whether to show the "start checkout"
 * secondary button for a given tier. Returns true only when a real Stripe
 * payment link has been configured in the environment.
 */
export const hasConfiguredStripeLink = (tier: PricingTierId): boolean => {
  return stripeLinks[tier] !== FALLBACK_URL;
};
