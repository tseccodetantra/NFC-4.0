"use client"

import { useEffect, useState } from "react"

export default function LevelSelect({ roadmapData }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const getLevelIcon = (status) => {
    switch (status) {
      case "completed":
        return "⭐"
      case "current":
        return "🔥"
      case "locked":
        return "🔒"
      default:
        return "❓"
    }
  }

  return (
    <div
      className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="bg-black/80 border-4 border-cyan-400 rounded-lg p-8">
        <h2 className="text-xl md:text-2xl text-center mb-6 text-yellow-400 pixel-text">🎮 SELECT YOUR LEVEL</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {roadmapData.map((stage, index) => (
            <div
              key={stage.id}
              className={`aspect-square border-4 flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                stage.status === "completed"
                  ? "border-green-400 bg-green-400/30"
                  : stage.status === "current"
                    ? "border-yellow-400 bg-yellow-400/30 animate-pulse"
                    : "border-gray-400 bg-gray-400/30 opacity-50"
              }`}
              style={{
                animationDelay: `${index * 150 + 300}ms`,
              }}
            >
              <div className="text-2xl mb-2">{getLevelIcon(stage.status)}</div>
              <h3 className="text-xs text-white mb-1 pixel-text">LEVEL {stage.id}</h3>
              <p className="text-xs text-gray-300 text-center leading-tight pixel-text">{stage.title}</p>
              <div className="text-xs text-yellow-400 mt-2 pixel-text">{stage.xp} XP</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
