import { Variants, motion } from "framer-motion"

const variants: Variants = {
  initial: {
    x: 0
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror"
    }
  }
}

const SlidingText = () => {
  return (
    <motion.div
      className="absolute bottom-0 w-10/12 whitespace-nowrap text-[50vh] leading-[18rem] text-white/5"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      Jack of All Trade Developer
    </motion.div>
  )
}
export default SlidingText
