import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer className="bg-[#2a1c17] text-[var(--tags)] mt-20 rounded-xl cursor-pointer">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand / About */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--tags-contrast)]">
            CoffeeBrand
          </h2>
          <p className="text-sm leading-relaxed">
            Brewing the perfect blend of tradition and innovation.
            Your daily dose of energy and comfort in every sip.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[var(--tags-contrast)] font-bold">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm ">
            <li className="hover:text-white transition-colors">Home</li>
            <li className="hover:text-white transition-colors">About Us</li>
            <li className="hover:text-white transition-colors">Products</li>
            <li className="hover:text-white transition-colors">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[var(--tags-contrast)]">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition-colors">FAQs</li>
            <li className="hover:text-white transition-colors">Help Center</li>
            <li className="hover:text-white transition-colors">PrivacyPolicy</li>
            <li className="hover:text-white transition-colors">Terms &amp; Conditions</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[var(--tags-contrast)]">
            Newsletter
          </h3>
          <p className="text-sm">Stay updated with our latest offers.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-lg focus:outline-none text-black"
            />
            <button className="bg-accent-gradient px-4 py-2 rounded-r-lg text-[var(--tags)] hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20 py-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} CoffeeBrand. All Rights Reserved to Ahmed Salama </p>
        
        {/* Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <FontAwesomeIcon icon={faFacebook} className="cursor-pointer hover:text-white transition" />
          <FontAwesomeIcon icon={faTwitter} className="cursor-pointer hover:text-white transition" />
          <FontAwesomeIcon icon={faInstagram} className="cursor-pointer hover:text-white transition" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
