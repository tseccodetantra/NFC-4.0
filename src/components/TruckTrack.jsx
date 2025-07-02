"use client"

import { useEffect, useState } from "react"

export default function TruckTrack({ roadmapData }) {
  const [truckPosition, setTruckPosition] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const currentStageIndex = roadmapData.findIndex((stage) => stage.status === "current")
    const progressPercentage = (currentStageIndex / (roadmapData.length - 1)) * 85

    setTimeout(() => {
      setTruckPosition(progressPercentage)
    }, 1000)
  }, [roadmapData])

  return (
    <div
      className={`relative h-16 bg-gradient-to-r from-amber-800 via-amber-700 to-amber-800 border-4 border-amber-900 rounded-lg overflow-hidden mb-8 transition-all duration-1000 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      {/* Track line */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-amber-900 transform -translate-y-1/2">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-900 to-transparent opacity-50"></div>
      </div>

      {/* Monster Truck */}
      <div
        className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-3000 ease-in-out z-10"
        style={{ left: `${truckPosition}%` }}
      >
        <div className="relative w-16 h-10 animate-bounce">
          {/* Truck Body */}
          <div className="absolute bottom-3 left-0 right-0">
            <div className="absolute left-2 bottom-0 w-5 h-4 bg-gradient-to-br from-red-500 to-red-700 border-2 border-black rounded-sm"></div>
            <div className="absolute right-1 bottom-0 w-6 h-3 bg-gradient-to-br from-blue-500 to-blue-700 border-2 border-black rounded-sm"></div>
          </div>

          {/* Wheels */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="absolute left-1 bottom-0 w-4 h-4 bg-gradient-to-br from-gray-600 to-gray-800 border-2 border-black rounded-full animate-spin"></div>
            <div className="absolute right-2 bottom-0 w-4 h-4 bg-gradient-to-br from-gray-600 to-gray-800 border-2 border-black rounded-full animate-spin"></div>
          </div>

          {/* Exhaust smoke */}
          <div className="absolute right-0 top-2 w-1 h-1 bg-gray-500 rounded-full animate-pulse opacity-70"></div>
        </div>
      </div>

      {/* Stage Markers */}
      <div className="absolute inset-0">
        {roadmapData.map((stage, index) => (
          <div
            key={stage.id}
            className={`absolute top-1/2 w-3 h-3 border-2 transform -translate-x-1/2 -translate-y-1/2 rounded-sm ${
              stage.status === "completed"
                ? "bg-green-400 border-green-600"
                : stage.status === "current"
                  ? "bg-yellow-400 border-yellow-600 animate-pulse"
                  : "bg-gray-400 border-gray-600"
            }`}
            style={{ left: `${(index / (roadmapData.length - 1)) * 100}%` }}
          />
        ))}
      </div>
    </div>
  )
}
