import React from 'react';
import {Heart} from "lucide-react"
import user from "@/assets/users.svg"
import github from "@/assets/github.svg"


const Footer = () => {
  return (
    <footer className="bg-[#0F0B33] text-yellow-300 font-retro px-6 py-16 border-t-4 border-yellow-300 shadow-inner shadow-yellow-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">

        {/* Quick Links */}
        <div>
          <h3 className="text-lg md:text-2xl mb-4 font-bold text-white tracking-wide">Quick Links</h3>
          <ul className="space-y-4 text-sm md:text-base">
            <li>
              <a href="https://devfolio.co" className="hover:text-cyan-400 transition font-semibold">
                Register on Unstop
              </a>
            </li>
            <li>
              <a href="https://github.com" className="hover:text-cyan-400 transition font-semibold">
                View GitHub Repo
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-cyan-400 transition font-semibold">
                FAQs
              </a>
            </li>
            <li>
              <a href="mailto:contact@tsec.com" className="hover:text-cyan-400 transition font-semibold">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-lg md:text-2xl mb-4 font-bold text-white tracking-wide">Connect with Us</h3>
          <ul className="space-y-4 text-sm md:text-base">
            <li>
              <a href="https://instagram.com" className="hover:text-pink-500 font-semibold transition">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com" className="hover:text-sky-400 font-semibold transition">
                Twitter (X)
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" className="hover:text-blue-400 font-semibold transition">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="tel:+919999999999" className="hover:text-green-300 font-semibold transition">
                +91 99999 99999
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
