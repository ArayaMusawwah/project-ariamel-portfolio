import { useRef } from "react"
import BackgroundParallax from "./BackgroundParallax"
import { motion, useScroll, useTransform } from "framer-motion"
interface Props {
  type?: string
}

const Parallax: React.FC<Props> = ({ type }) => {
  const divRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start start", "end start"]
  })

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "700%"])
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div
      className={`relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-primary-bg2 ${type === "services" ? "to-primary-bg" : "to-[#505064]"}`}
      ref={divRef}
    >
      <motion.h1 className="text-5xl font-semibold" style={{ y: yText }}>
        {type === "services" ? "What we Do?" : "What we Did?"}
      </motion.h1>

      <BackgroundParallax yBackground={yBackground} type={type} />
    </div>
  )
}
export default Parallax
