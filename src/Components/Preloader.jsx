// CoffeePreloader.jsx
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";

function CoffeePreloader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-[#0d0d0d] to-[#1a0f0f] z-50">
      {/* Steam effect (floating upward) */}
      <div className="absolute flex flex-col gap-3 -top-20">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.5 }}
            animate={{ opacity: [0, 1, 0], y: [-20, -60, -100], scale: [0.5, 1, 0.3] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              delay: i * 0.6,
              ease: "easeInOut",
            }}
            className="w-6 h-6 rounded-full bg-gradient-to-t from-gray-300 to-white blur-md mx-auto"
          />
        ))}
      </div>

      {/* Coffee cup */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="relative flex items-center justify-center"
      >
        <div className="absolute -inset-10 bg-gradient-to-r from-[#6f4e37] via-[#d2a679] to-[#6f4e37] rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <FontAwesomeIcon
          icon={faMugHot}
          className="text-[120px] text-[#d2a679] drop-shadow-[0_0_15px_rgba(210,166,121,0.8)]"
        />
      </motion.div>

      {/* Loading text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-20 text-lg tracking-widest text-[#d2a679] font-semibold"
      >
        Brewing your coffee...
      </motion.p>
    </div>
  );
}

export default CoffeePreloader;
