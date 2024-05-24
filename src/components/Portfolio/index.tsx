import { useScroll, useSpring } from "framer-motion"
import { useRef } from "react"
import ProgressBar from "./ProgressBar"
import PortfolioItems from "./PortfolioItems"
import { portfolioData } from "@/data/generalData"

const Portfolio = () => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  })
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  })

  return (
    <div ref={ref} className="relative">
      <div className="sticky left-0 top-20">
        <h1 className="py-2 text-center text-5xl font-bold text-accent2-100">
          Featured Works
        </h1>
        <ProgressBar scaleX={scaleX} />
      </div>
      {portfolioData.map((data) => (
        <PortfolioItems data={data} key={data.id} />
      ))}
    </div>
  )
}
export default Portfolio
