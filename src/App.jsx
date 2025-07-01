import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Domain from "./components/Domain";
import Roadmap from "./components/Roadmap/Roadmap";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer";
import Sponsors from './components/Sponsors/SponsorsSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutUs />
      <Domain />
      <Roadmap />
      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
