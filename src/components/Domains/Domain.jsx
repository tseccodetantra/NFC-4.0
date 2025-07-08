import { useState } from 'react';
import pic from '../../assets/webdev.png';
import pic1 from '../../assets/blockchain.png';
import pic2 from '../../assets/socialCause.png';
import pic3 from '../../assets/Aiml.png';
import './Domain.css'

function Domain() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardData = [
    {
      img: pic3,
      title: 'AI-ML',
      text: 'Develop intelligent systems and machine learning models',
      problem: `Problem Statement: `,
    },
    {
      img: pic,
      title: 'Web/App Development',
      text: 'Build responsive websites and applications',
      problem: `Problem Statement: `,
    },
    {
      img: pic2,
      title: 'Social Cause',
      text: 'Tackle societal challenges with tech-driven solutions',
      problem: `Problem Statement: `,
    },
    {
      img: pic1,
      title: 'Block chain',
      text: 'Build decentralized apps and smart contracts',
      problem: `Problem Statement: `,
    },
  ];

  return (
    <>
      <div className="header-container desktop-scroll-margin" id='domain'>
        <h1 className="gradient-text">Challenge Domains</h1>
        <h2 className="gd-text">Choose your code quest</h2>
      </div>

      <div className={`theBox ${selectedCard !== null ? 'focused' : ''}`}>
        {cardData.map((card, index) => {
          const isSelected = selectedCard === index;

          return (
            <div
              key={index}
              className={`card1 ${isSelected ? 'expanded' : selectedCard !== null ? 'hidden' : ''}`}
              onClick={() => {
                if (selectedCard === null) setSelectedCard(index);
              }}
            >
              {isSelected && (
                <button
                  className="close-button"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click
                    setSelectedCard(null);
                  }}
                >
                  ×
                </button>
              )}

              {isSelected ? (
                <div className="problem-statement">
                  <h2>{card.title}</h2>
                  <p style={{ whiteSpace: 'pre-line' }}>{card.problem}</p>
                </div>
              ) : (
                <>
                  <img className="card-img" src={card.img} alt={card.title} />
                  <h1>{card.title}</h1>
                  <p>{card.text}</p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Domain;
