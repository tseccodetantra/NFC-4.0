import React, { useState, useEffect } from 'react';
import './App.css';
import gamepad from './assets/react.svg'; // Use gamepad emoji or icon

export default function App() {
  const [activeTab, setActiveTab] = useState('level');
  const [currentStage, setCurrentStage] = useState(1);

  return (
    <div className="app">
      <Header />
      <TruckTrack />
      <ConceptSelector activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'level' ? (
        <LevelSelect currentStage={currentStage} />
      ) : (
        <RoadmapTimeline currentStage={currentStage} />
      )}
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>🎮 HACKATHON QUEST 2024</h1>
      <p>Choose your UI adventure!</p>
    </header>
  );
}

function TruckTrack() {
  return (
    <div className="track">
      <div className="road">
        <div className="truck red" />
        <div className="truck blue" />
        <div className="dots">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="dot" />
          ))}
        </div>
      </div>
    </div>
  );
}

function ConceptSelector({ activeTab, setActiveTab }) {
  return (
    <div className="concept-selector">
      <button
        className={activeTab === 'level' ? 'active' : ''}
        onClick={() => setActiveTab('level')}
      >
        🎮 LEVEL SELECT
      </button>
      <button
        className={activeTab === 'roadmap' ? 'active' : ''}
        onClick={() => setActiveTab('roadmap')}
      >
        📜 ROADMAP
      </button>
    </div>
  );
}

function LevelSelect({ currentStage }) {
  const levels = [
    { title: 'Team Formation', xp: 100 },
    { title: 'Problem Release', xp: 50 },
    { title: 'Ideation Sprint', xp: 250 },
    { title: 'Development Phase', xp: 500 },
    { title: 'Testing & Polish', xp: 300 },
    { title: 'Final Submission', xp: 200 },
    { title: 'Demo & Judging', xp: 1000 }
  ];

  return (
    <div className="level-select">
      <h2>🎮 SELECT YOUR LEVEL</h2>
      <div className="level-grid">
        {levels.map((level, i) => (
          <div
            key={i}
            className={`level-card ${i === currentStage - 1 ? 'active' : i < currentStage - 1 ? 'unlocked' : 'locked'}`}
          >
            <div className="icon">
              {i === currentStage - 1 ? '🔥' : i < currentStage - 1 ? '✅' : '🔒'}
            </div>
            <div className="level-title">LEVEL {i + 1}</div>
            <div className="level-subtitle">{level.title}</div>
            <div className="xp">{level.xp} XP</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RoadmapTimeline({ currentStage }) {
  const steps = [
    { title: 'Team Formation', desc: 'Find your squad and get ready to hack', label: 'Pre-Event', xp: 100 },
    { title: 'Problem Release', desc: 'Problem statements revealed', label: 'Day 0 – 11:00 PM', xp: 50 },
    { title: 'Ideation Sprint', desc: 'Brainstorm and finalize your approach', label: 'Hour 0 – 9:00 AM', xp: 250 }
    // Add remaining if needed
  ];

  return (
    <div className="roadmap">
      <h2>📜 NFC 4.0 ROADMAP</h2>
      <div className="timeline">
        <div
          className="pacman"
          style={{ transform: `translateY(${(currentStage - 1) * 180}px)` }}
        />
        {steps.map((step, i) => (
          <div className="timeline-step" key={i}>
            <div className="dot-line">
              <div className="dot" />
              <div className="line" />
            </div>
            <div className="card right">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              <div className="label">{step.label}</div>
              <div className="xp">★ {step.xp} XP</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
