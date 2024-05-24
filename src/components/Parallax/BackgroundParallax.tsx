import { motion, MotionValue } from "framer-motion"

interface Props {
  yBackground: MotionValue<string>
  type: string | undefined
}

const BackgroundParallax: React.FC<Props> = ({ yBackground, type }) => {
  return (
    <>
      <motion.div className="absolute z-[3] h-full w-full bg-[url('/mountains.png')] bg-contain bg-bottom bg-no-repeat lg:bg-cover" />

      <motion.div
        className={`absolute z-[2] h-full w-full bg-contain bg-bottom bg-no-repeat lg:bg-cover ${type ? "bg-[url('/planets.png')]" : "bg-[url('/sun.png')]"}`}
        style={{ y: yBackground }}
      />

      <motion.div
        className="absolute z-[1] h-full w-full bg-[url('/stars.png')] bg-contain bg-bottom"
        style={{ x: yBackground }}
      />
    </>
  )
}
export default BackgroundParallax
