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
                data-aos-delay={animationDelay + 150}
                data-aos-duration="300"
            >
            </div>

            <div className={`${isLeft ? 'ml-0 mr-96' : 'ml-96 mr-0'} bg-[#27DED5] border-4 border-[#E873F0] p-6 rounded-lg flex flex-col justify-center items-center w-full max-w-xs transform transition-all duration-1500 ease-in-out hover:scale-110 hover:-translate-y-4 hover:shadow-2xl hover:shadow-[#E873F0]/50 cursor-pointer`}
            data-aos={isLeft ? "fade-right" : "fade-left"}
            data-aos-delay={animationDelay}
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
            >
                <p className="text-2xl mb-2 text-center transition-all duration-1000 hover:text-[#17173B]"
                style={{fontFamily: 'Pixelify Sans'}}
                >{event}</p>
                <div className="text-lg font-semibold transition-all duration-1000 hover:text-[#17173B]"
                >{time}</div>
            </div>
        </div>
    )
}

export default RoadmapCard