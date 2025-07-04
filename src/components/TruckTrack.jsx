function TruckTrack() {
  return (
    <div className="truck-track" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
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
  );
}