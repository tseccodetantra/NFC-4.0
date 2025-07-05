import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AboutUs from "./components/About Us/AboutUs";
import Domain from "./components/Domains/Domain";
import Roadmap from "./components/Roadmap/Roadmap";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/FAQ/FAQfooterUI/Footer";
import Sponsors from "./components/Sponsors/SponsorsSection";
import Preloader from "./components/Preloader/Preloader";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 5000); // Show preloader for 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPreloader ? (
        <Preloader />
      ) : (
        <div className="App">
          <Navbar />
          <div id="home" style={{ scrollMarginTop: "175px" }}>
            <Home />
          </div>
          <AboutUs />
          <Domain />
          <Roadmap />
          <Sponsors />
          <FAQ />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
