export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Trail Running Shoes",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    description: "Comfortable running shoes for daily training."
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    description: "Track workouts, sleep, and heart rate instantly."
  },
  {
    id: 3,
    name: "Commuter Backpack",
    price: 59.5,
    image:
      "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&w=900&q=80",
    description: "A lightweight everyday backpack with laptop sleeve."
  },
  {
    id: 4,
    name: "Noise-Cancelling Headphones",
    price: 199.0,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    description: "Immersive over-ear headphones with rich bass."
  }
];
