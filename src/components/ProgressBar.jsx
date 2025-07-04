function ProgressBar() {
  return (
    <div className="progress-container" data-aos="slide-up" data-aos-duration="1000" data-aos-delay="600">
      <div className="progress-header">
        <span className="progress-label">OVERALL PROGRESS</span>
        <span className="progress-count" id="progressCount">1/7 COMPLETE</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" id="progressFill"></div>
        <div className="progress-shine"></div>
      </div>
    </div>
  );
}

export default ProgressBar;
