import React from "react";

function RoadmapCard({
    pos,
    time,
    event,
    animationDelay = 0
}){
    const isLeft = pos%2 === 0
    return (
        <div className={`${isLeft ? 'portrait:ml-4 portrait:mr-0 landscape:sm:ml-0 landscape:sm:mr-48 landscape:md:mr-32 landscape:lg:mr-72 landscape:xl:mr-96' : 'portrait:ml-4 portrait:mr-0 landscape:sm:ml-48 landscape:sm:mr-0 landscape:md:ml-32 landscape:md:mr-0 landscape:lg:ml-72 landscape:lg:mr-0 landscape:xl:ml-96'} ml-4 my-4 flex items-center`}>

            <div className="w-3 h-3 bg-yellow-400 rounded-xl absolute left-0.5 portrait:left-0.5 landscape:sm:left-1/2 transform -translate-x-1/2 z-10"
                data-aos="zoom-in"
                data-aos-delay={animationDelay + 20}
                data-aos-duration="300"
            >
            </div>

            <div 
            style={{
                transition: 'all 0.3s ease-out'
            }}
            className={`mx-auto portrait:mx-auto landscape:sm:mx-0 ${isLeft ? 'portrait:ml-0 portrait:mr-0 landscape:sm:ml-0 landscape:sm:mr-64 landscape:md:mr-48 landscape:lg:mr-72 landscape:xl:mr-96' : 'portrait:ml-0 portrait:mr-0 landscape:sm:ml-64 landscape:sm:mr-0 landscape:md:ml-48 landscape:md:mr-0 landscape:lg:ml-72 landscape:lg:mr-0 landscape:xl:ml-96'} bg-gray-900 border-2 border-[#374151] hover:border-[#00ffff] p-2 sm:p-6 rounded-lg flex flex-col justify-center items-center w-full max-w-xs roadmap-card-glow`}
            data-aos={isLeft ? "fade-right" : "fade-left"}
            data-aos-delay={animationDelay}
            data-aos-duration="300"
            data-aos-easing="ease-out-cubic"
            >

                {/* Connecting line - positioned to connect card edge to dot */}
            <div 
                className={`portrait:hidden landscape:sm:hidden landscape:lg:block connecting-line ${isLeft ? 'line-left' : 'line-right'} -translate-y-1/2`}
                data-aos="grow-line"
                data-aos-delay={animationDelay + 20}
                data-aos-duration="300"
            ></div>

                <p className="sm:text-lg mb-2 text-center text-gray-300 hover:text-shadow-blue-500 press-start-2p-regular"
                >{event}</p>
                <div className="text-sm font-semibold text-gray-300 hover:text-shadow-blue-500 press-start-2p-regular"
                >{time}</div>
            </div>
        </div>
    )
}

export default RoadmapCard