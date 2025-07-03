import React, { useEffect } from 'react'
import roadmapData from '../data/roadmapData'

const TruckTrack = () => {
  useEffect(() => {
    const currentStageIndex = roadmapData.findIndex((stage) => stage.status === 'current')
    const progressPercentage = (currentStageIndex / (roadmapData.length - 1)) * 85
    const truck = document.getElementById('truckContainer')
    setTimeout(() => {
      if (truck) truck.style.left = `${progressPercentage}%`
    }, 1000)
  }, [])

  useEffect(() => {
    const stageMarkers = document.getElementById('stageMarkers')
    roadmapData.forEach((stage, index) => {
      const marker = document.createElement('div')
      marker.className = `stage-marker ${stage.status}`
      marker.style.left = `${(index / (roadmapData.length - 1)) * 100}%`
      stageMarkers?.appendChild(marker)
    })
  }, [])

  return (
    <div className="truck-track" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
      <div className="truck-container" id="truckContainer">
        <div className="monster-truck">
          <div className="truck-body">
            <div className="truck-cabin"></div>
            <div className="truck-bed"></div>
          </div>
          <div className="truck-wheels">
            <div className="wheel wheel-front"></div>
            <div className="wheel wheel-back"></div>
          </div>
          <div className="exhaust-smoke"></div>
        </div>
      </div>
      <div className="stage-markers" id="stageMarkers"></div>
    </div>
  )
}

export default TruckTrack