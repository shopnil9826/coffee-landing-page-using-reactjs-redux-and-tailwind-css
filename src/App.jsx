import React, { useState } from "react";
import { useEffect } from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Preloader from "./Components/Preloader";
import Products from "./Components/Products";
import ToTop from "./Components/ToTop";
import WhatsApp from "./Components/WhatsApp";
function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loader ? (
        <Preloader />
      ) : (
        <div>
          <div className="w-3/4 glass mx-auto relative top-10 bottom-10">
            <NavBar />
            <Hero />
            <Products />
            <About />
            <Footer />
          </div>
          <WhatsApp />
          <ToTop />
        </div>
      )}
    </>
  );
}

export default App;
