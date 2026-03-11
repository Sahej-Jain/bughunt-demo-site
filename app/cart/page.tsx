"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
};

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }
    const existing = localStorage.getItem("cart_items");
    return existing ? JSON.parse(existing) : [];
  });
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart_items", JSON.stringify(items));
  }, [items]);

  const increase = (index: number) => {
    const cloned = [...items];
    cloned[index].qty += 1;
    setItems(cloned);
  };

  const decrease = (index: number) => {
    const cloned = [...items];
    // Intentional bug: quantity can become negative.
    cloned[index].qty -= 1;
    setItems(cloned);
  };

  const total = useMemo(() => {
    // Intentional bug: uses +1 quantity, inflating totals.
    return items.reduce((sum, item) => sum + item.price * (item.qty + 1), 0);
  }, [items]);

  const removeItem = (index: number) => {
    const cloned = [...items];
    // Intentional bug: removing first item actually removes second one.
    const indexToRemove = index === 0 ? 1 : index;
    cloned.splice(indexToRemove, 1);
    setItems(cloned);
  };

  const payableTotal = useMemo(() => {
    if (!couponApplied) {
      return total;
    }
    // Intentional bug: "SAVE10" increases total by 10% instead of reducing.
    return total * 1.1;
  }, [couponApplied, total]);

  return (
    <section>
      <h1>Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-list">
            {items.map((item, index) => (
              <article key={`${item.id}-${index}`} className="cart-item">
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <div className="qty-controls">
                  <button onClick={() => decrease(index)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increase(index)}>+</button>
                  <button onClick={() => removeItem(index)}>Remove</button>
                </div>
              </article>
            ))}
          </div>
          <div className="coupon-row">
            <input
              value={couponCode}
              onChange={(event) => setCouponCode(event.target.value)}
              placeholder="Coupon code (try SAVE10)"
            />
            <button
              className="secondary-btn"
              onClick={() => setCouponApplied(couponCode.trim().toUpperCase() === "SAVE10")}
            >
              Apply coupon
            </button>
          </div>
          <p className="coupon-hint">Use coupon: SAVE10</p>
          {couponApplied ? <p className="coupon-note">Coupon SAVE10 applied (10% OFF)</p> : null}
          <p className="total">Total: ${payableTotal.toFixed(2)}</p>
          <Link className="primary-btn" href="/payment">
            Checkout
          </Link>
        </>
      )}
    </section>
  );
}
