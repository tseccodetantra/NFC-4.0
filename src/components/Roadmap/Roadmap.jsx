import RoadmapCard from "./RoadmapCard";
import { useEffect, useRef, useState } from "react";
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
    { event: "Offline Reporting at TSEC Campus", time: "9:00 AM" },
    { event: "24-Hour Onsite Coding Round Begins", time: "11:00 AM" },
    { event: "Lunch", time: "2:00 PM" },
    { event: "Mentoring Starts", time: "7:00 PM" },
    { event: "Dinner", time: "9:00 PM" },
  ];

  const day2Events = [
    { event: "Breakfast", time: "8:00 AM" },
    { event: "Internal Judging Round (Participants Leave)", time: "11:00 AM - 3:00 PM" },
    { event: "Final Shortlisted Teams Announced", time: "9:00 PM" },
  ];

  const day3Events = [
    { event: "Finalists Report back to TSEC", time: "10:00 AM" },
    { event: "Final Judging and Winner Announcements", time: "11:00 AM Onwards" },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
      once: false,
    });

    // Set initial states
    gsap.set(day1PacmanRef.current, { y: -50, opacity: 0 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: wholeSectionRef.current, // Use the whole section as trigger
          start: "top 10%",
          end: "bottom 85%",
          scrub: 1,
          onEnter: () => {
            gsap.set(day1PacmanRef.current, { opacity: 1 });
          },
          onLeave: () => {
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
          y: day1Events.length * 370,
          ease: "none",
          duration: 1,
        }
      );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
  const reinitializeAOS = () => {
    AOS.refresh();
    ScrollTrigger.refresh();
  };

  // Listen for resize events
  window.addEventListener('resize', reinitializeAOS);

  // Listen for custom domain events
  window.addEventListener('domainCardClosed', () => {
    setTimeout(reinitializeAOS, 200);
  });
  
  // Listen for any click on the page and check if it's a domain card
  const handleClick = (e) => {
    
    if (e.target.closest('.card1') || 
        e.target.closest('.theBox') || 
        e.target.closest('.close-button') ||
        e.target.classList.contains('card1') || 
        e.target.classList.contains('theBox') ||
        e.target.classList.contains('close-button')
      ) {
      setTimeout(reinitializeAOS, 200);
    }
  };

  document.addEventListener('click', handleClick);
  
  // Initial refresh
  const timeoutId = setTimeout(reinitializeAOS, 100);

  return () => {
    console.log("🧹 Cleaning up listeners");
    window.removeEventListener('resize', reinitializeAOS);
    window.removeEventListener('domainCardClosed', reinitializeAOS);
    document.removeEventListener('click', handleClick);
    clearTimeout(timeoutId);
  };
}, []);

  return (
    <>
      <div className="min-h-screen w-screen desktop-scroll-margin" id="roadmap">
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
          <h3 className="text-lg text-center landscape:lg:mr-20 lg:text-left landscape:md:mr-72 w-screen max-w-3xl text-[#77F1FF] py-0 sm:py-0 press-start-2p-regular animate-pulse">
            5th August 2025
          </h3>
          <div className="relative mb-2 sm:landscape:mb-15" ref={day1SectionRef}>
            {/* Vertical Line */}
            <div
              className="w-1 mb-20 bg-[#DC53E6] absolute top-5 lg:top-0 left-0 lg:left-1/2 landscape:md:left-1/2 transform lg:-translate-x-1/2 z-10 vertical-line-glow animate-pulse"
              style={{
                height:
                  windowWidth < 640
                    ? `${day1Events.length * 257}px`
                    : `${day1Events.length * 378}px`,
              }}
            ></div>

            {/* Pacman */}
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
          <h3 className="text-lg w-screen max-w-3xl text-center lg:ml-16 lg:text-right landscape:lg:ml-20 landscape:md:ml-72 text-[#77F1FF] py-0 press-start-2p-regular animate-pulse">
            6th August 2025
          </h3>

          <div className="relative mb-0">
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

          <h2 className="text-2xl text-center landscape:lg:mr-0 lg:text-left landscape:md:mr-72 w-screen max-w-3xl text-[#77F1FF] py-5 press-start-2p-regular animate-bounce">
            DAY - 3
          </h2>
          <h3 className="text-lg text-center landscape:lg:mr-20 lg:text-left landscape:md:mr-72 w-screen max-w-3xl text-[#77F1FF] py-0 press-start-2p-regular animate-pulse">
            7th August 2025
          </h3>

          <div className="relative mb-10">
            {day3Events.map((item, index) => (
              <RoadmapCard
                key={`day3-${index}`}
                event={item.event}
                time={item.time}
                pos={index}
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
