"use client"

import { useEffect, useState } from "react"
import PacmanAnimation from "./PacmanAnimation"

export default function RoadmapTimeline({ roadmapData }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="bg-slate-900/90 border-4 border-yellow-400 rounded-lg p-8 min-h-[600px]">
        <h2 className="text-xl md:text-2xl text-center mb-8 text-yellow-400 pixel-text">📜 NFC 4.0 ROADMAP</h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-green-400 transform -translate-x-1/2 rounded-full"></div>

          {/* Pacman Animation */}
          <PacmanAnimation roadmapData={roadmapData} />

          {/* Timeline Items */}
          <div className="space-y-12">
            {roadmapData.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 w-4 h-4 bg-yellow-400 border-4 border-slate-900 rounded-full transform -translate-x-1/2 z-10 shadow-lg shadow-yellow-400/50"></div>

                {/* Content */}
                <div
                  className={`w-5/12 p-6 bg-gradient-to-br from-yellow-400/10 to-cyan-400/10 border-2 border-yellow-400 rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/30 ${
                    index % 2 === 0 ? "mr-auto" : "ml-auto"
                  }`}
                >
                  {/* Arrow */}
                  <div
                    className={`absolute top-1/2 w-0 h-0 border-t-[12px] border-b-[12px] border-t-transparent border-b-transparent transform -translate-y-1/2 ${
                      index % 2 === 0
                        ? "right-full border-r-[12px] border-r-yellow-400"
                        : "left-full border-l-[12px] border-l-yellow-400"
                    }`}
                  ></div>

                  <h3 className="text-white text-sm mb-2 text-center pixel-text">{item.title}</h3>
                  <p className="text-gray-300 text-xs mb-4 text-center leading-relaxed">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="bg-cyan-400/20 border-2 border-cyan-400 text-cyan-400 px-3 py-1 rounded text-xs pixel-text hover:bg-cyan-400 hover:text-slate-900 transition-colors cursor-pointer">
                      {item.time}
                    </div>
                    <div className="text-yellow-400 text-xs flex items-center gap-1 pixel-text">
                      <span>⭐</span>
                      <span>{item.xp} XP</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
