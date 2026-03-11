import AddToCartButton from "@/components/AddToCartButton";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <section>
      <h1>Products</h1>
      <p>Pick any item and add it to cart.</p>
      <div className="product-grid">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">${product.price.toFixed(2)}</p>
            <AddToCartButton product={product} />
          </article>
        ))}
      </div>
    </section>
  );
}
