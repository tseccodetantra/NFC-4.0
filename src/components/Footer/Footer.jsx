import React from 'react';
import {Heart} from "lucide-react"
import user from "@/assets/users.svg"
import github from "@/assets/github.svg"


const Footer = () => {
  return (
    <footer className="bg-[#0F0B33] text-yellow-300 font-retro px-6 py-20 border-t-4 border-yellow-300 shadow-inner shadow-yellow-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
        
        {/* About */}
        {/* <div>
          <h3 className="text-lg md:text-2xl mb-4 font-bold text-white tracking-wide">Need For Code 3.0</h3>
          <p className="text-sm md:text-base leading-relaxed text-yellow-200">
            Join us for an electrifying 24-hour coding marathon at Thadomal Shahani Engineering College, Bandra!
            Blaze through innovation, build with passion, and race against the clock — online or offline!
          </p>
          <p className="mt-3 italic text-cyan-400">“Gotta code fast!” 🌀</p>
        </div> */}

        {/* Quick Links */}
        <div>
          <h3 className="text-lg md:text-2xl mb-4 font-bold text-white tracking-wide">Quick Links</h3>
          <ul className="space-y-4 text-sm md:text-base">
            <li>
              <a href="https://devfolio.co" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition font-semibold">
                🚀 Register on Devfolio
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition font-semibold">
                <img src={github} alt="" className='w-10 h-10 inline ' /> View GitHub Repo
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-cyan-400 transition font-semibold">
                ❓ FAQs
              </a>
            </li>
            <li>
              <a href="mailto:contact@tsec.com" className="hover:text-cyan-400 transition font-semibold">
                ✉️ Contact Us
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
                📸 Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com" className="hover:text-sky-400 font-semibold transition">
                🐦 Twitter (X)
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" className="hover:text-blue-400 font-semibold transition">
                🔗 LinkedIn
              </a>
            </li>
            <li>
              <a href="tel:+919999999999" className="hover:text-green-300 font-semibold transition">
                📞 +91 99999 99999
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-12 border-yellow-600" />

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-yellow-200">
        <div>© {new Date().getFullYear()} Need For Code 3.0 | All rights reserved.</div>
        <div className="text-cyan-300 italic">Made with <span className='inline-block'><Heart/></span> by Team Codetantra :)</div>
      </div>
    </footer>
  );
};

export default Footer;
