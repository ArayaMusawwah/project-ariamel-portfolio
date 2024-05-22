import { links } from "@/data/general"
import { motion } from "framer-motion"

const ulVariants = {
  open: {
    transition: {
      staggerChildren: 0.1
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}
const liVariants = {
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: 10,
    opacity: 0
  }
}

const NavigationMenu = ({
  setOpen
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <motion.ul
      className="flex h-full w-full flex-col items-center justify-center gap-2"
      variants={ulVariants}
    >
      {links.map((link, i) => (
        <motion.li key={i} variants={liVariants}>
          <motion.button
            className="text-center text-xl font-semibold capitalize text-black hover:text-accent-100"
            onClick={() => {
              setOpen((prev) => !prev)
              window.location.href = `#${link}`
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ delay: 0.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {link}
          </motion.button>
        </motion.li>
      ))}
    </motion.ul>
  )
}
export default NavigationMenu
