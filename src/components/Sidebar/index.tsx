import { useState } from "react"
import SidebarButton from "./SidebarButton"
import { motion } from "framer-motion"
import NavigationMenu from "./NavigationMenu"

const variants = {
  open: {
    clipPath: "circle(1000px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20
    }
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "string",
      stiffness: 400,
      damping: 40
    }
  }
}

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <motion.aside
        className={`fixed left-0 top-0 z-50 h-screen w-1/6 bg-slate-100 ${!open ? "cursor-pointer" : "cursor-default"}`}
        variants={variants}
        initial="closed"
        animate={open ? "open" : "closed"}
        onClick={() => open || setOpen(!open)}
      >
        <NavigationMenu setOpen={setOpen} />
        <SidebarButton setOpen={setOpen} />
      </motion.aside>
    </>
  )
}
export default Sidebar
