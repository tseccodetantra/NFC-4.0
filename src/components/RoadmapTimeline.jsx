function RoadmapTimeline() {
  return (
    <div className="concept-content" id="quest-log">
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
          <div id="timeline-items"></div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapTimeline;