import HeroText from "./HeroText"
import SlidingText from "./SlidingText"

const Hero = () => {
  return (
    <div className="to-primary-bg2 relative grid min-h-[calc(100vh-100px)] place-items-center overflow-hidden bg-gradient-to-b from-primary-bg selection:bg-transparent">
      <div className="relative m-auto flex h-full w-full max-w-8xl items-center gap-10 ">
        <HeroText />
        <SlidingText />
      </div>

      <div>
        <img
          src="/hero.png"
          alt="hero's image"
          className="absolute bottom-0 right-32 h-full"
        />
      </div>
    </div>
  )
}
export default Hero
