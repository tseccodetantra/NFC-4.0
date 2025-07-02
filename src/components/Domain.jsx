import { useState } from 'react';
import pic from '../assets/webdev.png';
import pic1 from '../assets/blockchain.png';
import pic2 from '../assets/socialCause.png';
import pic3 from '../assets/Aiml.png';
import './Domain.css';

function Domain() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClick = (index) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  const cardData = [
    {
      img: pic3,
      title: 'AI-ML',
      text: 'Develop intelligent systems and machine learning models',
      problem: `Problem Statement:
      1. Design an AI chatbot that can answer questions about a dataset using natural language processing.
       Design an AI chatbot that can answer questions about a dataset using natural language processing. Design an AI chatbot that can answer questions about a dataset using natural language processing.`,
    },
    {
      img: pic,
      title: 'Web/App Development',
      text: 'Build responsive websites and applications',
      problem: `Problem Statement:
Build a responsive portfolio site that fetches GitHub projects using GitHub’s API.`,
    },
    {
      img: pic2,
      title: 'Social Cause',
      text: 'Tackle societal challenges with tech-driven solutions',
      problem: `Problem Statement:
Create an app to track and reduce food waste in college canteens.`,
    },
    {
      img: pic1,
      title: 'Blockchain',
      text: 'Build decentralized apps and smart contracts',
      problem: `Problem Statement:
Develop a decentralized voting platform using smart contracts on Ethereum.`,
    },
  ];

  return (
    <>
      <div className="header-container" id='domain'>
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
              onClick={() => handleClick(index)}
            >
              {isSelected ? (
                // 🧠 Show problem statement when selected
                <div className="problem-statement">
                  <h2>{card.title}</h2>
                  <p style={{ whiteSpace: 'pre-line' }}>{card.problem}</p>
                </div>
              ) : (
                // 🧾 Default view
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


// import pic from './assets/webdev.png'
// import pic1 from './assets/blockchain.png'
// import pic2 from './assets/socialCause.png'
// import pic3 from './assets/Aiml.png'
// function Card()
// {
//     return (
//         <>
//         <div className="header-container">
//         <h1 className="gradient-text">Challenge Domains</h1>
//         <h2 className="gd-text">Choose your code quest</h2>
//       </div>
//        <div className="theBox">
//   <div className="card1">
//     <img className="card-img" src={pic3} alt="img" />
//     <h1>AI-ML</h1>
//     <p>Develop intelligent systems and machine learning models</p>
//   </div>
//   <div className="card1">
//     <img className="card-img" src={pic} alt="img" />
//     <h1>Web/App Devlopment</h1>
//     <p>Build Responsive websites and applications</p>
//   </div>
//   <div className="card1">
//     <img className="card-img" src={pic2} alt="img" />
//     <h1>Social Cause</h1>
//     <p>ejkfbwjkbwewcbwcbwc efbwekf wekjbb wekf</p>
//   </div>
//   <div className="card1">
//     <img className="card-img" src={pic1} alt="img" />
//     <h1>Block Chain</h1>
//     <p>Build decentralized apps and smart contracts</p>
//   </div>
// </div>
// </>
//     );
// }

// export default Card