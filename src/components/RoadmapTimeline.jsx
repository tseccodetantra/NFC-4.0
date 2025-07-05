import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../App.css'
import roadmapData from '../data/roadmapData'

const RoadmapTimeline = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic'
    })
  }, [])

  useEffect(() => {
    const pacmanContainer = document.getElementById('pacmanContainer')
    const currentStageIndex = roadmapData.findIndex(stage => stage.status === 'current')
    const targetPercentage = (currentStageIndex / (roadmapData.length - 1)) * 80
    pacmanContainer?.style.setProperty('--target-position', `${targetPercentage}%`)
  }, [])

  return (
    <div className="container">
      <div className="max-width">
        <div className="roadmap-timeline-container" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="concept-title pixel-text" data-aos="zoom-in" data-aos-delay="200">📜 NFC 4.0 ROADMAP</h2>

          <div className="timeline-container">
            <div className="timeline-line" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400"></div>

            <div className="pacman-container" id="pacmanContainer" data-aos="pacman-follow-line" data-aos-delay="1000" data-aos-duration="6000">
              <div className="pacman">
                <div className="pacman-top"></div>
                <div className="pacman-bottom"></div>
              </div>
            </div>

            {roadmapData.map((item, index) => (
              <div
                key={item.id}
                className="timeline-item"
                data-aos={index % 2 === 0 ? 'fly-in-left' : 'fly-in-right'}
                data-aos-delay={(index * 200 + 1800).toString()}
                data-aos-duration="1000"
                data-aos-easing="ease-out-cubic"
              >
                <div
                  className="timeline-dot"
                  data-aos="zoom-in"
                  data-aos-delay={(index * 200 + 2000).toString()}
                  data-aos-duration="600"
                ></div>

                <div className="timeline-content">
                  <h3 className="timeline-title pixel-text">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                  <div className="timeline-footer">
                    <div className="timeline-time">{item.time}</div>
                    <div className="timeline-xp">
                      <span>⭐</span><span>{item.xp} XP</span>
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

export default RoadmapTimeline
