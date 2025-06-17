import './App.css'
import RoadmapCard from './components/roadmapCard'
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

function App(){
    const day1Events = [
        { event: 'Check-In', time: '8:00 AM' },
        { event: 'Inaugration Ceremony', time: '10:00 AM' },
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
        })
    }, [])


    return (
        <>
        <div className='bg-[#17173B] h-full w-full'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-5xl text-center text-[#08968A] py-5'
                style={{fontFamily: 'Pixelify Sans'}}
                >Schedule</h1>
                
                {/* DAY 1 SECTION */}
                <h2 className='text-3xl text-center text-[#08968A] py-5'
                style={{fontFamily: 'Pixelify Sans'}}
                >DAY - 1</h2>
                <div className="relative mb-20">
                    {/* Day 1 Vertical Line */}
                    <div className="w-1 bg-[#DC53E6] absolute left-1/2 transform -translate-x-1/2 z-10" 
                         style={{ height: `${day1Events.length * 154}px`, top: '0px' }}>
                    </div>

                    {/* Pacman moving down the line */}
                    <div className='pacman-day1'></div>

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
                <h2 className='text-3xl text-center text-[#08968A] py-5'
                style={{fontFamily: 'Pixelify Sans'}}
                >DAY - 2</h2>

                <div className="relative">
                    {/* Day 2 Vertical Line */}
                    <div className="w-1 bg-[#DC53E6] absolute left-1/2 transform -translate-x-1/2 z-10" 
                         style={{ height: `${day2Events.length * 155}px`, top: '0px' }}>
                    </div>

                    <div className='pacman-day2'></div>

                    {day2Events.map((item, index) => (
                        <RoadmapCard 
                            key={`day2-${index}`}
                            event={item.event}
                            time={item.time}
                            pos={index}
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