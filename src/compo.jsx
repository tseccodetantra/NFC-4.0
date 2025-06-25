import React, { useState, useEffect } from 'react';

const PixelDomains = () => {
  const [particles, setParticles] = useState([]);
  const [achievement, setAchievement] = useState({ show: false, text: '' });
  const [explosions, setExplosions] = useState([]);

  const domains = [
    {
      id: 'ai-ml',
      icon: '🤖',
      title: 'AI-ML',
      level: 99,
      description: 'DEVELOP INTELLIGENT SYSTEMS AND MACHINE LEARNING MODELS. MASTER NEURAL NETWORKS AND AI ALGORITHMS.',
      color: '#ff00ff'
    },
    {
      id: 'web-dev',
      icon: '💻',
      title: 'WEB/APP DEV',
      level: 85,
      description: 'BUILD RESPONSIVE WEBSITES AND APPLICATIONS. CREATE FULL-STACK SOLUTIONS WITH MODERN TECH.',
      color: '#00ffff'
    },
    {
      id: 'social',
      icon: '🌟',
      title: 'SOCIAL CAUSE',
      level: 72,
      description: 'CODE FOR POSITIVE SOCIAL IMPACT. DEVELOP SOLUTIONS FOR A BETTER WORLD.',
      color: '#ffff00'
    },
    {
      id: 'blockchain',
      icon: '⛓️',
      title: 'BLOCKCHAIN',
      level: 91,
      description: 'BUILD DECENTRALIZED APPS AND SMART CONTRACTS. EXPLORE CRYPTO, DEFI, AND WEB3 TECH.',
      color: '#ff6600'
    }
  ];

  // Create pixel particles
  useEffect(() => {
    const createParticle = () => {
      const colors = ['#00ffff', '#ff00ff', '#ffff00', '#ff6600', '#00ff00'];
      const newParticle = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2,
        duration: Math.random() * 3 + 3
      };
      
      setParticles(prev => [...prev, newParticle]);
      
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, newParticle.duration * 1000);
    };

    const interval = setInterval(createParticle, 500);
    
    // Show initial achievement
    setTimeout(() => {
      showAchievement('🏆 DOMAIN EXPLORER UNLOCKED!');
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const showAchievement = (text) => {
    setAchievement({ show: true, text });
    setTimeout(() => {
      setAchievement({ show: false, text: '' });
    }, 3000);
  };

  const handleDomainClick = (domain, index) => {
    showAchievement(`🏆 ${domain.title} DOMAIN SELECTED!`);
    
    // Create explosion effect
    const explosionId = Date.now();
    const explosionPixels = [];
    
    for (let i = 0; i < 12; i++) {
      const angle = (i * 30) * Math.PI / 180;
      const distance = 100;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      
      explosionPixels.push({
        id: i,
        x,
        y,
        delay: i * 50
      });
    }
    
    setExplosions(prev => [...prev, { id: explosionId, pixels: explosionPixels }]);
    
    setTimeout(() => {
      setExplosions(prev => prev.filter(e => e.id !== explosionId));
    }, 1500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-mono text-xs" 
         style={{
           background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #16213e 100%)',
           fontFamily: "'Press Start 2P', monospace",
           imageRendering: 'pixelated'
         }}>
      
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none"
           style={{
             backgroundImage: `
               linear-gradient(rgba(0, 255, 255, 0.2) 2px, transparent 2px),
               linear-gradient(90deg, rgba(0, 255, 255, 0.2) 2px, transparent 2px)
             `,
             backgroundSize: '32px 32px',
             animation: 'gridMove 15s linear infinite'
           }}>
      </div>

      {/* Floating Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="fixed w-2 h-2 pointer-events-none"
          style={{
            left: `${particle.left}%`,
            backgroundColor: particle.color,
            animation: `pixelFloat ${particle.duration}s linear infinite`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}

      {/* Achievement Notification */}
      <div className={`fixed top-5 transition-all duration-500 z-50 bg-gray-800 border-4 border-yellow-400 p-4 text-yellow-400 text-xs ${
        achievement.show ? 'right-5' : '-right-96'
      }`}>
        {achievement.text}
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto p-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl text-cyan-400 mb-8 tracking-widest uppercase"
              style={{
                textShadow: '4px 4px 0px #0066cc, 8px 8px 0px #003366',
                animation: 'pixelGlow 2s ease-in-out infinite alternate'
              }}>
            ◄ DOMAINS ►
          </h1>
          <p className="text-pink-500 text-sm tracking-wider uppercase"
             style={{ textShadow: '2px 2px 0px #660066' }}>
            ► CHOOSE YOUR CODE QUEST ◄
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {domains.map((domain, index) => (
            <div
              key={domain.id}
              className="relative bg-gray-900 cursor-pointer transition-transform duration-200 hover:scale-105 hover:bg-gray-800"
              onClick={() => handleDomainClick(domain, index)}
              style={{
                padding: '0',
                position: 'relative'
              }}
            >
              {/* Pixelated Border */}
              <div className="absolute -inset-2 pointer-events-none"
                   style={{
                     background: `
                       linear-gradient(90deg, 
                         transparent 0px, transparent 8px,
                         ${domain.color} 8px, ${domain.color} 16px,
                         transparent 16px, transparent 24px,
                         ${domain.color} 24px, ${domain.color} 32px,
                         transparent 32px, transparent 40px,
                         ${domain.color} 40px, ${domain.color} 48px,
                         transparent 48px, transparent 56px,
                         ${domain.color} 56px, ${domain.color} 64px,
                         transparent 64px) 0 0 / 100% 8px no-repeat,
                       linear-gradient(90deg, 
                         transparent 0px, transparent 8px,
                         ${domain.color} 8px, ${domain.color} 16px,
                         transparent 16px, transparent 24px,
                         ${domain.color} 24px, ${domain.color} 32px,
                         transparent 32px, transparent 40px,
                         ${domain.color} 40px, ${domain.color} 48px,
                         transparent 48px, transparent 56px,
                         ${domain.color} 56px, ${domain.color} 64px,
                         transparent 64px) 0 100% / 100% 8px no-repeat,
                       linear-gradient(0deg, 
                         transparent 0px, transparent 8px,
                         ${domain.color} 8px, ${domain.color} 16px,
                         transparent 16px, transparent 24px,
                         ${domain.color} 24px, ${domain.color} 32px,
                         transparent 32px, transparent 40px,
                         ${domain.color} 40px, ${domain.color} 48px,
                         transparent 48px, transparent 56px,
                         ${domain.color} 56px, ${domain.color} 64px,
                         transparent 64px) 0 0 / 8px 100% no-repeat,
                       linear-gradient(0deg, 
                         transparent 0px, transparent 8px,
                         ${domain.color} 8px, ${domain.color} 16px,
                         transparent 16px, transparent 24px,
                         ${domain.color} 24px, ${domain.color} 32px,
                         transparent 32px, transparent 40px,
                         ${domain.color} 40px, ${domain.color} 48px,
                         transparent 48px, transparent 56px,
                         ${domain.color} 56px, ${domain.color} 64px,
                         transparent 64px) 100% 0 / 8px 100% no-repeat
                     `,
                     animation: 'borderShift 3s infinite',
                     zIndex: -1
                   }}>
              </div>

              {/* Level Indicator */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-2 py-1 text-xs border-2 border-white"
                   style={{ backgroundColor: domain.color, color: domain.color === '#ffff00' ? '#000' : '#fff' }}>
                LVL {domain.level}
              </div>

              {/* Card Content */}
              <div className="p-8 text-center relative">
                {/* Icon */}
                <span className="text-5xl block mb-6"
                      style={{
                        color: domain.color,
                        filter: 'drop-shadow(4px 4px 0px rgba(0,0,0,0.5))',
                        animation: 'pixelBounce 2s ease-in-out infinite'
                      }}>
                  {domain.icon}
                </span>

                {/* Title */}
                <h3 className="text-lg mb-5 uppercase tracking-wide leading-relaxed"
                    style={{
                      color: domain.color,
                      textShadow: `2px 2px 0px ${domain.color}66`
                    }}>
                  {domain.title}
                </h3>

                {/* Description */}
                <p className="text-blue-200 text-xs leading-relaxed mb-4"
                   style={{ textShadow: '1px 1px 0px #000033' }}>
                  {domain.description}
                </p>

                {/* Progress Bar */}
                <div className="w-full h-4 bg-black border-2 border-gray-600 relative">
                  <div className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-yellow-300"
                       style={{
                         width: `${(domain.level / 100) * 80 + 20}%`,
                         animation: 'progressFill 3s ease-in-out infinite alternate'
                       }}>
                  </div>
                </div>

                {/* Explosion Effect */}
                {explosions.map(explosion => (
                  <div key={explosion.id} className="absolute inset-0 pointer-events-none">
                    {explosion.pixels.map(pixel => (
                      <div
                        key={pixel.id}
                        className="absolute w-2 h-2 bg-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                          animation: `explode 1s ease-out forwards`,
                          animationDelay: `${pixel.delay}ms`,
                          '--end-x': `${pixel.x}px`,
                          '--end-y': `${pixel.y}px`
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(32px, 32px); }
        }
        
        @keyframes pixelGlow {
          from { 
            text-shadow: 4px 4px 0px #0066cc, 8px 8px 0px #003366;
          }
          to { 
            text-shadow: 4px 4px 0px #00aaff, 8px 8px 0px #0066cc, 12px 12px 0px #003366;
          }
        }
        
        @keyframes borderShift {
          0% { filter: hue-rotate(0deg); }
          25% { filter: hue-rotate(90deg); }
          50% { filter: hue-rotate(180deg); }
          75% { filter: hue-rotate(270deg); }
          100% { filter: hue-rotate(360deg); }
        }
        
        @keyframes pixelBounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes pixelFloat {
          0% {
            transform: translateY(100vh);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-50px);
            opacity: 0;
          }
        }
        
        @keyframes progressFill {
          0% { width: 20%; }
          100% { width: 80%; }
        }
        
        @keyframes explode {
          0% { 
            transform: translate(-50%, -50%) scale(1); 
            opacity: 1; 
          }
          100% { 
            transform: translate(calc(-50% + var(--end-x)), calc(-50% + var(--end-y))) scale(0); 
            opacity: 0; 
          }
        }
      `}</style>
    </div>
  );
};

export default PixelDomains;