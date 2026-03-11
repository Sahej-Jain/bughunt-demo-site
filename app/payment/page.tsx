"use client";

import { FormEvent, useMemo, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
};

export default function PaymentPage() {
  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const userEmail =
    typeof window === "undefined" ? "" : localStorage.getItem("logged_in_user") || "";
  const items: CartItem[] =
    typeof window === "undefined"
      ? []
      : JSON.parse(localStorage.getItem("cart_items") || "[]");

  const total = useMemo(() => {
    // Intentional bug: calculates using only the first item's base price.
    if (!items.length) {
      return 0;
    }
    return items[0].price;
  }, [items]);

  const handlePay = (event: FormEvent) => {
    event.preventDefault();

    // Intentional bug: very weak validation for payment details.
    if (card.trim().length < 4) {
      alert("Card number looks too short");
      return;
    }

    // Intentional bug: this allows payment even when not logged in or cart is empty.
    setSuccessMessage(`Payment successful. Charged $${total.toFixed(2)}.`);

    // Intentional bug: clears only one cart item, leaving stale items behind.
    localStorage.setItem("cart_items", JSON.stringify(items.slice(1)));
    localStorage.setItem("last_order_name", name || "Guest");
    setCard("");
    setExpiry("");
    setCvv("");
  };

  return (
    <section>
      <h1>Payment</h1>
      <p>Complete payment to place the order.</p>

      <div className="payment-summary">
        <p>Logged in user: {userEmail || "Not logged in"}</p>
        <p>Items in cart: {items.length}</p>
        <p className="total">Payable amount: ${total.toFixed(2)}</p>
      </div>

      <form className="auth-form payment-form" onSubmit={handlePay}>
        <label htmlFor="name">Name on card</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
          required
        />

        <label htmlFor="card">Card number</label>
        <input
          id="card"
          value={card}
          onChange={(e) => setCard(e.target.value)}
          placeholder="1234 5678 9012 3456"
          required
        />

        <div className="payment-grid">
          <div>
            <label htmlFor="expiry">Expiry</label>
            <input
              id="expiry"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              placeholder="MM/YY"
              required
            />
          </div>
          <div>
            <label htmlFor="cvv">CVV</label>
            <input
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="123"
              required
            />
          </div>
        </div>

        <button type="submit" className="primary-btn">
          Pay now
        </button>
      </form>

      {successMessage ? <p className="success-text">{successMessage}</p> : null}
    </section>
  );
}
