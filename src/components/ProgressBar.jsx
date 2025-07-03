import React, { useEffect } from 'react'
import roadmapData from '../data/roadmapData'

const ProgressBar = () => {
  useEffect(() => {
    const completed = roadmapData.filter((s) => s.status === 'completed').length
    const current = roadmapData.filter((s) => s.status === 'current').length
    const percent = ((completed + current * 0.5) / roadmapData.length) * 100

    const fill = document.getElementById('progressFill')
    const count = document.getElementById('progressCount')

    if (fill) fill.style.width = `${percent}%`
    if (count) count.textContent = `${completed + current}/${roadmapData.length} COMPLETE`
  }, [])

  return (
    <div className="progress-container" data-aos="slide-up" data-aos-duration="1000" data-aos-delay="600">
      <div className="progress-header">
        <span className="progress-label">OVERALL PROGRESS</span>
        <span className="progress-count" id="progressCount">0/0 COMPLETE</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" id="progressFill"></div>
        <div className="progress-shine"></div>
      </div>
    </div>
  )
}

export default ProgressBar
