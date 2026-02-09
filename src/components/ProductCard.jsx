import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-gray-600">Rp {product.price.toLocaleString()}</p>
        <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg">Lihat Detail</button>
      </div>
    </motion.div>
  );
}
