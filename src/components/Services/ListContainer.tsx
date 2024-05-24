import { servicesCardData } from "@/data/generalData"
import { motion, Variants } from "framer-motion"

const ListContainer = ({ variants }: { variants: Variants }) => {
  return (
    <motion.div
      className="m-auto grid max-w-8xl flex-[2] grid-cols-2 xl:grid-cols-4"
      id="list-container"
      variants={variants}
    >
      {servicesCardData.map((data, i) => (
        <div
          key={i}
          className="group prose flex flex-col justify-between border border-gray-500 p-6 hover:bg-gray-200 prose-h1:text-white  prose-p:text-white lg:p-12"
        >
          <h1 className="text-center text-lg font-bold group-hover:text-black lg:text-left">
            {data.judul}
          </h1>
          <p className="hidden group-hover:text-black lg:block">
            {data.deskripsi}
          </p>
          <button className="w-full border border-accent2-100 p-2 text-center text-white hover:bg-accent2-100 group-hover:text-black md:p-3">
            Learn More
          </button>
        </div>
      ))}
    </motion.div>
  )
}
export default ListContainer
