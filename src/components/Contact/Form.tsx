import { motion } from "framer-motion"

const Form = () => {
  return (
    <motion.form
      className="flex flex-col gap-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 4 }}
    >
      <input
        type="text"
        required
        className="rounded-md border-2 border-white bg-transparent p-5"
        placeholder="Name"
      />

      <input
        type="text"
        required
        className="rounded-md border-2 border-white bg-transparent p-5"
        placeholder="Email"
      />

      <textarea
        name=""
        id=""
        rows={8}
        placeholder="Message"
        className="rounded-md border-2 border-white bg-transparent p-5"
      />

      <button
        type="submit"
        className="bg-accent2-100 p-5 font-semibold text-black"
      >
        Send
      </button>
    </motion.form>
  )
}
export default Form
