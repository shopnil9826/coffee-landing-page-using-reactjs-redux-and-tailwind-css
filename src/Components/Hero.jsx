import React from "react";
import HeroCoffe from "../assets/coffe-hero-three.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMugHot,
  faRecycle,
  faMap,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";

function Hero() {
  return (
    <section className="relative w-full mt-16">
      <div
        id="home"
        className="flex flex-col md:flex-row justify-between items-center gap-12 px-4 sm:px-8 md:px-16 lg:px-24"
      >
        {/* Text Section */}
        <div className="text-center md:text-left space-y-6 max-w-lg">
          <h1 className="logo-font text-[var(--tags)] text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight drop-shadow-lg">
            CoffeeBrand
          </h1>
          <p className="text-[var(--highlight)] text-lg sm:text-xl md:text-2xl font-light tracking-wide">
            More Than Coffee, It’s an Experience
          </p>
          <button className="mt-6 px-6 sm:px-8 py-3 rounded-xl bg-accent-gradient text-white font-semibold text-base sm:text-lg shadow-lg transform transition-transform duration-200 hover:scale-105">
            View Menu
          </button>

          {/* Icon Row */}
          <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
            {[faMugHot, faMap, faRecycle, faPeopleArrows].map((icon, idx) => (
              <span
                key={idx}
                className="bg-[var(--bg-main-from)] px-3 py-4 rounded shadow-lg backdrop-blur-md 
                hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={icon}
                  size="2x"
                  className="text-[var(--tags)] drop-shadow-lg"
                />
              </span>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex items-center justify-center">
          {/* Glow background */}
          <div className="absolute -inset-6 bg-[var(--tags)] opacity-30 blur-3xl rounded-full animate-pulse"></div>

          {/* Coffee image */}
          <motion.img
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { duration: 0.5 },
            }}
            className="w-[220px] sm:w-[300px] md:w-[400px] lg:w-[480px] max-w-full h-auto object-contain relative z-10 drop-shadow-2xl rounded-xl transition-transform duration-500 hover:scale-105"
            src={HeroCoffe}
            alt="Coffee cup"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
