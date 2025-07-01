

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"

// Custom intersection observer hook
function useInView(options = {}) {
  const [ref, setRef] = useState(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (options.triggerOnce) {
            observer.unobserve(ref)
          }
        } else if (!options.triggerOnce) {
          setInView(false)
        }
      },
      {
        threshold: options.threshold || 0.1,
      },
    )

    observer.observe(ref)

    return () => {
      observer.disconnect()
    }
  }, [ref, options.triggerOnce, options.threshold])

  return [setRef, inView]
}

const ScrollReveal = ({ children, direction = "up", delay = 0 }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: delay,
      },
    },
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
      {children}
    </motion.div>
  )
}

export default ScrollReveal
