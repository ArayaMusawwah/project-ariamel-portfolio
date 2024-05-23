import { motion, Variants } from "framer-motion"

const TitleContainer = ({ variants }: { variants: Variants }) => {
  return (
    <motion.div
      className="flex flex-[2] flex-col items-center"
      id="title-container"
      variants={variants}
    >
      <div className="flex items-center gap-12">
        <img
          src="/people.webp"
          alt=""
          className="h-[100px] w-[300px] rounded-full object-cover"
        />
        <h1 className="cursor-default text-8xl font-[100]">
          <b className="hover:text-accent2-100">Unique</b> Ideas
        </h1>
      </div>

      <div className="flex cursor-default items-center gap-12">
        <h1 className="text-8xl font-[100]">
          <b className="hover:text-accent2-100">For Your</b> Business
        </h1>
        <button className="h-[100px] w-[300px] rounded-full border-none bg-accent2-100 text-2xl ">
          WHAT WE DO?
        </button>
      </div>
    </motion.div>
  )
}
export default TitleContainer
