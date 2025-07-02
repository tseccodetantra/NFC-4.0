"use client"

import { useEffect, useState } from "react"

export default function Header() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className={`text-center mb-8 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-wider pixel-text">
        🎮 HACKATHON QUEST 2024 🎮
      </h1>
      <p className="text-cyan-300 text-sm md:text-base pixel-text">Choose your UI adventure!</p>
    </div>
  )
}
