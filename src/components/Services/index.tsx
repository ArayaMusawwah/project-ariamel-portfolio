import { Variants } from "framer-motion"
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
  // const inView = useInView(ref, { margin: "-100px" })

  return (
    <div
      className="justfiy-center absolute flex h-full w-full flex-col items-center space-y-2 bg-gradient-to-b from-primary-bg to-primary-bg2 py-4"
      // variants={variants}
      // animate={inView && "animate"}*/
      // initial="initial"
      // animate={"animate"}
      ref={ref}
    >
      <TextContainer variants={variants} />

      <TitleContainer variants={variants} />

      <ListContainer variants={variants} />
    </div>
  )
}
export default Services
