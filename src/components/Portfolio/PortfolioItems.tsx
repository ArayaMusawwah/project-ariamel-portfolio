import { IPortfolio } from "@/Types/GeneralTypes"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"

const PortfolioItems = ({ data }: { data: IPortfolio }) => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref
    // offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [-500, 500])

  return (
    <section>
      <div className="flex items-center overflow-hidden">
        <div className="relative m-auto flex h-screen w-full max-w-8xl flex-col items-center gap-10 lg:flex-row">
          <motion.div
            className="absolute top-1/4 z-10 w-2/3 flex-1 overflow-hidden rounded-lg lg:w-auto"
            ref={ref}
          >
            <img
              src={data.gambar}
              alt={data.judul}
              className="h-full w-full object-contain"
            />
          </motion.div>
          <motion.div
            className="prose absolute top-[80%] max-h-screen flex-1 text-center prose-h2:text-slate-300 prose-p:text-lg prose-p:text-gray-400 lg:right-0 lg:top-auto lg:text-left"
            style={{ y: y }}
          >
            <h2 className="text-balance text-4xl font-bold lg:text-6xl ">
              {data.judul}
            </h2>
            <p className="line-clamp-4 min-w-full px-4 md:line-clamp-2 lg:line-clamp-none">
              {data.deskripsi}
            </p>
            <button className="rounded-lg bg-accent2-100 px-20 py-2 text-black">
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default PortfolioItems
