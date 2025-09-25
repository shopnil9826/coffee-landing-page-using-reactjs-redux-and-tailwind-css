import React from "react";
import AboutImg from "../assets/products.png";
import CoffeGroup from "../assets/coffe-group.png";
import { motion } from "framer-motion";

function About() {
  return (
    <div
      id="aboutus"
      className="flex flex-row gap-8 items-center justify-center p-10 w-3/4"
    >
      {/* Image section */}
      <div className="basis-[30%] flex justify-center ">
        <motion.img
          initial={{ x: "-50vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 3, ease:"easeOut" }}
          className="rounded-full object-cover img-half"
          src={AboutImg}
          alt="About"
        />
      </div>

      {/* About section */}
      <div className="basis-[80%] space-y-7 text-center">
        <h4 className="text-[35px] text-[var(--tags)]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h4>
        <p className="leading-relaxed text-[var(--highlight)]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
        <button className="bg-accent-gradient text-[var(--tags)] px-6 py-3 cursor-pointer rounded-lg transition-transform duration-200 hover:scale-105">
          CALL US
        </button>
      </div>

      <div className="bg-[var(--tags] ">
        <img
          className="rounded-full object-cover w-[550px] "
          src={CoffeGroup}
          alt="About"
        />
      </div>
    </div>
  );
}

export default About;
