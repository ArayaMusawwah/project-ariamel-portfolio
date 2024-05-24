import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Parallax from "./components/Parallax"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"
import Sidebar from "./components/Sidebar"
import { ToastContainer } from "react-toastify"

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="min-h-screen bg-primary-bg font-dmsans text-primary-text">
        <section id="homepage">
          <Navbar />
          <Hero />
        </section>

        <section>
          <Parallax type={"services"} />
        </section>

        <section id="services">
          <Services />
        </section>

        <section>
          <Parallax />
        </section>

        <Portfolio />

        <section id="contact">
          <Contact />
        </section>
      </main>
      <ToastContainer />
    </>
  )
}
export default App
