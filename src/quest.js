import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const events = [
  { event: 'Check-In', time: '8:00 AM' },
  { event: 'Inauguration Ceremony', time: '10:00 AM' },
  { event: 'Announcement of Problem Statements', time: '10:30 AM' },
  { event: 'Hackathon Begins', time: '11:00 AM' },
  { event: 'Lunch', time: '2:00 PM' },
  { event: 'Mentoring Round', time: '7 - 9 PM' },
  { event: 'Dinner', time: '9:00 PM' },
  { event: 'Breakfast', time: '8:00 AM (Day 2)' },
  { event: 'Hackathon Ends and Internal Judging Starts', time: '11:00 AM (Day 2)' },
  { event: 'Announcement of Finalist Teams', time: '1:00 PM (Day 2)' },
  { event: 'Result Announcement', time: '4:00 PM (Day 2)' }
];

const RoadmapCard = ({ event, time, animationDelay }) => (
  <div
    className="roadmap-card"
    data-aos="fade-up"
    data-aos-delay={animationDelay}
  >
    <div className="roadmap-card-event">{event}</div>
    <div className="roadmap-card-time">{time}</div>
  </div>
);

const QuestLog = () => {
  const pacmanRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: 'ease-in-out',
      once: false
    });

    gsap.set(pacmanRef.current, { y: -50, opacity: 0 });

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 10%",
        end: "bottom 99%",
        scrub: 1,
        onEnter: () => gsap.set(pacmanRef.current, { opacity: 1 }),
        onLeave: () => gsap.set(pacmanRef.current, { opacity: 0 }),
        onEnterBack: () => gsap.set(pacmanRef.current, { opacity: 1 }),
        onLeaveBack: () => gsap.set(pacmanRef.current, { opacity: 0 }),
      }
    })
    .fromTo(
      pacmanRef.current,
      { y: -50 },
      { y: events.length * 110, ease: "none", duration: 1 }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="quest-log-section" ref={sectionRef}>
      <h2 className="quest-log-title">
        <span role="img" aria-label="scroll">📜</span> Quest Log
      </h2>
      <div className="quest-log-timeline-container">
        {/* Timeline Line */}
        <div
          className="quest-log-timeline-line"
          style={{ height: `${events.length * 110}px` }}
        />
        {/* Pacman */}
        <div
          ref={pacmanRef}
          className="pacman-scroll"
        >
          <svg width="44" height="44" viewBox="0 0 44 44">
            <circle cx="22" cy="22" r="22" fill="#FFD600" />
            <polygon points="22,22 44,10 44,34" fill="black" />
            <circle cx="30" cy="14" r="2" fill="black" />
          </svg>
        </div>
        {/* Events */}
        <div className="quest-log-events">
          {events.map((item, idx) => (
            <RoadmapCard
              key={idx}
              event={item.event}
              time={item.time}
              animationDelay={idx * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestLog;
