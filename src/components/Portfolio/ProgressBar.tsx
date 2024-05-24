import { MotionValue, motion } from "framer-motion"

const ProgressBar = ({ scaleX }: { scaleX: MotionValue }) => {
  return <motion.div style={{ scaleX }} className="h-2 w-full bg-white" />
}
export default ProgressBar
