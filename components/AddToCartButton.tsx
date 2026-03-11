"use client";

import { Product } from "@/data/products";

type Props = {
  product: Product;
};

export default function AddToCartButton({ product }: Props) {
  const addToCart = () => {
    const existing = localStorage.getItem("cart_items");
    const items = existing ? JSON.parse(existing) : [];
    items.push({ ...product, qty: 1 });
    localStorage.setItem("cart_items", JSON.stringify(items));
    alert(`${product.name} added to cart`);
  };

  return (
    <button className="primary-btn" onClick={addToCart}>
      Add to cart
    </button>
  );
}
