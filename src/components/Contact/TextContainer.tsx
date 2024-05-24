import { Variants, motion } from "framer-motion"

const TextContainer = ({ variants }: { variants: Variants }) => {
  return (
    <motion.div className="flex flex-1 flex-col gap-12" variants={variants}>
      <motion.h1
        className="text-8xl font-bold leading-[88px]"
        variants={variants}
      >
        Let's work together!
      </motion.h1>
      <motion.div variants={variants}>
        <h2 className="text-xl font-bold">Mail</h2>
        <span className="font-light">miramadhan354@gmail.com</span>
      </motion.div>
      <motion.div variants={variants}>
        <h2 className="text-xl font-bold">Address</h2>
        <span className="font-light">South Tangerang, Indonesia</span>
      </motion.div>
      <motion.div variants={variants}>
        <h2 className="text-xl font-bold">Phone</h2>
        <span className="font-light">+62 896 7906 3278</span>
      </motion.div>
    </motion.div>
  )
}
export default TextContainer
