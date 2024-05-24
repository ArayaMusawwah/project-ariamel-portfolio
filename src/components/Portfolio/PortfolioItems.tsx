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
        <div className="m-auto flex h-screen w-full max-w-8xl items-center gap-10">
          <motion.div className=" flex-1 overflow-hidden rounded-lg" ref={ref}>
            <img
              src={data.gambar}
              alt={data.judul}
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            className="prose flex-1 prose-h2:text-slate-300 prose-p:text-lg prose-p:text-gray-400"
            style={{ y }}
          >
            <h2 className="text-6xl font-bold">{data.judul}</h2>
            <p>{data.deskripsi}</p>
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
