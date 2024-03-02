import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { CTA } from './components/CTA'
import { ImageSlider } from './components/ImageSlider'

function Home() {
  return (
    <div className="">
      <Hero />
      <Intro />
      <CTA />
      <ImageSlider />
    </div>
  )
}

export default Home
