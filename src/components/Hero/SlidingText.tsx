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
      className="relative -bottom-20 w-10/12 whitespace-nowrap font-dmsans text-[25vh] text-white/5 md:text-[40vh] lg:bottom-[-10rem]"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      Jack of All Trade Developer
    </motion.div>
  )
}
export default SlidingText
