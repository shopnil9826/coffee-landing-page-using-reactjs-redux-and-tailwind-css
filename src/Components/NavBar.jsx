import React, { useState } from "react";

function NavBar() {
  const [isShow, setIsShow] = useState(false);

  return (
    <header className="relative md:p-2">
      <nav className="text-[#fff] flex flex-row items-center justify-between">
        {/* Logo */}
        <div>
          <span className="logo-font text-[var(--tags)] md:text-[20px] text-[16px]">
            CoffeeBrand
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex flex-row gap-4 text-[16px] font-medium">
          <li>
            <a
              href="#home"
              className="hover:bg-[var(--accent-to)] px-2 py-2 rounded-full"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="hover:bg-[var(--accent-to)] px-2 py-2 rounded-full"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#aboutus"
              className="hover:bg-[var(--accent-to)] px-2 py-2 rounded-full"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="#contactus"
              className="hover:bg-[var(--accent-to)] px-2 py-2 rounded-full"
            >
              Contact us
            </a>
          </li>
        </ul>

        {/* Login Button */}
        <div>
          <button
            className="bg-[var(--tags)] text-[var(--accent-from)] font-semibold text-[18px] hidden md:block px-10 py-2 rounded-lg cursor-pointer transform transition-transform duration-100 hover:scale-105"
          >
            Login
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div>
          <div onClick={() => setIsShow(!isShow)} className="cursor-pointer md:hidden">
            <span className="bg-main-gradient w-5 h-1 block rounded-full mt-1"></span>
            <span className="bg-main-gradient w-7 h-1 block rounded-full mt-1"></span>
            <span className="bg-main-gradient w-10 h-1 block rounded-full mt-1"></span>
          </div>

          {/* Mobile Menu */}
          {isShow && (
            <div className="md:hidden absolute mt-8 glass w-full right-0 rounded-lg z-10 p-4">
              <ul className="flex flex-col gap-5">
                <li>
                  <a
                    href="#home"
                    className="hover:bg-main-gradient px-2 py-2 rounded-full"
                    onClick={() => setIsShow(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#aboutus"
                    className="hover:bg-main-gradient px-2 py-2 rounded-full"
                    onClick={() => setIsShow(false)}
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:bg-main-gradient px-2 py-2 rounded-full"
                    onClick={() => setIsShow(false)}
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#contactus"
                    className="hover:bg-main-gradient px-2 py-2 rounded-full"
                    onClick={() => setIsShow(false)}
                  >
                    Contact us
                  </a>
                </li>
              </ul>
              <button
                className="bg-accent-gradient block px-10 py-2 rounded-lg mt-10 transform transition-transform duration-100 hover:scale-105"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
