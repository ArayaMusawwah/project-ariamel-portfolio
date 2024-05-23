import { Variants, motion, useInView } from "framer-motion"
import ListContainer from "./ListContainer"
import TextContainer from "./TextContainer"
import TitleContainer from "./TitleContainer"
import { useRef } from "react"

const variants: Variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0
  },

  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  }
}

const Services = () => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { margin: "-100px" })

  return (
    <motion.div
      className="justfiy-center absolute flex h-full w-full flex-col items-center bg-gradient-to-b from-primary-bg to-primary-bg2 py-2"
      variants={variants}
      initial="initial"
      animate={inView && "animate"}
      ref={ref}
    >
      <TextContainer variants={variants} />

      <TitleContainer variants={variants} />

      <ListContainer variants={variants} />
    </motion.div>
  )
}
export default Services
