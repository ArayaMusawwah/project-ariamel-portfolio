import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <main className="min-h-screen bg-primary-bg font-dmsans text-primary-text">
      <section id="homepage" className="min-h-screen">
        <Sidebar />
        <Navbar />
      </section>
      <section id="services" className="min-h-screen">
        dua
      </section>
      <section id="portfolio" className="min-h-screen">
        tiga
      </section>
      <section id="contact" className="min-h-screen">
        empat
      </section>
      <section id="about" className="min-h-screen">
        lima
      </section>
    </main>
  )
}
export default App
