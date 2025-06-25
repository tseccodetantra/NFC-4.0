"use client";
import "./TetrisPreloader.css";
import { useEffect, useState } from "react";

const LETTERS = "NEED FOR CODE 4.0";

const CHAR_MAP = {
  N: ["10001", "11001", "10101", "10011", "10001"],
  E: ["11111", "10000", "11110", "10000", "11111"],
  D: ["11110", "10001", "10001", "10001", "11110"],
  F: ["11111", "10000", "11100", "10000", "10000"],
  O: ["01110", "10001", "10001", "10001", "01110"],
  R: ["11110", "10001", "11110", "10010", "10001"],
  C: ["01111", "10000", "10000", "10000", "01111"],
  4: ["10010", "10010", "11111", "00010", "00010"],
  ".": ["00000", "00000", "00000", "00000", "00100"],
  0: ["01110", "10011", "10101", "11001", "01110"],
  " ": ["00000", "00000", "00000", "00000", "00000"],
};

const Block = ({ filled, delay, layer }) => (
  <div
    className={`tetris-block-pixel ${filled ? "filled" : ""}`}
    style={{
      animationDelay: `${delay}s`,
      "--layer": layer,
    }}
  />
);

const Character = ({ char, charIndex }) => {
  const rows = CHAR_MAP[char] || ["00000", "00000", "00000", "00000", "00000"];

  return (
    <div className="char-grid">
      {rows.map((row, rowIndex) =>
        row.split("").map((col, colIndex) => {
          // Calculate which layer this block belongs to (0-4 for each row)
          const layer = rowIndex;
          // Reverse the layer order: bottom row (4) falls first, top row (0) falls last
          const reversedLayer = 4 - layer;
          // Calculate delay: each layer falls 0.3s after the previous layer (faster for mobile)
          const layerDelay = reversedLayer * 0.4;
          // NO stagger within each layer - all blocks in the same layer fall together
          const totalDelay = layerDelay;

          return (
            <Block
              key={`${rowIndex}-${colIndex}`}
              filled={col === "1"}
              delay={totalDelay}
              layer={layer}
            />
          );
        })
      )}
    </div>
  );
};

export default function TetrisPreloader() {
  const [currentLayer, setCurrentLayer] = useState(4); // Start from bottom layer (4)
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Track which layer is currently falling (bottom to top)
    const layerTimers = [];

    // Start from layer 4 (bottom) and go to layer 0 (top)
    for (let i = 4; i >= 0; i--) {
      const timer = setTimeout(() => {
        setCurrentLayer(i);
      }, (4 - i) * 300); // Each layer starts 0.3s after the previous (faster)
      layerTimers.push(timer);
    }

    // Add completion timer after all layers
    const completionTimer = setTimeout(() => {
      setIsComplete(true);
    }, 4 * 300 + 2000); // All layers + 1s for final animation (faster)
    layerTimers.push(completionTimer);

    return () => {
      layerTimers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <div className={`tetris-container ${isComplete ? "complete" : ""}`}>
      <div className="loader-single-line">
        {LETTERS.split("").map((char, index) => (
          <Character key={index} char={char} charIndex={index} />
        ))}
      </div>
    </div>
  );
}
