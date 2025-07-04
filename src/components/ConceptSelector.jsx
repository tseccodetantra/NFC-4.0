function ConceptSelector() {
  return (
    <div className="concept-selector" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
      <button className="pixel-button active" data-concept="level-select">🎮 Level Select</button>
      <button className="pixel-button" data-concept="quest-log">📜 Roadmap</button>
    </div>
  );
}

export default ConceptSelector;