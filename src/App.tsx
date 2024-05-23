import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
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
        <section id="services">dua</section>
        <section id="portfolio">tiga</section>
        <section id="contact">empat</section>
        <section id="about">lima</section>
      </main>
    </>
  )
}
export default App
