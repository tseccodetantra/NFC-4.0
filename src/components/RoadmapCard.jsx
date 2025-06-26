"use client"

import { useState, useEffect } from "react"
// Remove this line:
// import { Star, Gem, Users, Lightbulb, Code, TestTube, Upload, Presentation, FileText } from 'lucide-react'

// Replace with simple icon objects:
const iconMap = {
  Star: () => <span>⭐</span>,
  Gem: () => <span>💎</span>,
  Users: () => <span>👥</span>,
  Lightbulb: () => <span>💡</span>,
  Code: () => <span>💻</span>,
  TestTube: () => <span>🧪</span>,
  Upload: () => <span>📤</span>,
  Presentation: () => <span>🎤</span>,
  FileText: () => <span>📄</span>,
}

const { Star, Gem, Users, Lightbulb, Code, TestTube, Upload, Presentation, FileText } = iconMap

export default function RoadmapCard() {
  const [selectedConcept, setSelectedConcept] = useState("world-map")
  const [truckPosition, setTruckPosition] = useState(0)

  const roadmapData = [
    {
      id: 1,
      title: "Team Formation",
      status: "current",
      time: "Pre-Event",
      description: "Find your squad and get ready to hack",
      xp: 100,
      icon: Users,
    },
    {
      id: 2,
      title: "Problem Release",
      status: "locked",
      time: "Day 0 - 11:00 PM",
      description: "Problem statements revealed",
      xp: 50,
      icon: FileText,
    },
    {
      id: 3,
      title: "Ideation Sprint",
      status: "locked",
      time: "Hour 0 - 9:00 AM",
      description: "Brainstorm and finalize your approach",
      xp: 250,
      icon: Lightbulb,
    },
    {
      id: 4,
      title: "Development Phase",
      status: "locked",
      time: "Hour 2 - 11:00 AM",
      description: "Code like there's no tomorrow",
      xp: 500,
      icon: Code,
    },
    {
      id: 5,
      title: "Testing & Polish",
      status: "locked",
      time: "Hour 20 - 5:00 AM",
      description: "Debug and perfect your solution",
      xp: 300,
      icon: TestTube,
    },
    {
      id: 6,
      title: "Final Submission",
      status: "locked",
      time: "Hour 23 - 8:00 AM",
      description: "Submit before the deadline",
      xp: 200,
      icon: Upload,
    },
    {
      id: 7,
      title: "Demo & Judging",
      status: "locked",
      time: "Hour 24 - 9:00 AM",
      description: "Present your masterpiece",
      xp: 1000,
      icon: Presentation,
    },
  ]

  const concepts = [
    { id: "world-map", name: "World Map Style", icon: "🗺️" },
    { id: "level-select", name: "Level Select", icon: "🎮" },
    { id: "quest-log", name: "Quest Journal", icon: "📜" },
    { id: "timeline-log", name: "Timeline Quest", icon: "⏰" },
  ]

  // Calculate truck position based on current progress
  useEffect(() => {
    const currentIndex = roadmapData.findIndex((stage) => stage.status === "current")
    const completedCount = roadmapData.filter((stage) => stage.status === "completed").length
    const totalStages = roadmapData.length
    const progressPercentage = ((completedCount + 0.5) / totalStages) * 100
    setTruckPosition(progressPercentage)
  }, [])

  const MonsterTruck = ({ className = "" }) => (
    <div className={`relative ${className}`}>
      <div className="monster-truck">
        {/* Truck Body */}
        <div className="truck-body">
          <div className="truck-cabin"></div>
          <div className="truck-bed"></div>
        </div>
        {/* Wheels */}
        <div className="truck-wheels">
          <div className="wheel wheel-front"></div>
          <div className="wheel wheel-back"></div>
        </div>
        {/* Exhaust smoke */}
        <div className="exhaust-smoke"></div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4 pixel-font relative overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%239C92AC%22 fillOpacity%3D%220.05%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      <style jsx>{`
        .monster-truck {
          width: 60px;
          height: 40px;
          position: relative;
          animation: bounce 2s infinite ease-in-out;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
        }

        .truck-body {
          position: absolute;
          bottom: 12px;
          left: 0;
          right: 0;
        }

        .truck-cabin {
          width: 20px;
          height: 16px;
          background: linear-gradient(45deg, #ff4444, #cc3333);
          border: 2px solid #000;
          position: absolute;
          left: 8px;
          bottom: 0;
          border-radius: 2px;
          box-shadow: inset 0 2px 4px rgba(255,255,255,0.3);
        }

        .truck-bed {
          width: 24px;
          height: 12px;
          background: linear-gradient(45deg, #4444ff, #3333cc);
          border: 2px solid #000;
          position: absolute;
          right: 4px;
          bottom: 0;
          border-radius: 2px;
          box-shadow: inset 0 2px 4px rgba(255,255,255,0.3);
        }

        .truck-wheels {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }

        .wheel {
          width: 16px;
          height: 16px;
          background: radial-gradient(circle, #333 30%, #666 70%, #333 100%);
          border: 3px solid #000;
          border-radius: 50%;
          position: absolute;
          bottom: -8px;
          animation: spin 1s linear infinite;
          box-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }

        .wheel-front {
          left: 4px;
        }

        .wheel-back {
          right: 8px;
        }

        .exhaust-smoke {
          position: absolute;
          right: -8px;
          top: 8px;
          width: 4px;
          height: 4px;
          background: #666;
          border-radius: 50%;
          animation: smoke 1.5s infinite ease-out;
        }

        .exhaust-smoke::before,
        .exhaust-smoke::after {
          content: '';
          position: absolute;
          width: 3px;
          height: 3px;
          background: #888;
          border-radius: 50%;
          animation: smoke 1.5s infinite ease-out;
        }

        .exhaust-smoke::before {
          right: 6px;
          top: -2px;
          animation-delay: 0.3s;
        }

        .exhaust-smoke::after {
          right: 10px;
          top: -4px;
          animation-delay: 0.6s;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes smoke {
          0% { 
            opacity: 0.8; 
            transform: translateY(0px) scale(1); 
          }
          100% { 
            opacity: 0; 
            transform: translateY(-20px) scale(1.5); 
          }
        }

        .truck-track {
          position: relative;
          height: 60px;
          background: linear-gradient(to right, #8B4513 0%, #A0522D 50%, #8B4513 100%);
          border: 3px solid #654321;
          border-radius: 12px;
          overflow: hidden;
          margin: 20px 0;
          box-shadow: 
            0 4px 8px rgba(0,0,0,0.3),
            inset 0 2px 4px rgba(255,255,255,0.1);
        }

        .truck-track::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          background: repeating-linear-gradient(
            to right,
            #654321 0px,
            #654321 10px,
            transparent 10px,
            transparent 20px
          );
          transform: translateY(-50%);
        }

        .truck-container {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          transition: left 2s ease-in-out;
          z-index: 10;
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 pixel-text tracking-wider drop-shadow-lg">
            🎮 HACKATHON QUEST 2024 🎮
          </h1>
          <p className="text-cyan-300 pixel-text text-xs md:text-sm drop-shadow-md">24 Hours of Pure Innovation!</p>
        </div>

        {/* Monster Truck Progress Track */}
        <div className="truck-track mb-8">
          <div className="truck-container" style={{ left: `${Math.max(0, Math.min(truckPosition - 5, 90))}%` }}>
            <MonsterTruck />
          </div>
          {/* Stage markers */}
          {roadmapData.map((stage, index) => (
            <div
              key={stage.id}
              className="absolute top-0 bottom-0 flex items-center"
              style={{ left: `${(index / (roadmapData.length - 1)) * 100}%` }}
            >
              <div
                className={`w-3 h-3 border-2 rounded-sm ${
                  stage.status === "completed"
                    ? "bg-green-400 border-green-600 shadow-lg shadow-green-400/50"
                    : stage.status === "current"
                      ? "bg-yellow-400 border-yellow-600 animate-pulse shadow-lg shadow-yellow-400/50"
                      : "bg-gray-400 border-gray-600"
                }`}
                style={{ transform: "translateX(-50%)" }}
              ></div>
            </div>
          ))}
        </div>

        {/* Concept Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {concepts.map((concept) => (
            <button
              key={concept.id}
              onClick={() => setSelectedConcept(concept.id)}
              className={`pixel-button ${
                selectedConcept === concept.id
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black border-yellow-600"
                  : "border-cyan-400 text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-black"
              }`}
            >
              {concept.icon} {concept.name}
            </button>
          ))}
        </div>

        {/* World Map Style */}
        {selectedConcept === "world-map" && (
          <div className="relative modern-card p-8">
            <h2 className="text-xl md:text-2xl font-bold text-yellow-400 mb-6 pixel-text text-center drop-shadow-lg">
              🗺️ HACKATHON WORLD MAP
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roadmapData.map((stage, index) => {
                const IconComponent = stage.icon
                return (
                  <div
                    key={stage.id}
                    className={`relative p-6 rounded-xl border-4 transition-all duration-300 hover:scale-105 ${
                      stage.status === "completed"
                        ? "border-green-400 bg-gradient-to-br from-green-900/50 to-green-800/30 shadow-lg shadow-green-400/20"
                        : stage.status === "current"
                          ? "border-yellow-400 bg-gradient-to-br from-yellow-900/50 to-orange-800/30 animate-pulse shadow-lg shadow-yellow-400/20"
                          : "border-gray-600 bg-gradient-to-br from-gray-900/50 to-gray-800/30"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <IconComponent className="w-5 h-5 text-cyan-400" />
                      <h3 className="font-bold text-white pixel-text text-xs">{stage.title}</h3>
                    </div>
                    <p className="text-xs text-gray-300 mb-3 pixel-text leading-relaxed">{stage.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-xs pixel-text border-2 border-cyan-400 text-cyan-400 px-3 py-1 bg-black/50 rounded-lg">
                        {stage.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span className="text-xs text-yellow-400 pixel-text">{stage.xp} XP</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Level Select Style */}
        {selectedConcept === "level-select" && (
          <div className="modern-card p-8">
            <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-6 pixel-text text-center drop-shadow-lg">
              🎮 SELECT YOUR LEVEL
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {roadmapData.map((stage, index) => {
                const IconComponent = stage.icon
                return (
                  <div
                    key={stage.id}
                    className={`aspect-square border-4 flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300 rounded-xl ${
                      stage.status === "completed"
                        ? "border-green-400 bg-gradient-to-br from-green-900/30 to-green-700/20 hover:bg-green-900/50 shadow-lg shadow-green-400/20"
                        : stage.status === "current"
                          ? "border-yellow-400 bg-gradient-to-br from-yellow-900/30 to-orange-700/20 hover:bg-yellow-900/50 animate-pulse shadow-lg shadow-yellow-400/20"
                          : "border-gray-600 bg-gradient-to-br from-gray-900/30 to-gray-700/20 opacity-50"
                    }`}
                  >
                    <IconComponent className="w-8 h-8 mb-2 text-white" />
                    <h3 className="font-bold text-white pixel-text text-xs text-center mb-1">LEVEL {stage.id}</h3>
                    <p className="text-xs text-gray-300 text-center pixel-text leading-relaxed">{stage.title}</p>
                    <div className="mt-2 text-xs text-yellow-400 pixel-text">{stage.xp} XP</div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Quest Journal Style */}
        {selectedConcept === "quest-log" && (
          <div
            className="bg-gradient-to-br from-amber-100 to-orange-100 border-8 border-amber-800 rounded-xl p-6 shadow-2xl"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4a574' fillOpacity='0.1'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          >
            <h2 className="text-xl md:text-3xl font-bold text-amber-900 mb-6 pixel-text text-center drop-shadow-lg">
              📜 QUEST JOURNAL
            </h2>
            <div className="space-y-4">
              {roadmapData.map((stage, index) => {
                const IconComponent = stage.icon
                return (
                  <div
                    key={stage.id}
                    className={`border-4 p-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-102 ${
                      stage.status === "completed"
                        ? "border-green-600 bg-gradient-to-r from-green-100 to-green-50"
                        : stage.status === "current"
                          ? "border-orange-600 bg-gradient-to-r from-orange-100 to-yellow-50"
                          : "border-gray-400 bg-gradient-to-r from-gray-100 to-gray-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        {stage.status === "completed" && (
                          <div className="w-6 h-6 bg-green-600 border-2 border-black flex items-center justify-center pixel-text text-xs rounded-lg shadow-lg">
                            ✓
                          </div>
                        )}
                        {stage.status === "current" && (
                          <div className="w-6 h-6 bg-orange-600 border-2 border-black animate-pulse rounded-lg shadow-lg flex items-center justify-center">
                            <IconComponent className="w-3 h-3 text-white" />
                          </div>
                        )}
                        {stage.status === "locked" && (
                          <div className="w-6 h-6 bg-gray-400 border-2 border-black flex items-center justify-center rounded-lg shadow-lg">
                            🔒
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-amber-900 pixel-text mb-1 text-sm">
                          Quest {stage.id}: {stage.title}
                        </h3>
                        <p className="text-xs text-amber-800 mb-2 pixel-text leading-relaxed">{stage.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-amber-700 pixel-text bg-amber-200 border-2 border-amber-800 px-3 py-1 rounded-lg shadow-sm">
                            {stage.time}
                          </span>
                          <div className="flex items-center gap-1">
                            <Gem className="w-4 h-4 text-purple-600" />
                            <span className="text-sm font-bold text-purple-600 pixel-text">{stage.xp}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Timeline Quest Style */}
        {selectedConcept === "timeline-log" && (
          <div className="modern-card p-8 bg-gradient-to-br from-indigo-900/50 to-purple-900/50">
            <h2 className="text-xl md:text-2xl font-bold text-purple-300 mb-6 pixel-text text-center drop-shadow-lg">
              ⏰ HACKATHON TIMELINE
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-blue-400 to-cyan-400 rounded-full shadow-lg"></div>

              <div className="space-y-8">
                {roadmapData.map((stage, index) => {
                  const IconComponent = stage.icon
                  return (
                    <div key={stage.id} className="relative flex items-start gap-6">
                      {/* Timeline node */}
                      <div
                        className={`relative z-10 w-16 h-16 border-4 flex items-center justify-center text-2xl rounded-full shadow-lg ${
                          stage.status === "completed"
                            ? "border-green-400 bg-gradient-to-br from-green-500 to-green-600 shadow-green-400/50"
                            : stage.status === "current"
                              ? "border-yellow-400 bg-gradient-to-br from-yellow-500 to-orange-500 animate-pulse shadow-yellow-400/50"
                              : "border-gray-600 bg-gradient-to-br from-gray-600 to-gray-700"
                        }`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>

                      {/* Content card */}
                      <div className="flex-1">
                        <div
                          className={`p-6 border-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 ${
                            stage.status === "completed"
                              ? "border-green-400 bg-gradient-to-br from-green-900/30 to-green-800/20"
                              : stage.status === "current"
                                ? "border-yellow-400 bg-gradient-to-br from-yellow-900/30 to-orange-800/20"
                                : "border-gray-600 bg-gradient-to-br from-gray-900/30 to-gray-800/20"
                          }`}
                        >
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="font-bold text-white pixel-text text-sm">{stage.title}</h3>
                            <span className="text-xs text-purple-300 pixel-text bg-purple-900/50 px-3 py-1 rounded-lg border border-purple-400">
                              {stage.time}
                            </span>
                          </div>
                          <p className="text-xs text-gray-300 mb-4 pixel-text leading-relaxed">{stage.description}</p>
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span className="text-sm text-yellow-400 pixel-text">{stage.xp} XP</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* Progress Bar */}
        <div className="mt-8 modern-card p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-cyan-400 pixel-text text-xs drop-shadow-md">HACKATHON PROGRESS</span>
            <span className="text-yellow-400 pixel-text text-xs drop-shadow-md">
              {roadmapData.filter((s) => s.status === "completed").length}/{roadmapData.length} COMPLETE
            </span>
          </div>
          <div className="h-6 bg-gray-800 border-2 border-gray-600 relative overflow-hidden rounded-full shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-orange-500 transition-all duration-1000 ease-out rounded-full shadow-lg"
              style={{
                width: `${(roadmapData.filter((s) => s.status === "completed").length / roadmapData.length) * 100}%`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
