import React from "react";

function RoadmapCard({
    pos,
    time,
    event,
    animationDelay = 0
}){
    const isLeft = pos%2 === 0
    return (
        <div className={`${isLeft ? 'sm:ml-0 sm:mr-72' : 'sm:ml-72 sm:mr-0'} ml-4 my-4`}>

            <div className="w-3 h-3 bg-yellow-400 rounded-xl absolute left-0.5 sm:left-1/2 transform -translate-x-1/2 translate-y-9 sm:translate-y-12 z-10"
                data-aos="zoom-in"
                data-aos-delay={animationDelay + 20}
                data-aos-duration="300"
            >
            </div>

            <div 
            style={{
                transition: 'all 0.3s ease-out'
            }}
            className={`mx-auto sm:mx-0 ${isLeft ? 'sm:ml-0 sm:mr-96' : 'sm:ml-96 sm:mr-0'} bg-gray-900 border-2 border-[#374151] hover:border-[#00ffff] p-2 sm:p-6 rounded-lg flex flex-col justify-center items-center w-full max-w-xs roadmap-card-glow`}
            data-aos={isLeft ? "fade-right" : "fade-left"}
            data-aos-delay={animationDelay}
            data-aos-duration="300"
            data-aos-easing="ease-out-cubic"
            >
                <p className="sm:text-2xl text-xl mb-2 text-center text-gray-300 hover:text-shadow-blue-500"
                style={{fontFamily: 'Pixelify Sans'}}
                >{event}</p>
                <div className="text-lg font-semibold text-gray-300 hover:text-shadow-blue-500"
                >{time}</div>
            </div>
        </div>
    )
}

export default RoadmapCard