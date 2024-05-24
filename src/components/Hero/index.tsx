import HeroText from "./HeroText"
import SlidingText from "./SlidingText"

const Hero = () => {
  return (
    <div className="relative flex min-h-[calc(100vh-100px)] items-center justify-center overflow-hidden bg-gradient-to-b from-primary-bg to-primary-bg2 selection:bg-transparent">
      <div className="absolute m-auto flex h-full w-full max-w-8xl items-start gap-10 lg:items-center">
        <HeroText />
        <SlidingText />
        <div className="absolute bottom-0 right-1/2 h-[60%] w-1/2  translate-x-1/2 justify-center lg:right-0 lg:h-full lg:translate-x-0">
          <img
            src="/hero.png"
            alt="hero's image"
            className="mx-auto h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  )
}
export default Hero
