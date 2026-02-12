import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import { button } from "framer-motion/client";

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Sembako", "Kebutuhan Rumah Tangga"];

  const filterredProducts = selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Produk Unggulan</h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg border
              ${selectedCategory === cat ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filterredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
