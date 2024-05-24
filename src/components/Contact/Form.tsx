import { motion } from "framer-motion"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"

const Form = () => {
  const ref = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!ref.current) return
    setIsLoading(true)

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        ref.current,
        {
          publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY
        }
      )
      toast.success("Thanks for your patronage", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      })
    } catch (err) {
      toast.error("Something went wrong: " + err, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.form
      className="relative flex w-full flex-col gap-2 text-sm lg:gap-6 lg:text-base"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 4 }}
      ref={ref}
      onSubmit={sendEmail}
    >
      <input
        type="text"
        required
        className="z-10 rounded-md border-2 border-white bg-transparent px-5 py-2 lg:py-5"
        placeholder="Name"
        name="name"
      />

      <input
        type="text"
        required
        className="rounded-md border-2 border-white bg-transparent px-5 py-2 lg:py-5"
        placeholder="Email"
        name="email"
      />

      <textarea
        name="message"
        rows={8}
        placeholder="Message"
        className="rounded-md border-2 border-white bg-transparent p-5"
      />

      <button
        type="submit"
        className="bg-accent2-100 px-5 py-2 font-semibold text-black lg:py-5"
      >
        {isLoading ? "Sending..." : "Send"}
      </button>
    </motion.form>
  )
}
export default Form
