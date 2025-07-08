"use client"

import { useState, useEffect } from "react"
import "./experience.css"

import winner from './experience_imgs/winner.jpeg';
import second_winner from './experience_imgs/2nd_winner.jpeg';
import third_winner from './experience_imgs/3rd_winner.jpeg';
import img1 from './experience_imgs/carousel_1.JPG';
import img2 from './experience_imgs/carousel_2.JPG';
import img3 from './experience_imgs/carousel_3.JPG';
import img9 from './experience_imgs/carousel_9.JPG';
import img10 from './experience_imgs/carousel_10.JPG';
import img6 from './experience_imgs/carousel_6.JPG';
import img7 from './experience_imgs/carousel_7.JPG';
import img11 from './experience_imgs/carousel_11.JPG';


 function Experience() {
    const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)
    const [cardsPerView, setCardsPerView] = useState(3)
    const [isPaused, setIsPaused] = useState(false)

   

    // Tech-focused Teams
    const otherTeams = [
        {
            color: "#9B59B6",
            projectImage: img1,
        },
        {
            color: "#3498DB",
            projectImage: img2,
        },
        {
            color: "#E74C3C",
            projectImage: img3,
        },
        {
            color: "#F39C12",
            projectImage: winner,
        },
        {
            color: "#1ABC9C",
            projectImage: img9,
        },
        {
            color: "#E67E22",
            projectImage: img10,
        },
        {
            color: "#1ABC9C",
            projectImage: img11,
        },
        {
            color: "#E67E22",
            projectImage: img6,
        },
    ]

    useEffect(() => {
        if (!isPaused && otherTeams.length > 0) {
            const interval = setInterval(() => {
                setCurrentCarouselIndex((prevIndex) => {
                    const maxIndex = Math.max(0, otherTeams.length - cardsPerView)
                    return prevIndex >= maxIndex ? 0 : prevIndex + 1
                })
            }, 2000)

            return () => clearInterval(interval)
        }
    }, [isPaused, otherTeams.length, cardsPerView])

    // Update cards per view based on screen size
    useEffect(() => {
        const updateCardsPerView = () => {
            if (window.innerWidth <= 480) {
                setCardsPerView(1)
            } else if (window.innerWidth <= 768) {
                setCardsPerView(2)
            } else if (window.innerWidth <= 1024) {
                setCardsPerView(2)
            } else {
                setCardsPerView(3)
            }
        }

        updateCardsPerView()
        window.addEventListener("resize", updateCardsPerView)
        return () => window.removeEventListener("resize", updateCardsPerView)
    }, [])

    // Manual navigation functions
    const nextSlide = () => {
        const maxIndex = Math.max(0, otherTeams.length - cardsPerView)
        setCurrentCarouselIndex((prev) => Math.min(prev + 1, maxIndex))
    }

    const prevSlide = () => {
        setCurrentCarouselIndex((prev) => Math.max(prev - 1, 0))
    }

    const handleCarouselHover = () => {
        setIsPaused(true)
    }

    const handleCarouselLeave = () => {
        setIsPaused(false)
    }

    return (
        <section className="retro-tech-section desktop-scroll-margin" id="experience">
                <div className="screen-container">
                    <div className="content-container">
                        {/*Carousel */}
                        <div className="teams-section">
                            <div className="section-header">
                                <div className="folder-icon">📂</div>
                                <h2 className="section-title">NFC_3.0_ACTIVITIES.DIR</h2>
                            </div>
                            <div
                                className="teams-carousel-container"
                                onMouseEnter={handleCarouselHover}
                                onMouseLeave={handleCarouselLeave}
                            >
                                {/* Progress indicators */}
                                <button
                                    className="carousel-nav prev"
                                    onClick={prevSlide}
                                    disabled={currentCarouselIndex === 0}
                                    aria-label="Previous projects"
                                >
                                    ‹
                                </button>

                                <div
                                    className="teams-carousel"
                                    style={{
                                        transform: `translateX(-${currentCarouselIndex * (100 / cardsPerView)}%)`,
                                    }}
                                >
                                    {otherTeams.map((team, index) => (
                                        <div
                                            key={index}
                                            className="team-card"
                                            style={{
                                                borderColor: team.color,
                                                flex: `0 0 calc(${100 / cardsPerView}% - ${(20 * (cardsPerView - 1)) / cardsPerView}px)`,
                                            }}
                                        >
                                            <div className="project-image-container1">
                                                <img
                                                    src={team.projectImage || "/placeholder.svg"}
                                                    alt={`Project ${index + 1}`}
                                                    className="project-image1"
                                                />
                                                <div className="image-overlay">
                                                    <div className="tech-stack-overlay">{team.techStack}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    className="carousel-nav next"
                                    onClick={nextSlide}
                                    disabled={currentCarouselIndex >= otherTeams.length - cardsPerView}
                                    aria-label="Next projects"
                                >
                                    ›
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-progress">
                        {Array.from({ length: Math.max(1, otherTeams.length - cardsPerView + 1) }).map((_, index) => (
                            <div
                                key={index}
                                className={`progress-dot ${index === currentCarouselIndex ? "active" : ""}`}
                                onClick={() => setCurrentCarouselIndex(index)}
                            />
                        ))}
                    </div>
                </div>
        </section>
    )
}
export default Experience;