/**
 * Stripe integration — Price IDs + API route pattern.
 *
 * NEXT_PUBLIC_STRIPE_LINK_* env vars hold Stripe Price IDs (price_...).
 * The click handler POSTs the Price ID to /api/checkout, which uses the
 * server-side STRIPE_SECRET_KEY to create a Checkout Session and returns
 * the hosted checkout URL. The browser then redirects to that URL.
 */

export type PricingTierId = "solo" | "route" | "fleet";

export interface PricingTierConfig {
  readonly id: PricingTierId;
  readonly name: string;
  readonly paymentLink: string;
}

const FALLBACK_URL = "https://example.com";

export const stripePriceIds: Readonly<Record<PricingTierId, string>> = {
  solo: process.env.NEXT_PUBLIC_STRIPE_LINK_SOLO || "",
  route: process.env.NEXT_PUBLIC_STRIPE_LINK_ROUTE || "",
  fleet: process.env.NEXT_PUBLIC_STRIPE_LINK_FLEET || "",
};

/**
 * Kept for backward compatibility with any component that still imports
 * stripeLinks. Now holds Price IDs, not URLs.
 */
export const stripeLinks: Readonly<Record<PricingTierId, string>> = stripePriceIds;

export const bookingUrl: string =
  process.env.NEXT_PUBLIC_BOOKING_URL || FALLBACK_URL;

export const formspreeEndpoint: string =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || FALLBACK_URL;

/**
 * Closure-based factory that returns an async click handler for a given
 * pricing tier. The handler POSTs the tier's Price ID to /api/checkout,
 * receives a Stripe Checkout Session URL, and redirects the browser to it.
 */
export const createTierClickHandler = (tier: PricingTierId): (() => Promise<void>) => {
  return async (): Promise<void> => {
    const priceId = stripePriceIds[tier];
    if (!priceId || typeof window === "undefined") {
      return;
    }

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });

      const data = (await response.json()) as { url?: string; error?: string };

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Checkout failed:", data.error);
      }
    } catch (error) {
      console.error("Checkout request failed:", error);
    }
  };
};

/**
 * Predicate used by pricing UI to decide whether to show the checkout button
 * for a given tier. Returns true when a Price ID has been configured.
 */
export const hasConfiguredStripeLink = (tier: PricingTierId): boolean => {
  return stripePriceIds[tier].length > 0;
};