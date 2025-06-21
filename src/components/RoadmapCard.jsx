import React from "react";

function RoadmapCard({
    pos,
    time,
    event,
    animationDelay = 0
}){
    const isLeft = pos%2 === 0
    return (
        <div className={`${isLeft ? 'ml-0 mr-72' : 'ml-72 mr-0'} my-3`}>

            <div className="w-3 h-3 bg-yellow-400 rounded-xl absolute left-1/2 transform -translate-x-1/2 translate-y-12 z-10"
                data-aos="zoom-in"
                data-aos-delay={animationDelay + 20}
                data-aos-duration="300"
            >
            </div>

            <div 
            style={{
                transition: 'all 0.3s ease-out'
            }}
            className={`${isLeft ? 'ml-0 mr-96' : 'ml-96 mr-0'} bg-gray-900 border-2 border-[#374151] hover:border-[#00ffff] p-6 rounded-lg flex flex-col justify-center items-center w-full max-w-xs roadmap-card-glow`}
            data-aos={isLeft ? "fade-right" : "fade-left"}
            data-aos-delay={animationDelay}
            data-aos-duration="300"
            data-aos-easing="ease-out-cubic"
            >
                <p className="text-2xl mb-2 text-center text-gray-300 hover:text-shadow-blue-500"
                style={{fontFamily: 'Pixelify Sans'}}
                >{event}</p>
                <div className="text-lg font-semibold text-gray-300 hover:text-shadow-blue-500"
                >{time}</div>
            </div>
        </div>
    )
}

export default RoadmapCard