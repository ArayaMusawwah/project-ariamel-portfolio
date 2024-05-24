import { Variants, motion } from "framer-motion"

const variants: Variants = {
  initial: {
    x: "-100%",
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  }
}

const scrollVariant: Variants = {
  initial: {
    y: 0,
    opacity: 1
  },

  animate: {
    y: 10,
    opacity: 0.2,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeIn"
    }
  }
}

const HeroText: React.FC = () => {
  return (
    <motion.div
      className="absolute z-10 flex w-full flex-col gap-4 px-4 text-center lg:gap-10 lg:text-left"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <motion.h1
        className="text-2xl font-bold text-violet-700"
        variants={variants}
      >
        Araya Musawwah
      </motion.h1>

      <motion.h2
        className="max-w-3xl text-3xl font-bold md:text-5xl lg:text-7xl"
        variants={variants}
      >
        Fullstack Developer and React Developer
      </motion.h2>

      <motion.div className="space-x-5" variants={variants}>
        <button className="rounded-lg border border-white bg-transparent p-4 transition hover:bg-white hover:text-black">
          See The Latest Works
        </button>

        <button className="rounded-lg border border-white bg-white p-4 text-black transition hover:bg-transparent hover:text-white">
          Contact Me
        </button>
      </motion.div>

      <motion.img
        src="/scroll.png"
        alt=""
        className="mx-auto hidden w-10 md:block lg:mx-0"
        variants={scrollVariant}
      />
    </motion.div>
  )
}
export default HeroText
