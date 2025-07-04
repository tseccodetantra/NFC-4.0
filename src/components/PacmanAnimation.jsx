import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Pacman = ({ currentStageIndex, totalStages }) => {
  useEffect(() => {
    const pacmanContainer = document.getElementById('pacmanContainer');
    if (!pacmanContainer) return;

    const targetPercentage = (currentStageIndex / (totalStages - 1)) * 80;
    pacmanContainer.style.setProperty('--target-position', `${targetPercentage}%`);

    AOS.refresh();
  }, [currentStageIndex, totalStages]);

  return (
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
  );
};

export default Pacman;