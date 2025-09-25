import React from "react";
import Amrecano from "../assets/amrecano-slide.png";
import BlackCoffe from "../assets/blackcoffe-slide.png";
import Esspresso from "../assets/espresso-slide.png";
import Latte from "../assets/latte-slide.png";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Products() {
  const [paid, setPaid] = useState(false);

  return (
    <motion.div
      initial={{ y: "-50vw", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, ease: "circOut" }}
      className="mt-20 p-10 h-full"
    >
      <div id="products" className="md:grid grid-cols-10 items-center">
        <div className="w-[70%] space-y-7 col-span-4 ">
          <h4 className="text-[25px] text-[var(--tags)]  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h4>
          <p className="laoding text-[var(--highlight)] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <button className="bg-accent-gradient text-[var(--tags)] px-6 py-3 cursor-pointer rounded-lg transition-transform duration-200 hover:scale-105">
            CALL US
          </button>
        </div>

        <div className="w-[100%] col-span-6">
          <Swiper
            ules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={2.5}
            grabCursor={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              {/**Products Slide */}
              <div className="flex flex-col ">
                <img
                  className="w-[275px] z-10 drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)]"
                  src={Amrecano}
                  alt=""
                />
                <div className="glass w-fit h-[240px] flex flex-col justify-end items-start bg-slider-prod ">
                  <h6 className="text-[18px] font-semibold mt-10">
                    Amrecano Coffe
                  </h6>
                  <p className="text-[14px] font-normal">
                    100% Natural Arabica or Robusta, <span>30 ml cup</span>
                  </p>
                  <div className="relative bottom-0 top-10  bg-accent-gradient w-fit mx-auto px-6 py-2 text-[17px] text-[var(--tags)]  font-medium rounded-lg">
                    <button
                      onClick={() => setPaid(!paid)}
                      className="flex flex-row gap-2"
                    >
                      <span className="text-[var(--text-secendary]">
                        <FontAwesomeIcon icon={faCartShopping} />
                      </span>
                      Order it Now !
                    </button>

  
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/**Products Slide */}
              <div className="flex flex-col ">
                <img
                  className="w-[300px] z-10 mx-auto drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)]"
                  src={BlackCoffe}
                  alt=""
                />
                <div className="glass w-fit h-[240px] flex flex-col justify-end items-start bg-slider-prod ">
                  <h6 className="text-[18px] font-semibold mt-10">
                    Amrecano Coffe
                  </h6>
                  <p className="text-[14px] font-normal">
                    100% Natural Arabica or Robusta, <span>30 ml cup</span>
                  </p>
                  <Link className="relative bottom-0 top-10  bg-accent-gradient w-fit mx-auto px-6 py-2 text-[17px] text-[var(--tags)]  font-medium rounded-lg">
                    <p>
                      <span>
                        <FontAwesomeIcon icon={faCartShopping} />
                      </span>
                      Order it Now
                    </p>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/**Products Slide */}
              <div className="flex flex-col ">
                <img
                  className="w-[260px] z-10 mx-auto drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)]"
                  src={Esspresso}
                  alt=""
                />
                <div className="glass w-fit h-[240px] flex flex-col justify-end items-start bg-slider-prod mt-11">
                  <h6 className="text-[18px] font-semibold mt-10">
                    Amrecano Coffe
                  </h6>
                  <p className="text-[14px] font-normal">
                    100% Natural Arabica or Robusta, <span>30 ml cup</span>
                  </p>
                  <Link className="relative bottom-0 top-10  bg-accent-gradient w-fit mx-auto px-6 py-2 text-[17px] text-[var(--tags)]  font-medium rounded-lg">
                    <p>
                      <span>
                        <FontAwesomeIcon icon={faCartShopping} />
                      </span>
                      Order it Now
                    </p>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/**Products Slide */}
              <div className="flex flex-col cursor-grapping">
                <img
                  className="w-[275px] mx-auto z-10 object-contain drop-shadow-lg drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)]"
                  src={Latte}
                  alt=""
                />
                <div className="glass w-fit h-[240px] flex flex-col justify-end items-start bg-slider-prod mt-8">
                  <h6 className="text-[18px] font-semibold mt-10">
                    Amrecano Coffe
                  </h6>
                  <p className="text-[14px] font-normal">
                    100% Natural Arabica or Robusta, <span>30 ml cup</span>
                  </p>
                  <Link className="relative bottom-0 top-10  bg-accent-gradient w-fit mx-auto px-6 py-2 text-[17px] text-[var(--tags)]  font-medium rounded-lg">
                    <p>
                      <span>
                        <FontAwesomeIcon icon={faCartShopping} />
                      </span>
                      Order it Now
                    </p>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/**Products Slide -end*/}
        </div>
      </div>
    </motion.div>
  );
}

export default Products;
