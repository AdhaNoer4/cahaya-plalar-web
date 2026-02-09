import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen flex items-center bg-white text-gray-800">
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Tentang Kami</h2>
        <p className="mb-6">
          Toko Cahaya Plalar berdedikasi untuk menyediakan produk berkualitas dengan harga terjangkau bagi pelanggan kami. Kami percaya bahwa setiap orang berhak mendapatkan akses ke kebutuhan harian tanpa harus menguras kantong.
        </p>
        <p>Misi kami adalah memberikan layanan terbaik dan memastikan kepuasan pelanggan melalui berbagai pilihan produk yang lengkap dan inovatif.</p>
      </motion.div>
    </section>
  );
}
