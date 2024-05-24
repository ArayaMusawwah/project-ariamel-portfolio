import { Variants, motion } from "framer-motion"

const TextContainer = ({ variants }: { variants: Variants }) => {
  return (
    <motion.div
      className="flex flex-1 flex-col gap-1 text-center md:gap-6 lg:gap-8 lg:text-left"
      variants={variants}
    >
      <motion.h1
        className="mt-20 text-4xl font-bold leading-snug md:text-6xl lg:mt-auto lg:text-8xl lg:leading-[88px]"
        variants={variants}
      >
        Let's work together!
      </motion.h1>
      <motion.div variants={variants}>
        <h2 className="text-medium font-bold md:text-xl">Mail</h2>
        <span className="text-sm font-light md:text-base ">
          miramadhan354@gmail.com
        </span>
      </motion.div>
      <motion.div variants={variants}>
        <h2 className="text-medium font-bold md:text-xl">Address</h2>
        <span className="text-sm font-light md:text-base">
          South Tangerang, Indonesia
        </span>
      </motion.div>
      <motion.div variants={variants}>
        <h2 className="text-medium font-bold md:text-xl">Phone</h2>
        <span className="text-sm font-light md:text-base">
          +62 896 7906 3278
        </span>
      </motion.div>
    </motion.div>
  )
}
export default TextContainer
