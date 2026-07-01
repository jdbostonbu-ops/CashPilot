import Link from "next/link";

export default function SuccessPage(): JSX.Element {
  return (
    <main className="success-wrap">
      <div className="success-card">
        <div className="success-checkmark">✓</div>
        <h1 className="success-title">You&apos;re in.</h1>
        <p className="success-subtitle">
          Thanks for subscribing to CashPilot. We&apos;ll be in touch within
          one business day to schedule your sensor install and walk you
          through the dashboard.
        </p>
        <div className="success-details">
          <p className="success-details-label">What happens next</p>
          <ol className="success-steps">
            <li>Confirmation email lands in your inbox within 5 minutes.</li>
            <li>Our team reaches out within one business day.</li>
            <li>Sensor kit ships within 3 business days.</li>
            <li>You&apos;re monitoring your first machine within a week.</li>
          </ol>
        </div>
        <Link href="/" className="success-home-link">
          ← Back to CashPilot
        </Link>
      </div>
    </main>
  );
}