import { motion, Variants } from "framer-motion"

const TextContainer = ({ variants }: { variants: Variants }) => {
  return (
    <motion.div
      className="hidden flex-1 items-center gap-10 self-end sm:flex"
      variants={variants}
      id="text-container"
    >
      <p className="text-right text-xl font-extralight text-gray-500">
        I focus on building and developing your <br />
        web application
      </p>
      <hr className="w-[300px] border-t-2 border-gray-500 lg:w-[500px]" />
    </motion.div>
  )
}
export default TextContainer
