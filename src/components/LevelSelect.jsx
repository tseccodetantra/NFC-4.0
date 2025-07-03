import React, { useEffect } from 'react'
import roadmapData from '../data/roadmapData'

const getLevelIcon = (status) => {
  switch (status) {
    case 'completed': return '⭐'
    case 'current': return '🔥'
    case 'locked': return '🔒'
    default: return '❓'
  }
}

const LevelSelect = () => {
  useEffect(() => {
    setTimeout(() => {
      const cards = document.querySelectorAll('.level-card')
      cards.forEach((card) => {
        if (!card.classList.contains('locked')) {
          card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.05)'
            this.style.boxShadow = '0 15px 35px rgba(250, 204, 21, 0.4)'
          })
          card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)'
            this.style.boxShadow = 'none'
          })
        }
      })
    }, 2000)
  }, [])

  return (
    <div className="concept-content active" id="level-select">
      <div className="level-select-container" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="concept-title" data-aos="zoom-in" data-aos-delay="200">🎮 SELECT YOUR LEVEL</h2>
        <div className="level-select-grid">
          {roadmapData.map((stage, index) => (
            <div
              className={`level-card ${stage.status}`}
              key={stage.id}
              data-aos="fly-in-up"
              data-aos-delay={(index * 150 + 300).toString()}
              data-aos-duration="800"
              data-aos-easing="ease-out-back"
            >
              <div className="level-icon">{getLevelIcon(stage.status)}</div>
              <h3 className="level-number">LEVEL {stage.id}</h3>
              <p className="level-title">{stage.title}</p>
              <div className="level-xp">{stage.xp} XP</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LevelSelect