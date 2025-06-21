import React, { useState } from "react";
import "./Navbar.css";

function MobileNavbar({ links, brand = "NFC 4.0" }) {
  const [open, setOpen] = useState(false);

  // Hamburger to cross SVG
  const HamburgerIcon = (
    <svg width="32" height="32" viewBox="0 0 32 32">
      <rect
        className={`bar top${open ? " open" : ""}`}
        x="6"
        y="10"
        width="20"
        height="3"
        rx="1.5"
      />
      <rect
        className={`bar middle${open ? " open" : ""}`}
        x="6"
        y="15"
        width="20"
        height="3"
        rx="1.5"
      />
      <rect
        className={`bar bottom${open ? " open" : ""}`}
        x="6"
        y="20"
        width="20"
        height="3"
        rx="1.5"
      />
    </svg>
  );

  const handleLinkClick = (href) => {
    setOpen(false);
    setTimeout(() => {
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
    }, 200);
  };

  return (
    <div className="mobile-navbar">
      <span className="mobile-navbar-title">{brand}</span>
      <button
        className={`mobile-menu-btn${open ? " open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {HamburgerIcon}
      </button>
      <div className={`mobile-menu${open ? " open" : ""}`}>
        <ul>
          {links.map((link) => (
            <li key={link.text}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <div className="mobile-menu-overlay" onClick={() => setOpen(false)} />
      )}
    </div>
  );
}

export default MobileNavbar;
