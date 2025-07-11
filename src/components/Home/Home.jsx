import React, { useRef, useEffect, useState } from "react";
import CometSVG from "./CometSVG";
import ship1 from "../../assets/spaceships/ship1.png";
import shootSound from "../../assets/sounds/shoot.mp3";
import cometBreakSound from "../../assets/sounds/cometbreak.mp3";
import kachinkSound from "../../assets/sounds/kachink.mp3";
import "./home.css";
import Coinslot from "./Coinslot";

const TARGET_DATE = new Date("2025-08-05T10:00:00+05:30");

function getShipAngle(cursorX, cursorY, width, height) {
  const x0 = 8;
  const y0 = height - 8;
  const dx = cursorX - x0;
  const dy = cursorY - y0;
  let angle = Math.atan2(dy, dx);
  angle = Math.max(-Math.PI / 2, Math.min(0, angle));
  return angle;
}

function getCountdownParts(target) {
  const now = new Date();
  let diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);
  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);
  const mins = Math.floor(diff / (1000 * 60));
  diff -= mins * (1000 * 60);
  const secs = Math.floor(diff / 1000);
  return { days, hours, mins, secs };
}

function Home() {
  const canvasRef = useRef(null);
  const [shipImg, setShipImg] = useState(null);
  const DEFAULT_ANGLE = -(35 * Math.PI) / 180;
  const [shipAngle, setShipAngle] = useState(DEFAULT_ANGLE);
  const shipAngleRef = useRef(shipAngle);
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 440 });
  const [countdown, setCountdown] = useState(getCountdownParts(TARGET_DATE));
  const [isMobile, setIsMobile] = useState(false);
  const [shooting, setShooting] = useState(false);
  const [projectileProgress, setProjectileProgress] = useState(0);
  const animRef = useRef();
  const [isBlinking, setIsBlinking] = useState(false);

  const shootAudioRef = useRef(null);
  const breakAudioRef = useRef(null);
  const kachinkAudioRef = useRef(null);

  useEffect(() => {
    shootAudioRef.current = new Audio(shootSound);
    breakAudioRef.current = new Audio(cometBreakSound);

    const kachink = new Audio(kachinkSound);
    kachink.load(); // preload into buffer
    kachinkAudioRef.current = kachink;
  }, []);

  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      const box = document.getElementById("canvas-box");
      if (box && !mobile) {
        setCanvasSize({
          width: box.clientWidth,
          height: Math.min(440, box.clientHeight),
        });
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const img = new window.Image();
    img.src = ship1;
    setShipImg(img);
  }, [isMobile]);

  useEffect(() => {
    shipAngleRef.current = shipAngle;
  }, [shipAngle]);

  useEffect(() => {
    if (isMobile) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    function animateToDefaultAngle() {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      const duration = 500;
      const start = performance.now();
      const from = shipAngleRef.current;
      const to = DEFAULT_ANGLE;
      function animate(now) {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 2);
        setShipAngle(from + (to - from) * eased);
        if (t < 1) animRef.current = requestAnimationFrame(animate);
        else animRef.current = null;
      }
      animRef.current = requestAnimationFrame(animate);
    }

    function handleMouseMove(e) {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setShipAngle(getShipAngle(x, y, rect.width, rect.height));
    }

    function handleMouseLeave() {
      animateToDefaultAngle();
    }

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [canvasSize, isMobile]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountdownParts(TARGET_DATE));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const canvas = canvasRef.current;
    if (!canvas || !shipImg) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const shipW = 80;
    const shipH = 80;
    const x = 8;
    const y = canvas.height - shipH - 8;
    const shipCenter = { x: x + shipW / 2, y: y + shipH / 2 };

    const cometEl = document.querySelector(".comet-svg");
    let cometTip = { x: canvas.width * 0.25, y: canvas.height * 0.75 };

    if (cometEl) {
      const cometRect = cometEl.getBoundingClientRect();
      const canvasRect = canvas.getBoundingClientRect();
      cometTip = {
        x: cometRect.left + cometRect.width * 0.25 - canvasRect.left,
        y: cometRect.top + cometRect.height * 0.75 - canvasRect.top,
      };
    }

    const pad = (n) => String(n).padStart(2, "0");
    const countdownText = `DAYS:${pad(countdown.days)}  HRS:${pad(
      countdown.hours
    )}  MIN:${pad(countdown.mins)}  SEC:${pad(countdown.secs)}`;

    ctx.save();
    ctx.translate(shipCenter.x, shipCenter.y);
    ctx.rotate(shipAngle + Math.PI / 2);
    ctx.shadowColor = "#00eaff";
    ctx.shadowBlur = 30;
    ctx.drawImage(shipImg, -shipW / 2, -shipH / 2, shipW, shipH);
    ctx.restore();

    if (shooting) {
      const t = Math.min(1, projectileProgress);
      const projX = shipCenter.x + (cometTip.x - shipCenter.x) * t;
      const projY = shipCenter.y + (cometTip.y - shipCenter.y) * t;
      ctx.beginPath();
      ctx.arc(projX, projY, 6, 0, Math.PI * 2);
      ctx.fillStyle = "#ffff88";
      ctx.shadowColor = "#ffff88";
      ctx.shadowBlur = 12;
      ctx.fill();
    }
  }, [
    shipImg,
    shipAngle,
    canvasSize,
    countdown,
    shooting,
    projectileProgress,
    isMobile,
  ]);

  function handleRegisterClick(e) {
    e.preventDefault();
    if (isMobile) {
      const kachink = kachinkAudioRef.current;
      if (kachink) {
        kachink.currentTime = 0;
        setIsBlinking(true);
        kachink
          .play()
          .then(() => {
            setTimeout(() => {
              window.location.href = "https://example.com/register";
              setIsBlinking(false);
            }, kachink.duration * 1000);
          })
          .catch(() => {
            setIsBlinking(false);
            window.location.href = "https://example.com/register";
          });
      } else {
        window.location.href = "https://example.com/register";
      }
    } else {
      shootAudioRef.current?.play();
      setShooting(true);
      let progress = 0;
      setProjectileProgress(0);
      function animateProjectile() {
        progress += 0.025;
        setProjectileProgress(progress);
        if (progress < 1) {
          requestAnimationFrame(animateProjectile);
        } else {
          breakAudioRef.current?.play();
          setTimeout(() => {
            window.location.href = "https://example.com/register";
          }, 100);
        }
      }
      animateProjectile();
    }
  }
  if (isMobile) {
    return (
      <section className="mobile-home-screen">
        <div className="mobile-home-content">
          <div className="mobile-title">NEED FOR CODE 4.0</div>
          <div className="insert-coin">INSERT COIN TO START</div>

          <div className="lcd-box-row">
            {[
              { label: "D", value: countdown.days },
              { label: "H", value: countdown.hours },
              { label: "M", value: countdown.mins },
              { label: "S", value: countdown.secs },
            ].map(({ label, value }) => (
              <div className="lcd-box" key={label}>
                <div className="lcd-num">{String(value).padStart(2, "0")}</div>
                <div className="lcd-label">{label}</div>
              </div>
            ))}
          </div>

          <button className="retro-button" onClick={handleRegisterClick}>
            <span className="button-text">REGISTER</span>
            <Coinslot
              className={`coin-slot ${isBlinking ? "blinking-slot" : ""}`}
            />
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      <div
        id="canvas-box"
        className="flicker-wrapper"
        style={{
          width: "90vw",
          maxWidth: 1100,
          margin: "180px auto 60px",
          minHeight: "440px",
          position: "relative",
          border: "4px solid #00eaff",
          borderRadius: "18px",
          boxShadow: "0 0 32px #00eaff, 0 0 8px #00eaff inset",
          background: "#181c2f",
          overflow: "visible",
        }}
      >
        <div className="splash-text-flicker">NEED FOR CODE 4.0</div>

        <div
          className="lcd-box-row"
          style={{
            position: "absolute",
            bottom: 12,
            right: 24,
            transform: "scale(1.5)",
            transformOrigin: "bottom right",
            zIndex: 5,
          }}
        >
          {[
            { label: "D", value: countdown.days },
            { label: "H", value: countdown.hours },
            { label: "M", value: countdown.mins },
            { label: "S", value: countdown.secs },
          ].map(({ label, value }) => (
            <div className="lcd-box" key={label}>
              <div className="lcd-num">{String(value).padStart(2, "0")}</div>
              <div className="lcd-label">{label}</div>
            </div>
          ))}
        </div>

        <CometSVG
          className="comet-svg"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 2,
            pointerEvents: "none",
          }}
          color={"#00eaff"}
        />

        <canvas
          ref={canvasRef}
          width={canvasSize.width}
          height={canvasSize.height}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            background: "transparent",
          }}
        />
      </div>

      <div style={{ textAlign: "center" }}>
        <button
          onClick={handleRegisterClick}
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: "1rem",
            padding: "12px 24px",
            backgroundColor: "#00eaff",
            border: "none",
            borderRadius: "10px",
            color: "#000",
            cursor: "pointer",
          }}
        >
          REGISTER
        </button>
      </div>
    </>
  );
}

export default Home;
