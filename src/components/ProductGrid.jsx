import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Produk Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
