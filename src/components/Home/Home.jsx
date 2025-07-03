import React, { useRef, useEffect, useState } from "react";
import CometSVG from "./CometSVG";
import ship1 from "../../assets/spaceships/ship1.png";
import ship2 from "../../assets/spaceships/ship2.png";
import ship3 from "../../assets/spaceships/ship3.png";
import ship4 from "../../assets/spaceships/ship4.png";
import ship5 from "../../assets/spaceships/ship5.png";

const spaceshipImages = [ship1, ship2, ship3, ship4, ship5];
const TARGET_DATE = new Date("2025-08-05T00:00:00+05:30");

function getShipIndexByAngle(cursorX, cursorY, width, height) {
  // Bottom left corner as origin
  const x0 = 8;
  const y0 = height - 8;
  const dx = cursorX - x0;
  const dy = cursorY - y0;
  const angle = Math.atan2(dy, dx); // -PI to PI

  // Clamp angle between -PI/2 (up) and 0 (right)
  const clamped = Math.max(-Math.PI / 2, Math.min(0, angle));
  // Map -PI/2..0 to 0..1
  const normalized = (clamped + Math.PI / 2) / (Math.PI / 2);
  // 0..1 mapped to 0..4 (5 sprites)
  const idx = Math.round(normalized * 4);
  return idx;
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
  const [shipImgs, setShipImgs] = useState([]);
  const [shipIdx, setShipIdx] = useState(2);
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 500 });
  const [countdown, setCountdown] = useState(getCountdownParts(TARGET_DATE));

  useEffect(() => {
    const imgs = spaceshipImages.map((src) => {
      const img = new window.Image();
      img.src = src;
      return img;
    });
    setShipImgs(imgs);
  }, []);

  useEffect(() => {
    function handleResize() {
      const box = document.getElementById("canvas-box");
      if (box) {
        setCanvasSize({
          width: box.clientWidth,
          height: box.clientHeight,
        });
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleMouseMove(e) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setShipIdx(getShipIndexByAngle(x, y, rect.width, rect.height));
    }
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseleave", () => setShipIdx(2));
    }
    return () => {
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", () => setShipIdx(2));
      }
    };
  }, [canvasSize]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountdownParts(TARGET_DATE));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || shipImgs.length !== 5) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // --- Draw spaceship in bottom left ---
    const img = shipImgs[shipIdx];
    const shipW = Math.max(80, canvas.width * 0.12);
    const shipH = Math.max(80, canvas.height * 0.18);
    const x = 8;
    const y = canvas.height - shipH - 8;

    ctx.save();
    ctx.shadowColor = "#00eaff";
    ctx.shadowBlur = 30;
    ctx.drawImage(img, x, y, shipW, shipH);
    ctx.restore();

    // --- Draw retro HUD countdown in bottom right ---
    ctx.save();
    const hudPadding = 24;
    const hudWidth = 420;
    const hudHeight = 90;
    const hudX = canvas.width - hudWidth - hudPadding;
    const hudY = canvas.height - hudHeight - hudPadding;

    // HUD background (retro neon panel)
    ctx.globalAlpha = 0.85;
    ctx.fillStyle = "#10182b";
    ctx.shadowColor = "#00eaff";
    ctx.shadowBlur = 24;
    ctx.fillRect(hudX, hudY, hudWidth, hudHeight);
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;

    // HUD border (pixel style)
    ctx.strokeStyle = "#00eaff";
    ctx.lineWidth = 4;
    ctx.shadowColor = "#00eaff";
    ctx.shadowBlur = 16;
    ctx.strokeRect(hudX, hudY, hudWidth, hudHeight);
    ctx.shadowBlur = 0;

    // Decorative pixel corners (retro effect)
    ctx.fillStyle = "#00eaff";
    const px = 8;
    // Top left
    ctx.fillRect(hudX, hudY, px, px * 2);
    ctx.fillRect(hudX, hudY, px * 2, px);
    // Top right
    ctx.fillRect(hudX + hudWidth - px, hudY, px, px * 2);
    ctx.fillRect(hudX + hudWidth - px * 2, hudY, px * 2, px);
    // Bottom left
    ctx.fillRect(hudX, hudY + hudHeight - px * 2, px, px * 2);
    ctx.fillRect(hudX, hudY + hudHeight - px, px * 2, px);
    // Bottom right
    ctx.fillRect(hudX + hudWidth - px, hudY + hudHeight - px * 2, px, px * 2);
    ctx.fillRect(hudX + hudWidth - px * 2, hudY + hudHeight - px, px * 2, px);

    // HUD text (pixel font)
    ctx.font = `bold 18px 'Press Start 2P', monospace`;
    ctx.fillStyle = "#00eaff";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.shadowColor = "#00eaff";
    ctx.shadowBlur = 8;
    ctx.fillText("COUNTDOWN", hudX + 20, hudY + 14);

    ctx.font = `bold 22px 'Press Start 2P', monospace`;
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#fff";
    const { days, hours, mins, secs } = countdown;
    ctx.fillText(
      `${days}D  ${hours}H  ${mins}M  ${secs}S`,
      hudX + 20,
      hudY + 44
    );
    ctx.restore();
  }, [shipImgs, shipIdx, canvasSize, countdown]);

  return (
    <div
      id="canvas-box"
      style={{
        width: "90vw",
        maxWidth: 1100,
        margin: "180px auto",
        minHeight: 500,
        position: "relative",
        border: "4px solid #00eaff",
        borderRadius: "18px",
        boxShadow: "0 0 32px #00eaff, 0 0 8px #00eaff inset",
        background: "#181c2f",
        overflow: "visible",
      }}
    >
      {/* Overlay CometSVG in top right, scales as date approaches */}
      <CometSVG
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
  );
}

export default Home;
