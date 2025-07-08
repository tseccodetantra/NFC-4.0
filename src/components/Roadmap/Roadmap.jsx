import RoadmapCard from "./RoadmapCard";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Schedule.css";

gsap.registerPlugin(ScrollTrigger);

function Roadmap() {
  const day1PacmanRef = useRef();
  const day1SectionRef = useRef();
  const wholeSectionRef = useRef(); // New ref for the entire timeline

  const day1Events = [
    { event: "Check-In", time: "8:00 AM" },
    { event: "Inauguration Ceremony", time: "10:00 AM" },
    { event: "Announcement of Problem Statements", time: "10:30 AM" },
    { event: "Hackathon Begins", time: "11:00 AM" },
    { event: "Lunch", time: "2:00 PM" },
    { event: "Mentoring Round", time: "7 - 9 PM" },
    { event: "Dinner", time: "9:00 PM" },
  ];

  const day2Events = [
    { event: "Breakfast", time: "8:00 AM" },
    { event: "Hackathon Ends and Internal Judging Starts", time: "11:00 AM" },
    { event: "Announcement of Finalist Teams", time: "1:00 PM" },
    { event: "Result Announcement", time: "4:00 PM" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
      once: false,
    });

    // Set initial states
    gsap.set(day1PacmanRef.current, { y: -50, opacity: 0 });

    // Single continuous Pacman animation for the entire timeline
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wholeSectionRef.current, // Use the whole section as trigger
          start: "top 10%",
          end: "bottom 99%",
          scrub: 1,
          onEnter: () => {
            console.log("timeline enter");
            gsap.set(day1PacmanRef.current, { opacity: 1 });
          },
          onLeave: () => {
            console.log("timeline leave");
            gsap.set(day1PacmanRef.current, { opacity: 0 });
          },
          onEnterBack: () => {
            gsap.set(day1PacmanRef.current, { opacity: 1 });
          },
          onLeaveBack: () => {
            gsap.set(day1PacmanRef.current, { opacity: 0 });
          },
        },
      })
      .fromTo(
        day1PacmanRef.current,
        { y: -50 },
        {
          y: day1Events.length * 250,
          ease: "none",
          duration: 1,
        }
      );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="min-h-screen w-screen" id="roadmap">
        <div
          className="flex flex-col justify-center items-center"
          ref={wholeSectionRef}
        >
          <h1 className="text-4xl text-center text-[#08968A] py-5 press-start-2p-regular animate-pulse">
            Schedule
          </h1>

          {/* DAY 1 SECTION */}
          <h2 className="text-2xl text-center landscape:lg:mr-0 lg:text-left landscape:md:mr-72 w-screen max-w-3xl text-[#77F1FF] py-0 sm:py-5 press-start-2p-regular animate-bounce">
            DAY - 1
          </h2>
          <div className="relative mb-2 sm:mb-20" ref={day1SectionRef}>
            {/* Vertical Line */}
            <div
              className="w-1 mb-20 bg-[#DC53E6] absolute top-5 lg:top-0 left-0 lg:left-1/2 landscape:md:left-1/2 transform lg:-translate-x-1/2 z-10 vertical-line-glow animate-pulse"
              style={{
                height:
                  window.innerWidth < 640
                    ? `${day1Events.length * 168}px`
                    : `${day1Events.length * 260}px`,
              }}
            ></div>

            {/* GSAP Controlled Pacman */}
            <div
              ref={day1PacmanRef}
              className="pacman-scroll hidden lg:block"
            ></div>

            {day1Events.map((item, index) => (
              <RoadmapCard
                key={`day1-${index}`}
                event={item.event}
                time={item.time}
                pos={index}
                animationDelay={index * 100}
              />
            ))}
          </div>

          {/* DAY 2 SECTION */}
          <h2 className="text-2xl w-screen max-w-3xl text-center lg:ml-16 lg:text-right landscape:lg:ml-0 landscape:md:ml-72 text-[#77F1FF] py-5 press-start-2p-regular animate-bounce">
            DAY - 2
          </h2>

          <div className="relative mb-20">
            {day2Events.map((item, index) => (
              <RoadmapCard
                key={`day2-${index}`}
                event={item.event}
                time={item.time}
                pos={index + 1}
                animationDelay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Roadmap;
