import Link from "next/link";

export default function HomePage() {
  return (
    <section>
      <div className="hero">
        <h1>Welcome to ShopBug</h1>
        <p>Shop top products and test bugcapture on this intentionally buggy app.</p>
        <div className="hero-actions">
          <Link className="primary-btn" href="/products">
            Browse products
          </Link>
          <Link className="secondary-btn" href="/login">
            Login
          </Link>
        </div>
      </div>

      <div className="info-grid">
        <article className="info-card">
          <h3>Quick Checkout</h3>
          <p>Simple cart and checkout simulation for testing user flows.</p>
        </article>
        <article className="info-card">
          <h3>Basic Auth</h3>
          <p>Includes login state, greeting, and conditional navigation behavior.</p>
        </article>
        <article className="info-card">
          <h3>Intentional Defects</h3>
          <p>UI and logic issues are included on purpose for bug hunting exercises.</p>
        </article>
      </div>
    </section>
  );
}
