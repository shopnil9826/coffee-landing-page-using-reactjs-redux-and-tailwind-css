import React, { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
function ToTop() {
  const [Shown, setShown] = useState(false);

  useEffect(() => {
    const topBtn = () => {
      if (window.scrollY > 100) {
        setShown(true);
      } else {
        setShown(false);
      }
    };

    window.addEventListener("scroll", topBtn);
    return () => window.removeEventListener("scroll", topBtn);
  }, []);


  const backToTop = () => {
      window.scrollTo({top:0, behavior:"smooth"});
  }

  return (
    <>
     {Shown && ( <div>
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          onClick={backToTop}
          className="bg-[var(--accent-to)] text-[var(--tags)] fixed right-10 bottom-40 p-3 rounded-xl cursor-pointer "
        >
          Top
        </motion.button>
      </div>)}
    </>
  );
}

export default ToTop;
