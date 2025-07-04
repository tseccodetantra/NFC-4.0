// File: /src/App.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import Header from './components/Header';
import TruckTrack from './components/TruckTrack';
import ConceptSelector from './components/ConceptSelector';
import LevelSelect from './components/LevelSelect';
import Timeline from './components/Timeline';
import ProgressBar from './components/ProgressBar';
import roadmapData from './data/roadmapData';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="container">
      <div className="max-width">
        <Header />
        <TruckTrack roadmapData={roadmapData} />
        <ConceptSelector />
        <LevelSelect roadmapData={roadmapData} />
        <Timeline roadmapData={roadmapData} />
        <ProgressBar roadmapData={roadmapData} />
      </div>
    </div>
  );
}

export default App;
