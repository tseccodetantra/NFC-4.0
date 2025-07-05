import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

const roadmapData = [
  {
    id: 1,
    title: 'Team Formation',
    status: 'current',
    time: 'Pre-Event',
    description: 'Find your squad and get ready to hack',
    xp: 100,
  },
  {
    id: 2,
    title: 'Problem Release',
    status: 'locked',
    time: 'Day 0 - 11:00 PM',
    description: 'Problem statements revealed',
    xp: 50,
  },
  {
    id: 3,
    title: 'Ideation Sprint',
    status: 'locked',
    time: 'Hour 0 - 9:00 AM',
    description: 'Brainstorm and finalize your approach',
    xp: 250,
  },
  {
    id: 4,
    title: 'Development Phase',
    status: 'locked',
    time: 'Hour 2 - 11:00 AM',
    description: "Code like there's no tomorrow",
    xp: 500,
  },
  {
    id: 5,
    title: 'Testing & Polish',
    status: 'locked',
    time: 'Hour 20 - 5:00 AM',
    description: 'Debug and perfect your solution',
    xp: 300,
  },
  {
    id: 6,
    title: 'Final Submission',
    status: 'locked',
    time: 'Hour 23 - 8:00 AM',
    description: 'Submit before the deadline',
    xp: 200,
  },
  {
    id: 7,
    title: 'Demo & Judging',
    status: 'locked',
    time: 'Hour 24 - 9:00 AM',
    description: 'Present your masterpiece',
    xp: 1000,
  },
];

function App() {
  const [concept, setConcept] = useState('level-select');

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic'
    });

    const pacman = document.getElementById('pacmanContainer');
    if (pacman) {
      const index = roadmapData.findIndex(item => item.status === 'current');
      const pct = (index / (roadmapData.length - 1)) * 80;
      pacman.style.setProperty('--target-position', `${pct}%`);
    }

    const truck = document.getElementById('truckContainer');
    const current = roadmapData.findIndex(r => r.status === 'current');
    const percent = (current / (roadmapData.length - 1)) * 85;
    setTimeout(() => {
      if (truck) truck.style.left = `${percent}%`;
    }, 1000);

    const stageMarkers = document.getElementById('stageMarkers');
    if (stageMarkers) {
      stageMarkers.innerHTML = "";
      roadmapData.forEach((stage, index) => {
        const marker = document.createElement('div');
        marker.className = `stage-marker ${stage.status}`;
        marker.style.left = `${(index / (roadmapData.length - 1)) * 100}%`;
        stageMarkers.appendChild(marker);
      });
    }
  }, [concept]);

  const handleConceptSwitch = (c) => {
    setConcept(c);
    setTimeout(() => AOS.refresh(), 100);
  };

  return (
    <div className="container">
      <div className="max-width">
        <div className="header" data-aos="fade-down">
          <h1 className="main-title">NEED FOR CODE 4.0</h1>
          <p className="subtitle">Choose your adventure!</p>
        </div>

        <div className="truck-track" data-aos="zoom-in" data-aos-delay="200">
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

        <div className="concept-selector" data-aos="fade-up" data-aos-delay="400">
          <button className={`pixel-button ${concept === 'level-select' ? 'active' : ''}`} onClick={() => handleConceptSwitch('level-select')}>🎮 Level Select</button>
          <button className={`pixel-button ${concept === 'quest-log' ? 'active' : ''}`} onClick={() => handleConceptSwitch('quest-log')}>📜 Roadmap</button>
        </div>

        <div className={`concept-content ${concept === 'level-select' ? 'active' : ''}`} id="level-select">
          <div className="level-select-container" data-aos="fade-up">
            <h2 className="concept-title" data-aos="zoom-in" data-aos-delay="200">SEE THE PROGRESS</h2>
            <div className="level-select-grid">
              {roadmapData.map((stage, index) => (
                <div
                  key={stage.id}
                  className={`level-card ${stage.status}`}
                  data-aos="fly-in-up"
                  data-aos-delay={index * 150 + 300}
                  data-aos-duration="800"
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

        <div className={`concept-content ${concept === 'quest-log' ? 'active' : ''}`} id="quest-log">
          <div className="roadmap-timeline-container" data-aos="fade-up">
            <h2 className="concept-title pixel-text" data-aos="zoom-in" data-aos-delay="200">📜 NFC 4.0 ROADMAP</h2>
            <div className="timeline-container">
              <div className="timeline-line" data-aos="fade-up" data-aos-delay="400"></div>
              <div className="pacman-container" id="pacmanContainer" data-aos="pacman-follow-line" data-aos-delay="1000">
                <div className="pacman">
                  <div className="pacman-top"></div>
                  <div className="pacman-bottom"></div>
                </div>
              </div>
              <div id="timeline-items">
                {roadmapData.map((item, index) => {
                  const direction = index % 2 === 0 ? 'fly-in-left' : 'fly-in-right';
                  return (
                    <div className="timeline-item" key={item.id} data-aos={direction} data-aos-delay={index * 200 + 1800}>
                      <div className="timeline-dot" data-aos="zoom-in" data-aos-delay={index * 200 + 2000}></div>
                      <div className="timeline-content">
                        <h3 className="timeline-title pixel-text">{item.title}</h3>
                        <p className="timeline-description">{item.description}</p>
                        <div className="timeline-footer">
                          <div className="timeline-time">{item.time}</div>
                          <div className="timeline-xp">
                            <span>⭐</span>
                            <span>{item.xp} XP</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="progress-container" data-aos="slide-up" data-aos-delay="600">
          <div className="progress-header">
            <span className="progress-label">OVERALL PROGRESS</span>
            <span className="progress-count" id="progressCount"></span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" id="progressFill"></div>
            <div className="progress-shine"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getLevelIcon(status) {
  switch (status) {
    case 'completed':
      return '⭐';
    case 'current':
      return '🔥';
    case 'locked':
      return '🔒';
    default:
      return '❓';
  }
}

export default App;
