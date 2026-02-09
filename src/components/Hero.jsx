import { motion } from "framer-motion";

function handleClick() {
  alert("Menampilkan produk toko!");
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-blue-600 text-white">
      <div className="container mx-auto px-6">
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold mb-4">
          Toko Cahaya Plalar
        </motion.h1>
        <p className="mb-6">Solusi kebutuhan harianmu dengan harga murah!</p>
        <button onClick={handleClick} className="bg-white text-blue-600 px-6 py-3 rounded-lg">
          Lihat Produk
        </button>
      </div>
    </section>
  );
}
