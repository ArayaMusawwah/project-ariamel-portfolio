import { motion, Variants } from "framer-motion"

const scalingVariant = {
  initial: {
    scale: 0
  },
  animate: {
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
}

const TitleContainer = ({ variants }: { variants: Variants }) => {
  return (
    <motion.div
      className="flex flex-[2] flex-col items-center"
      id="title-container"
      variants={variants}
    >
      <div className="flex flex-col items-center gap-12 lg:flex-row">
        <motion.img
          src="/people.webp"
          alt=""
          className="h-[50px] w-[150px] rounded-full object-cover lg:h-[100px] lg:w-[300px]"
          variants={scalingVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        />
        <h1 className="cursor-default text-5xl font-[100] lg:text-8xl">
          <b className="hover:text-accent2-100">Unique</b> Ideas
        </h1>
      </div>

      <div className="flex cursor-default flex-col items-center gap-12 lg:flex-row">
        <h1 className="text-5xl font-[100] lg:text-8xl">
          <b className="hover:text-accent2-100">For Your</b> Business
        </h1>
        <motion.button
          className="text-medium h-[50px] w-[150px] rounded-full border-none bg-accent2-100 font-semibold text-black lg:h-[100px] lg:w-[300px] lg:text-2xl "
          variants={scalingVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          WHAT WE DO?
        </motion.button>
      </div>
    </motion.div>
  )
}
export default TitleContainer
