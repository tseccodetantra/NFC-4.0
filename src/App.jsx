"use client"
import Header from "./components/Header"
import TruckTrack from "./components/TruckTrack"
import ConceptSelector from "./components/ConceptSelector"
import LevelSelect from "./components/LevelSelect"
import RoadmapTimeline from "./components/RoadmapTimeline"
import ProgressBar from "./components/ProgressBar"
import { roadmapData } from "./data/roadmapData"
import "./App.css"

function App() {
  const [activeConcept, setActiveConcept] = useState("level-select")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900 text-white font-mono">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Header />
        <TruckTrack roadmapData={roadmapData} />
        <ConceptSelector activeConcept={activeConcept} setActiveConcept={setActiveConcept} />

        {activeConcept === "level-select" && <LevelSelect roadmapData={roadmapData} />}

        {activeConcept === "quest-log" && <RoadmapTimeline roadmapData={roadmapData} />}

        <ProgressBar roadmapData={roadmapData} />
      </div>
    </div>
  )
}

export default App
"use client"

import { useState, useEffect, useRef } from "react"

const HackathonRoadmap = () => {
  const [activeConcept, setActiveConcept] = useState("level-select")
  const day1PacmanRef = useRef<HTMLDivElement>(null)
  const wholeSectionRef = useRef<HTMLDivElement>(null)

  // Updated roadmap data for 24-hour hackathon
  const roadmapData = [
    {
      id: 1,
      title: "Team Formation",
      status: "current",
      time: "Pre-Event",
      description: "Find your squad and get ready to hack",
      xp: 100,
    },
    {
      id: 2,
      title: "Problem Release",
      status: "locked",
      time: "Day 0 - 11:00 PM",
      description: "Problem statements revealed",
      xp: 50,
    },
    {
      id: 3,
      title: "Ideation Sprint",
      status: "locked",
      time: "Hour 0 - 9:00 AM",
      description: "Brainstorm and finalize your approach",
      xp: 250,
    },
    {
      id: 4,
      title: "Development Phase",
      status: "locked",
      time: "Hour 2 - 11:00 AM",
      description: "Code like there's no tomorrow",
      xp: 500,
    },
    {
      id: 5,
      title: "Testing & Polish",
      status: "locked",
      time: "Hour 20 - 5:00 AM",
      description: "Debug and perfect your solution",
      xp: 300,
    },
    {
      id: 6,
      title: "Final Submission",
      status: "locked",
      time: "Hour 23 - 8:00 AM",
      description: "Submit before the deadline",
      xp: 200,
    },
    {
      id: 7,
      title: "Demo & Judging",
      status: "locked",
      time: "Hour 24 - 9:00 AM",
      description: "Present your masterpiece",
      xp: 1000,
    },
  ]

  // Schedule data
  const day1Events = [
    { event: "Check-In", time: "8:00 AM" },
    { event: "Inauguration Ceremony", time: "10:00 AM" },
    { event: "Announcement of Problem Statements", time: "10:30 AM" },
    { event: "Hackathon Begins", time: "11:00 AM" },
    { event: "Lunch", time: "2:00 PM" },
    { event: "Mentoring Round", time: "7 - 9 PM" },
    { event: "Dinner", time: "9:00 PM" },
  ]

  const day2Events = [
    { event: "Breakfast", time: "8:00 AM" },
    { event: "Hackathon Ends and Internal Judging Starts", time: "11:00 AM" },
    { event: "Announcement of Finalist Teams", time: "1:00 PM" },
    { event: "Result Announcement", time: "4:00 PM" },
  ]

  const concepts = [
    { id: "level-select", name: "Level Select", icon: "🎮" },
    { id: "quest-log", name: "Quest Journal", icon: "📜" },
    { id: "roadmap", name: "Schedule", icon: "🗓️" },
    { id: "timeline-log", name: "Timeline Quest", icon: "⏰" },
  ]

  // Helper functions for icons and symbols
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return "🏆"
      case "current":
        return "⚡"
      case "locked":
        return "🛡️"
      default:
        return "❓"
    }
  }

  const getLevelIcon = (status: string) => {
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

  const getQuestStatusSymbol = (status: string) => {
    switch (status) {
      case "completed":
        return "✓"
      case "current":
        return ""
      case "locked":
        return "🔒"
      default:
        return "?"
    }
  }

  const getTimelineIcon = (status: string) => {
    switch (status) {
      case "completed":
        return "👑"
      case "current":
        return "⚡"
      case "locked":
        return "🔒"
      default:
        return "❓"
    }
  }

  // Calculate progress
  const completedCount = roadmapData.filter((stage) => stage.status === "completed").length
  const totalStages = roadmapData.length
  const progressPercentage = (completedCount / totalStages) * 100
  const truckPosition = Math.max(0, Math.min(((completedCount + 0.5) / totalStages) * 100 - 5, 90))

  // Roadmap Card Component
  const RoadmapCard = ({
    event,
    time,
    pos,
    animationDelay,
  }: {
    event: string
    time: string
    pos: number
    animationDelay: number
  }) => {
    const isEven = pos % 2 === 0

    return (
      <div
        className={`roadmap-card-container ${isEven ? "left" : "right"}`}
        style={{
          animationDelay: `${animationDelay}ms`,
          top: `${pos * 120}px`,
        }}
      >
        <div className="roadmap-card">
          <div className="card-header">
            <span style={{ fontSize: "1rem" }}>{getStatusIcon("current")}</span>
            <h3 className="card-title">{event}</h3>
          </div>
          <div className="card-footer">
            <div className="card-date">{time}</div>
          </div>
        </div>
      </div>
    )
  }

  // Level Select Component
  const LevelSelect = () => (
    <div className="level-select-container">
      <h2 className="concept-title">🎮 SELECT YOUR LEVEL</h2>
      <div className="level-select-grid">
        {roadmapData.map((stage) => (
          <div
            key={stage.id}
            className={`level-card ${stage.status}`}
            style={{
              transform: "scale(1)",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (stage.status !== "locked") {
                ;(e.target as HTMLElement).style.transform = "scale(1.05)"
              }
            }}
            onMouseLeave={(e) => {
              ;(e.target as HTMLElement).style.transform = "scale(1)"
            }}
          >
            <div className="level-icon">{getLevelIcon(stage.status)}</div>
            <h3 className="level-number">LEVEL {stage.id}</h3>
            <p className="level-title">{stage.title}</p>
            <div className="level-xp">{stage.xp} XP</div>
          </div>
        ))}
      </div>
    </div>
  )

  // Quest Log Component
  const QuestLog = () => (
    <div className="quest-log-container">
      <h2 className="concept-title">📜 QUEST LOG</h2>
      <div className="quest-log-content">
        {roadmapData.map((stage) => (
          <div key={stage.id} className={`quest-item ${stage.status}`}>
            <div className={`quest-status ${stage.status}`}>{getQuestStatusSymbol(stage.status)}</div>
            <div className="quest-content">
              <h3 className="quest-title">
                Quest {stage.id}: {stage.title}
              </h3>
              <p className="quest-description">{stage.description}</p>
              <div className="quest-footer">
                <span className="quest-date">{stage.time}</span>
                <div className="quest-reward">
                  <span style={{ color: "#7c3aed" }}>💎</span>
                  <span>{stage.xp}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  // Roadmap Component
  const Roadmap = () => (
    <div className="roadmap-container" ref={wholeSectionRef}>
      <h2 className="concept-title">🗓️ HACKATHON SCHEDULE</h2>

      {/* DAY 1 SECTION */}
      <div className="day-section">
        <h3 className="day-title">DAY - 1</h3>
        <div className="roadmap-timeline">
          {/* Day 1 Vertical Line */}
          <div className="timeline-line" style={{ height: `${day1Events.length * 120}px` }} />

          {/* Pacman */}
          <div ref={day1PacmanRef} className="pacman-scroll" />

          {day1Events.map((item, index) => (
            <RoadmapCard
              key={`day1-${index}`}
              event={item.event}
              time={item.time}
              pos={index}
              animationDelay={index * 100}
            />
          ))}
        </div>
      </div>

      {/* DAY 2 SECTION */}
      <div className="day-section">
        <h3 className="day-title day-2">DAY - 2</h3>
        <div className="roadmap-timeline">
          {/* Day 2 Vertical Line */}
          <div className="timeline-line" style={{ height: `${day2Events.length * 120}px` }} />

          {day2Events.map((item, index) => (
            <RoadmapCard
              key={`day2-${index}`}
              event={item.event}
              time={item.time}
              pos={index}
              animationDelay={index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  )

  // Timeline Quest Component
  const TimelineQuest = () => (
    <div className="timeline-quest-container">
      <h2 className="concept-title">⏰ TIMELINE QUEST</h2>
      <div className="timeline-quest-content">
        {roadmapData.map((stage, index) => (
          <div key={stage.id} className="timeline-item">
            <div className={`timeline-node ${stage.status}`}>{getTimelineIcon(stage.status)}</div>
            <div className={`timeline-content ${stage.status}`}>
              <div className="timeline-header">
                <h3 className="timeline-title">{stage.title}</h3>
                <span className="timeline-time">{stage.time}</span>
              </div>
              <p className="timeline-description">{stage.description}</p>
              <div className="timeline-xp">⭐ {stage.xp} XP</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  useEffect(() => {
    // Simple scroll animation for pacman
    const handleScroll = () => {
      if (day1PacmanRef.current && wholeSectionRef.current) {
        const rect = wholeSectionRef.current.getBoundingClientRect()
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)))
        const maxMove = day1Events.length * 120
        day1PacmanRef.current.style.transform = `translateY(${progress * maxMove}px)`
        day1PacmanRef.current.style.opacity = rect.top < window.innerHeight && rect.bottom > 0 ? "1" : "0"
      }
    }

    if (activeConcept === "roadmap") {
      window.addEventListener("scroll", handleScroll)
      handleScroll() // Initial call
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [activeConcept, day1Events.length])

  return (
    <div className="container">
      <div className="max-width">
        {/* Header */}
        <div className="header">
          <h1 className="main-title">NEED FOR CODE 4.0</h1>
        </div>

        {/* Monster Truck Progress Track */}
        <div className="truck-track">
          <div
            className="truck-container"
            style={{
              left: `${truckPosition}%`,
              transition: "left 2s ease-in-out",
            }}
          >
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
          {/* Stage markers */}
          <div className="stage-markers">
            {roadmapData.map((stage, index) => (
              <div
                key={stage.id}
                className={`stage-marker ${stage.status}`}
                style={{ left: `${(index / (roadmapData.length - 1)) * 100}%` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Concept Selector */}
        <div className="concept-selector">
          {concepts.map((concept) => (
            <button
              key={concept.id}
              className={`pixel-button ${activeConcept === concept.id ? "active" : ""}`}
              onClick={() => setActiveConcept(concept.id)}
            >
              {concept.icon} {concept.name}
            </button>
          ))}
        </div>

        {/* Concept Content */}
        <div className="concept-content">
          {activeConcept === "level-select" && <LevelSelect />}
          {activeConcept === "quest-log" && <QuestLog />}
          {activeConcept === "roadmap" && <Roadmap />}
          {activeConcept === "timeline-log" && <TimelineQuest />}
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-header">
            <span className="progress-label">OVERALL PROGRESS</span>
            <span className="progress-count">
              {completedCount}/{totalStages} COMPLETE
            </span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${progressPercentage}%`,
                transition: "width 1s ease-out",
              }}
            ></div>
            <div className="progress-shine"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Reset and Base Styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          font-family: "Courier New", monospace;
          background: linear-gradient(to bottom, #581c87, #1e3a8a, #312e81);
          min-height: 100vh;
          color: white;
          padding: 1rem;
        }

        .max-width {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Header Styles */
        .header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .main-title {
          font-size: clamp(1rem, 4vw, 2rem);
          color: white;
          margin-bottom: 0.5rem;
          letter-spacing: 2px;
        }

        /* Monster Truck Styles */
        .truck-track {
          position: relative;
          height: 60px;
          background: linear-gradient(to right, #8b4513 0%, #a0522d 50%, #8b4513 100%);
          border: 3px solid #654321;
          border-radius: 8px;
          overflow: hidden;
          margin: 20px 0;
        }

        .truck-track::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          background: repeating-linear-gradient(to right, #654321 0px, #654321 10px, transparent 10px, transparent 20px);
          transform: translateY(-50%);
        }

        .truck-container {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }

        .monster-truck {
          width: 60px;
          height: 40px;
          position: relative;
          animation: bounce 2s infinite ease-in-out;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
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
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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

        @keyframes smoke {
          0% { opacity: 1; transform: translateX(0) scale(1); }
          100% { opacity: 0; transform: translateX(-20px) scale(0.5); }
        }

        .exhaust-smoke::before,
        .exhaust-smoke::after {
          content: "";
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

        .stage-markers {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }

        .stage-marker {
          position: absolute;
          top: 50%;
          width: 12px;
          height: 12px;
          border: 2px solid;
          transform: translate(-50%, -50%);
          border-radius: 2px;
        }

        .stage-marker.completed {
          background: #4ade80;
          border-color: #16a34a;
        }

        .stage-marker.current {
          background: #facc15;
          border-color: #eab308;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .stage-marker.locked {
          background: #9ca3af;
          border-color: #6b7280;
        }

        /* Concept Selector */
        .concept-selector {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .pixel-button {
          font-family: "Courier New", monospace;
          font-size: 10px;
          padding: 12px 16px;
          border: 3px solid;
          background: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.1s ease;
          cursor: pointer;
          border-color: #22d3ee;
          color: #22d3ee;
        }

        .pixel-button:hover {
          transform: translate(-2px, -2px);
          box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.5);
          background: #22d3ee;
          color: black;
        }

        .pixel-button.active {
          background: #facc15;
          color: black;
          border-color: #eab308;
        }

        .concept-title {
          font-size: clamp(0.875rem, 3vw, 1.5rem);
          text-align: center;
          margin-bottom: 1.5rem;
          color: #facc15;
        }

        /* Level Select Styles */
        .level-select-container {
          background: rgba(0, 0, 0, 0.8);
          border-radius: 8px;
          padding: 2rem;
          border: 4px solid #22d3ee;
        }

        .level-select-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
        }

        .level-card {
          aspect-ratio: 1;
          border: 4px solid;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          cursor: pointer;
        }

        .level-card.completed {
          border-color: #4ade80;
          background: rgba(34, 197, 94, 0.3);
        }

        .level-card.current {
          border-color: #facc15;
          background: rgba(234, 179, 8, 0.3);
          animation: pulse 2s infinite;
        }

        .level-card.locked {
          border-color: #6b7280;
          background: rgba(107, 114, 128, 0.3);
          opacity: 0.5;
        }

        .level-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .level-number {
          font-size: 0.625rem;
          color: white;
          margin-bottom: 0.25rem;
        }

        .level-title {
          font-size: 0.625rem;
          color: #d1d5db;
          text-align: center;
          line-height: 1.4;
        }

        .level-xp {
          font-size: 0.625rem;
          color: #facc15;
          margin-top: 0.5rem;
        }

        /* Quest Log Styles */
        .quest-log-container {
          background: #fef3c7;
          border: 8px solid #92400e;
          border-radius: 8px;
          padding: 1.5rem;
          background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4a574' fillOpacity='0.1'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3C/g%3E%3C/svg%3E");
        }

        .quest-log-container .concept-title {
          color: #92400e;
        }

        .quest-log-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .quest-item {
          border: 4px solid;
          padding: 1rem;
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .quest-item.completed {
          border-color: #16a34a;
          background: #dcfce7;
        }

        .quest-item.current {
          border-color: #ea580c;
          background: #fed7aa;
        }

        .quest-item.locked {
          border-color: #6b7280;
          background: #f3f4f6;
        }

        .quest-status {
          width: 1rem;
          height: 1rem;
          border: 2px solid #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.625rem;
          margin-top: 0.25rem;
          flex-shrink: 0;
        }

        .quest-status.completed {
          background: #16a34a;
          color: white;
        }

        .quest-status.current {
          background: #ea580c;
          animation: pulse 2s infinite;
        }

        .quest-status.locked {
          background: #6b7280;
        }

        .quest-content {
          flex: 1;
        }

        .quest-title {
          font-size: 0.875rem;
          color: #92400e;
          margin-bottom: 0.25rem;
        }

        .quest-description {
          font-size: 0.625rem;
          color: #a16207;
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }

        .quest-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .quest-date {
          font-size: 0.625rem;
          color: #a16207;
          background: #fde68a;
          border: 2px solid #a16207;
          padding: 0.25rem 0.5rem;
        }

        .quest-reward {
          font-size: 0.75rem;
          color: #7c3aed;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        /* Roadmap Styles */
        .roadmap-container {
          background: #17173B;
          border-radius: 8px;
          padding: 2rem;
          border: 4px solid #08968A;
        }

        .roadmap-container .concept-title {
          color: #08968A;
        }

        .day-section {
          margin-bottom: 3rem;
        }

        .day-title {
          font-size: 1.5rem;
          color: #08968A;
          margin-bottom: 1rem;
          text-align: left;
        }

        .day-title.day-2 {
          text-align: right;
        }

        .roadmap-timeline {
          position: relative;
          min-height: 400px;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          background: #DC53E6;
          z-index: 1;
        }

        .pacman-scroll {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 30px;
          background: #facc15;
          border-radius: 50%;
          z-index: 20;
          transition: transform 0.1s ease-out;
        }

        .pacman-scroll::before {
          content: '';
          position: absolute;
          top: 50%;
          right: 0;
          width: 0;
          height: 0;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-right: 15px solid #17173B;
          transform: translateY(-50%);
        }

        .roadmap-card-container {
          position: absolute;
          width: 280px;
          z-index: 10;
        }

        .roadmap-card-container.left {
          right: 60%;
        }

        .roadmap-card-container.right {
          left: 60%;
        }

        .roadmap-card {
          border: 4px solid #08968A;
          padding: 1rem;
          background: rgba(8, 150, 138, 0.1);
          border-radius: 4px;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .card-title {
          font-size: 0.75rem;
          color: white;
        }

        .card-footer {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .card-date {
          font-size: 0.625rem;
          border: 2px solid #22d3ee;
          color: #22d3ee;
          padding: 0.25rem 0.5rem;
          background: rgba(0, 0, 0, 0.3);
        }

        /* Timeline Quest Styles */
        .timeline-quest-container {
          background: rgba(0, 0, 0, 0.9);
          border-radius: 8px;
          padding: 2rem;
          border: 4px solid #7c3aed;
        }

        .timeline-quest-container .concept-title {
          color: #7c3aed;
        }

        .timeline-quest-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .timeline-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .timeline-node {
          width: 3rem;
          height: 3rem;
          border: 4px solid;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .timeline-node.completed {
          border-color: #4ade80;
          background: rgba(34, 197, 94, 0.3);
        }

        .timeline-node.current {
          border-color: #facc15;
          background: rgba(234, 179, 8, 0.3);
          animation: pulse 2s infinite;
        }

        .timeline-node.locked {
          border-color: #6b7280;
          background: rgba(107, 114, 128, 0.3);
        }

        .timeline-content {
          flex: 1;
          padding: 0.5rem 0;
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .timeline-title {
          font-size: 1rem;
          color: white;
          margin: 0;
        }

        .timeline-time {
          font-size: 0.75rem;
          color: #7c3aed;
          background: rgba(124, 58, 237, 0.2);
          border: 2px solid #7c3aed;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
        }

        .timeline-description {
          font-size: 0.875rem;
          color: #d1d5db;
          margin-bottom: 0.75rem;
          line-height: 1.6;
        }

        .timeline-xp {
          font-size: 0.875rem;
          color: #facc15;
          font-weight: bold;
        }

        /* Progress Bar Styles */
        .progress-container {
          margin-top: 3rem;
          background: rgba(0, 0, 0, 0.8);
          border-radius: 8px;
          padding: 1.5rem;
          border: 4px solid #22d3ee;
        }

        .progress-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .progress-label {
          font-size: 0.875rem;
          color: #22d3ee;
          font-weight: bold;
        }

        .progress-count {
          font-size: 0.875rem;
          color: #facc15;
          background: rgba(234, 179, 8, 0.2);
          border: 2px solid #facc15;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
        }

        .progress-bar {
          position: relative;
          height: 20px;
          background: #374151;
          border: 3px solid #22d3ee;
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #22d3ee, #06b6d4, #0891b2);
          position: relative;
        }

        .progress-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: shine 3s infinite;
        }

        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 0.5rem;
          }

          .level-select-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          }

          .roadmap-card-container {
            width: 200px;
          }

          .roadmap-card-container.left {
            right: 55%;
          }

          .roadmap-card-container.right {
            left: 55%;
          }

          .timeline-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .progress-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .concept-selector {
            gap: 0.25rem;
          }

          .pixel-button {
            font-size: 8px;
            padding: 8px 12px;
          }
        }

        @media (max-width: 480px) {
          .roadmap-card-container {
            width: 160px;
          }

          .roadmap-card-container.left {
            right: 52%;
          }

          .roadmap-card-container.right {
            left: 52%;
          }

          .timeline-item {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .timeline-node {
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </div>
  )
}

export default HackathonRoadmap
>>>>>>> 8101ce13d978121520e6043ecec2c41b31b2b468
