import React from 'react'

const ConceptSelector = ({ currentConcept, switchConcept }) => {
  const concepts = [
    { id: 'level-select', label: '🎮 Level Select' },
    { id: 'quest-log', label: '📜 Roadmap' }
  ]

  return (
    <div className="concept-selector" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
      {concepts.map((concept) => (
        <button
          key={concept.id}
          className={`pixel-button ${currentConcept === concept.id ? 'active' : ''}`}
          onClick={() => switchConcept(concept.id)}
        >
          {concept.label}
        </button>
      ))}
    </div>
  )
}

export default ConceptSelector