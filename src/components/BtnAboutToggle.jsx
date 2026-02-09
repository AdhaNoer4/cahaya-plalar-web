import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import About from "./About";

export default function BtnAboutToggle() {
  const [showAbout, setShowAbout] = useState(false);

  function toggleAbout() {
    setShowAbout(!showAbout);
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-blue-600 text-white">
        <button onClick={toggleAbout} className="bg-gray-50 text-blue-600 px-6 py-3 rounded-lg">
          {showAbout ? "Sembunyikan About" : "Tampilkan About"}
        </button>
      </div>
      <AnimatePresence>{showAbout && <About />}</AnimatePresence>
    </>
  );
}
