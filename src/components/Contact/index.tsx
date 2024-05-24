import { motion, Variants } from "framer-motion"
import FormContainer from "./FormContainer"
import TextContainer from "./TextContainer"
import { useInView } from "framer-motion"
import { useRef } from "react"

const variants: Variants = {
  initial: {
    y: 500,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
}

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { margin: "-100px" })

  return (
    <motion.div
      className="m-auto flex h-screen max-w-8xl flex-col items-center justify-between lg:flex-row"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
    >
      <TextContainer variants={variants} />
      <FormContainer isInView={isInView} />
    </motion.div>
  )
}
export default Contact
