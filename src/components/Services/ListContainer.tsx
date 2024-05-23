import { servicesCardData } from "@/data/generalData"
import { motion, Variants } from "framer-motion"

const ListContainer = ({ variants }: { variants: Variants }) => {
  return (
    <motion.div
      className="m-auto flex max-w-8xl flex-[2]"
      id="list-container"
      variants={variants}
    >
      {servicesCardData.map((data, i) => (
        <div
          key={i}
          className="group prose flex flex-col justify-between border border-gray-500 p-12 hover:bg-gray-200  prose-h1:text-white prose-p:text-white"
        >
          <h1 className="text-lg font-bold group-hover:text-black">
            {data.judul}
          </h1>
          <p className="group-hover:text-black">{data.deskripsi}</p>
          <button className="w-full bg-accent2-100 p-3 text-center">Go</button>
        </div>
      ))}
    </motion.div>
  )
}
export default ListContainer
