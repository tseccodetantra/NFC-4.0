"use client"

import { useEffect, useState } from "react"

export default function ConceptSelector({ activeConcept, setActiveConcept }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 400)
  }, [])

  return (
    <div
      className={`flex flex-wrap justify-center gap-4 mb-8 transition-all duration-800 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <button
        className={`pixel-button ${activeConcept === "level-select" ? "active" : ""}`}
        onClick={() => setActiveConcept("level-select")}
      >
        🎮 Level Select
      </button>
      <button
        className={`pixel-button ${activeConcept === "quest-log" ? "active" : ""}`}
        onClick={() => setActiveConcept("quest-log")}
      >
        📜 Roadmap
      </button>
    </div>
  )
}
