import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Parallax from "./components/Parallax/index"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="min-h-screen bg-primary-bg font-dmsans text-primary-text">
        <section id="homepage">
          <Navbar />
          <Hero />
        </section>

        <Parallax type={"services"} />
        <section id="services"></section>
        <Parallax />

        <section id="portfolio">tiga</section>

        <section id="contact">empat</section>

        <section id="about">lima</section>
      </main>
    </>
  )
}
export default App
