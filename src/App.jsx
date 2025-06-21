import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Domain from "./components/Domain";
import Roadmap from "./components/Roadmap";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutUs />
      <Domain />
      <Roadmap />
      <FAQ />
    </div>
  );
}

export default App;
