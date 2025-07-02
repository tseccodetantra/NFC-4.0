import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";

import marioJump from "../assets/mario-jump.png";
import marioWalk from "../assets/mario-walk.png";
import brick from "../assets/brick.png";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [bumpIndex, setBumpIndex] = useState(null);
  const [flashIndex, setFlashIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const ulRef = useRef(null);
  const canvasRef = useRef(null);

  const currentPosRef = useRef(null);
  const jumpStartRef = useRef(null);
  const previousHoveredIndexRef = useRef(0);
  const hasFlashedRef = useRef(false);
  const hasBumpedRef = useRef(false);
  const directionRef = useRef("left");

  const links = [
    { text: "Home", href: "#home" },
    { text: "About Us", href: "#about" },
    { text: "Domain", href: "#domain" },
    { text: "Roadmap", href: "#roadmap" },
    { text: "FAQ", href: "#faq" },
  ];

  const spriteWidth = 16;
  const spriteHeight = 21;

  const marioJumpSprite = new window.Image();
  marioJumpSprite.src = marioJump;
  const marioWalkSprite = new window.Image();
  marioWalkSprite.src = marioWalk;

  const handleClick = (index, href) => {
    const jump = () => {
      setActiveIndex(index);
      jumpStartRef.current = performance.now();

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
      }, 300);
    };

    if (isMobile) {
      setHoveredIndex(index);
      const cellWidth = ulRef.current
        ? ulRef.current.getBoundingClientRect().width / links.length
        : 1;
      const targetX = cellWidth * index + cellWidth / 2;

      const waitForMario = () => {
        const marioX = currentPosRef.current?.x ?? 0;
        if (Math.abs(marioX - targetX) < 2) {
          jump();
        } else {
          setTimeout(waitForMario, 12);
        }
      };
      waitForMario();
    } else {
      jump();
    }
  };

  // Animate Mario and bricks
  useEffect(() => {
    const canvas = canvasRef.current;
    const ul = ulRef.current;
    if (canvas && ul) {
      const rect = ul.getBoundingClientRect();
      const extraHeight = 40;
      canvas.width = rect.width;
      canvas.height = rect.height + extraHeight;
      const ctx = canvas.getContext("2d");
      const cellWidth = canvas.width / links.length;
      const targetX = cellWidth * hoveredIndex + cellWidth / 2;
      // Mario's feet just below the bricks
      const targetY = ul.getBoundingClientRect().height + 40;

      if (!currentPosRef.current) {
        currentPosRef.current = { x: targetX, y: targetY };
      }

      let direction = directionRef.current;

      const easing = 0.06;
      const jumpDuration = 300;

      let animationFrameId;
      const animate = () => {
        const pos = currentPosRef.current;
        pos.x += (targetX - pos.x) * easing;
        pos.y += (targetY - pos.y) * easing;

        let jumpOffset = 0;
        if (jumpStartRef.current) {
          const elapsed = performance.now() - jumpStartRef.current;
          if (elapsed < jumpDuration) {
            jumpOffset = -22 * Math.sin((Math.PI * elapsed) / jumpDuration);

            if (
              Math.abs(elapsed - jumpDuration / 2) < 40 &&
              !hasFlashedRef.current
            ) {
              setFlashIndex(activeIndex);
              hasFlashedRef.current = true;
              setTimeout(() => setFlashIndex(null), 150);
            }
            if (
              Math.abs(elapsed - jumpDuration / 2) < 40 &&
              !hasBumpedRef.current
            ) {
              setBumpIndex(activeIndex);
              hasBumpedRef.current = true;
              setTimeout(() => setBumpIndex(null), 120);
            }
          } else {
            jumpStartRef.current = null;
            hasFlashedRef.current = false;
            hasBumpedRef.current = false;
          }
        } else {
          hasFlashedRef.current = false;
          hasBumpedRef.current = false;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const selectedSprite = jumpStartRef.current
          ? marioJumpSprite
          : marioWalkSprite;
        const drawX = pos.x - spriteWidth / 2;
        const drawY = pos.y - spriteHeight + jumpOffset;
        if (selectedSprite.complete) {
          if (direction === "right") {
            ctx.save();
            ctx.scale(-1, 1);
            ctx.drawImage(
              selectedSprite,
              -drawX - spriteWidth,
              drawY,
              spriteWidth,
              spriteHeight
            );
            ctx.restore();
          } else {
            ctx.drawImage(
              selectedSprite,
              drawX,
              drawY,
              spriteWidth,
              spriteHeight
            );
          }
        } else {
          selectedSprite.onload = () => {
            if (direction === "right") {
              ctx.save();
              ctx.scale(-1, 1);
              ctx.drawImage(
                selectedSprite,
                -drawX - spriteWidth,
                drawY,
                spriteWidth,
                spriteHeight
              );
              ctx.restore();
            } else {
              ctx.drawImage(
                selectedSprite,
                drawX,
                drawY,
                spriteWidth,
                spriteHeight
              );
            }
          };
        }

        animationFrameId = requestAnimationFrame(animate);
      };

      animate();
      return () => cancelAnimationFrame(animationFrameId);
    }
  }, [hoveredIndex, activeIndex, links.length]);

  // Mobile detection
  useEffect(() => {
    function checkMobile() {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        const hasMouse = window.matchMedia("(pointer: fine)").matches;
        setIsMobile(!hasMouse);
      }
    }
    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("orientationchange", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("orientationchange", checkMobile);
    };
  }, []);

  // Update direction only when hoveredIndex changes
  useEffect(() => {
    if (hoveredIndex > previousHoveredIndexRef.current) {
      directionRef.current = "right";
    } else if (hoveredIndex < previousHoveredIndexRef.current) {
      directionRef.current = "left";
    }
    previousHoveredIndexRef.current = hoveredIndex;
  }, [hoveredIndex]);

  // Ensure canvas is proper size and position
  useEffect(() => {
    function updateCanvasSize() {
      const canvas = canvasRef.current;
      const ul = ulRef.current;
      if (canvas && ul) {
        const rect = ul.getBoundingClientRect();
        const extraHeight = 40;
        canvas.width = rect.width;
        canvas.height = rect.height + extraHeight;
      }
    }

    updateCanvasSize();
    requestAnimationFrame(updateCanvasSize);
    const timeout = setTimeout(updateCanvasSize, 60);

    window.addEventListener("resize", updateCanvasSize);
    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      clearTimeout(timeout);
    };
  }, [links.length]);

  // --- RENDER ---
  if (isMobile) {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <MobileNavbar links={links} brand="NFC 4.0" />
        </div>
      </nav>
    );
  }

  // Desktop (Mario) navbar: sticky, floating, no navbar-container/nav wrapper
  return (
    <nav
      className="links-wrapper mario-sticky-navbar"
      style={{ "--brick": `url(${brick})` }}
    >
      <ul className="navbar-links" ref={ulRef}>
        {links.map((link, index) => (
          <li
            key={link.text}
            className={
              `navbar-link` +
              (activeIndex === index ? " hit" : "") +
              (flashIndex === index ? " flash" : "") +
              (bumpIndex === index ? " bump" : "")
            }
            onMouseEnter={() => {
              if (!isMobile) setHoveredIndex(index);
            }}
            onClick={(e) => {
              e.preventDefault();
              setHoveredIndex(index);
              handleClick(index, link.href);
            }}
            draggable="false"
          >
            <a href={link.href} draggable="false">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <canvas className="game-canvas" ref={canvasRef} />
    </nav>
  );
}

export default Navbar;
