import React from "react";

const ProgressBar = ({ percentage }) => {
  return (
    <div style={{
      background: '#1e293b',
      borderRadius: '10px',
      overflow: 'hidden',
      height: '16px',
      marginBottom: '1.5rem',
      border: '2px solid #22d3ee'
    }}>
      <div style={{
        width: `${percentage}%`,
        height: '100%',
        background: '#4ade80',
        transition: 'width 0.5s ease-in-out'
      }}></div>
    </div>
  );
};

export default ProgressBar;