import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AboutUs from "./components/About Us/AboutUs";
import Domain from "./components/Domains/Domain";
import Roadmap from "./components/Roadmap/Roadmap";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/FAQ/FAQfooterUI/Footer";
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
