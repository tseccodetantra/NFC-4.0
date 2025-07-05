// src/components/LevelSelect.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProgressBar from "./ProgressBar";

const roadmapData = [
  { id: 1, title: "Team Formation", status: "current", xp: 100 },
  { id: 2, title: "Problem Release", status: "locked", xp: 50 },
  { id: 3, title: "Ideation Sprint", status: "locked", xp: 250 },
  { id: 4, title: "Development Phase", status: "locked", xp: 500 },
  { id: 5, title: "Testing & Polish", status: "locked", xp: 300 },
  { id: 6, title: "Final Submission", status: "locked", xp: 200 },
  { id: 7, title: "Demo & Judging", status: "locked", xp: 1000 },
];

const getLevelIcon = (status) => {
  switch (status) {
    case "completed": return "⭐";
    case "current": return "🔥";
    case "locked": return "🔒";
    default: return "❓";
  }
};

const LevelSelect = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const completedCount = roadmapData.filter(r => r.status === "completed").length;
  const currentCount = roadmapData.filter(r => r.status === "current").length;
  const progressPercentage = ((completedCount + currentCount * 0.5) / roadmapData.length) * 100;

  return (
    <div style={{
      fontFamily: '"Press Start 2P", monospace',
      background: 'linear-gradient(to bottom, #581c87, #1e3a8a, #312e81)',
      color: 'white',
      padding: '2rem',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h1 style={{
        fontSize: 'clamp(1.25rem, 4vw, 2rem)',
        color: '#facc15',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>🚀 NEED FOR CODE 4.0</h1>

      <div style={{
        background: 'rgba(0, 0, 0, 0.8)',
        borderRadius: '8px',
        padding: '2rem',
        border: '4px solid #22d3ee',
        maxWidth: '1000px',
        width: '100%',
      }} data-aos="fade-up" data-aos-duration="1000">
        <h2 style={{
          fontSize: 'clamp(0.875rem, 3vw, 1.5rem)',
          textAlign: 'center',
          marginBottom: '1.5rem',
          color: '#facc15'
        }}>🎮 SELECT YOUR LEVEL</h2>

        <div style={{
          position: 'relative',
          height: '60px',
          background: 'linear-gradient(to right, #8b4513 0%, #a0522d 50%, #8b4513 100%)',
          border: '3px solid #654321',
          borderRadius: '8px',
          overflow: 'hidden',
          marginBottom: '2rem'
        }}>
          <div style={{
            content: '""',
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            height: '2px',
            background: 'repeating-linear-gradient(to right, #654321 0px, #654321 10px, transparent 10px, transparent 20px)',
            transform: 'translateY(-50%)'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            transition: 'left 3s ease-in-out',
            zIndex: 10,
            left: `${(completedCount + currentCount * 0.5) / (roadmapData.length - 1) * 85}%`
          }}>
            <div style={{ width: '60px', height: '40px', position: 'relative', animation: 'bounce 2s infinite ease-in-out' }}>
              <div style={{ position: 'absolute', bottom: '12px', left: 0, right: 0 }}>
                <div style={{ width: '20px', height: '16px', background: 'linear-gradient(45deg, #ff4444, #cc3333)', border: '2px solid #000', position: 'absolute', left: '8px', bottom: 0, borderRadius: '2px' }}></div>
                <div style={{ width: '24px', height: '12px', background: 'linear-gradient(45deg, #4444ff, #3333cc)', border: '2px solid #000', position: 'absolute', right: '4px', bottom: 0, borderRadius: '2px' }}></div>
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                <div style={{ width: '16px', height: '16px', background: 'radial-gradient(circle, #333 30%, #666 70%, #333 100%)', border: '3px solid #000', borderRadius: '50%', position: 'absolute', bottom: '-8px', left: '4px', animation: 'spin 1s linear infinite' }}></div>
                <div style={{ width: '16px', height: '16px', background: 'radial-gradient(circle, #333 30%, #666 70%, #333 100%)', border: '3px solid #000', borderRadius: '50%', position: 'absolute', bottom: '-8px', right: '8px', animation: 'spin 1s linear infinite' }}></div>
              </div>
            </div>
          </div>
        </div>

        <ProgressBar percentage={progressPercentage} />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1rem'
        }}>
          {roadmapData.map((stage, index) => (
            <div
              key={stage.id}
              className={`level-card ${stage.status}`}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              style={{
                aspectRatio: '1',
                border: '4px solid',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)',
                ...(stage.status === 'completed' && {
                  borderColor: '#4ade80',
                  background: 'rgba(34, 197, 94, 0.3)'
                }),
                ...(stage.status === 'current' && {
                  borderColor: '#facc15',
                  background: 'rgba(234, 179, 8, 0.3)',
                  animation: 'pulse 2s infinite'
                }),
                ...(stage.status === 'locked' && {
                  borderColor: '#6b7280',
                  background: 'rgba(107, 114, 128, 0.3)',
                  opacity: 0.5
                })
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{getLevelIcon(stage.status)}</div>
              <h3 style={{ fontSize: '0.625rem', color: 'white', marginBottom: '0.25rem' }}>LEVEL {stage.id}</h3>
              <p style={{ fontSize: '0.625rem', color: '#d1d5db', textAlign: 'center', lineHeight: '1.4' }}>{stage.title}</p>
              <div style={{ fontSize: '0.625rem', color: '#facc15', marginTop: '0.5rem' }}>{stage.xp} XP</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LevelSelect;
