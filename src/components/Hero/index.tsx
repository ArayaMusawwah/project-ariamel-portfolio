import HeroText from "./HeroText"
import SlidingText from "./SlidingText"

const Hero = () => {
  return (
    <>
      <div className="relative grid min-h-[calc(100vh-100px)] place-items-center overflow-x-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132]">
        <div className="max-w-8xl relative m-auto flex h-full w-full items-center gap-10 ">
          <HeroText />
        </div>

        <SlidingText />
        <div>
          <img
            src="/hero.png"
            alt="hero's image"
            className="absolute bottom-0 right-32 h-full"
          />
        </div>
      </div>
    </>
  )
}
export default Hero
