import React, { useEffect } from 'react'
import './app.css'
import './script.js'

export default function App() {
  useEffect(() => {
    import('./script.js')
  }, [])

  return (
    <div className="container">
      <div className="max-width">
        <div className="header" data-aos="fade-down" data-aos-duration="1000">
          <h1 className="main-title">🎮 HACKATHON QUEST 2024 🎮</h1>
          <p className="subtitle">Choose your UI adventure!</p>
        </div>

        <div
          className="truck-track"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
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

        <div
          className="concept-selector"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <button className="pixel-button active" data-concept="level-select">
            🎮 Level Select
          </button>
          <button className="pixel-button" data-concept="quest-log">
            📜 Roadmap
          </button>
        </div>

        <div className="concept-content active" id="level-select">
          <div
            className="level-select-container"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2
              className="concept-title"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              🎮 SELECT YOUR LEVEL
            </h2>
            <div className="level-select-grid" id="levelSelectGrid"></div>
          </div>
        </div>

        <div className="concept-content" id="quest-log">
          <div
            className="roadmap-timeline-container"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2
              className="concept-title pixel-text"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              📜 NFC 4.0 ROADMAP
            </h2>

            <div className="timeline-container">
              <div
                className="timeline-line"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="400"
              ></div>

              <div
                className="pacman-container"
                id="pacmanContainer"
                data-aos="pacman-follow-line"
                data-aos-delay="1000"
                data-aos-duration="6000"
              >
                <div className="pacman">
                  <div className="pacman-top"></div>
                  <div className="pacman-bottom"></div>
                </div>
              </div>

              <div id="timeline-items"></div>
            </div>
          </div>
        </div>

        <div
          className="progress-container"
          data-aos="slide-up"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <div className="progress-header">
            <span className="progress-label">OVERALL PROGRESS</span>
            <span className="progress-count" id="progressCount">
              1/7 COMPLETE
            </span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" id="progressFill"></div>
            <div className="progress-shine"></div>
          </div>
        </div>
      </div>
    </div>
  )
}