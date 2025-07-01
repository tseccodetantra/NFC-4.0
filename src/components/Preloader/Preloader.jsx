"use client"

import "./Squares.css"
import { useEffect, useState } from "react"
import Squares from "./Squares"

const LETTERS_LINE1 = "NEED FOR"
const LETTERS_LINE2 = "CODE 4.0"

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
}

const Block = ({ filled, delay, layer, charIndex, blockIndex }) => {
  return (
    <div
      className={`tetris-block-pixel ${filled ? "filled" : ""}`}
      style={{
        animationDelay: `${delay}s`,
        "--layer": layer,
        "--char-index": charIndex,
        "--block-index": blockIndex,
      }}
    />
  )
}

const Character = ({ char, charIndex }) => {
  const rows = CHAR_MAP[char] || ["00000", "00000", "00000", "00000", "00000"]

  return (
    <div className="char-grid">
      {rows.map((row, rowIndex) =>
        row.split("").map((col, colIndex) => {
          // Calculate delay for left to right falling (each character falls as a unit)
          const charDelay = charIndex * 0.2 // Each character starts 0.2s after previous
          const totalDelay = charDelay // No row delay - all blocks in character fall together

          return (
            <Block
              key={`${rowIndex}-${colIndex}`}
              filled={col === "1"}
              delay={totalDelay}
              layer={rowIndex}
              charIndex={charIndex}
              blockIndex={rowIndex * 5 + colIndex}
            />
          )
        }),
      )}
    </div>
  )
}

export default function Preloader() {
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const totalLetters = LETTERS_LINE1.length + LETTERS_LINE2.length
    const completionTimer = setTimeout(
      () => {
        setIsComplete(true)
      },
      totalLetters * 200 + 1000, // Change this number to adjust timing
    )

    return () => {
      clearTimeout(completionTimer)
    }
  }, [])

  return (
    <div className={`tetris-container ${isComplete ? "complete" : ""}`}>
      {/* Animated squares background */}
      <Squares
        speed={0.3}
        squareSize={30}
        direction="diagonal"
        borderColor="rgba(0, 255, 255, 0.15)"
        hoverFillColor="rgba(0, 255, 255, 0.1)"
        className="tetris-background"
      />

      {/* Desktop: Single line */}
      <div className="loader-single-line desktop-layout">
        {(LETTERS_LINE1 + " " + LETTERS_LINE2).split("").map((char, index) => (
          <Character key={index} char={char} charIndex={index} />
        ))}
      </div>

      {/* Mobile: Two lines */}
      <div className="loader-multi-line mobile-layout">
        <div className="loader-line">
          {LETTERS_LINE1.split("").map((char, index) => (
            <Character key={`line1-${index}`} char={char} charIndex={index} />
          ))}
        </div>
        <div className="loader-line">
          {LETTERS_LINE2.split("").map((char, index) => (
            <Character key={`line2-${index}`} char={char} charIndex={LETTERS_LINE1.length + 1 + index} />
          ))}
        </div>
      </div>
    </div>
  )
}
