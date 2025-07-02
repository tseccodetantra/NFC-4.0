"use client"

import { useEffect, useState } from "react"

export default function ProgressBar({ roadmapData }) {
  const [isVisible, setIsVisible] = useState(false)
  const [progressWidth, setProgressWidth] = useState(0)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 600)

    const completedCount = roadmapData.filter((stage) => stage.status === "completed").length
    const currentCount = roadmapData.filter((stage) => stage.status === "current").length
    const totalStages = roadmapData.length
    const progressPercentage = ((completedCount + currentCount * 0.5) / totalStages) * 100

    setTimeout(() => {
      setProgressWidth(progressPercentage)
    }, 1000)
  }, [roadmapData])

  const completedCount = roadmapData.filter((stage) => stage.status === "completed").length
  const currentCount = roadmapData.filter((stage) => stage.status === "current").length
  const totalStages = roadmapData.length

  return (
    <div
      className={`mt-8 bg-black/50 rounded-lg p-4 border-4 border-cyan-400 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-cyan-400 text-xs pixel-text">OVERALL PROGRESS</span>
        <span className="text-yellow-400 text-xs pixel-text">
          {completedCount + currentCount}/{totalStages} COMPLETE
        </span>
      </div>
      <div className="h-6 bg-gray-700 border-2 border-gray-600 relative overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-green-400 to-yellow-400 transition-all duration-1000 ease-out"
          style={{ width: `${progressWidth}%` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
      </div>
    </div>
  )
}
