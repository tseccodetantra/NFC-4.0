import './App.css'
import RoadmapCard from './components/roadmapCard'
import { useEffect, useRef } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
 
function App(){

    const day1PacmanRef = useRef();
    // const day2PacmanRef = useRef();
    const day1SectionRef = useRef();
    // const day2SectionRef = useRef();
    const wholeSectionRef = useRef(); // New ref for the entire timeline
    
    const day1Events = [
        { event: 'Check-In', time: '8:00 AM' },
        { event: 'Inauguration Ceremony', time: '10:00 AM' },
        { event: 'Announcement of Problem Statements', time: '10:30 AM' },
        { event: 'Hackathon Begins', time: '11:00 AM' },
        { event: 'Lunch', time: '2:00 PM' },
        { event: 'Mentoring Round', time: '7 - 9 PM' },
        { event: 'Dinner', time: '9:00 PM' }
    ];

    const day2Events = [
        { event: 'Breakfast', time: '8:00 AM' },
        { event: 'Hackathon Ends and Internal Judging Starts', time: '11:00 AM' },
        { event: 'Announcement of Finalist Teams', time: '1:00 PM' },
        { event: 'Result Announcement', time: '4:00 PM' }
    ];

    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 100,
            easing: 'ease-in-out',
            once: false
        });

       // Set initial states
        gsap.set(day1PacmanRef.current, { y: -50, opacity: 0 });

        // Single continuous Pacman animation for the entire timeline
        gsap.timeline({
            scrollTrigger: {
                trigger: wholeSectionRef.current, // Use the whole section as trigger
                start: "top 10%",
                end: "bottom 99%",
                scrub: 1,
                // markers: true,
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
                }
            }
        })
        .fromTo(day1PacmanRef.current, 
            { y: -50 },
            { 
                y: (day1Events.length * 250),
                ease: "none",
                duration: 1
            }
        );

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };

    }, [])


    return (
        <>
        <div className='bg-[#17173B] h-full w-full'>
            <div className='flex flex-col justify-center items-center' ref={wholeSectionRef}>
                <h1 className='text-5xl text-center text-[#08968A] py-5'
                style={{fontFamily: 'Pixelify Sans'}}
                >Schedule</h1>
                
                {/* DAY 1 SECTION */}
                <h2 className='text-3xl sm:text-left w-screen max-w-3xl text-[#08968A] py-5'
                style={{fontFamily: 'Pixelify Sans'}}
                >DAY - 1</h2>
                <div className="relative mb-20" ref={day1SectionRef}>
                    {/* Day 1 Vertical Line */}
                    <div className="w-1 bg-[#DC53E6] absolute left-1/2 transform -translate-x-1/2 z-10" 
                         style={{ height: `${day1Events.length * 255}px`, top: '0px' }}>
                    </div>

                    {/* GSAP Controlled Pacman for Day 1 */}
                    <div 
                        ref={day1PacmanRef}
                        className='pacman-scroll'
                    ></div>

                    {day1Events.map((item, index) => (
                        <RoadmapCard 
                            key={`day1-${index}`}
                            event={item.event}
                            time={item.time}
                            pos={index}
                            animationDelay={index*100}
                        />
                    ))}
                </div>

                {/* DAY 2 SECTION */}
                <h2 className='text-3xl w-screen max-w-3xl sm:text-right text-[#08968A] py-5'
                style={{fontFamily: 'Pixelify Sans'}}
                >DAY - 2</h2>

                <div className="relative">
                    {/* Day 2 Vertical Line */}
                    {/* <div className="w-1 bg-[#DC53E6] absolute left-1/2 transform -translate-x-1/2 z-10" 
                         style={{ height: `${day2Events.length * 155}px`, top: '0px' }}>
                    </div> */}

                    {/* GSAP Controlled Pacman for Day 2 */}
                    {/* <div 
                        ref={day2PacmanRef}
                        className='pacman-scroll'
                    ></div> */}

                    {day2Events.map((item, index) => (
                        <RoadmapCard 
                            key={`day2-${index}`}
                            event={item.event}
                            time={item.time}
                            pos={index+1}
                            animationDelay={index*100}
                        />
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default App