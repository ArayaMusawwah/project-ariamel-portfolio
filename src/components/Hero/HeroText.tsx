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
      repeatType: "loop",
      ease: "easeInOut"
    }
  }
}

const HeroText: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col gap-10"
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
      <motion.h2 className="max-w-3xl text-7xl font-bold" variants={variants}>
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
        className="w-10"
        variants={scrollVariant}
      />
    </motion.div>
  )
}
export default HeroText
