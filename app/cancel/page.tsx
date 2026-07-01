import Link from "next/link";

export default function CancelPage(): JSX.Element {
  return (
    <main className="cancel-wrap">
      <div className="cancel-card">
        <div className="cancel-icon">←</div>
        <h1 className="cancel-title">Checkout canceled.</h1>
        <p className="cancel-subtitle">
          No worries — no charges were made. When you&apos;re ready, come
          back and pick the plan that fits your route.
        </p>
        <Link href="/#pricing" className="cancel-primary-link">
          Back to pricing →
        </Link>
        <Link href="/" className="cancel-secondary-link">
          Or return home
        </Link>
      </div>
    </main>
  );
}