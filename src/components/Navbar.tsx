import { socials } from "@/data/general"

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between px-64 pb-4 pt-10">
      <h1 className="font-dmsans text-2xl font-bold">Araya Musawwah</h1>
      <div className="inline-flex gap-2">
        {socials.map((social) => (
          <a href={social.link} key={social.link}>
            <img src={social.icon} alt="" className="size-6 " />
          </a>
        ))}
      </div>
    </nav>
  )
}
export default Navbar
