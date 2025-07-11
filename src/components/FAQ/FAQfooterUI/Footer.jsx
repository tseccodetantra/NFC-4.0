import React from "react";

const Footer = () => {
  const handleFooterClick = (href) => {
    if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.hash = href;
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer className="bg-[#0F0B33] text-yellow-300 font-retro px-6 py-20 border-t-4 border-yellow-300 shadow-inner shadow-yellow-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg md:text-2xl mb-4 font-bold text-white tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-4 text-sm md:text-base">
            <li>
              <a
                href="https://devfolio.co"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition font-semibold"
              >
                🚀 Register on Unstop
              </a>
            </li>
            <li>
              <button
                onClick={() => handleFooterClick("#faq")}
                className="hover:text-cyan-400 transition font-semibold"
              >
                ❓ FAQs
              </button>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-lg md:text-2xl mb-4 font-bold text-white tracking-wide">
            Connect with Us
          </h3>
          <ul className="space-y-4 text-sm md:text-base">
            <li>
              <a
                href="https://instagram.com"
                className="hover:text-pink-500 font-semibold transition"
              >
                📸 Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                className="hover:text-blue-400 font-semibold transition"
              >
                🔗 LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-12 border-yellow-600" />

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-yellow-200">
        <div>
          © {new Date().getFullYear()} Need For Code 4.0 | All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
