"use client"

import { useState, useEffect } from "react"
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
