import { socials } from "@/data/general"

const Navbar = () => {
  return (
    <header className="h-[100px] px-64 pb-4 ">
      <div className="max-w-8xl m-auto flex h-full w-full items-center justify-between">
        <h1 className="font-dmsans text-2xl font-bold">Araya Musawwah</h1>
        <nav className="inline-flex gap-2">
          {socials.map((social) => (
            <a href={social.link} key={social.link}>
              <img src={social.icon} alt="" className="size-6 " />
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
export default Navbar
