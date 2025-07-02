"use client"

import { useEffect, useState } from "react"

export default function PacmanAnimation({ roadmapData }) {
  const [animationStarted, setAnimationStarted] = useState(false)
  const [targetPosition, setTargetPosition] = useState(0)

  useEffect(() => {
    const currentStageIndex = roadmapData.findIndex((stage) => stage.status === "current")
    const targetPercentage = (currentStageIndex / (roadmapData.length - 1)) * 80
    setTargetPosition(targetPercentage)

    setTimeout(() => {
      setAnimationStarted(true)
    }, 1000)
  }, [roadmapData])

  return (
    <div
      className={`absolute left-1/2 transform -translate-x-1/2 z-20 pointer-events-none transition-all duration-6000 ease-in-out ${
        animationStarted ? "opacity-100" : "opacity-0"
      }`}
      style={{
        top: animationStarted ? `${targetPosition}%` : "0%",
      }}
    >
      <div className="transform rotate-90">
        <div className="relative">
          <div className="w-6 h-3 bg-yellow-400 rounded-t-full animate-pacman-top"></div>
          <div className="w-6 h-3 bg-yellow-400 rounded-b-full animate-pacman-bottom"></div>
        </div>
      </div>
    </div>
  )
}
